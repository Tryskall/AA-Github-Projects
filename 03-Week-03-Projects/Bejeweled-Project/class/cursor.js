// File: cursor.js for Cursor class E5S syntax

const Screen = require("./screen");

function Cursor(numRows, numCols) {
  this.numRows = numRows;
  this.numCols = numCols;
  this.row = 0;
  this.col = 0;
  this.gridColor = 'black';
  this.cursorColor = 'yellow';
  this.char = '';
}

Cursor.prototype.resetBackgroundColor = function() {
  Screen.setBackgroundColor(this.row, this.col, this.gridColor);
}

Cursor.prototype.setBackgroundColor = function () {
  Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
}

Cursor.prototype.up = function () {
  if (this.row > 0) {
      this.resetBackgroundColor();
      this.row--;
      this.setBackgroundColor();
  }
}

Cursor.prototype.down = function () {
  if (this.row < this.numRows -1) {
      this.resetBackgroundColor();
      this.row++;
      this.setBackgroundColor();
  }
}

Cursor.prototype.left = function () {
  if (this.col > 0) {
      this.resetBackgroundColor();
      this.col--;
      this.setBackgroundColor();
  }
}

Cursor.prototype.right = function () {
  if (this.col < this.numCols - 1) {
      this.resetBackgroundColor();
      this.col++;
      this.setBackgroundColor();
  }
};

module.exports = Cursor;
