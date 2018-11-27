/* eslint-disable no-console */

import fs from 'fs';
import readline from 'readline';
import Stream from 'stream';

import createCanvas from './createCanvas';
import createLine from './createLine';
import createRectangle from './createRectangle';
import bucketFill from './bucketFill';

import drawCanvas from './drawCanvas';

const ASSETS_PATH = 'public/assets/txt/';

const inputFile = process.argv[2] ? `${ASSETS_PATH}${process.argv[2]}` : `${ASSETS_PATH}input.txt`;
const outputFile = process.argv[3] ? `${ASSETS_PATH}${process.argv[3]}` : `${ASSETS_PATH}output.txt`;
const instream = fs.createReadStream(inputFile);
const outstream = new Stream();
const rl = readline.createInterface(instream, outstream);
const writeStream = fs.createWriteStream(outputFile);

const logError = msg => console.log(msg);
const writeCanvas = (outputLines) => {
  console.log(outputLines);
  outputLines.forEach((outputLine) => {
    writeStream.write(`${outputLine}\n`);
  });
};

let canvas;
let rows = [];
let lineno = 0;

rl.on('line', (line) => {
  lineno += 1;
  const params = line.split(' ');

  if (params.length > 1) {
    const coords = params.slice(1).map(Number);
    const cmd = params[0].toLowerCase();

    if (cmd !== 'c') {
      canvas = canvas || createCanvas().canvas;
      rows = rows.length ? rows : drawCanvas(null, canvas);
    }

    switch (cmd) {
      case 'l':
        if (params.length === 5) {
          const { isVectorValid, rows: r } = createLine(rows, canvas, coords);

          if (isVectorValid) {
            rows = r;
            writeCanvas(rows);
          } else {
            logError(`ERROR: Line number ${lineno}: Line not contained in canvas: ${line}`);
            rl.close();
          }
        } else {
          logError(`ERROR: Line number ${lineno}: Incorrect parameters: ${line}`);
          rl.close();
        }
        break;
      case 'r':
        if (params.length === 5) {
          const { rows: r } = createRectangle(rows, canvas, coords);
          if (r) {
            rows = r;
            writeCanvas(rows);
          } else {
            logError(`ERROR: Line number ${lineno}: Rectangle not contained in canvas: ${line}`);
            rl.close();
          }
        } else {
          logError(`ERROR: Line number ${lineno}: Incorrect parameters: ${line}`);
          rl.close();
        }
        break;
      case 'b':
        if (params.length === 4) {
          rows = bucketFill(rows, canvas, coords[0], coords[1], params[3]);
          writeCanvas(rows);
        } else {
          logError(`ERROR: Line number ${lineno}: Incorrect parameters: ${line}`);
          rl.close();
        }
        break;
      default:
        if (params.length === 3) {
          const { canvas: c, rows: r } = createCanvas(coords[0], coords[1]);
          canvas = c;
          rows = r;
          writeCanvas(rows);
        } else {
          logError(`ERROR: Line number ${lineno}: Incorrect parameters: ${line}`);
          rl.close();
        }
    }
  }
}).on('close', () => {
  writeStream.on('finish', () => {
    writeStream.end();
    process.exit(0);
  });
});
