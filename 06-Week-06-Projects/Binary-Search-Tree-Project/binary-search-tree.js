// File: binary-search-tree.js

// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    insert(val, currentNode=this.root) {
      if (this.root === null) {
        this.root = new TreeNode(val);
        return;
      }
      if (val < currentNode.val) {
        if (currentNode.left === null) {
            currentNode.left = new TreeNode(val);
        } else {
            this.insert(val, currentNode.left);
        }
        return;
      } else if (val, currentNode.val) {
        if (currentNode.right === null) {
            currentNode.right = new TreeNode(val);
        } else {
            this.insert(val, currentNode.right);
        }
        return;
      }
    }

    search(val, currentNode=this.root) {
      if (currentNode === null) return false;
      if (currentNode.val === val) return true;
      if (val < currentNode.val) {
        return this.search(val, currentNode.left)
      } else if (val > currentNode.val) {
        return this.search(val, currentNode.right);
      }
    }

    preOrderTraversal(currentNode = this.root) {
        console.log(currentNode.val);
        if (currentNode.left) this.preOrderTraversal(currentNode.left);
        if (currentNode.right) this.preOrderTraversal(currentNode.right);
        return;
    }

    inOrderTraversal(currentNode = this.root) {
        if (currentNode === null) return;
        if (currentNode.left) this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        if (currentNode.right) this.inOrderTraversal(currentNode.right);
        return;
    }


    postOrderTraversal(currentNode = this.root) {
        if (currentNode === null) return;
        if (currentNode.left) this.postOrderTraversal(currentNode.left);
        if (currentNode.right) this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);
        return;
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      let queue = [];
      queue.push(this.root);
      while (queue.length > 0) {
        let currentNode = queue.shift();
        console.log(currentNode.val);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      let stack = [];
      stack.push(this.root);
      while ( stack.length > 0) {
        let currentNode = stack.pop();
        console.log(currentNode.val);
        if (currentNode.left) stack.push(currentNode.left);
        if (currentNode.right) stack.push(currentNode.right);
      }
  }
  }

  module.exports = { BinarySearchTree, TreeNode };
