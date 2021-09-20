/**
 * lucide-vue v0.15.30 - ISC
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var defaultAttributes = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
};

/**
 * Converts string to KebabCase
 * Copied from scripts/helper. If anyone knows how to properly import it here
 * then please fix it.
 *
 * @param {string} string
 * @returns {string} A kebabized string
 */

var toKebabCase = function toKebabCase(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};
var createVueComponent = (function (iconName, iconNode) {
  return {
    name: iconName,
    functional: true,
    props: {
      color: {
        type: String,
        "default": 'currentColor'
      },
      size: {
        type: Number,
        "default": 24
      },
      strokeWidth: {
        type: Number,
        "default": 2
      },
      defaultClass: {
        type: String,
        "default": "lucide-icon lucide lucide-".concat(toKebabCase(iconName).replace('-icon', ''))
      }
    },
    render: function render(createElement, _ref) {
      var _ref$props = _ref.props,
          color = _ref$props.color,
          size = _ref$props.size,
          strokeWidth = _ref$props.strokeWidth,
          defaultClass = _ref$props.defaultClass,
          data = _ref.data;
      return createElement('svg', {
        // eslint-disable-next-line prettier/prettier
        "class": [defaultClass, data["class"], data.staticClass, data.attrs && data.attrs["class"]].filter(Boolean),
        style: [data.style, data.staticStyle, data.attrs && data.attrs.style].filter(Boolean),
        attrs: _objectSpread2(_objectSpread2({}, defaultAttributes), {}, {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': strokeWidth
        }, data.attrs),
        on: (data === null || data === void 0 ? void 0 : data.on) || {}
      }, iconNode.map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            tag = _ref3[0],
            attrs = _ref3[1];

        return createElement(tag, {
          attrs: attrs
        });
      }));
    }
  };
});

var Activity = createVueComponent('ActivityIcon', [['polyline', {
  points: '22 12 18 12 15 21 9 3 6 12 2 12'
}]]);

var Airplay = createVueComponent('AirplayIcon', [['path', {
  d: 'M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1'
}], ['polygon', {
  points: '12 15 17 21 7 21 12 15'
}]]);

var AlarmCheck = createVueComponent('AlarmCheckIcon', [['path', {
  d: 'M12 21a8 8 0 100-16 8 8 0 000 16z'
}], ['path', {
  d: 'M5 3L2 6'
}], ['path', {
  d: 'M22 6l-3-3'
}], ['path', {
  d: 'M6 19l-2 2'
}], ['path', {
  d: 'M18 19l2 2'
}], ['path', {
  d: 'M9 13l2 2 4-4'
}]]);

var AlarmClock = createVueComponent('AlarmClockIcon', [['circle', {
  cx: '12',
  cy: '13',
  r: '8'
}], ['path', {
  d: 'M12 9v4l2 2'
}], ['path', {
  d: 'M5 3L2 6'
}], ['path', {
  d: 'M22 6l-3-3'
}], ['path', {
  d: 'M6 19l-2 2'
}], ['path', {
  d: 'M18 19l2 2'
}]]);

var AlarmMinus = createVueComponent('AlarmMinusIcon', [['path', {
  d: 'M12 21a8 8 0 100-16 8 8 0 000 16z'
}], ['path', {
  d: 'M5 3L2 6'
}], ['path', {
  d: 'M22 6l-3-3'
}], ['path', {
  d: 'M6 19l-2 2'
}], ['path', {
  d: 'M18 19l2 2'
}], ['path', {
  d: 'M9 13h6'
}]]);

var AlarmPlus = createVueComponent('AlarmPlusIcon', [['path', {
  d: 'M12 21a8 8 0 100-16 8 8 0 000 16z'
}], ['path', {
  d: 'M5 3L2 6'
}], ['path', {
  d: 'M22 6l-3-3'
}], ['path', {
  d: 'M6 19l-2 2'
}], ['path', {
  d: 'M18 19l2 2'
}], ['path', {
  d: 'M12 10v6'
}], ['path', {
  d: 'M9 13h6'
}]]);

var Album = createVueComponent('AlbumIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['polyline', {
  points: '11 3 11 11 14 8 17 11 17 3'
}]]);

var AlertCircle = createVueComponent('AlertCircleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '12'
}], ['line', {
  x1: '12',
  y1: '16',
  x2: '12.01',
  y2: '16'
}]]);

var AlertOctagon = createVueComponent('AlertOctagonIcon', [['polygon', {
  points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '12'
}], ['line', {
  x1: '12',
  y1: '16',
  x2: '12.01',
  y2: '16'
}]]);

var AlertTriangle = createVueComponent('AlertTriangleIcon', [['path', {
  d: 'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z'
}], ['line', {
  x1: '12',
  y1: '9',
  x2: '12',
  y2: '13'
}], ['line', {
  x1: '12',
  y1: '17',
  x2: '12.01',
  y2: '17'
}]]);

var AlignCenter = createVueComponent('AlignCenterIcon', [['line', {
  x1: '21',
  y1: '6',
  x2: '3',
  y2: '6'
}], ['line', {
  x1: '17',
  y1: '12',
  x2: '7',
  y2: '12'
}], ['line', {
  x1: '19',
  y1: '18',
  x2: '5',
  y2: '18'
}]]);

var AlignJustify = createVueComponent('AlignJustifyIcon', [['line', {
  x1: '3',
  y1: '6',
  x2: '21',
  y2: '6'
}], ['line', {
  x1: '3',
  y1: '12',
  x2: '21',
  y2: '12'
}], ['line', {
  x1: '3',
  y1: '18',
  x2: '21',
  y2: '18'
}]]);

var AlignLeft = createVueComponent('AlignLeftIcon', [['line', {
  x1: '21',
  y1: '6',
  x2: '3',
  y2: '6'
}], ['line', {
  x1: '15',
  y1: '12',
  x2: '3',
  y2: '12'
}], ['line', {
  x1: '17',
  y1: '18',
  x2: '3',
  y2: '18'
}]]);

var AlignRight = createVueComponent('AlignRightIcon', [['line', {
  x1: '21',
  y1: '6',
  x2: '3',
  y2: '6'
}], ['line', {
  x1: '21',
  y1: '12',
  x2: '9',
  y2: '12'
}], ['line', {
  x1: '21',
  y1: '18',
  x2: '7',
  y2: '18'
}]]);

var Anchor = createVueComponent('AnchorIcon', [['circle', {
  cx: '12',
  cy: '5',
  r: '3'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '8'
}], ['path', {
  d: 'M5 12H2a10 10 0 0020 0h-3'
}]]);

var Aperture = createVueComponent('ApertureIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['line', {
  x1: '14.31',
  y1: '8',
  x2: '20.05',
  y2: '17.94'
}], ['line', {
  x1: '9.69',
  y1: '8',
  x2: '21.17',
  y2: '8'
}], ['line', {
  x1: '7.38',
  y1: '12',
  x2: '13.12',
  y2: '2.06'
}], ['line', {
  x1: '9.69',
  y1: '16',
  x2: '3.95',
  y2: '6.06'
}], ['line', {
  x1: '14.31',
  y1: '16',
  x2: '2.83',
  y2: '16'
}], ['line', {
  x1: '16.62',
  y1: '12',
  x2: '10.88',
  y2: '21.94'
}]]);

var Archive = createVueComponent('ArchiveIcon', [['path', {
  d: 'M20 9v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9M20 4H4a2 2 0 00-2 2v1a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM10 13h4'
}]]);

var ArrowBigDown = createVueComponent('ArrowBigDownIcon', [['path', {
  d: 'M9 3h6v11h4l-7 7-7-7h4z'
}]]);

var ArrowBigLeft = createVueComponent('ArrowBigLeftIcon', [['path', {
  d: 'M3 12l7-7v4h11v6H10v4z'
}]]);

var ArrowBigRight = createVueComponent('ArrowBigRightIcon', [['path', {
  d: 'M21 12l-7-7v4H3v6h11v4z'
}]]);

var ArrowBigUp = createVueComponent('ArrowBigUpIcon', [['path', {
  d: 'M9 21V10H5l7-7 7 7h-4v11z'
}]]);

var ArrowDownCircle = createVueComponent('ArrowDownCircleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['polyline', {
  points: '8 12 12 16 16 12'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '16'
}]]);

var ArrowDownLeft = createVueComponent('ArrowDownLeftIcon', [['line', {
  x1: '17',
  y1: '7',
  x2: '7',
  y2: '17'
}], ['polyline', {
  points: '17 17 7 17 7 7'
}]]);

var ArrowDownRight = createVueComponent('ArrowDownRightIcon', [['line', {
  x1: '7',
  y1: '7',
  x2: '17',
  y2: '17'
}], ['polyline', {
  points: '17 7 17 17 7 17'
}]]);

var ArrowDown = createVueComponent('ArrowDownIcon', [['line', {
  x1: '12',
  y1: '5',
  x2: '12',
  y2: '19'
}], ['polyline', {
  points: '19 12 12 19 5 12'
}]]);

var ArrowLeftCircle = createVueComponent('ArrowLeftCircleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['polyline', {
  points: '12 8 8 12 12 16'
}], ['line', {
  x1: '16',
  y1: '12',
  x2: '8',
  y2: '12'
}]]);

var ArrowLeft = createVueComponent('ArrowLeftIcon', [['line', {
  x1: '19',
  y1: '12',
  x2: '5',
  y2: '12'
}], ['polyline', {
  points: '12 19 5 12 12 5'
}]]);

var ArrowRightCircle = createVueComponent('ArrowRightCircleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['polyline', {
  points: '12 16 16 12 12 8'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12'
}]]);

var ArrowRight = createVueComponent('ArrowRightIcon', [['line', {
  x1: '5',
  y1: '12',
  x2: '19',
  y2: '12'
}], ['polyline', {
  points: '12 5 19 12 12 19'
}]]);

var ArrowUpCircle = createVueComponent('ArrowUpCircleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['polyline', {
  points: '16 12 12 8 8 12'
}], ['line', {
  x1: '12',
  y1: '16',
  x2: '12',
  y2: '8'
}]]);

var ArrowUpLeft = createVueComponent('ArrowUpLeftIcon', [['line', {
  x1: '17',
  y1: '17',
  x2: '7',
  y2: '7'
}], ['polyline', {
  points: '7 17 7 7 17 7'
}]]);

var ArrowUpRight = createVueComponent('ArrowUpRightIcon', [['line', {
  x1: '7',
  y1: '17',
  x2: '17',
  y2: '7'
}], ['polyline', {
  points: '7 7 17 7 17 17'
}]]);

var ArrowUp = createVueComponent('ArrowUpIcon', [['line', {
  x1: '12',
  y1: '19',
  x2: '12',
  y2: '5'
}], ['polyline', {
  points: '5 12 12 5 19 12'
}]]);

var Asterisk = createVueComponent('AsteriskIcon', [['path', {
  d: 'M12 6v12'
}], ['path', {
  d: 'M17.196 9L6.804 15'
}], ['path', {
  d: 'M6.804 9l10.392 6'
}]]);

var AtSign = createVueComponent('AtSignIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '4'
}], ['path', {
  d: 'M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94'
}]]);

var Award = createVueComponent('AwardIcon', [['circle', {
  cx: '12',
  cy: '8',
  r: '7'
}], ['polyline', {
  points: '8.21 13.89 7 23 12 20 17 23 15.79 13.88'
}]]);

var Axe = createVueComponent('AxeIcon', [['path', {
  d: 'M14 12l-8.501 8.501a2.12 2.12 0 01-2.998 0h-.002a2.12 2.12 0 010-2.998L11 9.002'
}], ['path', {
  d: 'M9 7l4-4 6 6h3l-.13.648a7.648 7.648 0 01-5.081 5.756L15 16v-3z'
}]]);

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

var BarChart2 = createVueComponent('BarChart2Icon', [['line', {
  x1: '18',
  y1: '20',
  x2: '18',
  y2: '10'
}], ['line', {
  x1: '12',
  y1: '20',
  x2: '12',
  y2: '4'
}], ['line', {
  x1: '6',
  y1: '20',
  x2: '6',
  y2: '14'
}]]);

var BarChart = createVueComponent('BarChartIcon', [['line', {
  x1: '12',
  y1: '20',
  x2: '12',
  y2: '10'
}], ['line', {
  x1: '18',
  y1: '20',
  x2: '18',
  y2: '4'
}], ['line', {
  x1: '6',
  y1: '20',
  x2: '6',
  y2: '16'
}]]);

var BatteryCharging = createVueComponent('BatteryChargingIcon', [['path', {
  d: 'M14 7h2a2 2 0 012 2v6a2 2 0 01-2 2h-3'
}], ['path', {
  d: 'M7 7H4a2 2 0 00-2 2v6a2 2 0 002 2h2'
}], ['polyline', {
  points: '11 7 8 12 12 12 9 17'
}], ['line', {
  x1: '22',
  x2: '22',
  y1: '11',
  y2: '13'
}]]);

var BatteryFull = createVueComponent('BatteryFullIcon', [['rect', {
  x: '2',
  y: '7',
  width: '16',
  height: '10',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '22',
  x2: '22',
  y1: '11',
  y2: '13'
}], ['line', {
  x1: '6',
  x2: '6',
  y1: '10',
  y2: '14'
}], ['line', {
  x1: '10',
  x2: '10',
  y1: '10',
  y2: '14'
}], ['line', {
  x1: '14',
  x2: '14',
  y1: '10',
  y2: '14'
}]]);

var BatteryLow = createVueComponent('BatteryLowIcon', [['rect', {
  x: '2',
  y: '7',
  width: '16',
  height: '10',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '22',
  x2: '22',
  y1: '11',
  y2: '13'
}], ['line', {
  x1: '6',
  x2: '6',
  y1: '10',
  y2: '14'
}]]);

var BatteryMedium = createVueComponent('BatteryMediumIcon', [['rect', {
  x: '2',
  y: '7',
  width: '16',
  height: '10',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '22',
  x2: '22',
  y1: '11',
  y2: '13'
}], ['line', {
  x1: '6',
  x2: '6',
  y1: '10',
  y2: '14'
}], ['line', {
  x1: '10',
  x2: '10',
  y1: '10',
  y2: '14'
}]]);

var Battery = createVueComponent('BatteryIcon', [['rect', {
  x: '2',
  y: '7',
  width: '16',
  height: '10',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '22',
  x2: '22',
  y1: '11',
  y2: '13'
}]]);

var Beaker = createVueComponent('BeakerIcon', [['path', {
  d: 'M4.5 3h15'
}], ['path', {
  d: 'M6 3v16a2 2 0 002 2h8a2 2 0 002-2V3'
}], ['path', {
  d: 'M6 14h12'
}]]);

var BellMinus = createVueComponent('BellMinusIcon', [['path', {
  d: 'M13.73 21a2 2 0 01-3.46 0'
}], ['path', {
  d: 'M21 5h-6'
}], ['path', {
  d: 'M18.021 9C18.29 15.193 21 17 21 17H3s3-2 3-9a6 6 0 017-5.916'
}]]);

var BellOff = createVueComponent('BellOffIcon', [['path', {
  d: 'M13.73 21a2 2 0 01-3.46 0'
}], ['path', {
  d: 'M18.63 13A17.888 17.888 0 0118 8'
}], ['path', {
  d: 'M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14'
}], ['path', {
  d: 'M18 8a6 6 0 00-9.33-5'
}], ['path', {
  d: 'M2 2l20 20'
}]]);

var BellPlus = createVueComponent('BellPlusIcon', [['path', {
  d: 'M18.387 12C19.198 15.799 21 17 21 17H3s3-2 3-9a6 6 0 017-5.916'
}], ['path', {
  d: 'M13.73 21a2 2 0 01-3.46 0'
}], ['path', {
  d: 'M18 2v6'
}], ['path', {
  d: 'M21 5h-6'
}]]);

var BellRing = createVueComponent('BellRingIcon', [['path', {
  d: 'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9'
}], ['path', {
  d: 'M13.73 21a2 2 0 01-3.46 0'
}], ['path', {
  d: 'M2 8c0-2.2.7-4.3 2-6'
}], ['path', {
  d: 'M22 8a10 10 0 00-2-6'
}]]);

var Bell = createVueComponent('BellIcon', [['path', {
  d: 'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9'
}], ['path', {
  d: 'M13.73 21a2 2 0 01-3.46 0'
}]]);

var Bike = createVueComponent('BikeIcon', [['circle', {
  cx: '5.5',
  cy: '17.5',
  r: '3.5'
}], ['circle', {
  cx: '18.5',
  cy: '17.5',
  r: '3.5'
}], ['path', {
  d: 'M15 6a1 1 0 100-2 1 1 0 000 2zm-3 11.5V14l-3-3 4-3 2 3h2'
}]]);

var Binary = createVueComponent('BinaryIcon', [['path', {
  d: 'M10 4H6v6h4V4z'
}], ['path', {
  d: 'M18 14h-4v6h4v-6z'
}], ['path', {
  d: 'M14 4h2v6m-2 0h4'
}], ['path', {
  d: 'M6 14h2v6m-2 0h4'
}]]);

var Bitcoin = createVueComponent('BitcoinIcon', [['path', {
  d: 'M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042l-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893l-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042l.348-1.97M7.48 20.364l3.126-17.727'
}]]);

var BluetoothConnected = createVueComponent('BluetoothConnectedIcon', [['path', {
  d: 'M7 7l10 10-5 5V2l5 5L7 17'
}], ['line', {
  x1: '18',
  y1: '12',
  y2: '12',
  x2: '21'
}], ['line', {
  x1: '3',
  y1: '12',
  y2: '12',
  x2: '6'
}]]);

var BluetoothOff = createVueComponent('BluetoothOffIcon', [['path', {
  d: 'M17 17l-5 5V12l-5 5'
}], ['path', {
  d: 'M2 2l20 20'
}], ['path', {
  d: 'M14.5 9.5L17 7l-5-5v4.5'
}]]);

var BluetoothSearching = createVueComponent('BluetoothSearchingIcon', [['path', {
  d: 'M7 7l10 10-5 5V2l5 5L7 17'
}], ['path', {
  d: 'M20.83 14.83a4 4 0 000-5.66'
}], ['path', {
  d: 'M18 12h.01'
}]]);

var Bluetooth = createVueComponent('BluetoothIcon', [['path', {
  d: 'M7 7l10 10-5 5V2l5 5L7 17'
}]]);

var Bold = createVueComponent('BoldIcon', [['path', {
  d: 'M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z'
}], ['path', {
  d: 'M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z'
}]]);

var BookOpen = createVueComponent('BookOpenIcon', [['path', {
  d: 'M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z'
}], ['path', {
  d: 'M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z'
}]]);

var Book = createVueComponent('BookIcon', [['path', {
  d: 'M4 19.5A2.5 2.5 0 016.5 17H20'
}], ['path', {
  d: 'M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z'
}]]);

var Bookmark = createVueComponent('BookmarkIcon', [['path', {
  d: 'M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z'
}]]);

var Bot = createVueComponent('BotIcon', [['rect', {
  x: '3',
  y: '11',
  width: '18',
  height: '10',
  rx: '2'
}], ['circle', {
  cx: '12',
  cy: '5',
  r: '2'
}], ['path', {
  d: 'M12 7v4'
}], ['line', {
  x1: '8',
  y1: '16',
  x2: '8',
  y2: '16'
}], ['line', {
  x1: '16',
  y1: '16',
  x2: '16',
  y2: '16'
}]]);

var BoxSelect = createVueComponent('BoxSelectIcon', [['path', {
  d: 'M4 2a2 2 0 00-2 2'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '10',
  y2: '2'
}], ['line', {
  x1: '14',
  y1: '2',
  x2: '16',
  y2: '2'
}], ['path', {
  d: 'M4 22a2 2 0 01-2-2'
}], ['line', {
  x1: '22',
  y1: '8',
  x2: '22',
  y2: '10'
}], ['line', {
  x1: '22',
  y1: '14',
  x2: '22',
  y2: '16'
}], ['path', {
  d: 'M22 20a2 2 0 01-2 2'
}], ['line', {
  x1: '14',
  y1: '22',
  x2: '16',
  y2: '22'
}], ['line', {
  x1: '8',
  y1: '22',
  x2: '10',
  y2: '22'
}], ['path', {
  d: 'M20 2a2 2 0 012 2'
}], ['line', {
  x1: '2',
  y1: '14',
  x2: '2',
  y2: '16'
}], ['line', {
  x1: '2',
  y1: '8',
  x2: '2',
  y2: '10'
}]]);

