// File: LeetCode project isSameTree.js for checking if trees are similar

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isSameTree(p, q) {
    // Base case: If both nodes are null, they are the same
    if (!p && !q) {
        return true;
    }

    // If one of the nodes is null and the other is not, they are different
    if (!p || !q) {
        return false;
    }

    // Recursively check left and right subtrees
    return (
        p.val === q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right)
    );
}

// Example usage:
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(tree1, tree2)); // Output: true
