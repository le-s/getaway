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

/***/ "./src/assets.js":
/*!***********************!*\
  !*** ./src/assets.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n/* harmony import */ var _road__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./road */ \"./src/road.js\");\n/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physics */ \"./src/physics.js\");\n/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./obstacle */ \"./src/obstacle.js\");\n\n\n\n\n\nconst car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](new _physics__WEBPACK_IMPORTED_MODULE_2__[\"default\"](200, 550));\nconst road = new _road__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _physics__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0, -561));\nconst rock = new _obstacle__WEBPACK_IMPORTED_MODULE_3__[\"default\"](new _physics__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n  Math.floor(Math.random() * 310) + 80, \n  Math.floor(Math.random() * 910) - 560)\n);\n\nconst assets = {\n  road,\n  rock,\n  car,\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (assets);\n\n//# sourceURL=webpack:///./src/assets.js?");

/***/ }),

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./physics */ \"./src/physics.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\n\n\nconst carImg = new Image();\ncarImg.src = './assets/images/car.png';\n\nclass Car {\n  constructor(physics) {\n    this.physics = physics;\n    this.sprite = new _sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"](carImg, 100, 100);\n  }\n}\n\n// class Car {\n//   constructor(canvas) {\n//     this.car = new Image();\n//     this.height = canvas.height;\n//     this.width = canvas.width;\n//     this.car.src = './assets/images/car.png';\n//   }\n\n//   draw(ctx) {\n//     console.log(this.car);\n//     ctx.drawImage(\n//       this.car, 0, 0, 100, 100, \n//       100, 100, 100, 100);\n//   }\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Car);\n\n//# sourceURL=webpack:///./src/car.js?");

/***/ }),

