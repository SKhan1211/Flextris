import Grid from './grid';
import Game from './game';

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

  function userMove(direction) {
    user.pos.x += direction;
    if (collision(matrixGrid, user)) {
      user.pos.x -= direction;
    }
  }

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

  function userReset() {
    const pieces = 'TJLOSZI';
    user.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    user.pos.y = 0;
    user.pos.x = (matrixGrid[0].length / 2 | 0) -
      (user.matrix[0].length / 2 | 0);

    if (collision(matrixGrid, user)) {
      matrixGrid.forEach((row) => row.fill(0));
      user.score = 0;
      updateScore();
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
    requestAnimationFrame(updateGrid);
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

  document.addEventListener('keydown', event => {
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
  })

  function addScore() {
    document.getElementById("score").innerText = user.score;
  }

  const grid = new Grid(canvas, matrix, user, matrixGrid);

  userReset();
  addScore();
  updateGrid();  
})