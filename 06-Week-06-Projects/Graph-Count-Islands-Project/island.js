// File: island.js

function getNeighbors(row, col, matrix) {
    let adjNodes = [] // store all adjasent


    // First store than check
    // add all :

    // Check top
    adjNodes.push([(row - 1), (col)])
    // Check top right
    adjNodes.push([(row - 1), (col + 1)])
    // Check right
    adjNodes.push([(row), (col + 1)])
    // Check bottom right
    adjNodes.push([(row + 1), (col + 1)])
    // Check bottom
    adjNodes.push([(row + 1), (col)])
    // Check bottom left
    adjNodes.push([(row + 1), (col - 1)])
    // Check left
    adjNodes.push([(row), (col - 1)])
    // Check top left
    adjNodes.push([(row - 1), (col - 1)]);

    // Return neighbors, node row exist in matrix and node val = 1
    return adjNodes.filter(nbor => matrix[nbor[0]] && matrix[nbor[0]][nbor[1]])

  }

  function countIslands(matrix) {

    // Create a visited set to store visited nodes
    let visited = new Set();
    // Initialize count to 0
    let count = 0;
    // Iterate through all indices in matrix
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        // If an index contains a 1 and has not been visited,
        // increment island count and start traversing neighbors
        if (matrix[row][col] && !visited.has(`${row}, ${col}`)) {
          // DO THE THING (increment island count by 1)
          count++;
          // Initialize a stack with current index
          let stack = [[row, col]];
          // Add stringified version of current index to the visited set
          !visited.add(`${row}, ${col}`);
          // While stack contains elements
          while (stack.length > 0) {
            // Pop element from stack
            let currentEl = stack.pop();
            // Get valid neighbors of current element
            let nbors = getNeighbors(currentEl[0], currentEl[1],  matrix)
            // Iterate over neigbors
            for (const nbor of nbors) {
              // If neighbor has not been visited
              let row = nbor[0]; let col = nbor[1];
              if (!visited.has(`${row}, ${col}`)) {
                // Add neighbor to stack
                stack.push(nbor)
                // Mark neighbor as visited
                visited.add(`${row}, ${col}`)
              };
            };
          };
        };
      }
    }
    // Return island count
    return count;
    // Your code here
  }

  // Uncomment the lines below for local testing
  // const matrix = [
  //                 [1,1,1,0,0],
  //                 [0,1,1,0,1],
  //                 [0,1,1,0,1]
  //               ]

  // console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
  // console.log(getNeighbors(2,4, matrix)) // [[1,4]]

  // const matrix2 = [
  //                     [1,1,1,0,1],
  //                     [0,0,0,0,1],
  //                     [1,0,0,1,0],
  //                 ]

  // console.log(countIslands(matrix)) // 2
  // console.log(countIslands(matrix2)); // 3

  module.exports = [countIslands, getNeighbors];
