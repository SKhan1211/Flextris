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

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Grid {\n  constructor(canvas, matrix, user) {\n    this.color = \"#000000\"\n    this.canvas = canvas;\n    this.user = user;\n    this.matrix = matrix;\n  }\n\n  paintGrid() {\n    const ctx = this.canvas.getContext(\"2d\");\n    ctx.fillStyle = this.color;\n    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.drawPiece(this.user.matrix, this.user.pos);\n  }\n\n  drawPiece(matrix, move) {\n    const ctx = this.canvas.getContext(\"2d\");\n    matrix.forEach((row, rowIdx) => {\n      row.forEach((col, colIdx) => {\n        if (col !== 0) {\n          ctx.fillStyle = 'purple';\n          ctx.fillRect((colIdx * 36 + 1) + move.x, (rowIdx * 36 + 1) + move.y, (1 * 36 - 3), (1 * 36 - 3));\n          ctx.strokeStyle = 'white';\n          ctx.strokeRect((colIdx * 36) + 1 + move.x, (rowIdx * 36) + 1 + move.y, (1 * 36), (1 * 36))\n        }\n      })\n    })\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack:///./src/grid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ \"./src/grid.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  const canvas = document.getElementById('game-canvas');\n  canvas.height = 600;\n  canvas.width = 360;\n\n  const matrix = [\n    [0, 0, 0],\n    [1, 1, 1],\n    [0, 1, 0]\n  ];\n\n  let counter = 0;\n  let interval = 1000;\n  let oldTime = 0;\n\n  function updateGrid(loadingTime = 0) {\n    const newTime = loadingTime - oldTime;\n    oldTime = loadingTime;\n\n    counter += newTime;\n    if (counter > interval) {\n      user.pos.y += 36;\n      counter = 0;\n    }\n\n    grid.paintGrid();\n    requestAnimationFrame(updateGrid);\n  }\n\n  const user = {\n    pos: { x: 0, y: 0},\n    matrix\n  }\n\n  const grid = new _grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, matrix, user);\n\n\n  updateGrid();  \n\n  window.user = user;\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });