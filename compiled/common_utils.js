"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepCopy = deepCopy;
exports.isFunction = isFunction;

/**
 * 深拷贝
 */
function deepCopy(source) {
  var dest;

  if (Array.isArray(source)) {
    dest = [];

    for (var i = 0; i < source.length; i++) {
      dest[i] = deepCopy(source[i]);
    }
  } else if (toString.call(source) === '[object Object]') {
    dest = [];

    for (var p in source) {
      if (source.hasOwnProperty(p)) {
        dest[p] = deepCopy(source[p]);
      }
    }
  } else {
    dest = source;
  }

  return dest;
}
/**
 * 判断传入参数是否为函数
 */


function isFunction(func) {
  if (!func || toString.call(func) !== '[object Function]') return false;
  return true;
}