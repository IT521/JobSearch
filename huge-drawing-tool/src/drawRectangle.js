import createLine from './createLine';
import drawCanvas from './drawCanvas';

const drawRectangle = (drawnCanvas, canvas, coords) => {
  let rows = [...drawnCanvas];

  let lineCoords = [coords[0], coords[1], coords[2], coords[1]];
  const { vector: v1, rows: r1 } = createLine(rows, canvas, lineCoords);
  rows = drawCanvas(r1, canvas, v1);

  lineCoords = [coords[0], coords[3], coords[0], coords[1]];
  const { vector: v2, rows: r2 } = createLine(r1, canvas, lineCoords);
  rows = drawCanvas(r2, canvas, v2);

  lineCoords = [coords[2], coords[3], coords[2], coords[1]];
  const { vector: v3, rows: r3 } = createLine(r2, canvas, lineCoords);
  rows = drawCanvas(r3, canvas, v3);

  lineCoords = [coords[0], coords[3], coords[2], coords[3]];
  const { vector: v4, rows: r4 } = createLine(r3, canvas, lineCoords);
  rows = drawCanvas(r4, canvas, v4);

  return rows;
};

module.exports = drawRectangle;
