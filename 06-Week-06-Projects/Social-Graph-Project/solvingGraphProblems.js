// File: solvingGraphProblems.js

// Three steps to solve (almost) any graph problem

// Identify and define the type of graph
// Implement the getNeighbors function
// Travers the graph

// Create a queue and enqueue the starting node
// Create a set to store visited node
// While the queue is not empty, repeat the next 3 steps
// -- Dequeue the first node and check if it's been visited
// -- If not visited, mark it as visited and DO THE THING
// -- Put all of its neighbors in the back of the queue

const friendships = {
    'Alice': ['Bob', 'Frank'],
    'Bob': ['Alice', 'Charlie', 'Geraldine'],
    'Charlie': ['David', 'Bob'],
    'David': ['Charlie', 'Frank'],
    'Eve': [],
    'Frank': ['Alice', 'Charlie'],
    'Geraldine': ['Bob']
}

const getNeighbors = (node, graph) => {
    return graph[node];
}

const socialConnections = (name, degrees, graphs) => {
    let result = [];
    const visited = new Set();
    const explore = (node, currentDegrees) => {
        if (currentDegrees > degrees) {
            return;
        }
        visited.add(node);
        if (currentDegrees > 0) {
            result.push(node);
        }
        const friends = graphs[node] || [];
        for (const friend of friends) {
            if (!visited.has(friends)) {
                explore(friend, currentDegrees + 1);
            }
        }
    }
    explore(name, 0);
    result = result.filter(person => person !== name);
    const uniqueResult = [... new Set(result)];
    return uniqueResult;
}

console.log(socialConnections('Alice', 1, friendships));
console.log(socialConnections('Alice', 2, friendships));
