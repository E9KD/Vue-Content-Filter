(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VueContentFilter", [], factory);
	else if(typeof exports === 'object')
		exports["VueContentFilter"] = factory();
	else
		root["VueContentFilter"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var plugin = {};
plugin.install = function (Vue, options) {
  //首字大写
  function CapitalLetter(val) {
    if (!val) return;
    var r = val.split(" ");
    for (var i = 0; i < r.length; i++) {
      r[i] = r[i].slice(0, 1).toUpperCase() + r[i].slice(1, r.length);
    }
    return r.join(" ");
  }

  // 替换字符
  function ReplaceVal(val, param) {
    if (!val) return;
    var r = val;
    var p = param;

    var _loop = function _loop(i) {
      if (p[i].isSingle) {
        r = r.split(" ").map(function (x) {
          var n = x.indexOf(p[i].target);
          return x = n == 0 && p[i].target.length == x.length ? x.replace(new RegExp(param[i].target, "g"), param[i].replacement) : x;
        }).join(" ");
      } else {
        r = r.replace(new RegExp(param[i].target, "g"), param[i].replacement);
      }
    };

    for (var i = 0; i < p.length; i++) {
      _loop(i);
    }
    return r;
  }

  // 给定默认值
  function PlaceHolder(val, param) {
    var r = !val ? param : val;
    return r;
  }

  // 省略字符
  function Omit(val, param) {
    if (typeof param != "number") console.error("The input must be a number.");
    var r = val;
    r = r.substring(0, param) + "...";
    return r;
  }

  // 删除字符
  function Hidden(val, param) {
    if (!param) return val;
    var r = val;
    if (Array.isArray(param)) {
      for (var i = 0; i < param.length; i++) {
        r = r.replace(new RegExp(param[i], "g"), "");
      }
    } else {
      r = r.replace(new RegExp(param, "g"), "");
    }
    return r;
  }

  // 全局挂载
  Vue.filter("CapitalLetter", CapitalLetter);
  Vue.filter("ReplaceVal", ReplaceVal);
  Vue.filter("PlaceHolder", PlaceHolder);
  Vue.filter("Omit", Omit);
  Vue.filter("Hidden", Hidden);
};
/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ })
/******/ ]);
});