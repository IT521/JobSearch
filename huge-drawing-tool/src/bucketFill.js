import createLine from './createLine';
import drawCanvas from './drawCanvas';

const bucketFill = (drawnCanvas, canvas, pointX, pointY, fill) => {
  let rows = [...drawnCanvas];
  let i;
  for (i = canvas.bottomRight.y; i <= pointY; i += 1) {
    const lineCoords = [canvas.topLeft.x, i, pointX, i];
    const { isVectorValid, vector } = createLine(rows, canvas, lineCoords);
    if (isVectorValid) {
      rows = drawCanvas(rows, canvas, vector, fill);
    }
  }

  return rows;
};

module.exports = bucketFill;
