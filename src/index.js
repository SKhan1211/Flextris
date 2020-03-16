import Grid from './grid';
import Game from './game';

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById('game-canvas');
  canvas.height = 650;
  canvas.width = 360;

  const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
  ];

  let counter = 0;
  let interval = 1000;
  let oldTime = 0;

  function userDown() {
    user.pos.y += 36;
    counter = 0;
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

  const user = {
    pos: { x: 0, y: 0},
    matrix
  }

  document.addEventListener('keydown', event => {
    if (event.keyCode === 37) {
      user.pos.x -= 36;
    } else if (event.keyCode === 39) {
      user.pos.x += 36;
    } else if (event.keyCode === 40) {
      userDown();
    }
  })

  const grid = new Grid(canvas, matrix, user);

  updateGrid();  

  window.user = user;
})