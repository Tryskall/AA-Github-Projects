// File: intro-tester.js

const graph1 = {
    T: new Set(['V']),
    U: new Set(['V']),
    V: new Set([]),
}

const graph2 = {
    X: new Set (['Y']),
    Y: new Set (['Z']),
    Z: new Set (['X']),
}

const graph3 = {
    A: new Set(['B', 'C', 'E']),
    B: new Set([]),
    C: new Set(['B', 'D']),
    D: new Set([]),
    E: new Set(['A']),
    F: new Set(['E']),
}

const undirected = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4],
}

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: []
}

// const printBreadthFirst = (start) => {
//     const visited = new Set();
//     const resultArray = [];
//     const queue = [start];
//     while (queue.length > 0) {
//         const currentVertex = queue.shift();
//         if (!visited.has(currentVertex)) {
//             resultArray.push(currentVertex);
//             console.log(resultArray);
//             visited.add(currentVertex);
//             const neighbors = adjList[currentVertex] || [];
//             for (const neighbor of neighbors) {
//                 if (!visited.has(neighbor)) {
//                     queue.push(neighbor);
//                 }
//             }
//         }
//     }
//     return resultArray.join('\n');
// }

// console.log('First Test: ');
// printBreadthFirst(adjList, 3);
// console.log('Second Test: ');
// printBreadthFirst(adjList, 6);
// console.log('Third Test: ');
// printBreadthFirst(adjList, 4);

// function printDepthFirst(startNode) {
//     const visited = {};

//     function dfs(node) {
//         if (!visited[node]) {
//             console.log(node);
//             visited[node] = true;
//             if (adjList[node]) {
//                 adjList[node].forEach(neighbor => dfs(neighbor));
//             }
//         }
//     }

//     dfs(startNode);
// }

// console.log('First Test:');
// printDepthFirst(3);
// console.log('Second Test:');
// printDepthFirst(6);
// console.log('Third Test:');
// printDepthFirst(4);

// function breadthFirstSearch(start, end) {
//     const visited = new Set();
//     const queue = [start];
//     while (queue.length > 0) {
//         const currentVertex = queue.shift();
//         if (currentVertex === end) {
//             return true;
//         }
//         if (!visited.has(currentVertex)) {
//             visited.add(currentVertex);
//             const neighbors = adjList[currentVertex] || [];
//             for (const neighbor of neighbors) {
//                 if (!visited.has(neighbor)) {
//                     queue.push(neighbor);
//                 }
//             }
//         }
//     }
//     return false;
// }

// console.log('First Test:');
// console.log(breadthFirstSearch(1, 3));
// console.log('Second Test:');
// console.log(breadthFirstSearch(4, 1));
// console.log('Third Test:');
// console.log(breadthFirstSearch(6, 1));



// function aShortestPath(start, end) {
//     const queue = [[start]];
//     const visited = new Set();
//     while (queue.length > 0) {
//         const currentPath = queue.shift();
//         const currentVertex = currentPath[currentPath.length - 1];
//         if (currentVertex === end) {
//             return currentPath;
//         }
//         if (!visited.has(currentVertex)) {
//             visited.add(currentVertex);
//             const neighbors = adjList[currentVertex] || [];
//             for (const neighbor of neighbors) {
//                 if (!visited.has(neighbor)) {
//                     const newPath = currentPath.concat(neighbor);
//                     queue.push(newPath);
//                 }
//             }
//         }
//     }
//     return false;
// }

// console.log("First Test:");
// console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
// console.log("Second Test:");
// console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log("Third Test:");
// console.log(aShortestPath(6, 1)); // -> false

function degreesOfSeparation(start, end) {
    const queue = [[start]];
    const visited = new Set();

    while (queue.length > 0) {
        const currentPath = queue.shift();
        const currentVertex = currentPath[currentPath.length - 1];

        if (currentVertex === end) {
            return currentPath.length - 1;  // Degrees of separation
        }

        if (!visited.has(currentVertex)) {
            visited.add(currentVertex);
            const neighbors = adjList[currentVertex] || [];

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    const newPath = currentPath.concat(neighbor);
                    queue.push(newPath);
                }
            }
        }
    }

    return false;  // No connection found
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
