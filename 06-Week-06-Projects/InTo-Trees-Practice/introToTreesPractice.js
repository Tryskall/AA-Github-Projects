// File: introToTrees.js

// Binary Tree with Node Instances

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


function linkedListSearch(linkedList, target) {
    if (linkedList.head === null) return false;
    if (linkedList.head.value === target) return true;
    return linkedListSearch(linkedList.head.next);
}

console.log(linkedListSearch([a,b,c,d,e,f]), d);

function binaryTreeSearch(root, target) {
    if (root === null) return false;
    if (root.value === target) return true;
    if (binaryTreeSearch(root.left, target)) return true;
    return binaryTreeSearch(root.right, target);
}

function binaryTreeSum(root) {
    if (root === null) return 0;
    const leftSum = binaryTreeSum(root.left);
    const rightSum = binaryTreeSum(root.right);
    return root.value + leftSum + rightSum;
}

function breadthFirstTraversal(root) {
    const queue = new Queue();
    queue.enqueue(root);
    while (queue.size > 0) {
        let node = queue.dequeue();
        console.log(node.value);
        queue.enqueue(node.left);
        queue.enqueue(node.right);
    }
}

function breadthFirstTraversalArray(root) {
    const queue = [];
    queue.push(root);
    while (queue.size > 0) {
        let node = queue.shift();
        console.log(node.value);
        queue.push(node.left);
        queue.push(node.right);
    }
}

function depthFirstTraversal(root) {
    const stack = [];
    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        console.log(node.value);
        stack.push(node.right);
        stack.push(node.left);
    }
}
