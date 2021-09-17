import createVueComponent from '../createVueComponent';
var Snowflake = createVueComponent('SnowflakeIcon', [['line', {
  x1: '2',
  y1: '12',
  x2: '22',
  y2: '12'
}], ['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '22'
}], ['path', {
  d: 'M20 16l-4-4 4-4'
}], ['path', {
  d: 'M4 8l4 4-4 4'
}], ['path', {
  d: 'M16 4l-4 4-4-4'
}], ['path', {
  d: 'M8 20l4-4 4 4'
}]]);
export default Snowflake;