var Box = createVueComponent('BoxIcon', [['path', {
  d: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z'
}], ['polyline', {
  points: '3.27 6.96 12 12.01 20.73 6.96'
}], ['line', {
  x1: '12',
  y1: '22.08',
  x2: '12',
  y2: '12'
}]]);

var Briefcase = createVueComponent('BriefcaseIcon', [['rect', {
  x: '2',
  y: '7',
  width: '20',
  height: '14',
  rx: '2',
  ry: '2'
}], ['path', {
  d: 'M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16'
}]]);

var Brush = createVueComponent('BrushIcon', [['path', {
  d: 'M9.06 11.9l8.07-8.06a2.85 2.85 0 114.03 4.03l-8.06 8.08'
}], ['path', {
  d: 'M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 00-3-3.02z'
}]]);

var Bug = createVueComponent('BugIcon', [['rect', {
  width: '8',
  height: '14',
  x: '8',
  y: '6',
  rx: '4'
}], ['path', {
  d: 'M19 7l-3 2'
}], ['path', {
  d: 'M5 7l3 2'
}], ['path', {
  d: 'M19 19l-3-2'
}], ['path', {
  d: 'M5 19l3-2'
}], ['path', {
  d: 'M20 13h-4'
}], ['path', {
  d: 'M4 13h4'
}], ['path', {
  d: 'M10 4l1 2'
}], ['path', {
  d: 'M14 4l-1 2'
}]]);

var Building = createVueComponent('BuildingIcon', [['rect', {
  x: '4',
  y: '2',
  width: '16',
  height: '20',
  rx: '2',
  ry: '2'
}], ['path', {
  d: 'M9 22v-4h6v4'
}], ['path', {
  d: 'M8 6h.01'
}], ['path', {
  d: 'M16 6h.01'
}], ['path', {
  d: 'M12 6h.01'
}], ['path', {
  d: 'M12 10h.01'
}], ['path', {
  d: 'M12 14h.01'
}], ['path', {
  d: 'M16 10h.01'
}], ['path', {
  d: 'M16 14h.01'
}], ['path', {
  d: 'M8 10h.01'
}], ['path', {
  d: 'M8 14h.01'
}]]);

var Bus = createVueComponent('BusIcon', [['path', {
  d: 'M19 17h2l.64-2.54a6 6 0 000-2.92l-1.07-4.27A3 3 0 0017.66 5H4a2 2 0 00-2 2v10h2m10 0h-4'
}], ['circle', {
  cx: '6.5',
  cy: '17.5',
  r: '2.5'
}], ['circle', {
  cx: '16.5',
  cy: '17.5',
  r: '2.5'
}]]);

var Calculator = createVueComponent('CalculatorIcon', [['rect', {
  x: '4',
  y: '2',
  width: '16',
  height: '20',
  rx: '2'
}], ['line', {
  x1: '8',
  x2: '16',
  y1: '6',
  y2: '6'
}], ['line', {
  x1: '16',
  x2: '16',
  y1: '14',
  y2: '18'
}], ['path', {
  d: 'M16 10h.01'
}], ['path', {
  d: 'M12 10h.01'
}], ['path', {
  d: 'M8 10h.01'
}], ['path', {
  d: 'M12 14h.01'
}], ['path', {
  d: 'M8 14h.01'
}], ['path', {
  d: 'M12 18h.01'
}], ['path', {
  d: 'M8 18h.01'
}]]);

var Calendar = createVueComponent('CalendarIcon', [['rect', {
  x: '3',
  y: '4',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '16',
  y1: '2',
  x2: '16',
  y2: '6'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '6'
}], ['line', {
  x1: '3',
  y1: '10',
  x2: '21',
  y2: '10'
}]]);

var CameraOff = createVueComponent('CameraOffIcon', [['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22'
}], ['path', {
  d: 'M9.5 4h5L17 7h3a2 2 0 012 2v7.5M7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16'
}], ['path', {
  d: 'M14.121 15.121A3 3 0 119.88 10.88'
}]]);

var Camera = createVueComponent('CameraIcon', [['path', {
  d: 'M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z'
}], ['circle', {
  cx: '12',
  cy: '13',
  r: '3'
}]]);

var Car = createVueComponent('CarIcon', [['path', {
  d: 'M14 16H9m10 0h3v-3.15a1 1 0 00-.84-.99L16 11l-2.7-3.6a1 1 0 00-.8-.4H5.24a2 2 0 00-1.8 1.1l-.8 1.63A6 6 0 002 12.42V16h2'
}], ['circle', {
  cx: '6.5',
  cy: '16.5',
  r: '2.5'
}], ['circle', {
  cx: '16.5',
  cy: '16.5',
  r: '2.5'
}]]);

var Cast = createVueComponent('CastIcon', [['path', {
  d: 'M2 16.1A5 5 0 015.9 20M2 12.05A9 9 0 019.95 20M2 8V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6'
}], ['line', {
  x1: '2',
  y1: '20',
  x2: '2.01',
  y2: '20'
}]]);

var CheckCircle2 = createVueComponent('CheckCircle2Icon', [['path', {
  d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'
}], ['path', {
  d: 'M9 12l2 2 4-4'
}]]);

var CheckCircle = createVueComponent('CheckCircleIcon', [['path', {
  d: 'M22 11.08V12a10 10 0 11-5.93-9.14'
}], ['polyline', {
  points: '22 4 12 14.01 9 11.01'
}]]);

var CheckSquare = createVueComponent('CheckSquareIcon', [['polyline', {
  points: '9 11 12 14 22 4'
}], ['path', {
  d: 'M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11'
}]]);

var Check = createVueComponent('CheckIcon', [['polyline', {
  points: '20 6 9 17 4 12'
}]]);

var ChevronDown = createVueComponent('ChevronDownIcon', [['polyline', {
  points: '6 9 12 15 18 9'
}]]);

var ChevronLeft = createVueComponent('ChevronLeftIcon', [['polyline', {
  points: '15 18 9 12 15 6'
}]]);

var ChevronRight = createVueComponent('ChevronRightIcon', [['polyline', {
  points: '9 18 15 12 9 6'
}]]);

var ChevronUp = createVueComponent('ChevronUpIcon', [['polyline', {
  points: '18 15 12 9 6 15'
}]]);

var ChevronsDownUp = createVueComponent('ChevronsDownUpIcon', [['path', {
  d: 'M7 20l5-5 5 5'
}], ['path', {
  d: 'M7 4l5 5 5-5'
}]]);

var ChevronsDown = createVueComponent('ChevronsDownIcon', [['polyline', {
  points: '7 13 12 18 17 13'
}], ['polyline', {
  points: '7 6 12 11 17 6'
}]]);

var ChevronsLeft = createVueComponent('ChevronsLeftIcon', [['polyline', {
  points: '11 17 6 12 11 7'
}], ['polyline', {
  points: '18 17 13 12 18 7'
}]]);

var ChevronsRight = createVueComponent('ChevronsRightIcon', [['polyline', {
  points: '13 17 18 12 13 7'
}], ['polyline', {
  points: '6 17 11 12 6 7'
}]]);

var ChevronsUpDown = createVueComponent('ChevronsUpDownIcon', [['path', {
  d: 'M7 15l5 5 5-5'
}], ['path', {
  d: 'M7 9l5-5 5 5'
}]]);

var ChevronsUp = createVueComponent('ChevronsUpIcon', [['polyline', {
  points: '17 11 12 6 7 11'
}], ['polyline', {
  points: '17 18 12 13 7 18'
}]]);

var Chrome = createVueComponent('ChromeIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '4'
}], ['line', {
  x1: '21.17',
  y1: '8',
  x2: '12',
  y2: '8'
}], ['line', {
  x1: '3.95',
  y1: '6.06',
  x2: '8.54',
  y2: '14'
}], ['line', {
  x1: '10.88',
  y1: '21.94',
  x2: '15.46',
  y2: '14'
}]]);

var CircleSlashed = createVueComponent('CircleSlashedIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['path', {
  d: 'M22 2L2 22'
}]]);

var Circle = createVueComponent('CircleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}]]);

var ClipboardCheck = createVueComponent('ClipboardCheckIcon', [['path', {
  d: 'M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2'
}], ['path', {
  d: 'M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z'
}], ['path', {
  d: 'M9 13l2 2 4-4'
}]]);

var ClipboardCopy = createVueComponent('ClipboardCopyIcon', [['path', {
  d: 'M16 4h2a2 2 0 012 2v4M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-2'
}], ['rect', {
  x: '8',
  y: '2',
  width: '8',
  height: '4',
  rx: '1',
  ry: '1'
}], ['path', {
  d: 'M21 14H11'
}], ['path', {
  d: 'M15 10l-4 4 4 4'
}]]);

var ClipboardList = createVueComponent('ClipboardListIcon', [['path', {
  d: 'M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2'
}], ['path', {
  d: 'M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z'
}], ['path', {
  d: 'M12 11h4'
}], ['path', {
  d: 'M12 16h4'
}], ['path', {
  d: 'M8 11h.01'
}], ['path', {
  d: 'M8 16h.01'
}]]);

var ClipboardX = createVueComponent('ClipboardXIcon', [['path', {
  d: 'M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2'
}], ['path', {
  d: 'M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z'
}], ['path', {
  d: 'M15 11l-6 6'
}], ['path', {
  d: 'M9 11l6 6'
}]]);

var Clipboard = createVueComponent('ClipboardIcon', [['path', {
  d: 'M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2'
}], ['rect', {
  x: '8',
  y: '2',
  width: '8',
  height: '4',
  rx: '1',
  ry: '1'
}]]);

var Clock = createVueComponent('ClockIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['polyline', {
  points: '12 6 12 12 16 14'
}]]);

var CloudDrizzle = createVueComponent('CloudDrizzleIcon', [['path', {
  d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
}], ['path', {
  d: 'M8 19v1'
}], ['path', {
  d: 'M8 14v1'
}], ['path', {
  d: 'M16 19v1'
}], ['path', {
  d: 'M16 14v1'
}], ['path', {
  d: 'M12 21v1'
}], ['path', {
  d: 'M12 16v1'
}]]);

var CloudFog = createVueComponent('CloudFogIcon', [['path', {
  d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
}], ['path', {
  d: 'M16 17L7 17'
}], ['path', {
  d: 'M17 21L9 21'
}]]);

var CloudHail = createVueComponent('CloudHailIcon', [['path', {
  d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
}], ['path', {
  d: 'M16 14v2'
}], ['path', {
  d: 'M8 14v2'
}], ['path', {
  d: 'M16 20h0'
}], ['path', {
  d: 'M8 20h0'
}], ['path', {
  d: 'M12 16v2'
}], ['path', {
  d: 'M12 22h0'
}]]);

var CloudLightning = createVueComponent('CloudLightningIcon', [['path', {
  d: 'M17.5 17a4.5 4.5 0 100-9h-1.8a7 7 0 10-10.3 8'
}], ['path', {
  d: 'M12 12l-3 5h5l-3 5'
}]]);

var CloudMoon = createVueComponent('CloudMoonIcon', [['path', {
  d: 'M13.63 22A3.3 3.3 0 0017 18.79a3.3 3.3 0 00-3.38-3.22h-1.34A5.23 5.23 0 007.25 12 5.13 5.13 0 002 17c0 2.76 2.35 5 5.25 5h6.38z'
}], ['path', {
  d: 'M9.95 9a6.13 6.13 0 015.5-5.18 4.77 4.77 0 006.67 6.67A6.13 6.13 0 0119.46 15'
}]]);

var CloudOff = createVueComponent('CloudOffIcon', [['path', {
  d: 'M2 2l20 20'
}], ['path', {
  d: 'M10 5a7 7 0 015.7 5h1.8a4.5 4.5 0 014 6.5'
}], ['path', {
  d: 'M18.8 18.8c-.4.2-.8.2-1.3.2H9A7 7 0 015.8 5.8'
}]]);

var CloudRainWind = createVueComponent('CloudRainWindIcon', [['path', {
  d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
}], ['path', {
  d: 'M9.2 22l3-7'
}], ['path', {
  d: 'M9 13l-3 7'
}], ['path', {
  d: 'M17 13l-3 7'
}]]);

var CloudRain = createVueComponent('CloudRainIcon', [['path', {
  d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
}], ['path', {
  d: 'M16 14v6'
}], ['path', {
  d: 'M8 14v6'
}], ['path', {
  d: 'M12 16v6'
}]]);

var CloudSnow = createVueComponent('CloudSnowIcon', [['path', {
  d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
}], ['path', {
  d: 'M8 15h0'
}], ['path', {
  d: 'M8 19h0'
}], ['path', {
  d: 'M12 17h0'
}], ['path', {
  d: 'M12 21h0'
}], ['path', {
  d: 'M16 15h0'
}], ['path', {
  d: 'M16 19h0'
}]]);

var CloudSun = createVueComponent('CloudSunIcon', [['path', {
  d: 'M12 2v2'
}], ['path', {
  d: 'M5.22 5.22l1.42 1.42'
}], ['path', {
  d: 'M20 12h2'
}], ['path', {
  d: 'M15.97 12.5A4 4 0 009.5 8.88'
}], ['path', {
  d: 'M13.63 22A3.3 3.3 0 0017 18.79a3.3 3.3 0 00-3.38-3.22h-1.34A5.23 5.23 0 007.25 12 5.13 5.13 0 002 17c0 2.76 2.35 5 5.25 5h6.38z'
}], ['path', {
  d: 'M17.36 6.64l1.42-1.42'
}]]);

var Cloud = createVueComponent('CloudIcon', [['path', {
  d: 'M17.5 19a4.5 4.5 0 100-9h-1.8A7 7 0 109 19h8.5z'
}]]);

var Cloudy = createVueComponent('CloudyIcon', [['path', {
  d: 'M17.5 21a4.5 4.5 0 100-9h-1.8A7 7 0 109 21h8.5z'
}], ['path', {
  d: 'M22 10c0-1.5-1.5-3-3.5-3H17c-.7-2.3-2.9-4-5.4-4-2.7 0-5 2-5.5 4.5'
}]]);

var Clover = createVueComponent('CloverIcon', [['path', {
  d: 'M16.2 3.8a2.7 2.7 0 00-3.81 0l-.4.38-.4-.4a2.7 2.7 0 00-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z'
}], ['path', {
  d: 'M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 000 3.81l.38.4-.4.4a2.7 2.7 0 000 3.82C4.85 17.27 6.64 17.33 8 16'
}], ['path', {
  d: 'M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 000-3.81l-.38-.4.4-.4a2.7 2.7 0 000-3.82C19.15 6.73 17.36 6.67 16 8'
}], ['path', {
  d: 'M7.8 20.2a2.7 2.7 0 003.81 0l.4-.38.4.4a2.7 2.7 0 003.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z'
}], ['path', {
  d: 'M7 17l-5 5'
}]]);

var Code2 = createVueComponent('Code2Icon', [['path', {
  d: 'M18 16L22 12L18 8'
}], ['path', {
  d: 'M6 8L2 12L6 16'
}], ['path', {
  d: 'M14.5 4L9.5 20'
}]]);

var Code = createVueComponent('CodeIcon', [['polyline', {
  points: '16 18 22 12 16 6'
}], ['polyline', {
  points: '8 6 2 12 8 18'
}]]);

var Codepen = createVueComponent('CodepenIcon', [['polygon', {
  points: '12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '15.5'
}], ['polyline', {
  points: '22 8.5 12 15.5 2 8.5'
}], ['polyline', {
  points: '2 15.5 12 8.5 22 15.5'
}], ['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '8.5'
}]]);

var Codesandbox = createVueComponent('CodesandboxIcon', [['path', {
  d: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z'
}], ['polyline', {
  points: '7.5 4.21 12 6.81 16.5 4.21'
}], ['polyline', {
  points: '7.5 19.79 7.5 14.6 3 12'
}], ['polyline', {
  points: '21 12 16.5 14.6 16.5 19.79'
}], ['polyline', {
  points: '3.27 6.96 12 12.01 20.73 6.96'
}], ['line', {
  x1: '12',
  y1: '22.08',
  x2: '12',
  y2: '12'
}]]);

var Coffee = createVueComponent('CoffeeIcon', [['path', {
  d: 'M18 8h1a4 4 0 010 8h-1'
}], ['path', {
  d: 'M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z'
}], ['line', {
  x1: '6',
  y1: '1',
  x2: '6',
  y2: '4'
}], ['line', {
  x1: '10',
  y1: '1',
  x2: '10',
  y2: '4'
}], ['line', {
  x1: '14',
  y1: '1',
  x2: '14',
  y2: '4'
}]]);

var Coins = createVueComponent('CoinsIcon', [['circle', {
  cx: '8',
  cy: '8',
  r: '7'
}], ['path', {
  d: 'M19.5 9.94a7 7 0 11-9.56 9.56'
}], ['path', {
  d: 'M7 6h1v4'
}], ['path', {
  d: 'M17.3 14.3l.7.7-2.8 2.8'
}]]);

var Columns = createVueComponent('ColumnsIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '12',
  y1: '3',
  x2: '12',
  y2: '21'
}]]);

var Command = createVueComponent('CommandIcon', [['path', {
  d: 'M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z'
}]]);

var Compass = createVueComponent('CompassIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['polygon', {
  points: '16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76'
}]]);

var Contact = createVueComponent('ContactIcon', [['path', {
  d: 'M19 22H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2z'
}], ['line', {
  x1: '16',
  y1: '2',
  x2: '16',
  y2: '4'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '4'
}], ['circle', {
  cx: '12',
  cy: '11',
  r: '3'
}], ['path', {
  d: 'M17 18.5c-1.4-1-3.1-1.5-5-1.5s-3.6.6-5 1.5'
}]]);

var Contrast = createVueComponent('ContrastIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['path', {
  d: 'M12 18a6 6 0 000-12v12z'
}]]);

var Copy = createVueComponent('CopyIcon', [['rect', {
  x: '9',
  y: '9',
  width: '13',
  height: '13',
  rx: '2',
  ry: '2'
}], ['path', {
  d: 'M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1'
}]]);

var Copyleft = createVueComponent('CopyleftIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['path', {
  d: 'M9 9.35a4 4 0 110 5.3'
}]]);

var Copyright = createVueComponent('CopyrightIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['path', {
  d: 'M15 9.354a4 4 0 100 5.292'
}]]);

var CornerDownLeft = createVueComponent('CornerDownLeftIcon', [['polyline', {
  points: '9 10 4 15 9 20'
}], ['path', {
  d: 'M20 4v7a4 4 0 01-4 4H4'
}]]);

var CornerDownRight = createVueComponent('CornerDownRightIcon', [['polyline', {
  points: '15 10 20 15 15 20'
}], ['path', {
  d: 'M4 4v7a4 4 0 004 4h12'
}]]);

var CornerLeftDown = createVueComponent('CornerLeftDownIcon', [['polyline', {
  points: '14 15 9 20 4 15'
}], ['path', {
  d: 'M20 4h-7a4 4 0 00-4 4v12'
}]]);

var CornerLeftUp = createVueComponent('CornerLeftUpIcon', [['polyline', {
  points: '14 9 9 4 4 9'
}], ['path', {
  d: 'M20 20h-7a4 4 0 01-4-4V4'
}]]);

var CornerRightDown = createVueComponent('CornerRightDownIcon', [['polyline', {
  points: '10 15 15 20 20 15'
}], ['path', {
  d: 'M4 4h7a4 4 0 014 4v12'
}]]);

var CornerRightUp = createVueComponent('CornerRightUpIcon', [['polyline', {
  points: '10 9 15 4 20 9'
}], ['path', {
  d: 'M4 20h7a4 4 0 004-4V4'
}]]);

var CornerUpLeft = createVueComponent('CornerUpLeftIcon', [['polyline', {
  points: '9 14 4 9 9 4'
}], ['path', {
  d: 'M20 20v-7a4 4 0 00-4-4H4'
}]]);

var CornerUpRight = createVueComponent('CornerUpRightIcon', [['polyline', {
  points: '15 14 20 9 15 4'
}], ['path', {
  d: 'M4 20v-7a4 4 0 014-4h12'
}]]);

var Cpu = createVueComponent('CpuIcon', [['rect', {
  x: '4',
  y: '4',
  width: '16',
  height: '16',
  rx: '2',
  ry: '2'
}], ['rect', {
  x: '9',
  y: '9',
  width: '6',
  height: '6'
}], ['line', {
  x1: '9',
  y1: '1',
  x2: '9',
  y2: '4'
}], ['line', {
  x1: '15',
  y1: '1',
  x2: '15',
  y2: '4'
}], ['line', {
  x1: '9',
  y1: '20',
  x2: '9',
  y2: '23'
}], ['line', {
  x1: '15',
  y1: '20',
  x2: '15',
  y2: '23'
}], ['line', {
  x1: '20',
  y1: '9',
  x2: '23',
  y2: '9'
}], ['line', {
  x1: '20',
  y1: '14',
  x2: '23',
  y2: '14'
}], ['line', {
  x1: '1',
  y1: '9',
  x2: '4',
  y2: '9'
}], ['line', {
  x1: '1',
  y1: '14',
  x2: '4',
  y2: '14'
}]]);

var CreditCard = createVueComponent('CreditCardIcon', [['rect', {
  x: '1',
  y: '4',
  width: '22',
  height: '16',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '1',
  y1: '10',
  x2: '23',
  y2: '10'
}]]);

var Crop = createVueComponent('CropIcon', [['path', {
  d: 'M6.13 1L6 16a2 2 0 002 2h15'
}], ['path', {
  d: 'M1 6.13L16 6a2 2 0 012 2v15'
}]]);

var Cross = createVueComponent('CrossIcon', [['path', {
  d: 'M11 2a2 2 0 00-2 2v5H4a2 2 0 00-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 002-2v-5h5a2 2 0 002-2v-2a2 2 0 00-2-2h-5V4a2 2 0 00-2-2h-2z'
}]]);

var Crosshair = createVueComponent('CrosshairIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['line', {
  x1: '22',
  y1: '12',
  x2: '18',
  y2: '12'
}], ['line', {
  x1: '6',
  y1: '12',
  x2: '2',
  y2: '12'
}], ['line', {
  x1: '12',
  y1: '6',
  x2: '12',
  y2: '2'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '18'
}]]);

var Crown = createVueComponent('CrownIcon', [['path', {
  d: 'M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14'
}]]);

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

var Database = createVueComponent('DatabaseIcon', [['ellipse', {
  cx: '12',
  cy: '5',
  rx: '9',
  ry: '3'
}], ['path', {
  d: 'M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'
}], ['path', {
  d: 'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'
}]]);

var Delete = createVueComponent('DeleteIcon', [['path', {
  d: 'M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z'
}], ['line', {
  x1: '18',
  y1: '9',
  x2: '12',
  y2: '15'
}], ['line', {
  x1: '12',
  y1: '9',
  x2: '18',
  y2: '15'
}]]);

var Disc = createVueComponent('DiscIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '3'
}]]);

var DivideCircle = createVueComponent('DivideCircleIcon', [['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12'
}], ['line', {
  x1: '12',
  y1: '16',
  x2: '12',
  y2: '16'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '8'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}]]);

var DivideSquare = createVueComponent('DivideSquareIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12'
}], ['line', {
  x1: '12',
  y1: '16',
  x2: '12',
  y2: '16'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '8'
}]]);

var Divide = createVueComponent('DivideIcon', [['circle', {
  cx: '12',
  cy: '6',
  r: '1'
}], ['line', {
  x1: '5',
  y1: '12',
  x2: '19',
  y2: '12'
}], ['circle', {
  cx: '12',
  cy: '18',
  r: '1'
}]]);

var DollarSign = createVueComponent('DollarSignIcon', [['line', {
  x1: '12',
  y1: '1',
  x2: '12',
  y2: '23'
}], ['path', {
  d: 'M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6'
}]]);

var DownloadCloud = createVueComponent('DownloadCloudIcon', [['path', {
  d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
}], ['path', {
  d: 'M12 12v9'
}], ['path', {
  d: 'M8 17l4 4 4-4'
}]]);

var Download = createVueComponent('DownloadIcon', [['path', {
  d: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4'
}], ['polyline', {
  points: '7 10 12 15 17 10'
}], ['line', {
  x1: '12',
  y1: '15',
  x2: '12',
  y2: '3'
}]]);

var Dribbble = createVueComponent('DribbbleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['path', {
  d: 'M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32'
}]]);

var Droplet = createVueComponent('DropletIcon', [['path', {
  d: 'M12 22a7 7 0 007-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 007 7z'
}]]);

var Droplets = createVueComponent('DropletsIcon', [['path', {
  d: 'M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z'
}], ['path', {
  d: 'M12.56 6.6A10.97 10.97 0 0014 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 01-11.91 4.97'
}]]);

var Edit2 = createVueComponent('Edit2Icon', [['path', {
  d: 'M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z'
}]]);

var Edit3 = createVueComponent('Edit3Icon', [['path', {
  d: 'M12 20h9'
}], ['path', {
  d: 'M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z'
}]]);

var Edit = createVueComponent('EditIcon', [['path', {
  d: 'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7'
}], ['path', {
  d: 'M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z'
}]]);

var EqualNot = createVueComponent('EqualNotIcon', [['line', {
  x1: '5',
  y1: '9',
  x2: '19',
  y2: '9'
}], ['line', {
  x1: '5',
  y1: '15',
  x2: '19',
  y2: '15'
}], ['line', {
  x1: '19',
  y1: '5',
  x2: '5',
  y2: '19'
}]]);

var Equal = createVueComponent('EqualIcon', [['line', {
  x1: '5',
  y1: '9',
  x2: '19',
  y2: '9'
}], ['line', {
  x1: '5',
  y1: '15',
  x2: '19',
  y2: '15'
}]]);

var Euro = createVueComponent('EuroIcon', [['path', {
  d: 'M4 10h12'
}], ['path', {
  d: 'M4 14h9'
}], ['path', {
  d: 'M19 6a7.7 7.7 0 00-5.2-2A7.9 7.9 0 006 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2'
}]]);

var Expand = createVueComponent('ExpandIcon', [['path', {
  d: 'M21 21l-6-6m6 6v-4.8m0 4.8h-4.8'
}], ['path', {
  d: 'M3 16.2V21m0 0h4.8M3 21l6-6'
}], ['path', {
  d: 'M21 7.8V3m0 0h-4.8M21 3l-6 6'
}], ['path', {
  d: 'M3 7.8V3m0 0h4.8M3 3l6 6'
}]]);

var ExternalLink = createVueComponent('ExternalLinkIcon', [['path', {
  d: 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6'
}], ['polyline', {
  points: '15 3 21 3 21 9'
}], ['line', {
  x1: '10',
  y1: '14',
  x2: '21',
  y2: '3'
}]]);

var EyeOff = createVueComponent('EyeOffIcon', [['path', {
  d: 'M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24'
}], ['line', {
  x1: '1',
  y1: '1',
  x2: '23',
  y2: '23'
}]]);

var Eye = createVueComponent('EyeIcon', [['path', {
  d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '3'
}]]);

var Facebook = createVueComponent('FacebookIcon', [['path', {
  d: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'
}]]);

var FastForward = createVueComponent('FastForwardIcon', [['polygon', {
  points: '13 19 22 12 13 5 13 19'
}], ['polygon', {
  points: '2 19 11 12 2 5 2 19'
}]]);

var Feather = createVueComponent('FeatherIcon', [['path', {
  d: 'M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z'
}], ['line', {
  x1: '16',
  y1: '8',
  x2: '2',
  y2: '22'
}], ['line', {
  x1: '17.5',
  y1: '15',
  x2: '9',
  y2: '15'
}]]);

var Figma = createVueComponent('FigmaIcon', [['path', {
  d: 'M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z'
}], ['path', {
  d: 'M12 2h3.5a3.5 3.5 0 110 7H12V2z'
}], ['path', {
  d: 'M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z'
}], ['path', {
  d: 'M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z'
}], ['path', {
  d: 'M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z'
}]]);

var FileCheck2 = createVueComponent('FileCheck2Icon', [['path', {
  d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
}], ['path', {
  d: 'M14 2v6h6'
}], ['path', {
  d: 'M3 15l2 2 4-4'
}]]);

var FileCheck = createVueComponent('FileCheckIcon', [['path', {
  d: 'M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'
}], ['polyline', {
  points: '14 2 14 8 20 8'
}], ['path', {
  d: 'M9 15l2 2 4-4'
}]]);

var FileCode = createVueComponent('FileCodeIcon', [['path', {
  d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
}], ['path', {
  d: 'M14 2v6h6'
}], ['path', {
  d: 'M9 18l3-3-3-3'
}], ['path', {
  d: 'M5 12l-3 3 3 3'
}]]);

var FileDigit = createVueComponent('FileDigitIcon', [['path', {
  d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
}], ['path', {
  d: 'M14 2v6h6'
}], ['path', {
  d: 'M10 12h2v6'
}], ['rect', {
  x: '2',
  y: '12',
  width: '4',
  height: '6'
}], ['path', {
  d: 'M10 18h4'
}]]);

var FileInput = createVueComponent('FileInputIcon', [['path', {
  d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
}], ['path', {
  d: 'M14 2v6h6'
}], ['path', {
  d: 'M2 15h10'
}], ['path', {
  d: 'M9 18l3-3-3-3'
}]]);

var FileMinus2 = createVueComponent('FileMinus2Icon', [['path', {
  d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
}], ['path', {
  d: 'M14 2v6h6'
}], ['path', {
  d: 'M3 15h6'
}]]);

var FileMinus = createVueComponent('FileMinusIcon', [['path', {
  d: 'M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'
}], ['polyline', {
  points: '14 2 14 8 20 8'
}], ['line', {
  x1: '9',
  y1: '15',
  x2: '15',
  y2: '15'
}]]);

var FileOutput = createVueComponent('FileOutputIcon', [['path', {
  d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
}], ['path', {
  d: 'M14 2v6h6'
}], ['path', {
  d: 'M2 15h10'
}], ['path', {
  d: 'M5 12l-3 3 3 3'
}]]);

var FilePlus2 = createVueComponent('FilePlus2Icon', [['path', {
  d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
}], ['path', {
  d: 'M14 2v6h6'
}], ['path', {
  d: 'M3 15h6'
}], ['path', {
  d: 'M6 12v6'
}]]);

var FilePlus = createVueComponent('FilePlusIcon', [['path', {
  d: 'M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'
}], ['polyline', {
  points: '14 2 14 8 20 8'
}], ['line', {
  x1: '12',
  y1: '18',
  x2: '12',
  y2: '12'
}], ['line', {
  x1: '9',
  y1: '15',
  x2: '15',
  y2: '15'
}]]);

var FileSearch = createVueComponent('FileSearchIcon', [['path', {
  d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v3'
}], ['path', {
  d: 'M14 2v6h6'
}], ['path', {
  d: 'M5 17a3 3 0 100-6 3 3 0 000 6z'
}], ['path', {
  d: 'M9 18l-1.5-1.5'
}]]);

var FileText = createVueComponent('FileTextIcon', [['path', {
  d: 'M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'
}], ['polyline', {
  points: '14 2 14 8 20 8'
}], ['line', {
  x1: '16',
  y1: '13',
  x2: '8',
  y2: '13'
}], ['line', {
  x1: '16',
  y1: '17',
  x2: '8',
  y2: '17'
}], ['line', {
  x1: '10',
  y1: '9',
  x2: '8',
  y2: '9'
}]]);

var FileX2 = createVueComponent('FileX2Icon', [['path', {
  d: 'M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'
}], ['path', {
  d: 'M14 2v6h6'
}], ['path', {
  d: 'M3 12.5l5 5'
}], ['path', {
  d: 'M8 12.5l-5 5'
}]]);

var FileX = createVueComponent('FileXIcon', [['path', {
  d: 'M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'
}], ['polyline', {
  points: '14 2 14 8 20 8'
}], ['line', {
  x1: '9.5',
  y1: '12.5',
  x2: '14.5',
  y2: '17.5'
}], ['line', {
  x1: '14.5',
  y1: '12.5',
  x2: '9.5',
  y2: '17.5'
}]]);

var File = createVueComponent('FileIcon', [['path', {
  d: 'M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'
}], ['polyline', {
  points: '14 2 14 8 20 8'
}]]);

var Files = createVueComponent('FilesIcon', [['path', {
  d: 'M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z'
}], ['path', {
  d: 'M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8'
}], ['path', {
  d: 'M15 2v5h5'
}]]);

var Film = createVueComponent('FilmIcon', [['rect', {
  x: '2',
  y: '2',
  width: '20',
  height: '20',
  rx: '2.18',
  ry: '2.18'
}], ['line', {
  x1: '7',
  y1: '2',
  x2: '7',
  y2: '22'
}], ['line', {
  x1: '17',
  y1: '2',
  x2: '17',
  y2: '22'
}], ['line', {
  x1: '2',
  y1: '12',
  x2: '22',
  y2: '12'
}], ['line', {
  x1: '2',
  y1: '7',
  x2: '7',
  y2: '7'
}], ['line', {
  x1: '2',
  y1: '17',
  x2: '7',
  y2: '17'
}], ['line', {
  x1: '17',
  y1: '17',
  x2: '22',
  y2: '17'
}], ['line', {
  x1: '17',
  y1: '7',
  x2: '22',
  y2: '7'
}]]);

var Filter = createVueComponent('FilterIcon', [['polygon', {
  points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3'
}]]);

var FlagTriangleLeft = createVueComponent('FlagTriangleLeftIcon', [['path', {
  d: 'M17 22 17 2 7 7 17 12'
}]]);

var FlagTriangleRight = createVueComponent('FlagTriangleRightIcon', [['path', {
  d: 'M7 22 7 2 17 7 7 12'
}]]);

var Flag = createVueComponent('FlagIcon', [['path', {
  d: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z'
}], ['line', {
  x1: '4',
  y1: '22',
  x2: '4',
  y2: '15'
}]]);

var Flame = createVueComponent('FlameIcon', [['path', {
  d: 'M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z'
}]]);

var FlashlightOff = createVueComponent('FlashlightOffIcon', [['path', {
  d: 'M16 16v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V10c0-2-2-2-2-4'
}], ['path', {
  d: 'M7 2h11v4c0 2-2 2-2 4v1'
}], ['line', {
  x1: '11',
  y1: '6',
  x2: '18',
  y2: '6'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22'
}]]);

var Flashlight = createVueComponent('FlashlightIcon', [['path', {
  d: 'M18 6c0 2-2 2-2 4v10a2 2 0 01-2 2h-4a2 2 0 01-2-2V10c0-2-2-2-2-4V2h12z'
}], ['line', {
  x1: '6',
  y1: '6',
  x2: '18',
  y2: '6'
}], ['line', {
  x1: '12',
  y1: '12',
  x2: '12',
  y2: '12'
}]]);

var FlaskConical = createVueComponent('FlaskConicalIcon', [['path', {
  d: 'M10 2v8L4.72 20.55a1 1 0 00.9 1.45h12.76a1 1 0 00.9-1.45L14 10V2'
}], ['path', {
  d: 'M8.5 2h7'
}], ['path', {
  d: 'M7 16h10'
}]]);

var FlaskRound = createVueComponent('FlaskRoundIcon', [['path', {
  d: 'M10 2v7.31'
}], ['path', {
  d: 'M14 9.3V1.99'
}], ['path', {
  d: 'M8.5 2h7'
}], ['path', {
  d: 'M14 9.3a6.5 6.5 0 11-4 0'
}], ['path', {
  d: 'M5.58 16.5h12.85'
}]]);

var FolderMinus = createVueComponent('FolderMinusIcon', [['path', {
  d: 'M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z'
}], ['line', {
  x1: '9',
  y1: '14',
  x2: '15',
  y2: '14'
}]]);

var FolderPlus = createVueComponent('FolderPlusIcon', [['path', {
  d: 'M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z'
}], ['line', {
  x1: '12',
  y1: '11',
  x2: '12',
  y2: '17'
}], ['line', {
  x1: '9',
  y1: '14',
  x2: '15',
  y2: '14'
}]]);

var Folder = createVueComponent('FolderIcon', [['path', {
  d: 'M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z'
}]]);

var FormInput = createVueComponent('FormInputIcon', [['rect', {
  x: '2',
  y: '6',
  width: '20',
  height: '12',
  rx: '2'
}], ['path', {
  d: 'M12 12h.01'
}], ['path', {
  d: 'M17 12h.01'
}], ['path', {
  d: 'M7 12h.01'
}]]);

var Forward = createVueComponent('ForwardIcon', [['polyline', {
  points: '15 17 20 12 15 7'
}], ['path', {
  d: 'M4 18v-2a4 4 0 0 1 4-4h12'
}]]);

var Framer = createVueComponent('FramerIcon', [['path', {
  d: 'M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7'
}]]);

var Frown = createVueComponent('FrownIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['path', {
  d: 'M16 16s-1.5-2-4-2-4 2-4 2'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '9.01',
  y2: '9'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '15.01',
  y2: '9'
}]]);

var FunctionSquare = createVueComponent('FunctionSquareIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['path', {
  d: 'M9 17c1.93 0 2.85-1 2.85-2.8V9.99c0-1.93 1.03-3.26 3.15-2.93M9 11.24h5.66'
}]]);

var Gamepad2 = createVueComponent('Gamepad2Icon', [['line', {
  x1: '6',
  y1: '11',
  x2: '10',
  y2: '11'
}], ['line', {
  x1: '8',
  y1: '9',
  x2: '8',
  y2: '13'
}], ['line', {
  x1: '15',
  y1: '12',
  x2: '15.01',
  y2: '12'
}], ['line', {
  x1: '18',
  y1: '10',
  x2: '18.01',
  y2: '10'
}], ['path', {
  d: 'M17.32 5H6.68a4 4 0 00-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 019.828 16h4.344a2 2 0 011.414.586L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0017.32 5z'
}]]);

var Gamepad = createVueComponent('GamepadIcon', [['line', {
  x1: '6',
  y1: '12',
  x2: '10',
  y2: '12'
}], ['line', {
  x1: '8',
  y1: '10',
  x2: '8',
  y2: '14'
}], ['line', {
  x1: '15',
  y1: '13',
  x2: '15.01',
  y2: '13'
}], ['line', {
  x1: '18',
  y1: '11',
  x2: '18.01',
  y2: '11'
}], ['rect', {
  x: '2',
  y: '6',
  width: '20',
  height: '12',
  rx: '2'
}]]);

var Gauge = createVueComponent('GaugeIcon', [['path', {
  d: 'M12 15l3.5-3.5'
}], ['path', {
  d: 'M20.3 18c.4-1 .7-2.2.7-3.4C21 9.8 17 6 12 6s-9 3.8-9 8.6c0 1.2.3 2.4.7 3.4'
}]]);

var Gavel = createVueComponent('GavelIcon', [['path', {
  d: 'M14 13l-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L11 10'
}], ['path', {
  d: 'M16 16l6-6'
}], ['path', {
  d: 'M8 8l6-6'
}], ['path', {
  d: 'M9 7l8 8'
}], ['path', {
  d: 'M21 11l-8-8'
}]]);

var Ghost = createVueComponent('GhostIcon', [['path', {
  d: 'M9 10h.01'
}], ['path', {
  d: 'M15 10h.01'
}], ['path', {
  d: 'M12 2a8 8 0 00-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 00-8-8z'
}]]);

var Gift = createVueComponent('GiftIcon', [['polyline', {
  points: '20 12 20 22 4 22 4 12'
}], ['rect', {
  x: '2',
  y: '7',
  width: '20',
  height: '5'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '7'
}], ['path', {
  d: 'M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z'
}], ['path', {
  d: 'M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z'
}]]);

var GitBranchPlus = createVueComponent('GitBranchPlusIcon', [['path', {
  d: 'M6 3v12'
}], ['path', {
  d: 'M18 9a3 3 0 100-6 3 3 0 000 6z'
}], ['path', {
  d: 'M6 21a3 3 0 100-6 3 3 0 000 6z'
}], ['path', {
  d: 'M15 6a9 9 0 00-9 9'
}], ['path', {
  d: 'M18 15v6'
}], ['path', {
  d: 'M21 18h-6'
}]]);

var GitBranch = createVueComponent('GitBranchIcon', [['line', {
  x1: '6',
  y1: '3',
  x2: '6',
  y2: '15'
}], ['circle', {
  cx: '18',
  cy: '6',
  r: '3'
}], ['circle', {
  cx: '6',
  cy: '18',
  r: '3'
}], ['path', {
  d: 'M18 9a9 9 0 01-9 9'
}]]);

var GitCommit = createVueComponent('GitCommitIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '3'
}], ['line', {
  x1: '3',
  y1: '12',
  x2: '9',
  y2: '12'
}], ['line', {
  x1: '15',
  y1: '12',
  x2: '21',
  y2: '12'
}]]);

var GitMerge = createVueComponent('GitMergeIcon', [['circle', {
  cx: '18',
  cy: '18',
  r: '3'
}], ['circle', {
  cx: '6',
  cy: '6',
  r: '3'
}], ['path', {
  d: 'M6 21V9a9 9 0 009 9'
}]]);

