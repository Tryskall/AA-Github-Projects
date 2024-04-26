// File: island.js

function getNeighbors(row, col, graph) { // only neighbours with val = 1 pass
    // Your code here
    let nbors = []

    // Check top
    if (row > 0 && graph[row - 1][col]) nbors.push([row - 1, col]);
    // Check bottom
    if (row < graph.length - 1 && graph[row + 1][col] ) nbors.push([row + 1, col]);
    // Check left
    if (col > 0 && graph[row][col - 1]) nbors.push([row, col - 1]);
    // Check right
    if (col < graph[0].length - 1 && graph[row][col + 1]) nbors.push([row, col + 1])

    // Return neighbors
    return nbors;
  }


  function islandSize(row, col, graph) {
    // Your code here
    // Create a visited set to store visited nodes
    let visitedStr = new Set();
    // Create a stack, put the starting node in the stack
    let stack = [[row, col]];

    // Put the stringified starting node in visited
    visitedStr.add(`${row}, ${col}`)
    // Initialize size to 0
    let size = 0;

    // While the stack is not empty,
    while (stack.length > 0) {
        // Pop the first node
        let currentNode = stack.pop();

        // DO THE THING (increment size by 1)
        size++
        // Then push all the UNVISITED neighbors on top of the stack
        let row = currentNode[0];
        let col = currentNode[1]
        let nbors = getNeighbors(row, col, graph);
        for (const nbor of nbors) {
            let row = nbor[0];
            let col = nbor[1]
            if (!visitedStr.has(`${row}, ${col}`)) {
                stack.push(nbor);
                // and mark them as visited
                visitedStr.add(`${row}, ${col}`)
            };
        };

        // HINT: This is what your helper function `getNeighbors` is for
        // HINT: Remember, you're storing your visited nodes as strings!
    }
    // return size
    return size;
  }

  module.exports = [getNeighbors, islandSize];
