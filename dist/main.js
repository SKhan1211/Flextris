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
__webpack_require__.r(__webpack_exports__);
class Game {
  constructor() {

  }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const colors = [
  null,
  "#FF0D72",
  "#0DC2FF",
  "#0DFF72",
  "#F538FF",
  "#FF8E0D",
  "#FFE138",
  "#3877FF",
];

class Grid {
  constructor(canvas, matrix, user, matrixGrid) {
    this.color = "#000000"
    this.canvas = canvas;
    this.user = user;
    this.matrix = matrix;
    this.matrixGrid = matrixGrid;
  }

  paintGrid() {
    const ctx = this.canvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawPiece(this.matrixGrid, { x: 0, y: 0 });
    this.drawPiece(this.user.matrix, this.user.pos);
  }

  drawPiece(matrix, move) {
    const ctx = this.canvas.getContext("2d");
    matrix.forEach((row, rowIdx) => {
      row.forEach((col, colIdx) => {
        if (col !== 0) {
          ctx.fillStyle = colors[col];
          ctx.fillRect((colIdx) + move.x, (rowIdx) + move.y, (1), (1));
        }
      })
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/grid.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");



document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById('game-canvas');
  canvas.height = 400;
  canvas.width = 240;
  const ctx = canvas.getContext("2d");
  ctx.scale(20, 20);

  const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
  ];

  // Clears layer when it completely fills up
  function gridClear() {
    let rowCount = 1;
    outer: for (let y = matrixGrid.length - 1; y > 0; --y) {
      for (let x = 0; x < matrixGrid[y].length; ++x) {
        if (matrixGrid[y][x] === 0) {
          continue outer;
        }
      }

      const row = matrixGrid.splice(y, 1)[0].fill(0);
      matrixGrid.unshift(row);
      ++y;

      user.score += rowCount * 10;
      rowCount *= 2;
    }
  }

  function createGrid(width, height) {
    const grid = [];
    while (height--) {
      grid.push(new Array(width).fill(0));
    }
    return grid;
  }

  function collision(grid, user) {
    const m = user.matrix;
    const o = user.pos;
    for (let y = 0; y < m.length; ++y) {
      for (let x = 0; x < m[y].length; ++x) {
        if (m[y][x] !== 0 &&
          (grid[y + o.y] &&
            grid[y + o.y][x + o.x]) !== 0) {
          return true;
        }
      }
    }
    return false;
  }

  function combine(matrixGrid, user) {
    user.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          matrixGrid[y + user.pos.y][x + user.pos.x] = value;
        }
      });
    });
  }

  let counter = 0;
  let interval = 1000;
  let oldTime = 0;

  // Increases speed when down arrow is pressed
  function userDown() {
    user.pos.y += 1;
    if (collision(matrixGrid, user)) {
      user.pos.y -= 1;
      combine(matrixGrid, user);
      userReset();
      gridClear();
      addScore();
    }
    counter = 0;
  }

  // Handles moving pieces side to side on arrow button presses
  function userMove(direction) {
    user.pos.x += direction;
    if (collision(matrixGrid, user)) {
      user.pos.x -= direction;
    }
  }

  // Helper method to rotate the pieces used with userRotate function
  function rotate(matrixGrid, direction) {
    for (let y = 0; y < matrixGrid.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [
          matrixGrid[x][y],
          matrixGrid[y][x],
        ] = [
            matrixGrid[y][x],
            matrixGrid[x][y],
          ];
      }
    }

    if (direction > 0) {
      matrixGrid.forEach(row => row.reverse());
    } else {
      matrixGrid.reverse();
    }
  }

  // Game pieces for our grid
  function createPiece(type) {
    if (type === 'I') {
      return [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
      ];
    } else if (type === 'L') {
      return [
        [0, 2, 0],
        [0, 2, 0],
        [0, 2, 2],
      ];
    } else if (type === 'J') {
      return [
        [0, 3, 0],
        [0, 3, 0],
        [3, 3, 0],
      ];
    } else if (type === 'O') {
      return [
        [4, 4],
        [4, 4],
      ];
    } else if (type === 'Z') {
      return [
        [5, 5, 0],
        [0, 5, 5],
        [0, 0, 0],
      ];
    } else if (type === 'S') {
      return [
        [0, 6, 6],
        [6, 6, 0],
        [0, 0, 0],
      ];
    } else if (type === 'T') {
      return [
        [0, 7, 0],
        [7, 7, 7],
        [0, 0, 0],
      ];
    }
  }

  // Rotates the pieces when 'Q' or 'W' is pressed
  function userRotate(direction) {
    const pos = user.pos.x;
    let offset = 1;
    rotate(user.matrix, direction);
    while (collision(matrixGrid, user)) {
      user.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > user.matrix[0].length) {
        rotate(user.matrix, -direction);
        user.pos.x = pos;
        return;
      }
    }
  }

  // Handles pausing the game
  let isPaused = false;
  function userPause() {
    if (isPaused) {
      isPaused = false;
      updateGrid();
      document.addEventListener("keydown", keyPresses);
    } else {
      isPaused = true;
      document.removeEventListener("keydown", keyPresses);
    }
  }

  // Event listener for pausing the game
  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 80) {
      userPause();
    }
  })

  function userReset() {
    const pieces = 'TJLOSZI';
    user.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    user.pos.y = 0;
    user.pos.x = (matrixGrid[0].length / 2 | 0) -
      (user.matrix[0].length / 2 | 0);

    if (collision(matrixGrid, user)) {
      matrixGrid.forEach((row) => row.fill(0));
      user.score = 0;
      addScore();
    }
  }

  function updateGrid(loadingTime = 0) {
    const newTime = loadingTime - oldTime;
    oldTime = loadingTime;

    counter += newTime;
    if (counter > interval) {
      userDown();
    }

    grid.paintGrid();
    if (!isPaused) requestAnimationFrame(updateGrid);
  }

  const colors = [
    null,
    "#FF0D72",
    "#0DC2FF",
    "#0DFF72",
    "#F538FF",
    "#FF8E0D",
    "#FFE138",
    "#3877FF",
  ];

  const matrixGrid = createGrid(12, 20)

  const user = {
    pos: { x: 4, y: 0},
    matrix: null,
    score: 0
  }

  // document.addEventListener('keydown', event => {
  //   if (event.keyCode === 37) {
  //     userMove(-1);
  //   } else if (event.keyCode === 39) {
  //     userMove(1);
  //   } else if (event.keyCode === 40) {
  //     userDown();
  //   } else if (event.keyCode === 81) {
  //     userRotate(-1);
  //   } else if (event.keyCode === 87) {
  //     userRotate(1);
  //   } else if (event.keyCode === 80) {
  //     userPause();
  //   }
  // })

  function keyPresses(event) {
    if (event.keyCode === 37) {
      userMove(-1);
    } else if (event.keyCode === 39) {
      userMove(1);
    } else if (event.keyCode === 40) {
      userDown();
    } else if (event.keyCode === 81) {
      userRotate(-1);
    } else if (event.keyCode === 87) {
      userRotate(1);
    } 
  }

  document.addEventListener('keydown', keyPresses);

  function addScore() {
    document.getElementById("score").innerText = user.score;
  }

  const grid = new _grid__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, matrix, user, matrixGrid);

  userReset();
  addScore();
  updateGrid();  
})

/***/ })

/******/ });
//# sourceMappingURL=main.js.map