var GitPullRequest = createVueComponent('GitPullRequestIcon', [['circle', {
  cx: '18',
  cy: '18',
  r: '3'
}], ['circle', {
  cx: '6',
  cy: '6',
  r: '3'
}], ['path', {
  d: 'M13 6h3a2 2 0 012 2v7'
}], ['line', {
  x1: '6',
  y1: '9',
  x2: '6',
  y2: '21'
}]]);

var Github = createVueComponent('GithubIcon', [['path', {
  d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22'
}]]);

var Gitlab = createVueComponent('GitlabIcon', [['path', {
  d: 'M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z'
}]]);

var Glasses = createVueComponent('GlassesIcon', [['circle', {
  cx: '6',
  cy: '15',
  r: '4'
}], ['circle', {
  cx: '18',
  cy: '15',
  r: '4'
}], ['path', {
  d: 'M14 15a2 2 0 00-2-2 2 2 0 00-2 2'
}], ['path', {
  d: 'M2.5 13L5 7c.7-1.3 1.4-2 3-2'
}], ['path', {
  d: 'M21.5 13L19 7c-.7-1.3-1.5-2-3-2'
}]]);

var Globe2 = createVueComponent('Globe2Icon', [['path', {
  d: 'M15 21v-4a2 2 0 012-2h4'
}], ['path', {
  d: 'M7 4v2a3 3 0 003 2h0a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h3'
}], ['path', {
  d: 'M3 11h2a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v4'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}]]);

var Globe = createVueComponent('GlobeIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['line', {
  x1: '2',
  y1: '12',
  x2: '22',
  y2: '12'
}], ['path', {
  d: 'M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'
}]]);

var Grab = createVueComponent('GrabIcon', [['path', {
  d: 'M18 11.5V9a2 2 0 00-2-2v0a2 2 0 00-2 2v1.4'
}], ['path', {
  d: 'M14 10V8a2 2 0 00-2-2v0a2 2 0 00-2 2v2'
}], ['path', {
  d: 'M10 9.9V9a2 2 0 00-2-2v0a2 2 0 00-2 2v5'
}], ['path', {
  d: 'M6 14v0a2 2 0 00-2-2v0a2 2 0 00-2 2v0'
}], ['path', {
  d: 'M18 11v0a2 2 0 114 0v3a8 8 0 01-8 8h-4a8 8 0 01-8-8 2 2 0 114 0'
}]]);

var GraduationCap = createVueComponent('GraduationCapIcon', [['path', {
  d: 'M22 10v6M2 10l10-5 10 5-10 5z'
}], ['path', {
  d: 'M6 12v5c3 3 9 3 12 0v-5'
}]]);

var Grid = createVueComponent('GridIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '3',
  y1: '9',
  x2: '21',
  y2: '9'
}], ['line', {
  x1: '3',
  y1: '15',
  x2: '21',
  y2: '15'
}], ['line', {
  x1: '9',
  y1: '3',
  x2: '9',
  y2: '21'
}], ['line', {
  x1: '15',
  y1: '3',
  x2: '15',
  y2: '21'
}]]);

var GripHorizontal = createVueComponent('GripHorizontalIcon', [['circle', {
  cx: '12',
  cy: '9',
  r: '1'
}], ['circle', {
  cx: '19',
  cy: '9',
  r: '1'
}], ['circle', {
  cx: '5',
  cy: '9',
  r: '1'
}], ['circle', {
  cx: '12',
  cy: '15',
  r: '1'
}], ['circle', {
  cx: '19',
  cy: '15',
  r: '1'
}], ['circle', {
  cx: '5',
  cy: '15',
  r: '1'
}]]);

var GripVertical = createVueComponent('GripVerticalIcon', [['circle', {
  cx: '9',
  cy: '12',
  r: '1'
}], ['circle', {
  cx: '9',
  cy: '5',
  r: '1'
}], ['circle', {
  cx: '9',
  cy: '19',
  r: '1'
}], ['circle', {
  cx: '15',
  cy: '12',
  r: '1'
}], ['circle', {
  cx: '15',
  cy: '5',
  r: '1'
}], ['circle', {
  cx: '15',
  cy: '19',
  r: '1'
}]]);

var Hammer = createVueComponent('HammerIcon', [['path', {
  d: 'M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L12 9'
}], ['path', {
  d: 'M17.64 15L22 10.64'
}], ['path', {
  d: 'M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 00-3.94-1.64H9l.92.82A6.18 6.18 0 0112 8.4v1.56l2 2h2.47l2.26 1.91'
}]]);

var HandMetal = createVueComponent('HandMetalIcon', [['path', {
  d: 'M18 12.5V10a2 2 0 00-2-2v0a2 2 0 00-2 2v1.4'
}], ['path', {
  d: 'M14 11V9a2 2 0 10-4 0v2'
}], ['path', {
  d: 'M10 10.5V5a2 2 0 10-4 0v9'
}], ['path', {
  d: 'M7 15l-1.76-1.76a2 2 0 00-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 008-8V7a2 2 0 10-4 0v5'
}]]);

var Hand = createVueComponent('HandIcon', [['path', {
  d: 'M18 11V6a2 2 0 00-2-2v0a2 2 0 00-2 2v0'
}], ['path', {
  d: 'M14 10V4a2 2 0 00-2-2v0a2 2 0 00-2 2v2'
}], ['path', {
  d: 'M10 10.5V6a2 2 0 00-2-2v0a2 2 0 00-2 2v8'
}], ['path', {
  d: 'M18 8a2 2 0 114 0v6a8 8 0 01-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 012.83-2.82L7 15'
}]]);

var HardDrive = createVueComponent('HardDriveIcon', [['line', {
  x1: '22',
  y1: '12',
  x2: '2',
  y2: '12'
}], ['path', {
  d: 'M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z'
}], ['line', {
  x1: '6',
  y1: '16',
  x2: '6.01',
  y2: '16'
}], ['line', {
  x1: '10',
  y1: '16',
  x2: '10.01',
  y2: '16'
}]]);

var HardHat = createVueComponent('HardHatIcon', [['path', {
  d: 'M2 18a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2z'
}], ['path', {
  d: 'M10 10V5a1 1 0 011-1h2a1 1 0 011 1v5'
}], ['path', {
  d: 'M4 15v-3a6 6 0 016-6h0'
}], ['path', {
  d: 'M14 6h0a6 6 0 016 6v3'
}]]);

var Hash = createVueComponent('HashIcon', [['line', {
  x1: '4',
  y1: '9',
  x2: '20',
  y2: '9'
}], ['line', {
  x1: '4',
  y1: '15',
  x2: '20',
  y2: '15'
}], ['line', {
  x1: '10',
  y1: '3',
  x2: '8',
  y2: '21'
}], ['line', {
  x1: '16',
  y1: '3',
  x2: '14',
  y2: '21'
}]]);

var Haze = createVueComponent('HazeIcon', [['path', {
  d: 'M5.2 6.2l1.4 1.4'
}], ['path', {
  d: 'M2 13h2'
}], ['path', {
  d: 'M20 13h2'
}], ['path', {
  d: 'M17.4 7.6l1.4-1.4'
}], ['path', {
  d: 'M22 17H2'
}], ['path', {
  d: 'M22 21H2'
}], ['path', {
  d: 'M16 13a4 4 0 00-8 0'
}], ['path', {
  d: 'M12 5V2.5'
}]]);

var Headphones = createVueComponent('HeadphonesIcon', [['path', {
  d: 'M3 18v-6a9 9 0 0118 0v6'
}], ['path', {
  d: 'M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z'
}]]);

var Heart = createVueComponent('HeartIcon', [['path', {
  d: 'M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z'
}]]);

var HelpCircle = createVueComponent('HelpCircleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['path', {
  d: 'M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3'
}], ['line', {
  x1: '12',
  y1: '17',
  x2: '12.01',
  y2: '17'
}]]);

var Hexagon = createVueComponent('HexagonIcon', [['path', {
  d: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z'
}]]);

var Highlighter = createVueComponent('HighlighterIcon', [['path', {
  d: 'M9 11l-6 6v3h9l3-3'
}], ['path', {
  d: 'M22 12l-4.6 4.6a2 2 0 01-2.8 0l-5.2-5.2a2 2 0 010-2.8L14 4'
}]]);

var History = createVueComponent('HistoryIcon', [['path', {
  d: 'M3 3v5h5'
}], ['path', {
  d: 'M3.05 13A9 9 0 106 5.3L3 8'
}], ['path', {
  d: 'M12 7v5l4 2'
}]]);

var Home = createVueComponent('HomeIcon', [['path', {
  d: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z'
}], ['polyline', {
  points: '9 22 9 12 15 12 15 22'
}]]);

var ImageMinus = createVueComponent('ImageMinusIcon', [['path', {
  d: 'M21 11v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h8'
}], ['path', {
  d: 'M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
}], ['path', {
  d: 'M21 15l-5-5L5 21'
}], ['path', {
  d: 'M22 5h-6'
}]]);

var ImageOff = createVueComponent('ImageOffIcon', [['path', {
  d: 'M2 2l20 20'
}], ['path', {
  d: 'M9 3h10a2 2 0 012 2v10M3.59 3.59A2 2 0 003 5v14c0 1.1.9 2 2 2h14a2 2 0 001.41-.59'
}], ['path', {
  d: 'M9.56 9.56a1.5 1.5 0 01-2.12-2.12'
}], ['path', {
  d: 'M21 15l-5-5M5 21l8-8'
}]]);

var ImagePlus = createVueComponent('ImagePlusIcon', [['path', {
  d: 'M21 11v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h8'
}], ['path', {
  d: 'M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
}], ['path', {
  d: 'M21 15l-5-5L5 21'
}], ['path', {
  d: 'M19 2v6'
}], ['path', {
  d: 'M22 5h-6'
}]]);

var Image = createVueComponent('ImageIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['circle', {
  cx: '8.5',
  cy: '8.5',
  r: '1.5'
}], ['polyline', {
  points: '21 15 16 10 5 21'
}]]);

var Import = createVueComponent('ImportIcon', [['path', {
  d: 'M12 3v12'
}], ['path', {
  d: 'M8 11l4 4 4-4'
}], ['path', {
  d: 'M8 5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-4'
}]]);

var Inbox = createVueComponent('InboxIcon', [['polyline', {
  points: '22 12 16 12 14 15 10 15 8 12 2 12'
}], ['path', {
  d: 'M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z'
}]]);

var Indent = createVueComponent('IndentIcon', [['polyline', {
  points: '3 8 7 12 3 16'
}], ['line', {
  x1: '21',
  y1: '12',
  x2: '11',
  y2: '12'
}], ['line', {
  x1: '21',
  y1: '6',
  x2: '11',
  y2: '6'
}], ['line', {
  x1: '21',
  y1: '18',
  x2: '11',
  y2: '18'
}]]);

var IndianRupee = createVueComponent('IndianRupeeIcon', [['path', {
  d: 'M6 3h12'
}], ['path', {
  d: 'M6 8h12'
}], ['path', {
  d: 'M6 13l8.5 8'
}], ['path', {
  d: 'M6 13h3'
}], ['path', {
  d: 'M9 13c6.667 0 6.667-10 0-10'
}]]);

var Infinity = createVueComponent('InfinityIcon', [['path', {
  d: 'M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z'
}]]);

var Info = createVueComponent('InfoIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['line', {
  x1: '12',
  y1: '16',
  x2: '12',
  y2: '12'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12.01',
  y2: '8'
}]]);

var Inspect = createVueComponent('InspectIcon', [['path', {
  d: 'M19 11V4a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2h7'
}], ['path', {
  d: 'M12 12l4.166 10 1.48-4.355L22 16.166 12 12z'
}], ['path', {
  d: 'M18 18l3 3'
}]]);

var Instagram = createVueComponent('InstagramIcon', [['rect', {
  x: '2',
  y: '2',
  width: '20',
  height: '20',
  rx: '5',
  ry: '5'
}], ['path', {
  d: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z'
}], ['line', {
  x1: '17.5',
  y1: '6.5',
  x2: '17.51',
  y2: '6.5'
}]]);

var Italic = createVueComponent('ItalicIcon', [['line', {
  x1: '19',
  y1: '4',
  x2: '10',
  y2: '4'
}], ['line', {
  x1: '14',
  y1: '20',
  x2: '5',
  y2: '20'
}], ['line', {
  x1: '15',
  y1: '4',
  x2: '9',
  y2: '20'
}]]);

var JerseyPound = createVueComponent('JerseyPoundIcon', [['path', {
  d: 'M12 9.5V21m0-11.5L6 3m6 6.5L18 3'
}], ['path', {
  d: 'M6 15h12'
}], ['path', {
  d: 'M6 11h12'
}]]);

var Key = createVueComponent('KeyIcon', [['path', {
  d: 'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4'
}]]);

var Languages = createVueComponent('LanguagesIcon', [['path', {
  d: 'M5 8l6 6'
}], ['path', {
  d: 'M4 14l6-6 2-3'
}], ['path', {
  d: 'M2 5h12'
}], ['path', {
  d: 'M7 2h1'
}], ['path', {
  d: 'M22 22l-5-10-5 10'
}], ['path', {
  d: 'M14 18h6'
}]]);

var Laptop2 = createVueComponent('Laptop2Icon', [['rect', {
  x: '3',
  y: '4',
  width: '18',
  height: '12',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '2',
  y1: '20',
  x2: '22',
  y2: '20'
}]]);

var Laptop = createVueComponent('LaptopIcon', [['path', {
  d: 'M20 16V7a2 2 0 00-2-2H6a2 2 0 00-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 01-.9 1.45H3.62a1 1 0 01-.9-1.45L4 16'
}]]);

var LassoSelect = createVueComponent('LassoSelectIcon', [['path', {
  d: 'M7 22a5 5 0 01-2-4'
}], ['path', {
  d: 'M7 16.93c.96.43 1.96.74 2.99.91'
}], ['path', {
  d: 'M3.34 14A6.8 6.8 0 012 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 01-.33 2'
}], ['path', {
  d: 'M5 18a2 2 0 100-4 2 2 0 000 4z'
}], ['path', {
  d: 'M14.33 22h-.09a.35.35 0 01-.24-.32v-10a.34.34 0 01.33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 01-.21.59h-4.49l-2.57 3.85a.35.35 0 01-.28.14v0z'
}]]);

var Lasso = createVueComponent('LassoIcon', [['path', {
  d: 'M7 22a5 5 0 01-2-4'
}], ['path', {
  d: 'M3.3 14A6.8 6.8 0 012 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 01-5-1'
}], ['path', {
  d: 'M5 18a2 2 0 100-4 2 2 0 000 4z'
}]]);

var Layers = createVueComponent('LayersIcon', [['polygon', {
  points: '12 2 2 7 12 12 22 7 12 2'
}], ['polyline', {
  points: '2 17 12 22 22 17'
}], ['polyline', {
  points: '2 12 12 17 22 12'
}]]);

var LayoutDashboard = createVueComponent('LayoutDashboardIcon', [['rect', {
  x: '3',
  y: '3',
  width: '7',
  height: '9'
}], ['rect', {
  x: '14',
  y: '3',
  width: '7',
  height: '5'
}], ['rect', {
  x: '14',
  y: '12',
  width: '7',
  height: '9'
}], ['rect', {
  x: '3',
  y: '16',
  width: '7',
  height: '5'
}]]);

var LayoutGrid = createVueComponent('LayoutGridIcon', [['rect', {
  x: '3',
  y: '3',
  width: '7',
  height: '7'
}], ['rect', {
  x: '14',
  y: '3',
  width: '7',
  height: '7'
}], ['rect', {
  x: '14',
  y: '14',
  width: '7',
  height: '7'
}], ['rect', {
  x: '3',
  y: '14',
  width: '7',
  height: '7'
}]]);

var LayoutList = createVueComponent('LayoutListIcon', [['rect', {
  x: '3',
  y: '14',
  width: '7',
  height: '7'
}], ['rect', {
  x: '3',
  y: '3',
  width: '7',
  height: '7'
}], ['line', {
  x1: '14',
  y1: '4',
  x2: '21',
  y2: '4'
}], ['line', {
  x1: '14',
  y1: '9',
  x2: '21',
  y2: '9'
}], ['line', {
  x1: '14',
  y1: '15',
  x2: '21',
  y2: '15'
}], ['line', {
  x1: '14',
  y1: '20',
  x2: '21',
  y2: '20'
}]]);

var LayoutTemplate = createVueComponent('LayoutTemplateIcon', [['path', {
  d: 'M21 3H3v7h18V3z'
}], ['path', {
  d: 'M21 14h-5v7h5v-7z'
}], ['path', {
  d: 'M12 14H3v7h9v-7z'
}]]);

var Layout = createVueComponent('LayoutIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '3',
  y1: '9',
  x2: '21',
  y2: '9'
}], ['line', {
  x1: '9',
  y1: '21',
  x2: '9',
  y2: '9'
}]]);

var Library = createVueComponent('LibraryIcon', [['path', {
  d: 'M16 6l4 14'
}], ['path', {
  d: 'M12 6v14'
}], ['path', {
  d: 'M8 8v12'
}], ['path', {
  d: 'M4 4v16'
}]]);

var LifeBuoy = createVueComponent('LifeBuoyIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '4'
}], ['line', {
  x1: '4.93',
  y1: '4.93',
  x2: '9.17',
  y2: '9.17'
}], ['line', {
  x1: '14.83',
  y1: '14.83',
  x2: '19.07',
  y2: '19.07'
}], ['line', {
  x1: '14.83',
  y1: '9.17',
  x2: '19.07',
  y2: '4.93'
}], ['line', {
  x1: '14.83',
  y1: '9.17',
  x2: '18.36',
  y2: '5.64'
}], ['line', {
  x1: '4.93',
  y1: '19.07',
  x2: '9.17',
  y2: '14.83'
}]]);

var LightbulbOff = createVueComponent('LightbulbOffIcon', [['path', {
  d: 'M9 18h6'
}], ['path', {
  d: 'M10 22h4'
}], ['path', {
  d: 'M2 2l20 20'
}], ['path', {
  d: 'M8.91 14a4.61 4.61 0 00-1.41-2.5C6.23 10.23 6 9 6 8a6 6 0 01.084-1M9 2.804A6 6 0 0118 8a4.651 4.651 0 01-1.031 3'
}]]);

var Lightbulb = createVueComponent('LightbulbIcon', [['line', {
  x1: '9',
  y1: '18',
  x2: '15',
  y2: '18'
}], ['line', {
  x1: '10',
  y1: '22',
  x2: '14',
  y2: '22'
}], ['path', {
  d: 'M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14'
}]]);

var Link2Off = createVueComponent('Link2OffIcon', [['path', {
  d: 'M15 7h2a5 5 0 014 8M9 17H7A5 5 0 017 7'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '12',
  y2: '12'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22'
}]]);

var Link2 = createVueComponent('Link2Icon', [['path', {
  d: 'M15 7h2a5 5 0 010 10h-2m-6 0H7A5 5 0 017 7h2'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12'
}]]);

var Link = createVueComponent('LinkIcon', [['path', {
  d: 'M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71'
}], ['path', {
  d: 'M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71'
}]]);

var Linkedin = createVueComponent('LinkedinIcon', [['path', {
  d: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z'
}], ['rect', {
  x: '2',
  y: '9',
  width: '4',
  height: '12'
}], ['circle', {
  cx: '4',
  cy: '4',
  r: '2'
}]]);

var ListChecks = createVueComponent('ListChecksIcon', [['line', {
  x1: '10',
  y1: '6',
  x2: '21',
  y2: '6'
}], ['line', {
  x1: '10',
  y1: '12',
  x2: '21',
  y2: '12'
}], ['line', {
  x1: '10',
  y1: '18',
  x2: '21',
  y2: '18'
}], ['polyline', {
  points: '3 6 4 7 6 5'
}], ['polyline', {
  points: '3 12 4 13 6 11'
}], ['polyline', {
  points: '3 18 4 19 6 17'
}]]);

var ListOrdered = createVueComponent('ListOrderedIcon', [['line', {
  x1: '10',
  y1: '6',
  x2: '21',
  y2: '6'
}], ['line', {
  x1: '10',
  y1: '12',
  x2: '21',
  y2: '12'
}], ['line', {
  x1: '10',
  y1: '18',
  x2: '21',
  y2: '18'
}], ['path', {
  d: 'M4 6h1v4'
}], ['path', {
  d: 'M4 10h2'
}], ['path', {
  d: 'M6 18H4c0-1 2-2 2-3s-1-1.5-2-1'
}]]);

