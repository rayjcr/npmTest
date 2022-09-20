"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayBasedStruct = void 0;

var _common_utils = require("./common_utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ArrayBasedStruct = /*#__PURE__*/function () {
  function ArrayBasedStruct() {
    _classCallCheck(this, ArrayBasedStruct);

    this.__items = [];
  }

  _createClass(ArrayBasedStruct, [{
    key: "getItems",
    value: function getItems() {
      return (0, _common_utils.deepCopy)(this.__items);
    }
  }, {
    key: "isEmpty",
    get: function get() {
      return this.__items.length === 0;
    }
  }, {
    key: "size",
    get: function get() {
      return this.__items.length;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.__items.length = 0;
    }
  }]);

  return ArrayBasedStruct;
}();

exports.ArrayBasedStruct = ArrayBasedStruct;