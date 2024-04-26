const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {
    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('u', 'Move cursor up', this.up.bind(this));
    Screen.addCommand('l', 'Move cursor left', this.left.bind(this));
    Screen.addCommand('d', 'Move cursor down', this.down.bind(this));
    Screen.addCommand('r', 'Move cursor right', this.right.bind(this));
    Screen.addCommand('p', 'Drop Marker', this.dropMarker.bind(this));
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  dropMarker() {
    let cursor = this.cursor;
    let row = cursor.row;
    let col = cursor.col;
    if (this.grid[row][col] === ' ') {
      this.grid[row][col] = this.playerTurn;
      Screen.setGrid(row, col, this.playerTurn);
      let winner = ConnectFour.checkWin(this.grid);
      if (winner) {
        ConnectFour.endGame(winner);
      }
      this.playerTurn = this.playerTurn == 'X' ? 'O' : 'X';
    } else {
      Screen.setMessage('Unable to place marker');
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
    const numRows = grid.length;
    const numCols = grid[0].length;

    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const cell = grid[i][j];
        if (cell === ' ') continue;

        if (j + 3 < numCols &&
          cell === grid[i][j + 1] &&
          cell === grid[i][j + 2] &&
          cell === grid[i][j + 3]) {
            return cell;
        }

        if (i + 3 < numRows &&
          cell === grid[i + 1][j] &&
          cell === grid[i + 2][j] &&
          cell === grid[i + 3][j]) {
            return cell;
        }

        if (i + 3 < numRows &&
          j + 3 < numCols &&
          cell === grid[i + 1][j + 1] &&
          cell === grid[i + 2][j + 2] &&
          cell === grid[i + 3][j + 3]) {
            return cell;
        }

        if (i + 3 < numRows &&
          j >= 3 &&
          cell === grid[i + 1][j - 1] &&
          cell === grid[i + 2][j - 2] &&
          cell === grid[i + 3][j - 3]) {
            return cell;
        }
      }
    }

    let spaces = 0;
    for (let row of grid) {
      for (let val of row) {
        if (val === ' ') {
          spaces++;
        }
      }
    }
    if (spaces === 0) {
      return 'T';
    }
    return false;
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

module.exports = ConnectFour;

module.exports = ConnectFour;


    // //checking rows
    // for (let row of grid) {                                                    // iterate through grid rows
    //   let valInRow = [];                                                       // declare valInRow to equal empty array
    //   for (let val of row) {                                                   // iterate through values (markers) in row
    //     if (!valInRow.includes(val)) {                                         // check if value is not already included in valInRow array
    //       valInRow.push(val);                                                  // if true, add marker to valInRow array
    //     }
    //   }
    //   if (valInRow.length === 1 && valInRow[0] !== ' ') {                       // check if valInRow array is not empty and value not equal empty space
    //     console.log(valInRow);                                                  // if true, print valInRow array
    //     return valInRow[0];                                                     // return valInRow index 0
    //   }
    // }

    // // checking columns
    // for (let col = 0; col < grid[0].length; col++) {                            // iterate through grid columns
    //   let valInCol = [];                                                        // set valInCol to equal empty array
    //   for (let row of grid) {                                                   // iterate through rows of grid
    //     let val = row[col];                                                     // declare val to equal column of row
    //     if (!valInCol.includes(val)) {                                          // check if value is not already included in valInCol array
    //       valInCol.push(val);                                                   // if true, add to valInCol array
    //     }
    //   }
    //   if (valInCol.length === 1 && valInCol[0] !== ' ') {                       // check if valInCol array is not empty array and valInCol[0] not equal to empty space
    //     console.log(valInCol);                                                  // print valInCol array
    //     return valInCol[0];                                                     // return valInCol index 0
    //   }
    // }

    // // checking diag left-top to right-bottom
    // let valInDiag = [];                                                         // declare valInDiag to equal empty array
    // for (let i = 0; i > grid.length; i++) {                                     // iterate through grid
    //   let val = grid[row][col];                                                 // declare val to equal grid row col indice
    //   if (!valInDiag.includes(val)) {                                           // check if value is not already included in valInDiag array
    //     valInDiag.push(val);                                                    // if true, add value to valInDiag array
    //   }
    // }
    // if (valInDiag.length === 1 && valInDiag[0] !== ' ') {                       // check if valInDiag array is not empty array and valInCol[0] not equal to empty space
    //   console.log(valInDiag);                                                   // print valInDiag array
    //   return valInDiag[0];                                                      // return valInDiag index 0
    // }
    // // checking diagonla left-bottom to right-top
    // valInDiag = [];
    // for (let i = 0; i < grid.length; i++) {
    //   let val = grid[i][grid.length - i - 1];
    //   if (!valInDiag.includes(val)) {
    //     valInDiag.push(val);
    //   }
    // }
    // if (valInDiag.length === 1 && valInDiag[0] !== ' ') {
    //   console.log(valInDiag);
    //   return valInDiag[0];
    // }

  //   static ckeckwin(grid) {
  //     const numRows = grid.length;
  //     const numCols = grid[0].length;
  //     for (let i = 0; i < numRows; i++) {
  //       for (let j = 0; j < numCols; j++) {
  //         const cell = grid[i][j];
  //         if (cell === ' ') continue;
  //         if (j + 3 < numCols &&
  //           cell === grid[i][j + 1] &&
  //           cell === grid[i][j + 2] &&
  //           cell === grid[i][j + 3]) {
  //             return cell;
  //           }
  //           if (i + 3 < numRows &&
  //             cell === grid[i + 1][j] &&
  //             cell === grid[i + 2][j] &&
  //             cell === grid[i + 3][j]) {
  //               return cell;
  //           }
  //           if (i + 3 < numRows &&
  //             j + 3 < numCols &&
  //             cell === grid[i + 1][j + 1] &&
  //             cell === grid[i + 2][j + 2] &&
  //             cell === grid[i + 3][j + 3]) {
  //               return cell;
  //           }
  //           if (i + 3 < numRows &&
  //             j >= 3 &&
  //             cell === grid[i + 1][j - 1] &&
  //             cell === grid[i + 2][j - 2] &&
  //             cell === grid[i + 3][j - 3]) {
  //               return cell;
  //           }
  //       }
  //     }
  //   }

  //   static checkWin(grid) {
  //     // checking for four in a row horizontally and keeping inside the grid
  // for (let i = 0; i < grid.length; i++) {
  //   for ( let j = 0; j < grid[i].length; j++) {
  //     if (
  //       j + 3 < grid[i].length &&
  //       grid[i][j] !== ' ' &&
  //       grid[i][j] === grid[i][j + 1] &&
  //       grid[i][j] === grid[i][j + 2] &&
  //       grid[i][j] === grid[i][j + 3]
  //     ) {
  //       return grid[i][j];
  //     }
  //   }
  // }
  // // checking for four in a row vertically and keeping inside the grid
  // for (let i = 0; i < grid[0].length; i++) {
  //   for (let j = 0; j < grid.length - 3; j++) {
  //     if (
  //       grid[j][i] !== ' ' &&
  //       grid[j][i] === grid[j + 1][i] &&
  //       grid[j][i] === grid[j + 2][i] &&
  //       grid[j][i] === grid[j + 3][i]
  //     ) {
  //       return grid[j][i];
  //     }
  //   }
  // }
  // // checking for four in a row diagonally from top-left to bottom-right
  // for (let i = 0; i < grid.length - 3; i++) {
  //   for (let j = 0; j < grid[0].length - 3; j++) {
  //     if (
  //       grid[i][j] !== ' ' &&
  //       grid[i][j] === grid[i + 1][j + 1] &&
  //       grid[i][j] === grid[i + 2][j + 2] &&
  //       grid[i][j] === grid[i + 3][j + 3]
  //     ) {
  //       return grid[i][j];
  //     }
  //   }
  // }
  // // checking for four in a row diagonally from top-right to bottom-left
  // for (let i = 0; i < grid.length - 3; i++) {
  //   for (let j = 0; j < grid.length - 3; j++) {
  //     if (
  //       grid[i][j] !== ' ' &&
  //       grid[i][j] === grid[i + 1][j + 1] &&
  //       grid[i][j] === grid[i + 2][j + 2] &&
  //       grid[i][j] === grid[i + 3][j + 3]
  //     ) {
  //       return grid[i][j];
  //     }
  //   }
  // }
