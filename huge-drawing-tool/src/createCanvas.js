import createRectangle from './createRectangle';
import drawCanvas from './drawCanvas';

const createCanvas = (width = 20, height = 5) => {
  const lineCoords = [0, +height, +width, 0];
  const { rectangle: canvas } = createRectangle(null, null, lineCoords);
  return ({
    canvas,
    rows: drawCanvas(null, canvas),
  });
};

module.exports = createCanvas;
