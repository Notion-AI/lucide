import createVueComponent from '../createVueComponent';
var MoveDiagonal = createVueComponent('MoveDiagonalIcon', [['polyline', {
  points: '13 5 19 5 19 11'
}], ['polyline', {
  points: '11 19 5 19 5 13'
}], ['line', {
  x1: '19',
  y1: '5',
  x2: '5',
  y2: '19'
}]]);
export default MoveDiagonal;