var List = createVueComponent('ListIcon', [['line', {
  x1: '8',
  y1: '6',
  x2: '21',
  y2: '6'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '21',
  y2: '12'
}], ['line', {
  x1: '8',
  y1: '18',
  x2: '21',
  y2: '18'
}], ['line', {
  x1: '3',
  y1: '6',
  x2: '3.01',
  y2: '6'
}], ['line', {
  x1: '3',
  y1: '12',
  x2: '3.01',
  y2: '12'
}], ['line', {
  x1: '3',
  y1: '18',
  x2: '3.01',
  y2: '18'
}]]);

var Loader2 = createVueComponent('Loader2Icon', [['path', {
  d: 'M21 12a9 9 0 11-6.219-8.56'
}]]);

var Loader = createVueComponent('LoaderIcon', [['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '6'
}], ['line', {
  x1: '12',
  y1: '18',
  x2: '12',
  y2: '22'
}], ['line', {
  x1: '4.93',
  y1: '4.93',
  x2: '7.76',
  y2: '7.76'
}], ['line', {
  x1: '16.24',
  y1: '16.24',
  x2: '19.07',
  y2: '19.07'
}], ['line', {
  x1: '2',
  y1: '12',
  x2: '6',
  y2: '12'
}], ['line', {
  x1: '18',
  y1: '12',
  x2: '22',
  y2: '12'
}], ['line', {
  x1: '4.93',
  y1: '19.07',
  x2: '7.76',
  y2: '16.24'
}], ['line', {
  x1: '16.24',
  y1: '7.76',
  x2: '19.07',
  y2: '4.93'
}]]);

var LocateFixed = createVueComponent('LocateFixedIcon', [['line', {
  x1: '2',
  x2: '5',
  y1: '12',
  y2: '12'
}], ['line', {
  x1: '19',
  x2: '22',
  y1: '12',
  y2: '12'
}], ['line', {
  x1: '12',
  x2: '12',
  y1: '2',
  y2: '5'
}], ['line', {
  x1: '12',
  x2: '12',
  y1: '19',
  y2: '22'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '7'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '3'
}]]);

var Locate = createVueComponent('LocateIcon', [['line', {
  x1: '2',
  x2: '5',
  y1: '12',
  y2: '12'
}], ['line', {
  x1: '19',
  x2: '22',
  y1: '12',
  y2: '12'
}], ['line', {
  x1: '12',
  x2: '12',
  y1: '2',
  y2: '5'
}], ['line', {
  x1: '12',
  x2: '12',
  y1: '19',
  y2: '22'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '7'
}]]);

var Lock = createVueComponent('LockIcon', [['rect', {
  x: '3',
  y: '11',
  width: '18',
  height: '11',
  rx: '2',
  ry: '2'
}], ['path', {
  d: 'M7 11V7a5 5 0 0110 0v4'
}]]);

var LogIn = createVueComponent('LogInIcon', [['path', {
  d: 'M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4'
}], ['polyline', {
  points: '10 17 15 12 10 7'
}], ['line', {
  x1: '15',
  y1: '12',
  x2: '3',
  y2: '12'
}]]);

var LogOut = createVueComponent('LogOutIcon', [['path', {
  d: 'M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4'
}], ['polyline', {
  points: '16 17 21 12 16 7'
}], ['line', {
  x1: '21',
  y1: '12',
  x2: '9',
  y2: '12'
}]]);

var Mail = createVueComponent('MailIcon', [['path', {
  d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
}], ['polyline', {
  points: '22,6 12,13 2,6'
}]]);

var MapPin = createVueComponent('MapPinIcon', [['path', {
  d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z'
}], ['circle', {
  cx: '12',
  cy: '10',
  r: '3'
}]]);

var Map = createVueComponent('MapIcon', [['polygon', {
  points: '1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '18'
}], ['line', {
  x1: '16',
  y1: '6',
  x2: '16',
  y2: '22'
}]]);

var Maximize2 = createVueComponent('Maximize2Icon', [['polyline', {
  points: '15 3 21 3 21 9'
}], ['polyline', {
  points: '9 21 3 21 3 15'
}], ['line', {
  x1: '21',
  y1: '3',
  x2: '14',
  y2: '10'
}], ['line', {
  x1: '3',
  y1: '21',
  x2: '10',
  y2: '14'
}]]);

var Maximize = createVueComponent('MaximizeIcon', [['path', {
  d: 'M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3'
}]]);

var Megaphone = createVueComponent('MegaphoneIcon', [['path', {
  d: 'M3 11l18-5v12L3 14v-3z'
}], ['path', {
  d: 'M11.6 16.8a3 3 0 11-5.8-1.6'
}]]);

var Meh = createVueComponent('MehIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['line', {
  x1: '8',
  y1: '15',
  x2: '16',
  y2: '15'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '9.01',
  y2: '9'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '15.01',
  y2: '9'
}]]);

var Menu = createVueComponent('MenuIcon', [['line', {
  x1: '4',
  y1: '12',
  x2: '20',
  y2: '12'
}], ['line', {
  x1: '4',
  y1: '6',
  x2: '20',
  y2: '6'
}], ['line', {
  x1: '4',
  y1: '18',
  x2: '20',
  y2: '18'
}]]);

var MessageCircle = createVueComponent('MessageCircleIcon', [['path', {
  d: 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'
}]]);

var MessageSquare = createVueComponent('MessageSquareIcon', [['path', {
  d: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z'
}]]);

var MicOff = createVueComponent('MicOffIcon', [['line', {
  x1: '1',
  y1: '1',
  x2: '23',
  y2: '23'
}], ['path', {
  d: 'M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6'
}], ['path', {
  d: 'M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23'
}], ['line', {
  x1: '12',
  y1: '19',
  x2: '12',
  y2: '23'
}], ['line', {
  x1: '8',
  y1: '23',
  x2: '16',
  y2: '23'
}]]);

var Mic = createVueComponent('MicIcon', [['path', {
  d: 'M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z'
}], ['path', {
  d: 'M19 10v2a7 7 0 01-14 0v-2'
}], ['line', {
  x1: '12',
  y1: '19',
  x2: '12',
  y2: '23'
}], ['line', {
  x1: '8',
  y1: '23',
  x2: '16',
  y2: '23'
}]]);

var Minimize2 = createVueComponent('Minimize2Icon', [['polyline', {
  points: '4 14 10 14 10 20'
}], ['polyline', {
  points: '20 10 14 10 14 4'
}], ['line', {
  x1: '14',
  y1: '10',
  x2: '21',
  y2: '3'
}], ['line', {
  x1: '3',
  y1: '21',
  x2: '10',
  y2: '14'
}]]);

var Minimize = createVueComponent('MinimizeIcon', [['path', {
  d: 'M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3'
}]]);

var MinusCircle = createVueComponent('MinusCircleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12'
}]]);

var MinusSquare = createVueComponent('MinusSquareIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12'
}]]);

var Minus = createVueComponent('MinusIcon', [['line', {
  x1: '5',
  y1: '12',
  x2: '19',
  y2: '12'
}]]);

var MonitorOff = createVueComponent('MonitorOffIcon', [['path', {
  d: 'M17 17H4a2 2 0 01-2-2V5c0-1.5 1-2 1-2'
}], ['path', {
  d: 'M22 15V5a2 2 0 00-2-2H9'
}], ['path', {
  d: 'M8 21h8'
}], ['path', {
  d: 'M12 17v4'
}], ['path', {
  d: 'M2 2l20 20'
}]]);

var MonitorSpeaker = createVueComponent('MonitorSpeakerIcon', [['path', {
  d: 'M5.5 20H8'
}], ['path', {
  d: 'M17 9h.01'
}], ['rect', {
  x: '12',
  y: '4',
  width: '10',
  height: '16',
  rx: '2'
}], ['path', {
  d: 'M8 6H4a2 2 0 00-2 2v6a2 2 0 002 2h4'
}], ['circle', {
  cx: '17',
  cy: '15',
  r: '1'
}]]);

var Monitor = createVueComponent('MonitorIcon', [['rect', {
  x: '2',
  y: '3',
  width: '20',
  height: '14',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '8',
  y1: '21',
  x2: '16',
  y2: '21'
}], ['line', {
  x1: '12',
  y1: '17',
  x2: '12',
  y2: '21'
}]]);

var Moon = createVueComponent('MoonIcon', [['path', {
  d: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'
}]]);

var MoreHorizontal = createVueComponent('MoreHorizontalIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '1'
}], ['circle', {
  cx: '19',
  cy: '12',
  r: '1'
}], ['circle', {
  cx: '5',
  cy: '12',
  r: '1'
}]]);

var MoreVertical = createVueComponent('MoreVerticalIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '1'
}], ['circle', {
  cx: '12',
  cy: '5',
  r: '1'
}], ['circle', {
  cx: '12',
  cy: '19',
  r: '1'
}]]);

var MountainSnow = createVueComponent('MountainSnowIcon', [['path', {
  d: 'M8 3L12 11L17 6L22 21H2L8 3Z'
}], ['path', {
  d: 'M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19'
}]]);

var Mountain = createVueComponent('MountainIcon', [['path', {
  d: 'M8 3L12 11L17 6L22 21H2L8 3Z'
}]]);

var MousePointer2 = createVueComponent('MousePointer2Icon', [['path', {
  d: 'M4 4l7.07 17 2.51-7.39L21 11.07z'
}]]);

var MousePointerClick = createVueComponent('MousePointerClickIcon', [['path', {
  d: 'M9 9l5 12 1.774-5.226L21 14 9 9z'
}], ['path', {
  d: 'M16.071 16.071l4.243 4.243'
}], ['path', {
  d: 'M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
}]]);

var MousePointer = createVueComponent('MousePointerIcon', [['path', {
  d: 'M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z'
}], ['path', {
  d: 'M13 13l6 6'
}]]);

var MoveDiagonal2 = createVueComponent('MoveDiagonal2Icon', [['polyline', {
  points: '5 11 5 5 11 5'
}], ['polyline', {
  points: '19 13 19 19 13 19'
}], ['line', {
  x1: '5',
  y1: '5',
  x2: '19',
  y2: '19'
}]]);

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

var MoveHorizontal = createVueComponent('MoveHorizontalIcon', [['polyline', {
  points: '18 8 22 12 18 16'
}], ['polyline', {
  points: '6 8 2 12 6 16'
}], ['line', {
  x1: '2',
  y1: '12',
  x2: '22',
  y2: '12'
}]]);

var MoveVertical = createVueComponent('MoveVerticalIcon', [['polyline', {
  points: '8 18 12 22 16 18'
}], ['polyline', {
  points: '8 6 12 2 16 6'
}], ['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '22'
}]]);

var Move = createVueComponent('MoveIcon', [['polyline', {
  points: '5 9 2 12 5 15'
}], ['polyline', {
  points: '9 5 12 2 15 5'
}], ['polyline', {
  points: '15 19 12 22 9 19'
}], ['polyline', {
  points: '19 9 22 12 19 15'
}], ['line', {
  x1: '2',
  y1: '12',
  x2: '22',
  y2: '12'
}], ['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '22'
}]]);

var Music = createVueComponent('MusicIcon', [['path', {
  d: 'M9 18V5l12-2v13'
}], ['circle', {
  cx: '6',
  cy: '18',
  r: '3'
}], ['circle', {
  cx: '18',
  cy: '16',
  r: '3'
}]]);

var Navigation2 = createVueComponent('Navigation2Icon', [['polygon', {
  points: '12 2 19 21 12 17 5 21 12 2'
}]]);

var Navigation = createVueComponent('NavigationIcon', [['polygon', {
  points: '3 11 22 2 13 21 11 13 3 11'
}]]);

var Network = createVueComponent('NetworkIcon', [['rect', {
  x: '9',
  y: '2',
  width: '6',
  height: '6'
}], ['rect', {
  x: '16',
  y: '16',
  width: '6',
  height: '6'
}], ['rect', {
  x: '2',
  y: '16',
  width: '6',
  height: '6'
}], ['path', {
  d: 'M12 8v4m0 0H5v4m7-4h7v4'
}]]);

var Octagon = createVueComponent('OctagonIcon', [['polygon', {
  points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2'
}]]);

var Option = createVueComponent('OptionIcon', [['path', {
  d: 'M3 3h6l6 18h6'
}], ['path', {
  d: 'M14 3h7'
}]]);

var Outdent = createVueComponent('OutdentIcon', [['polyline', {
  points: '7 8 3 12 7 16'
}], ['line', {
  x1: '21',
  y1: '12',
  x2: '11',
  y2: '12'
}], ['line', {
  x1: '21',
  y1: '6',
  x2: '11',
  y2: '6'
}], ['line', {
  x1: '21',
  y1: '18',
  x2: '11',
  y2: '18'
}]]);

var Package = createVueComponent('PackageIcon', [['line', {
  x1: '16.5',
  y1: '9.4',
  x2: '7.5',
  y2: '4.21'
}], ['path', {
  d: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z'
}], ['polyline', {
  points: '3.27 6.96 12 12.01 20.73 6.96'
}], ['line', {
  x1: '12',
  y1: '22.08',
  x2: '12',
  y2: '12'
}]]);

var Palette = createVueComponent('PaletteIcon', [['circle', {
  cx: '13.5',
  cy: '6.5',
  r: '.5'
}], ['circle', {
  cx: '17.5',
  cy: '10.5',
  r: '.5'
}], ['circle', {
  cx: '8.5',
  cy: '7.5',
  r: '.5'
}], ['circle', {
  cx: '6.5',
  cy: '12.5',
  r: '.5'
}], ['path', {
  d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z'
}]]);

var Paperclip = createVueComponent('PaperclipIcon', [['path', {
  d: 'M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48'
}]]);

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

var PauseOctagon = createVueComponent('PauseOctagonIcon', [['path', {
  d: 'M10 15V9'
}], ['path', {
  d: 'M14 15V9'
}], ['path', {
  d: 'M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z'
}]]);

var Pause = createVueComponent('PauseIcon', [['rect', {
  x: '6',
  y: '4',
  width: '4',
  height: '16'
}], ['rect', {
  x: '14',
  y: '4',
  width: '4',
  height: '16'
}]]);

var PenTool = createVueComponent('PenToolIcon', [['path', {
  d: 'M12 19l7-7 3 3-7 7-3-3z'
}], ['path', {
  d: 'M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z'
}], ['path', {
  d: 'M2 2l7.586 7.586'
}], ['circle', {
  cx: '11',
  cy: '11',
  r: '2'
}]]);

var Pencil = createVueComponent('PencilIcon', [['line', {
  x1: '18',
  y1: '2',
  x2: '22',
  y2: '6'
}], ['path', {
  d: 'M7.5 20.5L19 9l-4-4L3.5 16.5 2 22l5.5-1.5z'
}]]);

var Percent = createVueComponent('PercentIcon', [['line', {
  x1: '19',
  y1: '5',
  x2: '5',
  y2: '19'
}], ['circle', {
  cx: '6.5',
  cy: '6.5',
  r: '2.5'
}], ['circle', {
  cx: '17.5',
  cy: '17.5',
  r: '2.5'
}]]);

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

var PhoneCall = createVueComponent('PhoneCallIcon', [['path', {
  d: 'M14.05 6A5 5 0 0118 10m-3.95-8a9 9 0 018 7.94m0 7v3a2 2 0 01-2 2h-.19a19.79 19.79 0 01-8.63-3.07 19.52 19.52 0 01-6-6 19.82 19.82 0 01-3.11-8.69A2 2 0 013.93 2h3.18a2 2 0 012 1.72 13 13 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 13 13 0 002.81.7A2 2 0 0122 16.92z'
}]]);

var PhoneForwarded = createVueComponent('PhoneForwardedIcon', [['polyline', {
  points: '18 2 22 6 18 10'
}], ['line', {
  x1: '14',
  y1: '6',
  x2: '22',
  y2: '6'
}], ['path', {
  d: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
}]]);

var PhoneIncoming = createVueComponent('PhoneIncomingIcon', [['polyline', {
  points: '16 2 16 8 22 8'
}], ['line', {
  x1: '22',
  y1: '2',
  x2: '16',
  y2: '8'
}], ['path', {
  d: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
}]]);

var PhoneMissed = createVueComponent('PhoneMissedIcon', [['line', {
  x1: '22',
  y1: '2',
  x2: '16',
  y2: '8'
}], ['line', {
  x1: '16',
  y1: '2',
  x2: '22',
  y2: '8'
}], ['path', {
  d: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
}]]);

var PhoneOff = createVueComponent('PhoneOffIcon', [['path', {
  d: 'M10.68 13.31a16 16 0 003.41 2.6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.72 2v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.42 19.42 0 01-3.33-2.67m-2.67-3.34a19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91'
}], ['line', {
  x1: '22',
  y1: '2',
  x2: '2',
  y2: '22'
}]]);

var PhoneOutgoing = createVueComponent('PhoneOutgoingIcon', [['polyline', {
  points: '22 8 22 2 16 2'
}], ['line', {
  x1: '16',
  y1: '8',
  x2: '22',
  y2: '2'
}], ['path', {
  d: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
}]]);

var Phone = createVueComponent('PhoneIcon', [['path', {
  d: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
}]]);

var PieChart = createVueComponent('PieChartIcon', [['path', {
  d: 'M21.21 15.89A10 10 0 118 2.83'
}], ['path', {
  d: 'M22 12A10 10 0 0012 2v10z'
}]]);

var Pipette = createVueComponent('PipetteIcon', [['path', {
  d: 'M2 22l2-2h3l7-7'
}], ['path', {
  d: 'M4 20v-3l7-7'
}], ['path', {
  d: 'M14.29 13.3a1 1 0 001.41 0l.8-.8c.27-.27.27-.72 0-1s-.28-.72 0-1l4.08-4.08a2 2 0 000-2.83l-.17-.17a2 2 0 00-2.83 0L13.5 7.51c-.28.27-.73.27-1 0s-.73-.28-1 0l-.8.79a1 1 0 000 1.41l3.59 3.59z'
}]]);

var Plane = createVueComponent('PlaneIcon', [['path', {
  d: 'M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z'
}]]);

var PlayCircle = createVueComponent('PlayCircleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['polygon', {
  points: '10 8 16 12 10 16 10 8'
}]]);

var Play = createVueComponent('PlayIcon', [['polygon', {
  points: '5 3 19 12 5 21 5 3'
}]]);

var PlugZap = createVueComponent('PlugZapIcon', [['path', {
  d: 'M13 2l-2 2.5h3L12 7'
}], ['path', {
  d: 'M12 22v-3'
}], ['path', {
  d: 'M10 13v-2.5'
}], ['path', {
  d: 'M10 12.5v-2'
}], ['path', {
  d: 'M14 12.5v-2'
}], ['path', {
  d: 'M16 15a2 2 0 00-2-2h-4a2 2 0 00-2 2v2a2 2 0 002 2h4a2 2 0 002-2v-2z'
}]]);

var PlusCircle = createVueComponent('PlusCircleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '16'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12'
}]]);

var PlusSquare = createVueComponent('PlusSquareIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '16'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12'
}]]);

var Plus = createVueComponent('PlusIcon', [['line', {
  x1: '12',
  y1: '5',
  x2: '12',
  y2: '19'
}], ['line', {
  x1: '5',
  y1: '12',
  x2: '19',
  y2: '12'
}]]);

var Pocket = createVueComponent('PocketIcon', [['path', {
  d: 'M4 3h16a2 2 0 012 2v6a10 10 0 01-10 10A10 10 0 012 11V5a2 2 0 012-2z'
}], ['polyline', {
  points: '8 10 12 14 16 10'
}]]);

var Podcast = createVueComponent('PodcastIcon', [['circle', {
  cx: '12',
  cy: '11',
  r: '1'
}], ['path', {
  d: 'M17.03 18.46a9 9 0 10-10.02.03'
}], ['path', {
  d: 'M16.06 13.91a5 5 0 10-7.97.2'
}], ['path', {
  d: 'M11.11 17a.9.9 0 111.78 0l-.52 4.67a.37.37 0 01-.74 0l-.52-4.68z'
}]]);

var Pointer = createVueComponent('PointerIcon', [['path', {
  d: 'M22 14a8 8 0 01-8 8'
}], ['path', {
  d: 'M18 11v-1a2 2 0 00-2-2v0a2 2 0 00-2 2v0'
}], ['path', {
  d: 'M14 10V9a2 2 0 00-2-2v0a2 2 0 00-2 2v1'
}], ['path', {
  d: 'M10 9.5V4a2 2 0 00-2-2v0a2 2 0 00-2 2v10'
}], ['path', {
  d: 'M18 11a2 2 0 114 0v3a8 8 0 01-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 012.83-2.82L7 15'
}]]);

