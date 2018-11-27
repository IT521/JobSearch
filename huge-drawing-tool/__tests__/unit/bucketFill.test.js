/* eslint-disable no-console */

require('@babel/register');
require('@babel/polyfill');
const createCanvas = require('../../build/createCanvas');
const bucketFill = require('../../build/bucketFill');

test('Create Rectangle', () => {
  console.log('test for Create Rectangle');
  const { canvas, rows } = createCanvas(20, 5);
  const filled = bucketFill(rows, canvas, 15, 4, 'o');
  const expectedRows = [
    '---------------------',
    '|ooooooooooooooo    |',
    '|ooooooooooooooo    |',
    '|ooooooooooooooo    |',
    '|ooooooooooooooo    |',
    '---------------------',
  ];
  expect(filled).toEqual(expectedRows);
});
