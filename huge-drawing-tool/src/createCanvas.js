import createRectangle from './createRectangle';
import createPoint from './createPoint';

const createCanvas = (width = 20, height = 5) => {
  const topLeft = createPoint(0, +height);
  const bottomRight = createPoint(+width, 0);
  return createRectangle(topLeft, bottomRight);
};

module.exports = createCanvas;
