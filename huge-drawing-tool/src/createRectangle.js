import { Rectangle } from 'geometry-2d';
import createPoint from './createPoint';
import drawRectangle from './drawRectangle';

const createRectangle = (rows, canvas, coords) => {
  const topLeft = createPoint(coords[0], coords[1]);
  const bottomRight = createPoint(coords[2], coords[3]);
  const rectangle = { rectangle: new Rectangle(topLeft, bottomRight) };

  if (rows && canvas && canvas.containsRectangle(rectangle.rectangle)) {
    rectangle.rows = drawRectangle(rows, canvas, coords);
  }

  return rectangle;
};

module.exports = createRectangle;