/***/ "./src/car_controls.js":
/*!*****************************!*\
  !*** ./src/car_controls.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst setupControlListeners = (game) => {\n  window.addEventListener('keydown', e => {\n    const car = game.assets.car\n    \n    if (e.key === \"a\" || e.key === \"ArrowLeft\") {\n      car.physics.dLeft = 4;\n    }\n    if (e.key === \"d\" || e.key === \"ArrowRight\") {\n      car.physics.dRight = 4;\n    }\n    if (e.key === \"w\" || e.key === \"ArrowUp\") {\n      car.physics.dUp = 4;\n    }\n    if (e.key === \"s\" || e.key === \"ArrowDown\") {\n      car.physics.dDown = 4;\n    }\n  })\n  window.addEventListener('keyup', e => {\n    const car = game.assets.car\n    \n    if (e.key === \"a\" || e.key === \"ArrowLeft\") {\n      car.physics.dLeft = 0;\n    }\n    if (e.key === \"d\" || e.key === \"ArrowRight\") {\n      car.physics.dRight = 0;\n    }\n    if (e.key === \"w\" || e.key === \"ArrowUp\") {\n      car.physics.dUp = 0;\n    }\n    if (e.key === \"s\" || e.key === \"ArrowDown\") {\n      car.physics.dDown = 0;\n    }\n  })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setupControlListeners);\n\n//# sourceURL=webpack:///./src/car_controls.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _road_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./road.js */ \"./src/road.js\");\n/* harmony import */ var _physics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physics.js */ \"./src/physics.js\");\n// import GameView from './game_view.js';\n// import Car from './car.js';\n// import { request } from 'http';\n\n\n\nclass Game {\n  constructor(canvas, ctx, assets) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.assets = assets;\n  }\n\n  drawAsset(asset) {\n    const { physics, sprite } = asset;\n\n    if (asset instanceof _road_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] && asset.physics.y >= 0) {\n      // console.log(asset.physics.y);\n      // const newRoad = new Road(new Physics(0, 500));\n      // asset = newRoad;\n      // this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height,\n      //   physics.x, physics.y, sprite.width, sprite.height);\n\n      // if (sprite.height <= canvas.height) {\n      //   // reset, start from beginning\n      //   console.log('if')\n      //   if (asset.physics.y > canvas.height) {\n      //     asset.physics.y = -sprite.height + asset.physics.y;\n      //   }\n      //   // draw additional image1\n      //   if (asset.physics.y > 0) {\n      //     this.ctx.drawImage(sprite, x, -sprite.height + asset.physics.y, sprite.width, sprite.height);\n      //   }\n      //   // draw additional image2\n      //   if (asset.physics.y - sprite.height > 0) {\n      //     this.ctx.drawImage(sprite, x, -sprite.height * 2 + asset.physics.y, sprite.width, sprite.height);\n      //   }\n      // }\n\n      // image is > Canvas Size\n      if (sprite.height > canvas.height) {\n        console.log(asset.physics.y)\n        console.log(sprite.height)\n        console.log(canvas.height)\n        console.log(\"else\")\n        // reset, start from beginning\n        if (asset.physics.y > (canvas.height)) {\n          asset.physics.y = canvas.height - sprite.height;\n        }\n        // draw aditional image\n        // if (asset.physics.y > (canvas.height - sprite.height)) {\n          // debugger\n        this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height, asset.physics.x, asset.physics.y - sprite.height + 1, sprite.width, sprite.height);\n        // }\n      }\n      // // draw image\n      // this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height, asset.physics.x, asset.physics.y, sprite.width, sprite.height);\n      // // amount to move\n      // asset.physics.y += asset.physics.dy;\n      // physics.updatePosition();\n    }\n\n    this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height,\n      physics.x, physics.y, sprite.width, sprite.height);\n    physics.updatePosition();\n  }\n\n  draw() {\n    const animate = () => {\n      const assets = Object.values(this.assets);\n      requestAnimationFrame(animate);\n      this.ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n      for (let i = 0; i < assets.length; i++) {\n        this.drawAsset(assets[i]);\n      }\n    }\n\n    animate();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets.js */ \"./src/assets.js\");\n/* harmony import */ var _car_controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car_controls.js */ \"./src/car_controls.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext('2d');\n  canvas.height = 700;\n  canvas.width = 500;\n  const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx, _assets_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  Object(_car_controls_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(game);\n\n  game.draw();\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./physics */ \"./src/physics.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\n\n\nconst rockImg = new Image();\nrockImg.src = \"./assets/images/rock.png\";\n\nclass Obstacle {\n  constructor(physics) {\n    this.physics = physics;\n    this.sprite = new _sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"](rockImg, 100, 100);\n    // this.physics.dDown = 2;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obstacle);\n\n//# sourceURL=webpack:///./src/obstacle.js?");

/***/ }),

/***/ "./src/physics.js":
/*!************************!*\
  !*** ./src/physics.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Physics {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.dLeft = 0;\n    this.dRight = 0;\n    this.dDown = 0;\n    this.dUp = 0;\n  }\n\n  dx() {\n    return - this.dLeft + this.dRight; \n  }\n\n  dy() {\n    return - this.dUp + this.dDown;\n  }\n\n  updatePosition() {\n    this.x += this.dx();\n    this.y += this.dy();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Physics);\n\n//# sourceURL=webpack:///./src/physics.js?");

/***/ }),

/***/ "./src/road.js":
/*!*********************!*\
  !*** ./src/road.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./physics */ \"./src/physics.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\n\n\nconst roadImg = new Image();\nroadImg.src = \"./assets/images/road.png\";\n\nclass Road {\n  constructor(physics) {\n    this.physics = physics;\n    this.sprite = new _sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"](roadImg, 1262, 502);\n    this.physics.dDown = 4;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Road);\n\n\n\n//# sourceURL=webpack:///./src/road.js?");

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Sprite {\n  constructor(img, height, width) {\n    this.img = img;\n    this.height = height;\n    this.width = width;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sprite);\n\n//# sourceURL=webpack:///./src/sprite.js?");

/***/ })

/******/ });