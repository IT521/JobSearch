const X = 'x';
const SPACE = ' ';

const drawBlankCanvas = (canvas) => {
  const rows = [];
  let i;
  let j;
  let row;
  for (i = canvas.topLeft.y; i >= canvas.bottomRight.y; i -= 1) {
    const isOuterRow = (i === canvas.bottomRight.y || i === canvas.topLeft.y);
    row = '';
    for (j = canvas.topLeft.x; j <= canvas.bottomRight.x; j += 1) {
      if (isOuterRow) {
        row += '-';
      } else if (j === canvas.topLeft.x || j === canvas.bottomRight.x) {
        row += '|';
      } else {
        row += SPACE;
      }
    }
    rows.push(row);
  }
  return rows;
};

const isFillable = (drawnCanvas, rowIndex, columnIndex) => {
  let rowAbove = false;
  let i;
  for (i = rowIndex - 1; i >= 0; i -= 1) {
    const row = drawnCanvas[i].split('');
    if (row.includes(X)) {
      rowAbove = columnIndex < row.length && row[columnIndex] === X;
      if (rowAbove) {
        break;
      }
    }
  }
  return !rowAbove;
};

const drawCanvas = (drawnCanvas, canvas, line, mark = X) => {
  const rows = (drawnCanvas && drawnCanvas.length) ? [...drawnCanvas] : drawBlankCanvas(canvas);
  const rowsLength = rows.length;
  const isBucketFill = mark !== X;
  if (typeof line !== 'undefined') {
    let i;
    let j;
    let row = [];
    for (i = rowsLength - 1; i >= 0; i -= 1) {
      const isOuterRow = (i === canvas.bottomRight.y || i === canvas.topLeft.y);
      const isInnerRow = (i >= line.from.y && i <= line.to.y);
      row = rows[i].split('');
      for (j = canvas.topLeft.x; j <= canvas.bottomRight.x; j += 1) {
        const isOuterColumn = (j === canvas.topLeft.x || j === canvas.bottomRight.x);
        const isInnerColumn = (j >= line.from.x && j <= line.to.x);
        if (
          (!isOuterRow && !isOuterColumn)
          && (isInnerRow && isInnerColumn)
        ) {
          if (row[j] === SPACE) {
            if (!isBucketFill || isFillable(drawnCanvas, i, j)) {
              row[j] = mark;
            }
          }
        }
      }
      rows[i] = row.join('');
    }
  }
  return rows;
};

module.exports = drawCanvas;
