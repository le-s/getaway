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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n/* harmony import */ var _road__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./road */ \"./src/road.js\");\n/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physics */ \"./src/physics.js\");\n/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./obstacle */ \"./src/obstacle.js\");\n/* harmony import */ var _life__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./life */ \"./src/life.js\");\n\n\n\n\n\n\nconst car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](new _physics__WEBPACK_IMPORTED_MODULE_2__[\"default\"](213, 500));\nconst road = new _road__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _physics__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0, -561));\nlet life = []\nlife.push(new _life__WEBPACK_IMPORTED_MODULE_4__[\"default\"](new _physics__WEBPACK_IMPORTED_MODULE_2__[\"default\"](Math.floor(Math.random() * 310) + 80,\n  Math.floor(Math.random() * 910) - 560)));\n// const rock = new Obstacle(new Physics(\n//   Math.floor(Math.random() * 310) + 80, \n//   Math.floor(Math.random() * 910) - 560)\n// );\n\nlet rock = [];\nfor (let i = 0; i < 10; i++) {\n  rock.push(new _obstacle__WEBPACK_IMPORTED_MODULE_3__[\"default\"](new _physics__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n    Math.floor(Math.random() * 310) + 80,\n    Math.floor(Math.random() * 910) - 560)\n  ));\n}\n\nconst assets = {\n  road,\n  // rock,\n  // life,\n  car,\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (assets);\n\n//# sourceURL=webpack:///./src/assets.js?");

/***/ }),

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./physics */ \"./src/physics.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\n\n\nconst carImg = new Image();\ncarImg.src = './assets/images/car.png';\n\nclass Car {\n  constructor(physics) {\n    this.physics = physics;\n    this.sprite = new _sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"](carImg, 150, 74);\n    this.life = 3;\n  }\n\n  hitObstacle() {\n    this.life -= 1;\n  }\n\n  getLife() {\n    this.life += 1;\n  }\n\n  is_valid() {\n    \n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Car);\n\n//# sourceURL=webpack:///./src/car.js?");

/***/ }),

/***/ "./src/car_controls.js":
/*!*****************************!*\
  !*** ./src/car_controls.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst setupControlListeners = (game) => {\n  window.addEventListener('keydown', e => {\n    const car = game.assets.car\n\n    if (e.key === \"a\" || e.key === \"ArrowLeft\") {\n      car.physics.dLeft = 4;\n    }\n    if (e.key === \"d\" || e.key === \"ArrowRight\") {\n      car.physics.dRight = 4;\n    }    \n    if (e.key === \"w\" || e.key === \"ArrowUp\") {\n      car.physics.dUp = 4;\n    }\n    if (e.key === \"s\" || e.key === \"ArrowDown\") {\n      car.physics.dDown = 4;\n    }\n  })\n  window.addEventListener('keyup', e => {\n    const car = game.assets.car\n    \n    if (e.key === \"a\" || e.key === \"ArrowLeft\") {\n      car.physics.dLeft = 0;\n    }\n    if (e.key === \"d\" || e.key === \"ArrowRight\") {\n      car.physics.dRight = 0;\n    }\n    if (e.key === \"w\" || e.key === \"ArrowUp\") {\n      car.physics.dUp = 0;\n    }\n    if (e.key === \"s\" || e.key === \"ArrowDown\") {\n      car.physics.dDown = 0;\n    }\n  })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setupControlListeners);\n\n//# sourceURL=webpack:///./src/car_controls.js?");

/***/ }),

