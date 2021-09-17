import createVueComponent from '../createVueComponent';
var Banknote = createVueComponent('BanknoteIcon', [['rect', {
  x: '2',
  y: '6',
  width: '20',
  height: '12',
  rx: '2'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '2'
}], ['path', {
  d: 'M6 12h.01M18 12h.01'
}]]);
export default Banknote;