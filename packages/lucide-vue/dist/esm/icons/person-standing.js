import createVueComponent from '../createVueComponent';
var PersonStanding = createVueComponent('PersonStandingIcon', [['circle', {
  cx: '12',
  cy: '5',
  r: '1'
}], ['path', {
  d: 'M9 20L12 14L15 20'
}], ['path', {
  d: 'M6 8L12 10L18 8'
}], ['path', {
  d: 'M12 10V14'
}]]);
export default PersonStanding;