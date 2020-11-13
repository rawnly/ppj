"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noArgsError = exports.prettyPrint = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["{bold {red ERROR! No enought arguments!}}"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["{red {bold Invalid JSON}}"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["{", " $&}"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["{", " $&}"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["$1{", " $2}"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["{", " $&}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["{", " $&}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var highlightJSON = function highlightJSON(data) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$brackets = _ref.brackets,
      brackets = _ref$brackets === void 0 ? 'dim' : _ref$brackets,
      _ref$strings = _ref.strings,
      strings = _ref$strings === void 0 ? 'green' : _ref$strings,
      _ref$digits = _ref.digits,
      digits = _ref$digits === void 0 ? 'cyan' : _ref$digits,
      _ref$falsy = _ref.falsy,
      falsy = _ref$falsy === void 0 ? 'dim' : _ref$falsy,
      _ref$boolean = _ref["boolean"],
      _boolean = _ref$boolean === void 0 ? 'magenta' : _ref$boolean;

  // TODO: Find a regex that matches the key of the json
  var jsonString = JSON.stringify(data, null, 2);
  jsonString = jsonString.replace(/[\{|\}|\,|\:|\[|\]]+/g, (0, _chalk["default"])(_templateObject(), brackets));
  jsonString = jsonString.replace(/\".*?\"/g, (0, _chalk["default"])(_templateObject2(), strings));
  jsonString = jsonString.replace(/(\s+)(\d+)/g, (0, _chalk["default"])(_templateObject3(), digits));
  jsonString = jsonString.replace(/null|undefined|NaN/gi, (0, _chalk["default"])(_templateObject4(), falsy));
  jsonString = jsonString.replace(/true|false/gi, (0, _chalk["default"])(_templateObject5(), _boolean));
  return jsonString;
}; // pretty print data


var prettyPrint = function prettyPrint(json) {
  try {
    console.log(highlightJSON(JSON.parse(json)));
  } catch (error) {
    console.error((0, _chalk["default"])(_templateObject6()));
    console.log();
  }
}; // no args error


exports.prettyPrint = prettyPrint;

var noArgsError = function noArgsError() {
  return console.error((0, _chalk["default"])(_templateObject7()));
};

exports.noArgsError = noArgsError;