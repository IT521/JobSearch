/* eslint-disable no-console */

require('@babel/register');
require('@babel/polyfill');
const createCanvas = require('../../build/createCanvas');
const createRectangle = require('../../build/createRectangle');

test('Create Rectangle', () => {
  console.log('test for Create Rectangle');
  const { canvas, rows } = createCanvas(20, 5);
  const { rows: r } = createRectangle(rows, canvas, [16, 3, 19, 1]);
  const expectedRows = [
    '---------------------',
    '|               xxxx|',
    '|               x  x|',
    '|               xxxx|',
    '|                   |',
    '---------------------',
  ];
  expect(r).toEqual(expectedRows);
});
