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
          ctx.fillStyle = 'purple';
          ctx.fillRect((colIdx) + move.x, (rowIdx) + move.y, (1), (1));
        }
      })
    })
  }
}

export default Grid;