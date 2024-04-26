// File: ttt.js for (tic-tac-toe)  TTT class

const Screen = require("./screen");
const Cursor = require("./cursor");
const ComputerPlayer = require('./computer-player');

class TTT {
  constructor() {
    this.textColor = 'green';
    this.text2Color = 'red';
    this.playerTurn = "X";
    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']
    ];
    this.cursor = new Cursor(3, 3);
    Screen.initialize(3, 3);
    Screen.setGridLines(true);
    Screen.addCommand('u', 'Move Up', this.up.bind(this));
    Screen.addCommand('r', 'Move Right', this.right.bind(this));
    Screen.addCommand('d', 'Move Down', this.down.bind(this));
    Screen.addCommand('l', 'Move Left', this.left.bind(this));
    Screen.addCommand('p', 'Place Marker', this.placeMarker.bind(this));
    Screen.addCommand('x', 'command X', this.pressedX);
    Screen.addCommand('o', 'command o', this.pressedO);
    this.cursor.setBackgroundColor();
    Screen.render();
    this.firstMove = Math.random() > 0.5 ? 'player': 'AI';
    if (this.firstMove === 'AI') this.doCpuMove(this.grid, 'X');
  };

  pressedX = () => this.pressedXO('X');
  pressedO = () => this.pressedXO('O');
  pressedXO = (char) => {
    let oChar = char === 'X' ? 'O' : 'X';
    if (this.playerTurn !== char) {
      console.log('wrong character');
    } else if (this.grid[this.cursor.row][this.cursor.col] !== ' ') {
      console.log('postition full');
    } else {
      this.grid[this.cursor.row][this.cursor.col] = char;
      Screen.setGrid(this.cursor.row, this.cursor.col, char);
      this.setTextColor();
      let winner = TTT.checkWin(this.grid);
      if (winner) TTT.endGame(winner);
      this.playerTurn = oChar;
      this.doCpuMove(this.getGrid(), oChar);
      winner = TTT.checkWin(this.grid);
      if (winner) TTT.endGame(winner);
    };
  };

  setTextColor = () => {
    Screen.setTextColor(this.cursor.row, this.cursor.col, this.textColor);
    Screen.render();
  }

  getGrid = () => this.grid;

  doCpuMove =  (grid, oChar) => {
    let cpuMove = ComputerPlayer.getSmartMove(grid, oChar);
    this.grid[cpuMove.row][cpuMove.col] = oChar;
    Screen.setGrid(cpuMove.row, cpuMove.col, oChar);
    Screen.setTextColor(cpuMove.row, cpuMove.col, this.text2Color);
    Screen.render();
    this.playerTurn = oChar === 'X' ? 'O' : 'X';
  };

  placeMarker() {
    let cursor = this.cursor;
    let row = cursor.row;
    let col = cursor.col;
    if (this.grid[row][col] === ' ') {
      this.grid[row][col] = this.playerTurn;
      Screen.setGrid(row, col, this.playerTurn);
      let winner = TTT.checkWin(this.grid);
      if (winner) {
        TTT.endGame(winner);
      }
      this.playerTurn = this.playerTurn == 'X' ? 'O' : 'X';
    } else {
        Screen.setMessage('Unable to place the Marker');
    }
    Screen.render();
  }

  up() {
    let cursor = this.cursor;
    cursor.resetBackgroundColor();
    cursor.up();
    cursor.setBackgroundColor();
    Screen.render();
  }
  right() {
    let cursor = this.cursor;
    cursor.resetBackgroundColor();
    cursor.right();
    cursor.setBackgroundColor();
    Screen.render();
  }
  down() {
    let cursor = this.cursor;
    cursor.resetBackgroundColor();
    cursor.down();
    cursor.setBackgroundColor();
    Screen.render();
  }
  left() {
    let cursor = this.cursor;
    cursor.resetBackgroundColor();
    cursor.left();
    cursor.setBackgroundColor();
    Screen.render();
  }
  static checkWin(grid) {
    // checking rows
    for (let row of grid) {                                         // iterate through grid rows
      let valInRow = [];                                            // declare valInRow to equal empty array
      for (let val of row) {                                        // iterate through values (markers) in row
        if (!valInRow.includes(val)) {                              // check if value is not arleady included in valInRow array
          valInRow.push(val)                                        // if true, add marker to valInRow array
        }
      }
      if (valInRow.length === 1 && valInRow[0] !== ' ') {           // check if valInRow array is not empty and value not equal empty space
        console.log(valInRow);                                      // if true, print valInRow array
        return valInRow[0];                                         // return valInRow index 0
      }
    }
    // checking columns
    for (let col = 0; col < grid[0].length; col++) {                // iterate through grid columns
      let valInCol = [];                                          // set valInCol to equal empty array
      for (let row of grid) {                                     // iterate through rows of grid
        let val = row[col];                                       // declare val to equal column of row
        if (!valInCol.includes(val)) {                            // check if value is not alread included in valInCol array
          valInCol.push(val);                                     // if true, add to valInCol array
        }
      }
      if (valInCol.length === 1 && valInCol[0] !== ' ') {         // check if valInCol array in not empty and value 0 not equal empty space
        console.log(valInCol);                                    // print valInCol array
        return valInCol[0];                                       // return valInCol index 0
      }
    }
    // diag 1
    let valInDiag = [];                                           // declare valInDiag to equal empty array
    for (let i = 0; i < grid.length; i++) {                       // iterate through grid
      let val = grid[i][i];                                       // declare val to equal grid row col indice'
      if (!valInDiag.includes(val)) {                             // check if value is not already included in valInDiagonal array
        valInDiag.push(val);                                      // if true, add value to valInDiag array
      }
    }
    if (valInDiag.length === 1 && valInDiag[0] !== ' ') {         // check if valInDiag array is not empty and index 0 not equal empty space
      console.log(valInDiag);                                     // print valInDiag array
      return valInDiag[0];                                        // return valInDiag index 0
    }
    // diag 2
    valInDiag = [];                                               // reset valInDiag to empty array
    for (let i = 0; i < grid.length; i++) {                       // iterate through grid
      let val = grid[i][grid.length - i - 1];                     // declare value to equal grid row col - i - 1, as to not repeat diagonal 1 statement
      if (!valInDiag.includes(val)) {                             // check if value is not already included in valInDiag array
        valInDiag.push(val);                                      // if true, add value to array
      }
    }
    if (valInDiag.length === 1 && valInDiag[0] !== ' ') {         // check if valInDiag array is not empty and index 0 not equal empty space
      console.log(valInDiag);                                     // print valInDiag array
      return valInDiag[0];                                        // return valInDiag index 0
    }
    // Return 'T' if the game is a tie
    let spaces = 0;                                               // declare spaces to equal 0
    for (let row of grid) {                                       // iterate through grid rows
      for (let val of row) {                                      // iterate through row values
        if (val == ' ') {                                         // check if value equals empty space
          spaces++;                                               // if true, add 1 to spaces counter
        }
      }
    }
    if (spaces == 0) {                                            // check if spaces equal 0
      return 'T';                                                 // return 'T' for tie
    }
    return false;                                                 // Return false if the game has not ended
    }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
        Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
        Screen.setMessage(`Tie game!`);
    } else {
        Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = TTT;
