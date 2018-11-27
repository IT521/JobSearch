import { Rectangle, Vector } from 'geometry-2d';

import createPoint from './createPoint';
import drawCanvas from './drawCanvas';

const createLine = (rows, canvas: Rectangle, coords) => {
  const [x1, y1, x2, y2] = coords;
  const lineStart = createPoint(x1, y1);
  const lineEnd = createPoint(x2, y2);
  const isVectorValid = canvas.pointLiesInside(lineStart)
    && canvas.pointLiesInside(lineEnd);
  let line = { isVectorValid };

  if (isVectorValid) {
    const vector = new Vector(lineStart, lineEnd);
    line = {
      ...line,
      vector,
      rows: drawCanvas(rows, canvas, vector),
    };
  }

  return line;
};

module.exports = createLine;
