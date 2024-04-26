//File: tree-practice.js

const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
    while (rootNode.left) {
        rootNode = rootNode.left;
    }
    return rootNode.val;
}

function findMaxBST(rootNode) {
    while (rootNode.right) {
        rootNode = rootNode.right;
    }
    return rootNode.val;
}

function findMinBT(rootNode) {
    let min = Infinity;
    const arrayTraversal = (currentNode) => {
        if (!currentNode) return;
        min = Math.min(min, currentNode.val);
        arrayTraversal(currentNode.left);
        arrayTraversal(currentNode.right);
    }
    arrayTraversal(rootNode);
    return min;
}

function findMaxBT(rootNode) {
    let max = -Infinity;
    const arrayTraversal = (currentNode) => {
        if (!currentNode) return;
        max = Math.max(max, currentNode.val);
        arrayTraversal(currentNode.left);
        arrayTraversal(currentNode.right);
    }
    arrayTraversal(rootNode);
    return max;
}

function getHeight(rootNode) {
    if (!rootNode) return -1;
    if (rootNode.left === null && rootNode.right === null) return 0;
    let totalHeights = [];
    const depthTraversal = (rootNode) => {
        let stack = [{ node: rootNode, height: 0 }];
        while (stack.length > 0) {
            const { node, height } = stack.pop();
            totalHeights.push(height);
            if (node.right !== null) {
                stack.push({ node: node.right, height: height + 1 });
            }
            if (node.left !== null) {
                stack.push({ node: node.left, height: height + 1 });
            }
        }
    };
    depthTraversal(rootNode);
    let maxHeight = totalHeights[0];
    totalHeights.forEach(num => { if (num > maxHeight) maxHeight = num});
    return maxHeight;
}

function balancedTree(rootNode) {
    const checkBalanced = (rootNode) => {
        let leftHeight = getHeight(rootNode.left);
        let rightHeight = getHeight(rootNode.right);
        if (Math.abs(leftHeight - rightHeight) > 1) return false;
        return true;
    }
    const breadthFirstTraversal = (rootNode) => {
        let queue = [rootNode];
        while (queue.length > 0) {
            const currentNode = queue.shift();
            if (!checkBalanced(currentNode)) return false;
            if (currentNode.left !== null) queue.push(currentNode.left);
            if (currentNode.right !== null) queue.push(currentNode.right);
        }
        return true;
    };
    return breadthFirstTraversal(rootNode);
}

function countNodes(rootNode) {
    let count = 0;
    const inOrderTraversal = (currentNode) => {
        if (currentNode) {
            inOrderTraversal(currentNode.left);
            count++;
            inOrderTraversal(currentNode.right);
        }
    }
    inOrderTraversal(rootNode);
    return count;
}

function getParentNode (rootNode, target) {
    if (rootNode.val === target) return null;
    const depthFirstTraversal = () => {
        let stack = [rootNode];
        let currentNode;
        while (stack.length > 0) {
            currentNode = stack.shift();
            if (currentNode.left !== null) {
                if (currentNode.left.val === target) return currentNode;
            stack.unshift(currentNode.left);
            }
            if (currentNode.right !== null) {
                if (currentNode.right.val === target) return currentNode;
                stack.unshift(currentNode.right);
            }
        }
    }
    return depthFirstTraversal();
}

function inOrderPredecessor (rootNode, target) {
    let vals = [];
    let predecessor = null;
    const inOrderTraversal = (currentNode= this.root) => {
        if (currentNode.left !== null) inOrderTraversal(currentNode.left);
        if (currentNode.val === target) {
            if (vals.length !== 0) predecessor = vals[vals.length - 1];
        }
        vals.push(currentNode.val);
        if (currentNode.right !== null) inOrderTraversal(currentNode.right);
    }
    inOrderTraversal(rootNode);
    return predecessor;
}

function deleteNodeBST(rootNode, target) {
    let parent = getParentNode(rootNode, target);   // Do a traversal to find the node. Keep track of the parent
    let child;
    if (rootNode.val === target) {
        child = rootNode;
        parent = new TreeNode();
        parent.left = undefined;
        parent.right = undefined;
    }
    if (!parent) return undefined;    // Undefined if the target cannot be found
    if (parent.left && parent.left.val === target) child = parent.left; // Set target based on parent
    if (parent.right && parent.right.val === target) child = parent.right;
    if (!parent && !child.left && !child.right) return null;    // Case 0: Zero children and no parent: return null
    if (!child.left && !child.right) {    // Case 1: Zero children:
        if (parent.left === child) parent.left = null;    // Set the parent that points to it to null
        if (parent.right === child) parent.right = null;
        return;
    }
    if (child.left && child.right) {    // Case 2: Two children:
        let temp = child.right;         //  Set the value to its in-order predecessor, then delete the predecessor
        while (temp.left !== null) {    //  Replace target node with the left most child on its right side,
            temp = temp.left;           //  or the right most child on its left side.
        }                               //  Then delete the child that it was replaced with.
        temp = temp.val;
        deleteNodeBST(rootNode, temp);
        child.val = temp;
        return;
    }
    if (child.left) {   // Case 3: One child:
        if (parent.left === child) parent.left = child.left;    //   Make the parent point to the child
        if (parent.right === child) parent.right = child.left;
    }
    if (child.right) {
        if (parent.left === child) parent.left = child.right;
        if (parent.right === child) parent.right = child.right;
        }
}


module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