var PoundSterling = createVueComponent('PoundSterlingIcon', [['path', {
  d: 'M18 7c0-5.333-8-5.333-8 0'
}], ['path', {
  d: 'M10 7v14'
}], ['path', {
  d: 'M6 21h12'
}], ['path', {
  d: 'M6 13h10'
}]]);

var PowerOff = createVueComponent('PowerOffIcon', [['path', {
  d: 'M18.36 6.64A9 9 0 0120.77 15M5.63 6.64A9 9 0 1018.706 19'
}], ['path', {
  d: 'M12 2v4'
}], ['path', {
  d: 'M2 2l20 20'
}]]);

var Power = createVueComponent('PowerIcon', [['path', {
  d: 'M18.36 6.64a9 9 0 11-12.73 0'
}], ['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '12'
}]]);

var Printer = createVueComponent('PrinterIcon', [['polyline', {
  points: '6 9 6 2 18 2 18 9'
}], ['path', {
  d: 'M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2'
}], ['rect', {
  x: '6',
  y: '14',
  width: '12',
  height: '8'
}]]);

var QrCode = createVueComponent('QrCodeIcon', [['rect', {
  x: '2',
  y: '2',
  width: '8',
  height: '8'
}], ['path', {
  d: 'M6 6h.01'
}], ['rect', {
  x: '14',
  y: '2',
  width: '8',
  height: '8'
}], ['path', {
  d: 'M18 6h.01'
}], ['rect', {
  x: '2',
  y: '14',
  width: '8',
  height: '8'
}], ['path', {
  d: 'M6 18h.01'
}], ['path', {
  d: 'M14 14h.01'
}], ['path', {
  d: 'M18 18h.01'
}], ['path', {
  d: 'M18 22h4v-4'
}], ['path', {
  d: 'M14 18v4'
}], ['path', {
  d: 'M22 14h-4'
}]]);

var Quote = createVueComponent('QuoteIcon', [['path', {
  d: 'M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'
}], ['path', {
  d: 'M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z'
}]]);

var RadioReceiver = createVueComponent('RadioReceiverIcon', [['path', {
  d: 'M5 16v2'
}], ['path', {
  d: 'M19 16v2'
}], ['rect', {
  x: '2',
  y: '8',
  width: '20',
  height: '8',
  rx: '2'
}], ['path', {
  d: 'M18 12h0'
}]]);

var Radio = createVueComponent('RadioIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '2'
}], ['path', {
  d: 'M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14'
}]]);

var Redo = createVueComponent('RedoIcon', [['path', {
  d: 'M21 7v6h-6'
}], ['path', {
  d: 'M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7'
}]]);

var RefreshCcw = createVueComponent('RefreshCcwIcon', [['path', {
  d: 'M3 2v6h6'
}], ['path', {
  d: 'M21 12A9 9 0 006 5.3L3 8'
}], ['path', {
  d: 'M21 22v-6h-6'
}], ['path', {
  d: 'M3 12a9 9 0 0015 6.7l3-2.7'
}]]);

var RefreshCw = createVueComponent('RefreshCwIcon', [['path', {
  d: 'M21 2v6h-6'
}], ['path', {
  d: 'M3 12a9 9 0 0115-6.7L21 8'
}], ['path', {
  d: 'M3 22v-6h6'
}], ['path', {
  d: 'M21 12a9 9 0 01-15 6.7L3 16'
}]]);

var Regex = createVueComponent('RegexIcon', [['path', {
  d: 'M17 3v10'
}], ['path', {
  d: 'M12.67 5.5l8.66 5'
}], ['path', {
  d: 'M12.67 10.5l8.66-5'
}], ['path', {
  d: 'M9 17a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2z'
}]]);

var Repeat1 = createVueComponent('Repeat1Icon', [['path', {
  d: 'M17 2l4 4-4 4'
}], ['path', {
  d: 'M3 11v-1a4 4 0 014-4h14'
}], ['path', {
  d: 'M7 22l-4-4 4-4'
}], ['path', {
  d: 'M21 13v1a4 4 0 01-4 4H3'
}], ['path', {
  d: 'M11 10h1v4'
}]]);

var Repeat = createVueComponent('RepeatIcon', [['path', {
  d: 'M17 2l4 4-4 4'
}], ['path', {
  d: 'M3 11v-1a4 4 0 014-4h14'
}], ['path', {
  d: 'M7 22l-4-4 4-4'
}], ['path', {
  d: 'M21 13v1a4 4 0 01-4 4H3'
}]]);

var ReplyAll = createVueComponent('ReplyAllIcon', [['polyline', {
  points: '7 17 2 12 7 7'
}], ['polyline', {
  points: '12 17 7 12 12 7'
}], ['path', {
  d: 'M22 18v-2a4 4 0 0 0-4-4H7'
}]]);

var Reply = createVueComponent('ReplyIcon', [['polyline', {
  points: '9 17 4 12 9 7'
}], ['path', {
  d: 'M20 18v-2a4 4 0 0 0-4-4H4'
}]]);

var Rewind = createVueComponent('RewindIcon', [['polygon', {
  points: '11 19 2 12 11 5 11 19'
}], ['polygon', {
  points: '22 19 13 12 22 5 22 19'
}]]);

var RockingChair = createVueComponent('RockingChairIcon', [['polyline', {
  points: '3.5 2 6.5 12.5 18 12.5'
}], ['line', {
  x1: '9.5',
  y1: '12.5',
  x2: '5.5',
  y2: '20'
}], ['line', {
  x1: '15',
  y1: '12.5',
  x2: '18.5',
  y2: '20'
}], ['path', {
  d: 'M2.75 18a13 13 0 0018.5 0'
}]]);

var RotateCcw = createVueComponent('RotateCcwIcon', [['path', {
  d: 'M3 2v6h6'
}], ['path', {
  d: 'M3 13a9 9 0 103-7.7L3 8'
}]]);

var RotateCw = createVueComponent('RotateCwIcon', [['path', {
  d: 'M21 2v6h-6'
}], ['path', {
  d: 'M21 13a9 9 0 11-3-7.7L21 8'
}]]);

var Rss = createVueComponent('RssIcon', [['path', {
  d: 'M4 11a9 9 0 019 9'
}], ['path', {
  d: 'M4 4a16 16 0 0116 16'
}], ['circle', {
  cx: '5',
  cy: '19',
  r: '1'
}]]);

var Ruler = createVueComponent('RulerIcon', [['path', {
  d: 'M16 2l6 6L8 22l-6-6L16 2'
}], ['path', {
  d: 'M7.5 10.5l2 2'
}], ['path', {
  d: 'M10.5 7.5l2 2'
}], ['path', {
  d: 'M13.5 4.5l2 2'
}], ['path', {
  d: 'M4.5 13.5l2 2'
}]]);

var RussianRuble = createVueComponent('RussianRubleIcon', [['path', {
  d: 'M14 11c5.333 0 5.333-8 0-8'
}], ['path', {
  d: 'M6 11h8'
}], ['path', {
  d: 'M6 15h8'
}], ['path', {
  d: 'M9 21V3'
}], ['path', {
  d: 'M9 3h5'
}]]);

var Save = createVueComponent('SaveIcon', [['path', {
  d: 'M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z'
}], ['polyline', {
  points: '17 21 17 13 7 13 7 21'
}], ['polyline', {
  points: '7 3 7 8 15 8'
}]]);

var Scale = createVueComponent('ScaleIcon', [['path', {
  d: 'M16 16l3-8 3.001 8A5.002 5.002 0 0116 16z'
}], ['path', {
  d: 'M2 16l3-8 3.001 8A5.002 5.002 0 012 16z'
}], ['path', {
  d: 'M7 21h10'
}], ['path', {
  d: 'M12 3v18'
}], ['path', {
  d: 'M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'
}]]);

var Scissors = createVueComponent('ScissorsIcon', [['circle', {
  cx: '6',
  cy: '6',
  r: '3'
}], ['circle', {
  cx: '6',
  cy: '18',
  r: '3'
}], ['line', {
  x1: '20',
  y1: '4',
  x2: '8.12',
  y2: '15.88'
}], ['line', {
  x1: '14.47',
  y1: '14.48',
  x2: '20',
  y2: '20'
}], ['line', {
  x1: '8.12',
  y1: '8.12',
  x2: '12',
  y2: '12'
}]]);

var ScreenShareOff = createVueComponent('ScreenShareOffIcon', [['path', {
  d: 'M13 3H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2v-3'
}], ['path', {
  d: 'M8 21h8'
}], ['path', {
  d: 'M12 17v4'
}], ['path', {
  d: 'M22 3l-5 5'
}], ['path', {
  d: 'M17 3l5 5'
}]]);

var ScreenShare = createVueComponent('ScreenShareIcon', [['path', {
  d: 'M13 3H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2v-3'
}], ['path', {
  d: 'M8 21h8'
}], ['path', {
  d: 'M12 17v4'
}], ['path', {
  d: 'M17 8l5-5'
}], ['path', {
  d: 'M17 3h5v5'
}]]);

var Search = createVueComponent('SearchIcon', [['circle', {
  cx: '11',
  cy: '11',
  r: '8'
}], ['line', {
  x1: '21',
  y1: '21',
  x2: '16.65',
  y2: '16.65'
}]]);

var Send = createVueComponent('SendIcon', [['line', {
  x1: '22',
  y1: '2',
  x2: '11',
  y2: '13'
}], ['polygon', {
  points: '22 2 15 22 11 13 2 9 22 2'
}]]);

var SeparatorHorizontal = createVueComponent('SeparatorHorizontalIcon', [['line', {
  x1: '3',
  y1: '12',
  x2: '21',
  y2: '12'
}], ['polyline', {
  points: '8 8 12 4 16 8'
}], ['polyline', {
  points: '16 16 12 20 8 16'
}]]);

var SeparatorVertical = createVueComponent('SeparatorVerticalIcon', [['line', {
  x1: '12',
  y1: '3',
  x2: '12',
  y2: '21'
}], ['polyline', {
  points: '8 8 4 12 8 16'
}], ['polyline', {
  points: '16 16 20 12 16 8'
}]]);

var ServerCrash = createVueComponent('ServerCrashIcon', [['path', {
  d: 'M6 10H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2h-2'
}], ['path', {
  d: 'M6 14H4a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2h-2'
}], ['path', {
  d: 'M6 6h.01'
}], ['path', {
  d: 'M6 18h.01'
}], ['path', {
  d: 'M13 6l-4 6h6l-4 6'
}]]);

var ServerOff = createVueComponent('ServerOffIcon', [['path', {
  d: 'M7 2h13a2 2 0 012 2v4a2 2 0 01-2 2h-5'
}], ['path', {
  d: 'M10 10L2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 002 2h6z'
}], ['path', {
  d: 'M22 17v-1a2 2 0 00-2-2h-1'
}], ['path', {
  d: 'M4 14a2 2 0 00-2 2v4a2 2 0 002 2h16.5l1-.5.5.5-8-8H4z'
}], ['path', {
  d: 'M6 18h.01'
}], ['path', {
  d: 'M2 2l20 20'
}]]);

var Server = createVueComponent('ServerIcon', [['rect', {
  x: '2',
  y: '2',
  width: '20',
  height: '8',
  rx: '2',
  ry: '2'
}], ['rect', {
  x: '2',
  y: '14',
  width: '20',
  height: '8',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '6',
  y1: '6',
  x2: '6.01',
  y2: '6'
}], ['line', {
  x1: '6',
  y1: '18',
  x2: '6.01',
  y2: '18'
}]]);

var Settings = createVueComponent('SettingsIcon', [['path', {
  d: 'M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '3'
}]]);

var Share2 = createVueComponent('Share2Icon', [['circle', {
  cx: '18',
  cy: '5',
  r: '3'
}], ['circle', {
  cx: '6',
  cy: '12',
  r: '3'
}], ['circle', {
  cx: '18',
  cy: '19',
  r: '3'
}], ['line', {
  x1: '8.59',
  y1: '13.51',
  x2: '15.42',
  y2: '17.49'
}], ['line', {
  x1: '15.41',
  y1: '6.51',
  x2: '8.59',
  y2: '10.49'
}]]);

var Share = createVueComponent('ShareIcon', [['path', {
  d: 'M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8'
}], ['polyline', {
  points: '16 6 12 2 8 6'
}], ['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '15'
}]]);

var Sheet = createVueComponent('SheetIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '3',
  y1: '9',
  x2: '21',
  y2: '9'
}], ['line', {
  x1: '3',
  y1: '15',
  x2: '21',
  y2: '15'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '9',
  y2: '21'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '15',
  y2: '21'
}]]);

var ShieldAlert = createVueComponent('ShieldAlertIcon', [['path', {
  d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
}], ['path', {
  d: 'M12 8v4'
}], ['path', {
  d: 'M12 16h.01'
}]]);

var ShieldCheck = createVueComponent('ShieldCheckIcon', [['path', {
  d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
}], ['path', {
  d: 'M9 12l2 2 4-4'
}]]);

var ShieldClose = createVueComponent('ShieldCloseIcon', [['path', {
  d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
}], ['line', {
  x1: '9.5',
  y1: '9',
  x2: '14.5',
  y2: '14'
}], ['line', {
  x1: '14.5',
  y1: '9',
  x2: '9.5',
  y2: '14'
}]]);

var ShieldOff = createVueComponent('ShieldOffIcon', [['path', {
  d: 'M19.69 14a6.9 6.9 0 00.31-2V5l-8-3-3.16 1.18'
}], ['path', {
  d: 'M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 005.62-4.38'
}], ['line', {
  x1: '1',
  y1: '1',
  x2: '23',
  y2: '23'
}]]);

var Shield = createVueComponent('ShieldIcon', [['path', {
  d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
}]]);

var Shirt = createVueComponent('ShirtIcon', [['path', {
  d: 'M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z'
}]]);

var ShoppingBag = createVueComponent('ShoppingBagIcon', [['path', {
  d: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z'
}], ['line', {
  x1: '3',
  y1: '6',
  x2: '21',
  y2: '6'
}], ['path', {
  d: 'M16 10a4 4 0 01-8 0'
}]]);

var ShoppingCart = createVueComponent('ShoppingCartIcon', [['circle', {
  cx: '9',
  cy: '21',
  r: '1'
}], ['circle', {
  cx: '20',
  cy: '21',
  r: '1'
}], ['path', {
  d: 'M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6'
}]]);

var Shovel = createVueComponent('ShovelIcon', [['path', {
  d: 'M2 22v-5l5-5 5 5-5 5z'
}], ['path', {
  d: 'M9.5 14.5L16 8'
}], ['path', {
  d: 'M17 2l5 5-.5.5a3.53 3.53 0 01-5 0s0 0 0 0a3.53 3.53 0 010-5L17 2'
}]]);

var Shrink = createVueComponent('ShrinkIcon', [['path', {
  d: 'M15 15l6 6m-6-6v4.8m0-4.8h4.8'
}], ['path', {
  d: 'M9 19.8V15m0 0H4.2M9 15l-6 6'
}], ['path', {
  d: 'M15 4.2V9m0 0h4.8M15 9l6-6'
}], ['path', {
  d: 'M9 4.2V9m0 0H4.2M9 9L3 3'
}]]);

var Shuffle = createVueComponent('ShuffleIcon', [['polyline', {
  points: '16 3 21 3 21 8'
}], ['line', {
  x1: '4',
  y1: '20',
  x2: '21',
  y2: '3'
}], ['polyline', {
  points: '21 16 21 21 16 21'
}], ['line', {
  x1: '15',
  y1: '15',
  x2: '21',
  y2: '21'
}], ['line', {
  x1: '4',
  y1: '4',
  x2: '9',
  y2: '9'
}]]);

var SidebarClose = createVueComponent('SidebarCloseIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '9',
  y1: '3',
  x2: '9',
  y2: '21'
}], ['path', {
  d: 'M17 16L13 12L17 8'
}]]);

var SidebarOpen = createVueComponent('SidebarOpenIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '9',
  y1: '3',
  x2: '9',
  y2: '21'
}], ['path', {
  d: 'M13 8L17 12L13 16'
}]]);

var Sidebar = createVueComponent('SidebarIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '9',
  y1: '3',
  x2: '9',
  y2: '21'
}]]);

var Sigma = createVueComponent('SigmaIcon', [['path', {
  d: 'M18 7V4H6l6 8-6 8h12v-3'
}]]);

var SkipBack = createVueComponent('SkipBackIcon', [['polygon', {
  points: '19 20 9 12 19 4 19 20'
}], ['line', {
  x1: '5',
  y1: '19',
  x2: '5',
  y2: '5'
}]]);

var SkipForward = createVueComponent('SkipForwardIcon', [['polygon', {
  points: '5 4 15 12 5 20 5 4'
}], ['line', {
  x1: '19',
  y1: '5',
  x2: '19',
  y2: '19'
}]]);

var Skull = createVueComponent('SkullIcon', [['circle', {
  cx: '9',
  cy: '12',
  r: '1'
}], ['circle', {
  cx: '15',
  cy: '12',
  r: '1'
}], ['path', {
  d: 'M8 20v2h8v-2'
}], ['path', {
  d: 'M12.5 17l-.5-1-.5 1h1z'
}], ['path', {
  d: 'M16 20a2 2 0 001.56-3.25 8 8 0 10-11.12 0A2 2 0 008 20'
}]]);

var Slack = createVueComponent('SlackIcon', [['path', {
  d: 'M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z'
}], ['path', {
  d: 'M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'
}], ['path', {
  d: 'M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z'
}], ['path', {
  d: 'M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z'
}], ['path', {
  d: 'M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z'
}], ['path', {
  d: 'M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z'
}], ['path', {
  d: 'M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z'
}], ['path', {
  d: 'M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z'
}]]);

var Slash = createVueComponent('SlashIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['line', {
  x1: '4.93',
  y1: '4.93',
  x2: '19.07',
  y2: '19.07'
}]]);

var Sliders = createVueComponent('SlidersIcon', [['line', {
  x1: '4',
  y1: '21',
  x2: '4',
  y2: '14'
}], ['line', {
  x1: '4',
  y1: '10',
  x2: '4',
  y2: '3'
}], ['line', {
  x1: '12',
  y1: '21',
  x2: '12',
  y2: '12'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '3'
}], ['line', {
  x1: '20',
  y1: '21',
  x2: '20',
  y2: '16'
}], ['line', {
  x1: '20',
  y1: '12',
  x2: '20',
  y2: '3'
}], ['line', {
  x1: '1',
  y1: '14',
  x2: '7',
  y2: '14'
}], ['line', {
  x1: '9',
  y1: '8',
  x2: '15',
  y2: '8'
}], ['line', {
  x1: '17',
  y1: '16',
  x2: '23',
  y2: '16'
}]]);

var SmartphoneCharging = createVueComponent('SmartphoneChargingIcon', [['rect', {
  x: '5',
  y: '2',
  width: '14',
  height: '20',
  rx: '2',
  ry: '2'
}], ['path', {
  d: 'M12.667 8L10 12h4l-2.667 4'
}]]);

var Smartphone = createVueComponent('SmartphoneIcon', [['rect', {
  x: '5',
  y: '2',
  width: '14',
  height: '20',
  rx: '2',
  ry: '2'
}], ['path', {
  d: 'M12 18h.01'
}]]);

var Smile = createVueComponent('SmileIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['path', {
  d: 'M8 14s1.5 2 4 2 4-2 4-2'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '9.01',
  y2: '9'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '15.01',
  y2: '9'
}]]);

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

var SortAsc = createVueComponent('SortAscIcon', [['path', {
  d: 'M11 5h10'
}], ['path', {
  d: 'M11 9h7'
}], ['path', {
  d: 'M11 13h4'
}], ['path', {
  d: 'M3 17l3 3 3-3'
}], ['path', {
  d: 'M6 18V4'
}]]);

var SortDesc = createVueComponent('SortDescIcon', [['path', {
  d: 'M11 5h4'
}], ['path', {
  d: 'M11 9h7'
}], ['path', {
  d: 'M11 13h10'
}], ['path', {
  d: 'M3 17l3 3 3-3'
}], ['path', {
  d: 'M6 18V4'
}]]);

