// File: addNums.js to testing console.time()

function addNums(n) {
    total = 0;
    for (let i =  1; i <= n; i++) {
        total += 1;
    }
    return total;
}

console.time("addNums");
addNums(100000);
console.timeEnd("addNums");
