/* eslint-disable no-console */

const createCanvasTest = require('../unit/createCanvas.test');
const createLineTest = require('../unit/createLine.test');
const createRectangleTest = require('../unit/createRectangle.test');
const bucketFillTest = require('../unit/bucketFill.test');

describe.skip('Test All Commmands', () => {
  createCanvasTest();

  createLineTest();

  createRectangleTest();

  bucketFillTest();
});