var Speaker = createVueComponent('SpeakerIcon', [['rect', {
  x: '4',
  y: '2',
  width: '16',
  height: '20',
  rx: '2',
  ry: '2'
}], ['circle', {
  cx: '12',
  cy: '14',
  r: '4'
}], ['line', {
  x1: '12',
  y1: '6',
  x2: '12.01',
  y2: '6'
}]]);

var Sprout = createVueComponent('SproutIcon', [['path', {
  d: 'M7 20h10'
}], ['path', {
  d: 'M10 20c5.5-2.5.8-6.4 3-10'
}], ['path', {
  d: 'M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z'
}], ['path', {
  d: 'M14.1 6a7 7 0 00-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z'
}]]);

var Square = createVueComponent('SquareIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}]]);

var StarHalf = createVueComponent('StarHalfIcon', [['path', {
  d: 'M12 17.8L5.8 21 7 14.1 2 9.3l7-1L12 2'
}]]);

var Star = createVueComponent('StarIcon', [['polygon', {
  points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'
}]]);

var StopCircle = createVueComponent('StopCircleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['rect', {
  x: '9',
  y: '9',
  width: '6',
  height: '6'
}]]);

var Strikethrough = createVueComponent('StrikethroughIcon', [['path', {
  d: 'M16 4H9a3 3 0 00-2.83 4'
}], ['path', {
  d: 'M14 12a4 4 0 010 8H6'
}], ['line', {
  x1: '4',
  y1: '12',
  x2: '20',
  y2: '12'
}]]);

var Sun = createVueComponent('SunIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '4'
}], ['path', {
  d: 'M12 2v2'
}], ['path', {
  d: 'M12 20v2'
}], ['path', {
  d: 'M5 5l1.5 1.5'
}], ['path', {
  d: 'M17.5 17.5L19 19'
}], ['path', {
  d: 'M2 12h2'
}], ['path', {
  d: 'M20 12h2'
}], ['path', {
  d: 'M5 19l1.5-1.5'
}], ['path', {
  d: 'M17.5 6.5L19 5'
}]]);

var Sunrise = createVueComponent('SunriseIcon', [['path', {
  d: 'M12 2v8'
}], ['path', {
  d: 'M5.2 11.2l1.4 1.4'
}], ['path', {
  d: 'M2 18h2'
}], ['path', {
  d: 'M20 18h2'
}], ['path', {
  d: 'M17.4 12.6l1.4-1.4'
}], ['path', {
  d: 'M22 22H2'
}], ['path', {
  d: 'M8 6l4-4 4 4'
}], ['path', {
  d: 'M16 18a4 4 0 00-8 0'
}]]);

var Sunset = createVueComponent('SunsetIcon', [['path', {
  d: 'M12 10V2'
}], ['path', {
  d: 'M5.2 11.2l1.4 1.4'
}], ['path', {
  d: 'M2 18h2'
}], ['path', {
  d: 'M20 18h2'
}], ['path', {
  d: 'M17.4 12.6l1.4-1.4'
}], ['path', {
  d: 'M22 22H2'
}], ['path', {
  d: 'M16 6l-4 4-4-4'
}], ['path', {
  d: 'M16 18a4 4 0 00-8 0'
}]]);

var SwissFranc = createVueComponent('SwissFrancIcon', [['path', {
  d: 'M10 21V3h8'
}], ['path', {
  d: 'M6 16h9'
}], ['path', {
  d: 'M10 9.5h7'
}]]);

var SwitchCamera = createVueComponent('SwitchCameraIcon', [['path', {
  d: 'M11 19H4a2 2 0 01-2-2V7a2 2 0 012-2h5'
}], ['path', {
  d: 'M13 5h7a2 2 0 012 2v10a2 2 0 01-2 2h-5'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '3'
}], ['path', {
  d: 'M18 22l-3-3 3-3'
}], ['path', {
  d: 'M6 2l3 3-3 3'
}]]);

var Table = createVueComponent('TableIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '3',
  y1: '9',
  x2: '21',
  y2: '9'
}], ['line', {
  x1: '3',
  y1: '15',
  x2: '21',
  y2: '15'
}], ['line', {
  x1: '12',
  y1: '3',
  x2: '12',
  y2: '21'
}]]);

var Tablet = createVueComponent('TabletIcon', [['rect', {
  x: '4',
  y: '2',
  width: '16',
  height: '20',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '12',
  y1: '18',
  x2: '12.01',
  y2: '18'
}]]);

var Tag = createVueComponent('TagIcon', [['path', {
  d: 'M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z'
}], ['line', {
  x1: '7',
  y1: '7',
  x2: '7.01',
  y2: '7'
}]]);

var Target = createVueComponent('TargetIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '6'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '2'
}]]);

var Tent = createVueComponent('TentIcon', [['path', {
  d: 'M19 20L10 4'
}], ['path', {
  d: 'M5 20l9-16'
}], ['path', {
  d: 'M3 20h18'
}], ['path', {
  d: 'M12 15l-3 5'
}], ['path', {
  d: 'M12 15l3 5'
}]]);

var TerminalSquare = createVueComponent('TerminalSquareIcon', [['path', {
  d: 'M7 11l2-2-2-2'
}], ['path', {
  d: 'M11 13h4'
}], ['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}]]);

var Terminal = createVueComponent('TerminalIcon', [['polyline', {
  points: '4 17 10 11 4 5'
}], ['line', {
  x1: '12',
  y1: '19',
  x2: '20',
  y2: '19'
}]]);

var ThermometerSnowflake = createVueComponent('ThermometerSnowflakeIcon', [['path', {
  d: 'M2 12h10'
}], ['path', {
  d: 'M9 4v16'
}], ['path', {
  d: 'M3 9l3 3-3 3'
}], ['path', {
  d: 'M12 6L9 9 6 6'
}], ['path', {
  d: 'M6 18l3-3 1.5 1.5'
}], ['path', {
  d: 'M18 2a2 2 0 00-2 2v10.5a4 4 0 104 0V4a2 2 0 00-2-2z'
}]]);

var ThermometerSun = createVueComponent('ThermometerSunIcon', [['path', {
  d: 'M12 9a4 4 0 00-2 7.5'
}], ['path', {
  d: 'M12 3v2'
}], ['path', {
  d: 'M6.6 18.4l-1.4 1.4'
}], ['path', {
  d: 'M18 2a2 2 0 012 2v10.5a4 4 0 11-4 0V4c0-1.1.9-2 2-2z'
}], ['path', {
  d: 'M4 13H2'
}], ['path', {
  d: 'M6.6 7.6L5.2 6.2'
}]]);

var Thermometer = createVueComponent('ThermometerIcon', [['path', {
  d: 'M12 2a2 2 0 00-2 2v10.5a4 4 0 104 0V4a2 2 0 00-2-2z'
}]]);

var ThumbsDown = createVueComponent('ThumbsDownIcon', [['path', {
  d: 'M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3zm7-13h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17'
}]]);

var ThumbsUp = createVueComponent('ThumbsUpIcon', [['path', {
  d: 'M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3'
}]]);

var Ticket = createVueComponent('TicketIcon', [['path', {
  d: 'M3 9V7a2 2 0 012-2h14a2 2 0 012 2v2M3 15v2a2 2 0 002 2h14a2 2 0 002-2v-2'
}], ['path', {
  d: 'M21 15a3 3 0 110-6'
}], ['path', {
  d: 'M3 15a3 3 0 100-6'
}], ['path', {
  d: 'M13 5v2'
}], ['path', {
  d: 'M13 17v2'
}], ['path', {
  d: 'M13 11v2'
}]]);

var TimerReset = createVueComponent('TimerResetIcon', [['path', {
  d: 'M10 2h4'
}], ['path', {
  d: 'M12 14v-4'
}], ['path', {
  d: 'M4 13a8 8 0 018-7 8 8 0 11-5.3 14L4 17.6'
}], ['path', {
  d: 'M9 17H4v5'
}]]);

var Timer = createVueComponent('TimerIcon', [['line', {
  x1: '10',
  x2: '14',
  y1: '2',
  y2: '2'
}], ['line', {
  x1: '12',
  x2: '15',
  y1: '14',
  y2: '11'
}], ['circle', {
  cx: '12',
  cy: '14',
  r: '8'
}]]);

var ToggleLeft = createVueComponent('ToggleLeftIcon', [['rect', {
  x: '1',
  y: '5',
  width: '22',
  height: '14',
  rx: '7',
  ry: '7'
}], ['circle', {
  cx: '8',
  cy: '12',
  r: '3'
}]]);

var ToggleRight = createVueComponent('ToggleRightIcon', [['rect', {
  x: '1',
  y: '5',
  width: '22',
  height: '14',
  rx: '7',
  ry: '7'
}], ['circle', {
  cx: '16',
  cy: '12',
  r: '3'
}]]);

var Tornado = createVueComponent('TornadoIcon', [['path', {
  d: 'M21 4H3'
}], ['path', {
  d: 'M18 8H6'
}], ['path', {
  d: 'M19 12H9'
}], ['path', {
  d: 'M16 16h-6'
}], ['path', {
  d: 'M11 20H9'
}]]);

var Trash2 = createVueComponent('Trash2Icon', [['polyline', {
  points: '3 6 5 6 21 6'
}], ['path', {
  d: 'M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2'
}], ['line', {
  x1: '10',
  y1: '11',
  x2: '10',
  y2: '17'
}], ['line', {
  x1: '14',
  y1: '11',
  x2: '14',
  y2: '17'
}]]);

var Trash = createVueComponent('TrashIcon', [['polyline', {
  points: '3 6 5 6 21 6'
}], ['path', {
  d: 'M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2'
}]]);

var Trello = createVueComponent('TrelloIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['rect', {
  x: '7',
  y: '7',
  width: '3',
  height: '9'
}], ['rect', {
  x: '14',
  y: '7',
  width: '3',
  height: '5'
}]]);

var TrendingDown = createVueComponent('TrendingDownIcon', [['polyline', {
  points: '23 18 13.5 8.5 8.5 13.5 1 6'
}], ['polyline', {
  points: '17 18 23 18 23 12'
}]]);

var TrendingUp = createVueComponent('TrendingUpIcon', [['polyline', {
  points: '23 6 13.5 15.5 8.5 10.5 1 18'
}], ['polyline', {
  points: '17 6 23 6 23 12'
}]]);

var Triangle = createVueComponent('TriangleIcon', [['path', {
  d: 'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z'
}]]);

var Truck = createVueComponent('TruckIcon', [['path', {
  d: 'M10 17h4V5H2v12h3m15 0h2v-3.34a4 4 0 00-1.17-2.83L19 9h-5v8h1'
}], ['circle', {
  cx: '7.5',
  cy: '17.5',
  r: '2.5'
}], ['circle', {
  cx: '17.5',
  cy: '17.5',
  r: '2.5'
}]]);

var Tv2 = createVueComponent('Tv2Icon', [['path', {
  d: 'M7 21h10'
}], ['rect', {
  x: '2',
  y: '3',
  width: '20',
  height: '14',
  rx: '2'
}]]);

var Tv = createVueComponent('TvIcon', [['rect', {
  x: '2',
  y: '7',
  width: '20',
  height: '15',
  rx: '2',
  ry: '2'
}], ['polyline', {
  points: '17 2 12 7 7 2'
}]]);

var Twitch = createVueComponent('TwitchIcon', [['path', {
  d: 'M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7'
}]]);

var Twitter = createVueComponent('TwitterIcon', [['path', {
  d: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z'
}]]);

var Type = createVueComponent('TypeIcon', [['polyline', {
  points: '4 7 4 4 20 4 20 7'
}], ['line', {
  x1: '9',
  y1: '20',
  x2: '15',
  y2: '20'
}], ['line', {
  x1: '12',
  y1: '4',
  x2: '12',
  y2: '20'
}]]);

var Umbrella = createVueComponent('UmbrellaIcon', [['path', {
  d: 'M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7'
}]]);

var Underline = createVueComponent('UnderlineIcon', [['path', {
  d: 'M6 4v6a6 6 0 0012 0V4'
}], ['line', {
  x1: '4',
  y1: '20',
  x2: '20',
  y2: '20'
}]]);

var Undo = createVueComponent('UndoIcon', [['path', {
  d: 'M3 7v6h6'
}], ['path', {
  d: 'M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13'
}]]);

var Unlink2 = createVueComponent('Unlink2Icon', [['path', {
  d: 'M15 7h2a5 5 0 010 10h-2m-6 0H7A5 5 0 017 7h2'
}]]);

var Unlink = createVueComponent('UnlinkIcon', [['path', {
  d: 'M18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 00-.12-7.07 5.006 5.006 0 00-6.95 0l-1.72 1.71'
}], ['path', {
  d: 'M5.17 11.75l-1.71 1.71a5.004 5.004 0 00.12 7.07 5.006 5.006 0 006.95 0l1.71-1.71'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '5'
}], ['line', {
  x1: '2',
  y1: '8',
  x2: '5',
  y2: '8'
}], ['line', {
  x1: '16',
  y1: '19',
  x2: '16',
  y2: '22'
}], ['line', {
  x1: '19',
  y1: '16',
  x2: '22',
  y2: '16'
}]]);

var Unlock = createVueComponent('UnlockIcon', [['rect', {
  x: '3',
  y: '11',
  width: '18',
  height: '11',
  rx: '2',
  ry: '2'
}], ['path', {
  d: 'M7 11V7a5 5 0 019.9-1'
}]]);

var UploadCloud = createVueComponent('UploadCloudIcon', [['path', {
  d: 'M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'
}], ['path', {
  d: 'M12 12v9'
}], ['path', {
  d: 'M16 16l-4-4-4 4'
}]]);

var Upload = createVueComponent('UploadIcon', [['path', {
  d: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4'
}], ['polyline', {
  points: '17 8 12 3 7 8'
}], ['line', {
  x1: '12',
  y1: '3',
  x2: '12',
  y2: '15'
}]]);

var UserCheck = createVueComponent('UserCheckIcon', [['path', {
  d: 'M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'
}], ['circle', {
  cx: '8.5',
  cy: '7',
  r: '4'
}], ['polyline', {
  points: '17 11 19 13 23 9'
}]]);

var UserMinus = createVueComponent('UserMinusIcon', [['path', {
  d: 'M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'
}], ['circle', {
  cx: '8.5',
  cy: '7',
  r: '4'
}], ['line', {
  x1: '23',
  y1: '11',
  x2: '17',
  y2: '11'
}]]);

var UserPlus = createVueComponent('UserPlusIcon', [['path', {
  d: 'M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'
}], ['circle', {
  cx: '8.5',
  cy: '7',
  r: '4'
}], ['line', {
  x1: '20',
  y1: '8',
  x2: '20',
  y2: '14'
}], ['line', {
  x1: '23',
  y1: '11',
  x2: '17',
  y2: '11'
}]]);

var UserX = createVueComponent('UserXIcon', [['path', {
  d: 'M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'
}], ['circle', {
  cx: '8.5',
  cy: '7',
  r: '4'
}], ['line', {
  x1: '18',
  y1: '8',
  x2: '23',
  y2: '13'
}], ['line', {
  x1: '23',
  y1: '8',
  x2: '18',
  y2: '13'
}]]);

var User = createVueComponent('UserIcon', [['path', {
  d: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'
}], ['circle', {
  cx: '12',
  cy: '7',
  r: '4'
}]]);

var Users = createVueComponent('UsersIcon', [['path', {
  d: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'
}], ['circle', {
  cx: '9',
  cy: '7',
  r: '4'
}], ['path', {
  d: 'M23 21v-2a4 4 0 00-3-3.87'
}], ['path', {
  d: 'M16 3.13a4 4 0 010 7.75'
}]]);

var Vibrate = createVueComponent('VibrateIcon', [['path', {
  d: 'M2 8l2 2-2 2 2 2-2 2'
}], ['path', {
  d: 'M22 8l-2 2 2 2-2 2 2 2'
}], ['rect', {
  x: '8',
  y: '5',
  width: '8',
  height: '14',
  rx: '1'
}]]);

var VideoOff = createVueComponent('VideoOffIcon', [['path', {
  d: 'M16 16v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h2m5.66 0H14a2 2 0 012 2v3.34l1 1L23 7v10'
}], ['line', {
  x1: '1',
  y1: '1',
  x2: '23',
  y2: '23'
}]]);

var Video = createVueComponent('VideoIcon', [['polygon', {
  points: '23 7 16 12 23 17 23 7'
}], ['rect', {
  x: '1',
  y: '5',
  width: '15',
  height: '14',
  rx: '2',
  ry: '2'
}]]);

var View = createVueComponent('ViewIcon', [['path', {
  d: 'M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z'
}], ['path', {
  d: 'M12 13a1 1 0 100-2 1 1 0 000 2z'
}], ['path', {
  d: 'M21 8V5a2 2 0 00-2-2H5a2 2 0 00-2 2v3m18 8v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3'
}]]);

var Voicemail = createVueComponent('VoicemailIcon', [['circle', {
  cx: '5.5',
  cy: '11.5',
  r: '4.5'
}], ['circle', {
  cx: '18.5',
  cy: '11.5',
  r: '4.5'
}], ['line', {
  x1: '5.5',
  y1: '16',
  x2: '18.5',
  y2: '16'
}]]);

var Volume1 = createVueComponent('Volume1Icon', [['polygon', {
  points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5'
}], ['path', {
  d: 'M15.54 8.46a5 5 0 010 7.07'
}]]);

var Volume2 = createVueComponent('Volume2Icon', [['polygon', {
  points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5'
}], ['path', {
  d: 'M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07'
}]]);

var VolumeX = createVueComponent('VolumeXIcon', [['polygon', {
  points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5'
}], ['line', {
  x1: '23',
  y1: '9',
  x2: '17',
  y2: '15'
}], ['line', {
  x1: '17',
  y1: '9',
  x2: '23',
  y2: '15'
}]]);

var Volume = createVueComponent('VolumeIcon', [['polygon', {
  points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5'
}]]);

var Wallet = createVueComponent('WalletIcon', [['path', {
  d: 'M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4'
}], ['path', {
  d: 'M4 6v12c0 1.1.9 2 2 2h14v-4'
}], ['path', {
  d: 'M18 12a2 2 0 00-2 2c0 1.1.9 2 2 2h4v-4h-4z'
}]]);

var Watch = createVueComponent('WatchIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '7'
}], ['polyline', {
  points: '12 9 12 12 13.5 13.5'
}], ['path', {
  d: 'M16.51 17.35l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 019.83 1h4.35a2 2 0 012 1.82l.35 3.83'
}]]);

var Webcam = createVueComponent('WebcamIcon', [['circle', {
  cx: '12',
  cy: '10',
  r: '8'
}], ['circle', {
  cx: '12',
  cy: '10',
  r: '3'
}], ['path', {
  d: 'M12 22v-4m-5 4h5-5zm10 0h-5 5z'
}]]);

var WifiOff = createVueComponent('WifiOffIcon', [['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22'
}], ['path', {
  d: 'M8.5 16.5a5 5 0 017 0'
}], ['path', {
  d: 'M2 8.82a15 15 0 014.17-2.65'
}], ['path', {
  d: 'M10.66 5c4.01-.36 8.14.9 11.34 3.76'
}], ['path', {
  d: 'M16.85 11.25a10 10 0 012.22 1.68'
}], ['path', {
  d: 'M5 13a10 10 0 015.24-2.76'
}], ['line', {
  x1: '12',
  y1: '20',
  x2: '12.01',
  y2: '20'
}]]);

var Wifi = createVueComponent('WifiIcon', [['path', {
  d: 'M5 13a10 10 0 0114 0'
}], ['path', {
  d: 'M8.5 16.5a5 5 0 017 0'
}], ['path', {
  d: 'M2 8.82a15 15 0 0120 0'
}], ['line', {
  x1: '12',
  y1: '20',
  x2: '12.01',
  y2: '20'
}]]);

var Wind = createVueComponent('WindIcon', [['path', {
  d: 'M17.7 7.7a2.5 2.5 0 111.8 4.3H2'
}], ['path', {
  d: 'M9.6 4.6A2 2 0 1111 8H2'
}], ['path', {
  d: 'M12.6 19.4A2 2 0 1014 16H2'
}]]);

var Wrench = createVueComponent('WrenchIcon', [['path', {
  d: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z'
}]]);

var XCircle = createVueComponent('XCircleIcon', [['circle', {
  cx: '12',
  cy: '12',
  r: '10'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '9',
  y2: '15'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '15',
  y2: '15'
}]]);

var XOctagon = createVueComponent('XOctagonIcon', [['polygon', {
  points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '9',
  y2: '15'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '15',
  y2: '15'
}]]);

var XSquare = createVueComponent('XSquareIcon', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '15',
  y2: '15'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '9',
  y2: '15'
}]]);

