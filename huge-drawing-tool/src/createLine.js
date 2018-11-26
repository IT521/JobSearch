import { Vector } from 'geometry-2d';

const createLine = (lineStart, lineEnd) => {
  const vector = new Vector(lineStart, lineEnd);
  return vector;
};

module.exports = createLine;