/***/ "./src/cash.js":
/*!*********************!*\
  !*** ./src/cash.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\n\nconst cashImg = new Image();\ncashImg.src = \"./assets/images/money.png\";\n\nclass Cash {\n  constructor(physics) {\n    this.physics = physics;\n    this.sprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](cashImg, 30, 22);\n  }\n\n  move() {\n    this.physics.dDown = 4;\n  }\n\n  stop() {\n    this.physics.dDown = 0;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cash);\n\n\n//# sourceURL=webpack:///./src/cash.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _road_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./road.js */ \"./src/road.js\");\n/* harmony import */ var _life_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./life.js */ \"./src/life.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_util_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _obstacle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./obstacle.js */ \"./src/obstacle.js\");\n/* harmony import */ var _physics_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./physics.js */ \"./src/physics.js\");\n/* harmony import */ var _cash_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cash.js */ \"./src/cash.js\");\n// import GameView from './game_view.js';\n// import Car from './car.js';\n// import { request } from 'http';\n\n\n\n\n\n\n\nclass Game {\n  constructor(canvas, ctx, assets) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.assets = assets;\n    this.gameOver = false;\n    this.rocks = [];\n    this.life = [];\n    this.cash = [];\n  }\n\n  // hit detection for objects\n  static checkCollision(car, object, array, assets) {\n    if (object instanceof _obstacle_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n      if (_util_js__WEBPACK_IMPORTED_MODULE_2___default.a.collide(car, object)) {\n        car.hitObstacle();\n        array.splice(array.indexOf(object), 1);\n      }\n    }\n    if (object instanceof _life_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      if (_util_js__WEBPACK_IMPORTED_MODULE_2___default.a.collide(car, object)) {\n        car.getLife();\n        array.splice(array.indexOf(object), 1);\n      }\n    }\n    if (object instanceof _cash_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) {\n      if (_util_js__WEBPACK_IMPORTED_MODULE_2___default.a.collide(car, object)) {\n        assets.road.score += 100;\n        array.splice(array.indexOf(object), 1);\n      }\n    }\n  }\n\n  // checks if item passed canvas height to delete\n  static checkCanvas(object, array) {\n    if (object instanceof _life_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      if (object.physics.y > canvas.height) {\n        array.splice(array.indexOf(object), 1);\n      }\n    }\n    if (object instanceof _obstacle_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n      if (object.physics.y > canvas.height) {\n        array.splice(array.indexOf(object), 1);\n      }\n    }\n    if (object instanceof _cash_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) {\n      if (object.physics.y > canvas.height) {\n        array.splice(array.indexOf(object), 1);\n      }\n    }\n  }\n\n  drawAsset(asset) {\n    const { physics, sprite } = asset;\n\n    if (asset instanceof _road_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] && asset.physics.y >= 0) {\n      if (sprite.height > canvas.height) {\n        if (asset.physics.y > (canvas.height)) {\n          asset.physics.y = canvas.height - sprite.height;\n        }\n\n        this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height, asset.physics.x, asset.physics.y - sprite.height + 1, sprite.width, sprite.height);\n      }\n    }\n\n    if (asset instanceof _obstacle_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"] && asset.physics.y >= 0) { \n      if (asset.physics.y > canvas.height) {\n        this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height, asset.physics.x, asset.physics.y - 900, sprite.width, sprite.height);\n      }\n    }\n\n    this.ctx.drawImage(sprite.img, 0, 0, sprite.width, sprite.height,\n      physics.x, physics.y, sprite.width, sprite.height);\n\n    if (this.assets.car.life != 0) {\n      physics.updatePosition();\n    }\n  }\n\n  draw() {\n    if (!this.gameOver) {\n      const animate = () => {\n        const assets = Object.values(this.assets);\n        requestAnimationFrame(animate);\n        this.ctx.clearRect(0, 0, canvas.width, canvas.height);\n  \n        for (let i = 0; i < assets.length; i++) {\n          this.drawAsset(assets[i]);\n        }\n        \n        this.rocks.forEach(el => {\n          Game.checkCollision(this.assets.car, el, this.rocks);\n          Game.checkCanvas(el, this.rocks);\n        })\n  \n        this.life.forEach(el => {\n          Game.checkCollision(this.assets.car, el, this.life);\n          Game.checkCanvas(el, this.life);\n        })\n  \n        this.cash.forEach(el => {\n          Game.checkCollision(this.assets.car, el, this.cash, this.assets);\n          Game.checkCanvas(el, this.cash);\n        })\n        \n        this.life.forEach(el => {\n          this.drawAsset(el);\n          el.move();\n        });     \n  \n        this.rocks.forEach(el => {\n          this.drawAsset(el);\n          el.move();\n        })\n  \n        this.cash.forEach(el => {\n          this.drawAsset(el);\n          el.move();\n        })\n  \n        this.assets.road.addScore();\n        document.getElementById(\"score\").innerHTML = `Score: ${this.assets.road.score}`;\n        document.getElementById(\"lives\").innerHTML = `Lives: ${this.assets.car.life}`;\n        this.end();\n\n      }\n  \n      animate();\n    }\n  }\n\n  end() {\n    if (this.assets.car.life <= 0) {\n      this.gameOver = true;\n      this.assets.road.stop();\n      document.getElementById(\"slow\").innerHTML = `Too Slow!`;\n    }\n  }\n\n  createRock() {\n    // const rock = new Obstacle(new Physics(\n    //   Math.floor(Math.random() * 310) + 80,\n    //   -900));\n    // this.rocks.push(rock);\n    this.rocks.push(new _obstacle_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](new _physics_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n      Math.floor(Math.random() * 310) + 80,\n      -20)\n    ));\n  };\n\n  createLife() {\n    this.life.push(new _life_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _physics_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n      Math.floor(Math.random() * 310) + 80,\n      -20)\n    ));\n  };\n\n  createCash() {\n    this.cash.push(new _cash_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](new _physics_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n      Math.floor(Math.random() * 310) + 80,\n      -20)\n    ));\n  };\n\n  start() {\n    setInterval(() => {\n    if (!this.gameOver) {\n        this.createRock();\n      }\n    }, 1000);\n\n    setInterval(() => {\n    if (!this.gameOver) {\n        this.createLife();\n      }\n    }, 5000);\n\n    setInterval(() => {\n    if (!this.gameOver) {\n        this.createCash();\n      }\n    }, 1000);\n\n    this.draw();\n    this.assets.road.move();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets.js */ \"./src/assets.js\");\n/* harmony import */ var _car_controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car_controls.js */ \"./src/car_controls.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext('2d');\n  canvas.height = 700;\n  canvas.width = 500;\n  let game; \n  \n  document.getElementById(\"play-btn\").addEventListener(\"click\", () => {\n    document.getElementById(\"splash\").style.visibility = 'hidden';\n    game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx, _assets_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    Object(_car_controls_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(game);\n    game.start();\n  })\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/life.js":
/*!*********************!*\
  !*** ./src/life.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\n\nconst lifeImg = new Image();\nlifeImg.src = \"./assets/images/turbo.png\";\n\nclass Life {\n  constructor(physics) {\n    this.physics = physics;\n    this.sprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](lifeImg, 30, 31);\n  }\n\n  move() {\n    this.physics.dDown = 4;\n  }\n\n  stop() {\n    this.physics.dDown = 0;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Life);\n\n//# sourceURL=webpack:///./src/life.js?");

/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./physics */ \"./src/physics.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\n\n\nconst rockImg = new Image();\nrockImg.src = \"./assets/images/rock.png\";\n\nclass Obstacle {\n  constructor(physics) {\n    this.physics = physics;\n    this.sprite = new _sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"](rockImg, 30, 35);\n  }\n\n  move() {\n    this.physics.dDown = 4;\n  }\n\n  stop() {\n    this.physics.dDown = 0;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obstacle);\n\n//# sourceURL=webpack:///./src/obstacle.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./physics */ \"./src/physics.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\n\n\nconst roadImg = new Image();\nroadImg.src = \"./assets/images/road.png\";\n\nclass Road {\n  constructor(physics) {\n    this.physics = physics;\n    this.sprite = new _sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"](roadImg, 1262, 502);\n    this.score = 0;\n    this.gameOver = false;\n  }\n\n  move() {\n    this.physics.dDown = 4;\n  }\n\n  addScore() {\n    if (!this.gameOver) {\n      this.score += 1;\n    } else {\n      this.score;\n    }\n  }\n\n  stop() {\n    this.physics.dDown = 0;\n    this.gameOver = true;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Road);\n\n\n\n//# sourceURL=webpack:///./src/road.js?");

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Sprite {\n  constructor(img, height, width) {\n    this.img = img;\n    this.height = height;\n    this.width = width;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sprite);\n\n//# sourceURL=webpack:///./src/sprite.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  collide(obj1, obj2) {\n    if (\n      obj1.physics.x < obj2.physics.x + obj2.sprite.width\n      && obj1.physics.x + obj1.sprite.width > obj2.physics.x\n      && obj1.physics.y < obj2.physics.y + obj2.sprite.height\n      && obj1.physics.y + obj1.sprite.height > obj2.physics.y\n    ) return true;\n\n    return false;\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });