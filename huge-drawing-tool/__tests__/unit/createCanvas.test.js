/* eslint-disable no-console */

require('@babel/register');
require('@babel/polyfill');
const createCanvas = require('../../build/createCanvas');

test('Create Canvas', () => {
  console.log('test for Create Canvas');
  const { rows } = createCanvas(20, 5);
  const expectedRows = [
    '---------------------',
    '|                   |',
    '|                   |',
    '|                   |',
    '|                   |',
    '---------------------',
  ];
  expect(rows).toEqual(expectedRows);
});
