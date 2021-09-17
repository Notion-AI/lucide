import createVueComponent from '../createVueComponent';
var Currency = createVueComponent('CurrencyIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '8'
}], ['line', {
  x1: '3',
  y1: '3',
  x2: '6',
  y2: '6'
}], ['line', {
  x1: '21',
  y1: '3',
  x2: '18',
  y2: '6'
}], ['line', {
  x1: '3',
  y1: '21',
  x2: '6',
  y2: '18'
}], ['line', {
  x1: '21',
  y1: '21',
  x2: '18',
  y2: '18'
}]]);
export default Currency;