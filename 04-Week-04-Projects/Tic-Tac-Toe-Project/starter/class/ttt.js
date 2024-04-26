const Screen = require('./screen');
const Cursor = require('./cursor');

class TTT {
  constructor() {
    this.playerTurn = 'O';

    this.grid = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);
    // Screen.addCommand('t', 'test command (remove)', TTT.testCommand);
    Screen.addCommand('u', 'Move Up', this.up.bind(this));
    Screen.addCommand('r', 'Move right', this.right.bind(this));
    Screen.addCommand('d', 'Move down', this.down.bind(this));
    Screen.addCommand('l', 'Move left', this.left.bind(this));
    Screen.addCommand('p', 'Place Marker', this.placeMove.bind(this));
    Screen.render();
  }

  placeMove() {                                                   // declare placeMarker method to define it
    let cursor = this.cursor;                                     // declare cursor
    let row = cursor.row;                                         // declare row
    let col = cursor.col;                                         // declare col
    if (this.grid[row][col] === ' ') {                            // check if space is empty
      this.grid[row][col] = this.playerTurn;                      // if true, declare space available for player to place marker
      Screen.setGrid(row, col, this.playerTurn);                  // tell the Screen class to set the current players marker on this row and col space
      let winner = TTT.checkWin(this.grid);                       // declare winner to equal TTT class.checkWin(this.grid) to check for winner
      if (winner) {                                               // Check if a winnign move has been placed
        TTT.endGame(winner);                                      // if true, call TTT class endGame(winner) method
      }
      this.playerTurn = this.playerTurn == 'X' ? 'O' : 'X';       // change to the current players marker
    } else {                                                      // else (if space not empty)
      Screen.setMessage('Unable to place the marker');            // if false, print 'unable to place the marker'
    }
    Screen.render();                                              // call Screen.render() to show the placed marker
  }

  up() {                                                          // declare method up() to define it
    let cursor = this.cursor;                                     // declare cursor to equal this.cursor
    cursor.resetBackgroundColor();                                // reset the cursor color
    cursor.up();                                                  // move the cursor up
    cursor.setBackgroundColor();                                  // set the cursor color
    Screen.render();                                              // redraw the screen with the cursor moved
  }
  right() {                                                       // declare method right() to define it
    let cursor = this.cursor;                                     // declare cursor to equal this.cursor
    cursor.resetBackgroundColor();                                // reset the cursor color
    cursor.right();                                               // move the cursor right
    cursor.setBackgroundColor();                                  // set the cursor color
    Screen.render();                                              // redraw the screen with the cursor moved
  }
  down() {                                                        // declare method down() to define it
    let cursor = this.cursor;                                     // declare cursor to equal this.cursor
    cursor.resetBackgroundColor();                                // reset the cursor color
    cursor.down();                                                // move the cursor down
    cursor.setBackgroundColor();                                  // set the cursor color
    Screen.render();                                              // redraw the screen with the cursor moved
  }
  left() {                                                        // declare method left() to define it
    let cursor = this.cursor;                                     // declare cursor to equal this.cursor
    cursor.resetBackgroundColor();                                // reset the cursor color
    cursor.left();                                                // move the cursor left
    cursor.setBackgroundColor();                                  // set the cursor color
    Screen.render();                                              // redraw the screen with the cursor moved
  }
  // Remove this
  // static testCommand() {
  //   console.log('TEST COMMAND');
  // }

  static checkWin(grid) {                                         // declare static method checkWin(grid)
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    for (let row of grid) {                                       // iterate through grid rows
      let valInRow = [];                                          // declare valInRow to equal empty array
      for (let val of row) {                                      // iterate through values (markers) in row
        if (!valInRow.includes(val)) {                            // check if value is not arleady included in valInRow array
          valInRow.push(val);                                     // if true, add marker to valInRow array
        }
      }
      if (valInRow.length === 1 && valInRow[0] !== ' ') {         // check if valInRow array is not empty and value not equal empty space
        console.log(valInRow);                                    // if true, print valInRow array
        return valInRow[0];                                       // return valInRow index 0
      }
    }
    // checking columns
    for (let col = 0; col < grid[0].length; col++) {              // iterate through grid columns
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
     return false;                                                // Return false if the game has not ended
  }

  static endGame(winner) {                                        // declare endGame(winner) method
    if (winner === 'O' || winner === 'X') {                       // check if winner equals 'O' of 'X'
      Screen.setMessage(`Player ${winner} wins!`);                // if ture, call Screen.setMessage to print ('player ${winner} wins!')
    } else if (winner === 'T') {                                  // check if wiiner equals 'T'
      Screen.setMessage(`Tie game!`);                             // if true, call Screen.setMessage to print ('Tie Game!')
    } else {                                                      // if both conditions are false
      Screen.setMessage(`Game Over`);                             // call Screen.setMessage to print ('Game Over')
    }
    Screen.render();                                              // call Screen.render() to rerender screen to match above statments
    Screen.quit();                                                // call Screen quit to exit game
  }
}

module.exports = TTT;
