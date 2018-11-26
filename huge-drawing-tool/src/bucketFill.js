import createLine from './createLine';
import createPoint from './createPoint';

import drawCanvas from './drawCanvas';

const bucketFill = (drawnCanvas, canvas, pointX, pointY, fill) => {
  let rows = [...drawnCanvas];
  let i;
  for (i = canvas.bottomRight.y; i <= pointY; i++) {
    const lineStart = createPoint(canvas.topLeft.x, i);
    const lineEnd = createPoint(pointX, i);
    const vector = createLine(lineStart, lineEnd);
    rows = drawCanvas(rows, canvas, vector, fill);
  }
  return rows;
};

module.exports = bucketFill;
