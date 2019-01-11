/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\nclass Game {\n  constructor(canvas) {\n    this.bg = new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.drawBG = this.drawBG.bind(this);\n    this.draw = this.draw.bind(this);\n  }\n\n  draw() {\n    this.drawBG();\n  }\n\n  drawBG() {\n    this.bg.draw();\n  }\n\n  play() {\n    \n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  constructor() {\n    this.img = new Image();\n\n    this.img.src = '../dist/assets/images/road.png';\n    this.CanvasXSize = window.innerWidth;\n    this.CanvasYSize = window.innerHeight;\n    this.scale = 1.05;\n    this.y = -4.5;\n\n    this.dx = 0.75;\n    this.imgW = window.innerWidth;\n    this.imgH = window.innerHeight;\n    this.x = 0;\n    this.clearX;\n    this.clearY;\n\n    this.img.onload = function () {\n\n      if (this.imgW > this.CanvasXSize) {\n        this.x = this.CanvasXSize - this.imgW;\n      }\n      if (this.imgW > this.CanvasXSize) {\n        this.clearX = this.imgW;\n      } else {\n        this.clearX = this.CanvasXSize;\n      }\n      if (this.imgH > this.CanvasYSize) {\n        this.clearY = this.imgH;\n      } else {\n        this.clearY = this.CanvasYSize;\n      }\n\n    }\n    this.draw = this.draw.bind(this)\n  }\n\n  draw() {\n    let ctx;\n    let canvas = document.getElementById('canvas');\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n    ctx = canvas.getContext('2d');\n\n    ctx.clearRect(0, 0, this.clearX, this.clearY);\n\n    if (this.imgW <= this.CanvasXSize) {\n      if (this.x > this.CanvasXSize) {\n        this.x = -this.imgW + this.x;\n      }\n      if (this.x > 0) {\n        ctx.drawImage(this.img, -this.imgW + this.x, this.y, this.imgW, this.imgH);\n      }\n      if (this.x - this.imgW > 0) {\n        ctx.drawImage(this.img, -this.imgW * 2 + this.x, this.y, this.imgW, this.imgH);\n      }\n    } else {\n      if (this.x > (this.CanvasXSize)) {\n        this.x = this.CanvasXSize - this.imgW;\n      }\n      if (this.x > (this.CanvasXSize - this.imgW)) {\n        ctx.drawImage(this.img, this.x - this.imgW + 1, this.y, this.imgW, this.imgH);\n      }\n    }\n    ctx.drawImage(this.img, this.x, this.y, this.imgW, this.imgH);\n    this.x += this.dx;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  game.play();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });