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
eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Grid {\n  constructor(canvas, matrix, user, matrixGrid) {\n    this.color = \"#000000\"\n    this.canvas = canvas;\n    this.user = user;\n    this.matrix = matrix;\n    this.matrixGrid = matrixGrid;\n  }\n\n  paintGrid() {\n    const ctx = this.canvas.getContext(\"2d\");\n    ctx.fillStyle = this.color;\n    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.drawPiece(this.matrixGrid, { x: 0, y: 0 });\n    this.drawPiece(this.user.matrix, this.user.pos);\n  }\n\n  drawPiece(matrix, move) {\n    const ctx = this.canvas.getContext(\"2d\");\n    matrix.forEach((row, rowIdx) => {\n      row.forEach((col, colIdx) => {\n        if (col !== 0) {\n          ctx.fillStyle = 'purple';\n          ctx.fillRect((colIdx) + move.x, (rowIdx) + move.y, (1), (1));\n        }\n      })\n    })\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack:///./src/grid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ \"./src/grid.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  const canvas = document.getElementById('game-canvas');\n  canvas.height = 400;\n  canvas.width = 240;\n  const ctx = canvas.getContext(\"2d\");\n  ctx.scale(20, 20);\n\n  const matrix = [\n    [0, 0, 0],\n    [1, 1, 1],\n    [0, 1, 0]\n  ];\n\n  function createGrid(width, height) {\n    const grid = [];\n    while (height--) {\n      grid.push(new Array(width).fill(0));\n    }\n    return grid;\n  }\n\n  function collision(grid, user) {\n    const m = user.matrix;\n    const o = user.pos;\n    for (let y = 0; y < m.length; ++y) {\n      for (let x = 0; x < m[y].length; ++x) {\n        if (m[y][x] !== 0 &&\n          (grid[y + o.y] &&\n            grid[y + o.y][x + o.x]) !== 0) {\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n\n  function combine(matrixGrid, user) {\n    user.matrix.forEach((row, y) => {\n      row.forEach((value, x) => {\n        if (value !== 0) {\n          matrixGrid[y + user.pos.y][x + user.pos.x] = value;\n        }\n      });\n    });\n  }\n\n  let counter = 0;\n  let interval = 1000;\n  let oldTime = 0;\n\n  function userDown() {\n    user.pos.y += 1;\n    if (collision(matrixGrid, user)) {\n      user.pos.y -= 1;\n      combine(matrixGrid, user);\n      userReset();\n    }\n    counter = 0;\n  }\n\n  function userMove(direction) {\n    user.pos.x += direction;\n    if (collision(matrixGrid, user)) {\n      user.pos.x -= direction;\n    }\n  }\n\n  function rotate(matrixGrid, direction) {\n    for (let y = 0; y < matrixGrid.length; ++y) {\n      for (let x = 0; x < y; ++x) {\n        [\n          matrixGrid[x][y],\n          matrixGrid[y][x],\n        ] = [\n            matrixGrid[y][x],\n            matrixGrid[x][y],\n          ];\n      }\n    }\n\n    if (direction > 0) {\n      matrixGrid.forEach(row => row.reverse());\n    } else {\n      matrixGrid.reverse();\n    }\n  }\n\n  function createPiece(type) {\n    if (type === 'I') {\n      return [\n        [0, 1, 0, 0],\n        [0, 1, 0, 0],\n        [0, 1, 0, 0],\n        [0, 1, 0, 0],\n      ];\n    } else if (type === 'L') {\n      return [\n        [0, 2, 0],\n        [0, 2, 0],\n        [0, 2, 2],\n      ];\n    } else if (type === 'J') {\n      return [\n        [0, 3, 0],\n        [0, 3, 0],\n        [3, 3, 0],\n      ];\n    } else if (type === 'O') {\n      return [\n        [4, 4],\n        [4, 4],\n      ];\n    } else if (type === 'Z') {\n      return [\n        [5, 5, 0],\n        [0, 5, 5],\n        [0, 0, 0],\n      ];\n    } else if (type === 'S') {\n      return [\n        [0, 6, 6],\n        [6, 6, 0],\n        [0, 0, 0],\n      ];\n    } else if (type === 'T') {\n      return [\n        [0, 7, 0],\n        [7, 7, 7],\n        [0, 0, 0],\n      ];\n    }\n  }\n\n  function userRotate(direction) {\n    const pos = user.pos.x;\n    let offset = 1;\n    rotate(user.matrix, direction);\n    while (collision(matrixGrid, user)) {\n      user.pos.x += offset;\n      offset = -(offset + (offset > 0 ? 1 : -1));\n      if (offset > user.matrix[0].length) {\n        rotate(user.matrix, -direction);\n        user.pos.x = pos;\n        return;\n      }\n    }\n  }\n\n  function userReset() {\n    const pieces = 'TJLOSZI';\n    user.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);\n    user.pos.y = 0;\n    user.pos.x = (matrixGrid[0].length / 2 | 0) -\n      (user.matrix[0].length / 2 | 0);\n  }\n\n  function updateGrid(loadingTime = 0) {\n    const newTime = loadingTime - oldTime;\n    oldTime = loadingTime;\n\n    counter += newTime;\n    if (counter > interval) {\n      userDown();\n    }\n\n    grid.paintGrid();\n    requestAnimationFrame(updateGrid);\n  }\n\n  const matrixGrid = createGrid(12, 20)\n\n  const user = {\n    pos: { x: 0, y: 0},\n    matrix\n  }\n\n  document.addEventListener('keydown', event => {\n    if (event.keyCode === 37) {\n      userMove(-1);\n    } else if (event.keyCode === 39) {\n      userMove(1);\n    } else if (event.keyCode === 40) {\n      userDown();\n    } else if (event.keyCode === 81) {\n      userRotate(-1);\n    } else if (event.keyCode === 87) {\n      userRotate(1);\n    }\n  })\n\n  const grid = new _grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, matrix, user, matrixGrid);\n\n  updateGrid();  \n\n  window.user = user;\n  window.matrixGrid = matrixGrid;\n  window.combine = combine;\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });