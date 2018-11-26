import fs from 'fs';
import readline from 'readline';
import Stream from 'stream';

import createCanvas from './createCanvas';
import createLine from './createLine';
import createRectangle from './createRectangle';
import bucketFill from './bucketFill';
import createPoint from './createPoint';

import drawCanvas from './drawCanvas';
import drawRectangle from './drawRectangle';

const inputFile = process.argv[2] || 'public/assets/txt/input.txt';
const outputFile = process.argv[3] || 'public/assets/txt/output.txt';
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
      canvas = canvas || createCanvas();
      rows = rows.length ? rows : drawCanvas(null, canvas);
    }

    switch (cmd) {
      case 'l':
        if (params.length === 5) {
          const lineStart = createPoint(coords[0], coords[1]);
          const lineEnd = createPoint(coords[2], coords[3]);
          const isVectorValid = canvas.pointLiesInside(lineStart)
            && canvas.pointLiesInside(lineEnd);

          if (isVectorValid) {
            rows = drawCanvas(rows, canvas, createLine(lineStart, lineEnd));
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
          const topLeft = createPoint(coords[0], coords[1]);
          const bottomRight = createPoint(coords[2], coords[3]);
          if (canvas.containsRectangle(createRectangle(topLeft, bottomRight))) {
            rows = drawRectangle(rows, canvas, coords);
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
          canvas = createCanvas(coords[0], coords[1]);
          rows = drawCanvas(null, canvas);
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
