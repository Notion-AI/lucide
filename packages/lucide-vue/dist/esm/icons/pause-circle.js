import createVueComponent from '../createVueComponent';
var PauseCircle = createVueComponent('PauseCircleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['line', {
  x1: '10',
  y1: '15',
  x2: '10',
  y2: '9'
}], ['line', {
  x1: '14',
  y1: '15',
  x2: '14',
  y2: '9'
}]]);
export default PauseCircle;