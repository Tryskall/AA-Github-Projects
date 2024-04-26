// File: solvingMatrixGraphProblems.js

// Three steps to solving almost any graph problem
// -- Identify and define the type of graph
// -- Implement the getNeighbors function
// -- Travers the graph

const adjacencyList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4],
};

const matrix = [
    [ 0, 1, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];

// Identify and define the type of graph
// What is the problem asking you to do?
// What does the matrix represent?
// What does each node represent?
// What relationship do the edges represent?
// Is this a search or traversasl problem?
// Does this require a depth-first or breadth-first approach?

// Implement the getNeighbors() function

const getNeighbors = (node, matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const [row, col] = node;

    let validNeighbors = [];
    if (row > 0) {                                  // UP: if neighbor above current node,
        validNeighbors.push([row -1, col]);         // push to validNeighbors array
    }

    if (row < rows - 1) {                           // DOWN: if neighbor below current node,
        validNeighbors.push([row + 1, col]);        // push to validNeighbors array
    }

    if (col > 0) {                                  // LEFT: if neighbor to left of current node,
        validNeighbors.push([row, col - 1]);        // push to validNeighbors array
    }

    if (col < cols - 1) {                           // RIGHT: if neighbor to right of current node,
        validNeighbors.push([row, col + 1]);        // push to validNeighbors array
    }
    return validNeighbors;
}

console.log(getNeighbors([2,2], matrix)); // returns [ [1,2], [3,2], [1,2], [3,2] ]
console.log(getNeighbors([0,0], matrix)); // returns [ [1,0], [0,1] ]
console.log(getNeighbors([2,0], matrix)); // returns [ [1,0], [3,0], [2,1] ]

// Traverse the graph
// Create a queue and enqueu the starting node
// While the queue is not empty, repeat the next three steps
// Dequeue the first node and check if its been visited
// If not visited, mark is a visited and DO THE THING
// Put all its neighbors in the back of the queue

const traverseMatrix = (matrix, startNode) => {
    return matrix[startNode];
}

const searchMatrix = (matrix, startNode, thingYouSearchFor) => {
    const visited = {};
    function dfs(node) {
        if (!visited[node]) {
            console.log(node);
            visited[node] = true;
            if (adjList[node]) {
                adjList[node].forEach(neighbor => dfs(neighbor));
            }
        }
    }

    dfs(startNode);
    // The thingYouSearchFor might represent an end node, a value in the matrix,
    // or some sort of condition that would need to be met to end the search
}
