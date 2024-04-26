// File: binarySearchTrees.js

function searchBST(root, target) {
    if (root === null) return false;
    if (target === root.value) return true;
    if (target < root.value) return searchBST(root.left, target);
    if (target > root.value) return searchBST(root.right, target);
}
