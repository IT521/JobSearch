import createLine from './createLine';
import createPoint from './createPoint';

import drawCanvas from './drawCanvas';

const drawRectangle = (drawnCanvas, canvas, coords) => {
  let rows = [...drawnCanvas];

  let lineStart = createPoint(coords[0], coords[1]);
  let lineEnd = createPoint(coords[2], coords[1]);
  let vector = createLine(lineStart, lineEnd);
  rows = drawCanvas(rows, canvas, vector);

  lineStart = createPoint(coords[0], coords[3]);
  lineEnd = createPoint(coords[0], coords[1]);
  vector = createLine(lineStart, lineEnd);
  rows = drawCanvas(rows, canvas, vector);

  lineStart = createPoint(coords[2], coords[3]);
  lineEnd = createPoint(coords[2], coords[1]);
  vector = createLine(lineStart, lineEnd);
  rows = drawCanvas(rows, canvas, vector);

  lineStart = createPoint(coords[0], coords[3]);
  lineEnd = createPoint(coords[2], coords[3]);
  vector = createLine(lineStart, lineEnd);
  rows = drawCanvas(rows, canvas, vector);

  return rows;
};

module.exports = drawRectangle;