var X = createVueComponent('XIcon', [['line', {
  x1: '18',
  y1: '6',
  x2: '6',
  y2: '18'
}], ['line', {
  x1: '6',
  y1: '6',
  x2: '18',
  y2: '18'
}]]);

var Youtube = createVueComponent('YoutubeIcon', [['path', {
  d: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z'
}], ['polygon', {
  points: '9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02'
}]]);

var ZapOff = createVueComponent('ZapOffIcon', [['polyline', {
  points: '12.41 6.75 13 2 10.57 4.92'
}], ['polyline', {
  points: '18.57 12.91 21 10 15.66 10'
}], ['polyline', {
  points: '8 8 3 14 12 14 11 22 16 16'
}], ['line', {
  x1: '1',
  y1: '1',
  x2: '23',
  y2: '23'
}]]);

var Zap = createVueComponent('ZapIcon', [['polygon', {
  points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2'
}]]);

var ZoomIn = createVueComponent('ZoomInIcon', [['circle', {
  cx: '11',
  cy: '11',
  r: '8'
}], ['line', {
  x1: '21',
  y1: '21',
  x2: '16.65',
  y2: '16.65'
}], ['line', {
  x1: '11',
  y1: '8',
  x2: '11',
  y2: '14'
}], ['line', {
  x1: '8',
  y1: '11',
  x2: '14',
  y2: '11'
}]]);

var ZoomOut = createVueComponent('ZoomOutIcon', [['circle', {
  cx: '11',
  cy: '11',
  r: '8'
}], ['line', {
  x1: '21',
  y1: '21',
  x2: '16.65',
  y2: '16.65'
}], ['line', {
  x1: '8',
  y1: '11',
  x2: '14',
  y2: '11'
}]]);

exports.Activity = Activity;
exports.Airplay = Airplay;
exports.AlarmCheck = AlarmCheck;
exports.AlarmClock = AlarmClock;
exports.AlarmMinus = AlarmMinus;
exports.AlarmPlus = AlarmPlus;
exports.Album = Album;
exports.AlertCircle = AlertCircle;
exports.AlertOctagon = AlertOctagon;
exports.AlertTriangle = AlertTriangle;
exports.AlignCenter = AlignCenter;
exports.AlignJustify = AlignJustify;
exports.AlignLeft = AlignLeft;
exports.AlignRight = AlignRight;
exports.Anchor = Anchor;
exports.Aperture = Aperture;
exports.Archive = Archive;
exports.ArrowBigDown = ArrowBigDown;
exports.ArrowBigLeft = ArrowBigLeft;
exports.ArrowBigRight = ArrowBigRight;
exports.ArrowBigUp = ArrowBigUp;
exports.ArrowDown = ArrowDown;
exports.ArrowDownCircle = ArrowDownCircle;
exports.ArrowDownLeft = ArrowDownLeft;
exports.ArrowDownRight = ArrowDownRight;
exports.ArrowLeft = ArrowLeft;
exports.ArrowLeftCircle = ArrowLeftCircle;
exports.ArrowRight = ArrowRight;
exports.ArrowRightCircle = ArrowRightCircle;
exports.ArrowUp = ArrowUp;
exports.ArrowUpCircle = ArrowUpCircle;
exports.ArrowUpLeft = ArrowUpLeft;
exports.ArrowUpRight = ArrowUpRight;
exports.Asterisk = Asterisk;
exports.AtSign = AtSign;
exports.Award = Award;
exports.Axe = Axe;
exports.Banknote = Banknote;
exports.BarChart = BarChart;
exports.BarChart2 = BarChart2;
exports.Battery = Battery;
exports.BatteryCharging = BatteryCharging;
exports.BatteryFull = BatteryFull;
exports.BatteryLow = BatteryLow;
exports.BatteryMedium = BatteryMedium;
exports.Beaker = Beaker;
exports.Bell = Bell;
exports.BellMinus = BellMinus;
exports.BellOff = BellOff;
exports.BellPlus = BellPlus;
exports.BellRing = BellRing;
exports.Bike = Bike;
exports.Binary = Binary;
exports.Bitcoin = Bitcoin;
exports.Bluetooth = Bluetooth;
exports.BluetoothConnected = BluetoothConnected;
exports.BluetoothOff = BluetoothOff;
exports.BluetoothSearching = BluetoothSearching;
exports.Bold = Bold;
exports.Book = Book;
exports.BookOpen = BookOpen;
exports.Bookmark = Bookmark;
exports.Bot = Bot;
exports.Box = Box;
exports.BoxSelect = BoxSelect;
exports.Briefcase = Briefcase;
exports.Brush = Brush;
exports.Bug = Bug;
exports.Building = Building;
exports.Bus = Bus;
exports.Calculator = Calculator;
exports.Calendar = Calendar;
exports.Camera = Camera;
exports.CameraOff = CameraOff;
exports.Car = Car;
exports.Cast = Cast;
exports.Check = Check;
exports.CheckCircle = CheckCircle;
exports.CheckCircle2 = CheckCircle2;
exports.CheckSquare = CheckSquare;
exports.ChevronDown = ChevronDown;
exports.ChevronLeft = ChevronLeft;
exports.ChevronRight = ChevronRight;
exports.ChevronUp = ChevronUp;
exports.ChevronsDown = ChevronsDown;
exports.ChevronsDownUp = ChevronsDownUp;
exports.ChevronsLeft = ChevronsLeft;
exports.ChevronsRight = ChevronsRight;
exports.ChevronsUp = ChevronsUp;
exports.ChevronsUpDown = ChevronsUpDown;
exports.Chrome = Chrome;
exports.Circle = Circle;
exports.CircleSlashed = CircleSlashed;
exports.Clipboard = Clipboard;
exports.ClipboardCheck = ClipboardCheck;
exports.ClipboardCopy = ClipboardCopy;
exports.ClipboardList = ClipboardList;
exports.ClipboardX = ClipboardX;
exports.Clock = Clock;
exports.Cloud = Cloud;
exports.CloudDrizzle = CloudDrizzle;
exports.CloudFog = CloudFog;
exports.CloudHail = CloudHail;
exports.CloudLightning = CloudLightning;
exports.CloudMoon = CloudMoon;
exports.CloudOff = CloudOff;
exports.CloudRain = CloudRain;
exports.CloudRainWind = CloudRainWind;
exports.CloudSnow = CloudSnow;
exports.CloudSun = CloudSun;
exports.Cloudy = Cloudy;
exports.Clover = Clover;
exports.Code = Code;
exports.Code2 = Code2;
exports.Codepen = Codepen;
exports.Codesandbox = Codesandbox;
exports.Coffee = Coffee;
exports.Coins = Coins;
exports.Columns = Columns;
exports.Command = Command;
exports.Compass = Compass;
exports.Contact = Contact;
exports.Contrast = Contrast;
exports.Copy = Copy;
exports.Copyleft = Copyleft;
exports.Copyright = Copyright;
exports.CornerDownLeft = CornerDownLeft;
exports.CornerDownRight = CornerDownRight;
exports.CornerLeftDown = CornerLeftDown;
exports.CornerLeftUp = CornerLeftUp;
exports.CornerRightDown = CornerRightDown;
exports.CornerRightUp = CornerRightUp;
exports.CornerUpLeft = CornerUpLeft;
exports.CornerUpRight = CornerUpRight;
exports.Cpu = Cpu;
exports.CreditCard = CreditCard;
exports.Crop = Crop;
exports.Cross = Cross;
exports.Crosshair = Crosshair;
exports.Crown = Crown;
exports.Currency = Currency;
exports.Database = Database;
exports.Delete = Delete;
exports.Disc = Disc;
exports.Divide = Divide;
exports.DivideCircle = DivideCircle;
exports.DivideSquare = DivideSquare;
exports.DollarSign = DollarSign;
exports.Download = Download;
exports.DownloadCloud = DownloadCloud;
exports.Dribbble = Dribbble;
exports.Droplet = Droplet;
exports.Droplets = Droplets;
exports.Edit = Edit;
exports.Edit2 = Edit2;
exports.Edit3 = Edit3;
exports.Equal = Equal;
exports.EqualNot = EqualNot;
exports.Euro = Euro;
exports.Expand = Expand;
exports.ExternalLink = ExternalLink;
exports.Eye = Eye;
exports.EyeOff = EyeOff;
exports.Facebook = Facebook;
exports.FastForward = FastForward;
exports.Feather = Feather;
exports.Figma = Figma;
exports.File = File;
exports.FileCheck = FileCheck;
exports.FileCheck2 = FileCheck2;
exports.FileCode = FileCode;
exports.FileDigit = FileDigit;
exports.FileInput = FileInput;
exports.FileMinus = FileMinus;
exports.FileMinus2 = FileMinus2;
exports.FileOutput = FileOutput;
exports.FilePlus = FilePlus;
exports.FilePlus2 = FilePlus2;
exports.FileSearch = FileSearch;
exports.FileText = FileText;
exports.FileX = FileX;
exports.FileX2 = FileX2;
exports.Files = Files;
exports.Film = Film;
exports.Filter = Filter;
exports.Flag = Flag;
exports.FlagTriangleLeft = FlagTriangleLeft;
exports.FlagTriangleRight = FlagTriangleRight;
exports.Flame = Flame;
exports.Flashlight = Flashlight;
exports.FlashlightOff = FlashlightOff;
exports.FlaskConical = FlaskConical;
exports.FlaskRound = FlaskRound;
exports.Folder = Folder;
exports.FolderMinus = FolderMinus;
exports.FolderPlus = FolderPlus;
exports.FormInput = FormInput;
exports.Forward = Forward;
exports.Framer = Framer;
exports.Frown = Frown;
exports.FunctionSquare = FunctionSquare;
exports.Gamepad = Gamepad;
exports.Gamepad2 = Gamepad2;
exports.Gauge = Gauge;
exports.Gavel = Gavel;
exports.Ghost = Ghost;
exports.Gift = Gift;
exports.GitBranch = GitBranch;
exports.GitBranchPlus = GitBranchPlus;
exports.GitCommit = GitCommit;
exports.GitMerge = GitMerge;
exports.GitPullRequest = GitPullRequest;
exports.Github = Github;
exports.Gitlab = Gitlab;
exports.Glasses = Glasses;
exports.Globe = Globe;
exports.Globe2 = Globe2;
exports.Grab = Grab;
exports.GraduationCap = GraduationCap;
exports.Grid = Grid;
exports.GripHorizontal = GripHorizontal;
exports.GripVertical = GripVertical;
exports.Hammer = Hammer;
exports.Hand = Hand;
exports.HandMetal = HandMetal;
exports.HardDrive = HardDrive;
exports.HardHat = HardHat;
exports.Hash = Hash;
exports.Haze = Haze;
exports.Headphones = Headphones;
exports.Heart = Heart;
exports.HelpCircle = HelpCircle;
exports.Hexagon = Hexagon;
exports.Highlighter = Highlighter;
exports.History = History;
exports.Home = Home;
exports.Image = Image;
exports.ImageMinus = ImageMinus;
exports.ImageOff = ImageOff;
exports.ImagePlus = ImagePlus;
exports.Import = Import;
exports.Inbox = Inbox;
exports.Indent = Indent;
exports.IndianRupee = IndianRupee;
exports.Infinity = Infinity;
exports.Info = Info;
exports.Inspect = Inspect;
exports.Instagram = Instagram;
exports.Italic = Italic;
exports.JerseyPound = JerseyPound;
exports.Key = Key;
exports.Languages = Languages;
exports.Laptop = Laptop;
exports.Laptop2 = Laptop2;
exports.Lasso = Lasso;
exports.LassoSelect = LassoSelect;
exports.Layers = Layers;
exports.Layout = Layout;
exports.LayoutDashboard = LayoutDashboard;
exports.LayoutGrid = LayoutGrid;
exports.LayoutList = LayoutList;
exports.LayoutTemplate = LayoutTemplate;
exports.Library = Library;
exports.LifeBuoy = LifeBuoy;
exports.Lightbulb = Lightbulb;
exports.LightbulbOff = LightbulbOff;
exports.Link = Link;
exports.Link2 = Link2;
exports.Link2Off = Link2Off;
exports.Linkedin = Linkedin;
exports.List = List;
exports.ListChecks = ListChecks;
exports.ListOrdered = ListOrdered;
exports.Loader = Loader;
exports.Loader2 = Loader2;
exports.Locate = Locate;
exports.LocateFixed = LocateFixed;
exports.Lock = Lock;
exports.LogIn = LogIn;
exports.LogOut = LogOut;
exports.Mail = Mail;
exports.Map = Map;
exports.MapPin = MapPin;
exports.Maximize = Maximize;
exports.Maximize2 = Maximize2;
exports.Megaphone = Megaphone;
exports.Meh = Meh;
exports.Menu = Menu;
exports.MessageCircle = MessageCircle;
exports.MessageSquare = MessageSquare;
exports.Mic = Mic;
exports.MicOff = MicOff;
exports.Minimize = Minimize;
exports.Minimize2 = Minimize2;
exports.Minus = Minus;
exports.MinusCircle = MinusCircle;
exports.MinusSquare = MinusSquare;
exports.Monitor = Monitor;
exports.MonitorOff = MonitorOff;
exports.MonitorSpeaker = MonitorSpeaker;
exports.Moon = Moon;
exports.MoreHorizontal = MoreHorizontal;
exports.MoreVertical = MoreVertical;
exports.Mountain = Mountain;
exports.MountainSnow = MountainSnow;
exports.MousePointer = MousePointer;
exports.MousePointer2 = MousePointer2;
exports.MousePointerClick = MousePointerClick;
exports.Move = Move;
exports.MoveDiagonal = MoveDiagonal;
exports.MoveDiagonal2 = MoveDiagonal2;
exports.MoveHorizontal = MoveHorizontal;
exports.MoveVertical = MoveVertical;
exports.Music = Music;
exports.Navigation = Navigation;
exports.Navigation2 = Navigation2;
exports.Network = Network;
exports.Octagon = Octagon;
exports.Option = Option;
exports.Outdent = Outdent;
exports.Package = Package;
exports.Palette = Palette;
exports.Paperclip = Paperclip;
exports.Pause = Pause;
exports.PauseCircle = PauseCircle;
exports.PauseOctagon = PauseOctagon;
exports.PenTool = PenTool;
exports.Pencil = Pencil;
exports.Percent = Percent;
exports.PersonStanding = PersonStanding;
exports.Phone = Phone;
exports.PhoneCall = PhoneCall;
exports.PhoneForwarded = PhoneForwarded;
exports.PhoneIncoming = PhoneIncoming;
exports.PhoneMissed = PhoneMissed;
exports.PhoneOff = PhoneOff;
exports.PhoneOutgoing = PhoneOutgoing;
exports.PieChart = PieChart;
exports.Pipette = Pipette;
exports.Plane = Plane;
exports.Play = Play;
exports.PlayCircle = PlayCircle;
exports.PlugZap = PlugZap;
exports.Plus = Plus;
exports.PlusCircle = PlusCircle;
exports.PlusSquare = PlusSquare;
exports.Pocket = Pocket;
exports.Podcast = Podcast;
exports.Pointer = Pointer;
exports.PoundSterling = PoundSterling;
exports.Power = Power;
exports.PowerOff = PowerOff;
exports.Printer = Printer;
exports.QrCode = QrCode;
exports.Quote = Quote;
exports.Radio = Radio;
exports.RadioReceiver = RadioReceiver;
exports.Redo = Redo;
exports.RefreshCcw = RefreshCcw;
exports.RefreshCw = RefreshCw;
exports.Regex = Regex;
exports.Repeat = Repeat;
exports.Repeat1 = Repeat1;
exports.Reply = Reply;
exports.ReplyAll = ReplyAll;
exports.Rewind = Rewind;
exports.RockingChair = RockingChair;
exports.RotateCcw = RotateCcw;
exports.RotateCw = RotateCw;
exports.Rss = Rss;
exports.Ruler = Ruler;
exports.RussianRuble = RussianRuble;
exports.Save = Save;
exports.Scale = Scale;
exports.Scissors = Scissors;
exports.ScreenShare = ScreenShare;
exports.ScreenShareOff = ScreenShareOff;
exports.Search = Search;
exports.Send = Send;
exports.SeparatorHorizontal = SeparatorHorizontal;
exports.SeparatorVertical = SeparatorVertical;
exports.Server = Server;
exports.ServerCrash = ServerCrash;
exports.ServerOff = ServerOff;
exports.Settings = Settings;
exports.Share = Share;
exports.Share2 = Share2;
exports.Sheet = Sheet;
exports.Shield = Shield;
exports.ShieldAlert = ShieldAlert;
exports.ShieldCheck = ShieldCheck;
exports.ShieldClose = ShieldClose;
exports.ShieldOff = ShieldOff;
exports.Shirt = Shirt;
exports.ShoppingBag = ShoppingBag;
exports.ShoppingCart = ShoppingCart;
exports.Shovel = Shovel;
exports.Shrink = Shrink;
exports.Shuffle = Shuffle;
exports.Sidebar = Sidebar;
exports.SidebarClose = SidebarClose;
exports.SidebarOpen = SidebarOpen;
exports.Sigma = Sigma;
exports.SkipBack = SkipBack;
exports.SkipForward = SkipForward;
exports.Skull = Skull;
exports.Slack = Slack;
exports.Slash = Slash;
exports.Sliders = Sliders;
exports.Smartphone = Smartphone;
exports.SmartphoneCharging = SmartphoneCharging;
exports.Smile = Smile;
exports.Snowflake = Snowflake;
exports.SortAsc = SortAsc;
exports.SortDesc = SortDesc;
exports.Speaker = Speaker;
exports.Sprout = Sprout;
exports.Square = Square;
exports.Star = Star;
exports.StarHalf = StarHalf;
exports.StopCircle = StopCircle;
exports.Strikethrough = Strikethrough;
exports.Sun = Sun;
exports.Sunrise = Sunrise;
exports.Sunset = Sunset;
exports.SwissFranc = SwissFranc;
exports.SwitchCamera = SwitchCamera;
exports.Table = Table;
exports.Tablet = Tablet;
exports.Tag = Tag;
exports.Target = Target;
exports.Tent = Tent;
exports.Terminal = Terminal;
exports.TerminalSquare = TerminalSquare;
exports.Thermometer = Thermometer;
exports.ThermometerSnowflake = ThermometerSnowflake;
exports.ThermometerSun = ThermometerSun;
exports.ThumbsDown = ThumbsDown;
exports.ThumbsUp = ThumbsUp;
exports.Ticket = Ticket;
exports.Timer = Timer;
exports.TimerReset = TimerReset;
exports.ToggleLeft = ToggleLeft;
exports.ToggleRight = ToggleRight;
exports.Tornado = Tornado;
exports.Trash = Trash;
exports.Trash2 = Trash2;
exports.Trello = Trello;
exports.TrendingDown = TrendingDown;
exports.TrendingUp = TrendingUp;
exports.Triangle = Triangle;
exports.Truck = Truck;
exports.Tv = Tv;
exports.Tv2 = Tv2;
exports.Twitch = Twitch;
exports.Twitter = Twitter;
exports.Type = Type;
exports.Umbrella = Umbrella;
exports.Underline = Underline;
exports.Undo = Undo;
exports.Unlink = Unlink;
exports.Unlink2 = Unlink2;
exports.Unlock = Unlock;
exports.Upload = Upload;
exports.UploadCloud = UploadCloud;
exports.User = User;
exports.UserCheck = UserCheck;
exports.UserMinus = UserMinus;
exports.UserPlus = UserPlus;
exports.UserX = UserX;
exports.Users = Users;
exports.Vibrate = Vibrate;
exports.Video = Video;
exports.VideoOff = VideoOff;
exports.View = View;
exports.Voicemail = Voicemail;
exports.Volume = Volume;
exports.Volume1 = Volume1;
exports.Volume2 = Volume2;
exports.VolumeX = VolumeX;
exports.Wallet = Wallet;
exports.Watch = Watch;
exports.Webcam = Webcam;
exports.Wifi = Wifi;
exports.WifiOff = WifiOff;
exports.Wind = Wind;
exports.Wrench = Wrench;
exports.X = X;
exports.XCircle = XCircle;
exports.XOctagon = XOctagon;
exports.XSquare = XSquare;
exports.Youtube = Youtube;
exports.Zap = Zap;
exports.ZapOff = ZapOff;
exports.ZoomIn = ZoomIn;
exports.ZoomOut = ZoomOut;
//# sourceMappingURL=lucide-vue.js.map
