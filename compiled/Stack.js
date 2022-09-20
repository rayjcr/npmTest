"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stack = void 0;

var _common_utils = require("./common_utils");

var _ArrayBasedStruct2 = require("./ArrayBasedStruct");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Stack = /*#__PURE__*/function (_ArrayBasedStruct) {
  _inherits(Stack, _ArrayBasedStruct);

  var _super = _createSuper(Stack);

  function Stack() {
    _classCallCheck(this, Stack);

    return _super.call(this);
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(element) {
      return this.__items.push(element);
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.__items.pop();
    }
  }, {
    key: "peek",
    value: function peek() {
      if (!this.__items.length) return undefined;
      return (0, _common_utils.deepCopy)(this.__items[this.__items.length - 1]);
    }
  }, {
    key: "traverse",
    value: function traverse(callback) {
      var reversal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!(0, _common_utils.isFunction)(callback)) return;
      var items = this.getItems(this.__items);
      var from = reversal ? items.length - 1 : 0;
      var to = reversal ? 0 : items.length - 1;

      var loopCondition = function loopCondition(current) {
        if (reversal) {
          return current >= to;
        } else {
          return to >= current;
        }
      };

      var stepIn = function stepIn(current) {
        if (reversal) {
          return current - 1;
        } else {
          return current + 1;
        }
      };

      for (var index = from; loopCondition(index); index = stepIn(index)) {
        var element = items[index];
        callback(element, index);
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.__items.map(function (element) {
        return element.toString();
      }).join(' ');
    }
  }]);

  return Stack;
}(_ArrayBasedStruct2.ArrayBasedStruct);

exports.Stack = Stack;