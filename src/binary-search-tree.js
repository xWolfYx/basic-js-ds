const { NotImplementedError } = require("../lib/errors");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let currentNode = this.rootNode;

    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) return currentNode;

      currentNode =
        data < currentNode.data ? currentNode.left : currentNode.right;
    }

    return null;
  }

  has(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) return true;

      currentNode =
        data < currentNode.data ? currentNode.left : currentNode.right;
    }

    return false;
  }

  remove(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  min() {
    let currentNode = this.rootNode;

    while (currentNode && currentNode.left) currentNode = currentNode.left;

    return currentNode.data || null;
  }

  max() {
    let currentNode = this.rootNode;

    while (currentNode && currentNode.right) currentNode = currentNode.right;

    return currentNode.data || null;
  }
}

module.exports = {
  BinarySearchTree,
};
