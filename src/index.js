import Grid from './grid';

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById('game-canvas');
  canvas.height = 600;
  canvas.width = 360;

  const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
  ];

  let counter = 0;
  let interval = 1000;
  let oldTime = 0;

  function updateGrid(loadingTime = 0) {
    const newTime = loadingTime - oldTime;
    oldTime = loadingTime;

    counter += newTime;
    if (counter > interval) {
      user.pos.y += 36;
      counter = 0;
    }

    grid.paintGrid();
    requestAnimationFrame(updateGrid);
  }

  const user = {
    pos: { x: 0, y: 0},
    matrix
  }

  const grid = new Grid(canvas, matrix, user);


  updateGrid();  

  window.user = user;
})