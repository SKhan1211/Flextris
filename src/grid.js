class Grid {
  constructor(canvas, matrix, user) {
    this.color = "#000000"
    this.canvas = canvas;
    this.user = user;
    this.matrix = matrix;
  }

  paintGrid() {
    const ctx = this.canvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawPiece(this.user.matrix, this.user.pos);
  }

  drawPiece(matrix, move) {
    const ctx = this.canvas.getContext("2d");
    matrix.forEach((row, rowIdx) => {
      row.forEach((col, colIdx) => {
        if (col !== 0) {
          ctx.fillStyle = 'purple';
          ctx.fillRect((colIdx * 36 + 1) + move.x, (rowIdx * 36 + 1) + move.y, (1 * 36 - 3), (1 * 36 - 3));
          ctx.strokeStyle = 'white';
          ctx.strokeRect((colIdx * 36) + 1 + move.x, (rowIdx * 36) + 1 + move.y, (1 * 36), (1 * 36))
        }
      })
    })
  }
}

export default Grid;