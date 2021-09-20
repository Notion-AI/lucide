function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import defaultAttributes from './defaultAttributes';
/**
 * Converts string to KebabCase
 * Copied from scripts/helper. If anyone knows how to properly import it here
 * then please fix it.
 *
 * @param {string} string
 * @returns {string} A kebabized string
 */

export var toKebabCase = function toKebabCase(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};
export default (function (iconName, iconNode) {
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
        "default": "lucide-icon lucide lucide-" + toKebabCase(iconName).replace('-icon', '')
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
        attrs: _extends({}, defaultAttributes, {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': strokeWidth
        }, data.attrs),
        on: (data == null ? void 0 : data.on) || {}
      }, iconNode.map(function (_ref2) {
        var tag = _ref2[0],
            attrs = _ref2[1];
        return createElement(tag, {
          attrs: attrs
        });
      }));
    }
  };
});