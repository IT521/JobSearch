/* eslint-disable no-console */

require('@babel/register');
require('@babel/polyfill');
const createCanvas = require('../../build/createCanvas');
const createLine = require('../../build/createLine');

test('Create Line', () => {
  console.log('test for Create Line');
  const { canvas, rows } = createCanvas(20, 5);
  const { isVectorValid, rows: r } = createLine(rows, canvas, [1, 2, 6, 2]);
  const expectedRows = [
    '---------------------',
    '|                   |',
    '|xxxxxx             |',
    '|                   |',
    '|                   |',
    '---------------------',
  ];
  expect(isVectorValid).toEqual(true);
  expect(r).toEqual(expectedRows);
});
