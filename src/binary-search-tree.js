const { NotImplementedError } = require("../extensions/index.js");

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
    } else {
      let currentNode = this.rootNode;

      while (currentNode) {
        if (data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
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
  }

  has(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    let currentNode = this.rootNode;
    let parentNode = null;

    while (currentNode && currentNode.data !== data) {
      parentNode = currentNode;
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    if (!currentNode) return;

    if (!currentNode.left && !currentNode.right) {
      if (parentNode) {
        if (parentNode.left === currentNode) {
          parentNode.left = null;
        } else {
          parentNode.right = null;
        }
      } else {
        this.rootNode = null;
      }
    } else if (!currentNode.left) {
      if (parentNode) {
        if (parentNode.left === currentNode) {
          parentNode.left = currentNode.right;
        } else {
          parentNode.right = currentNode.right;
        }
      } else {
        this.rootNode = currentNode.right;
      }
    } else if (!currentNode.right) {
      if (parentNode) {
        if (parentNode.left === currentNode) {
          parentNode.left = currentNode.left;
        } else {
          parentNode.right = currentNode.left;
        }
      } else {
        this.rootNode = currentNode.right;
      }
    } else {
      let minNode = currentNode.right;
      let minNodeParent = currentNode;

      while (minNode.left) {
        minNodeParent = minNode;
        minNode = minNode.left;
      }

      currentNode.data = minNode.data;

      if (minNodeParent.left === minNode) {
        minNodeParent.left = minNode.right;
      } else {
        minNodeParent.right = minNode.right;
      }
    }
  }

  min() {
    let currentNode = this.rootNode;

    while (currentNode && currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode ? currentNode.data : null;
  }

  max() {
    let currentNode = this.rootNode;

    while (currentNode && currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode ? currentNode.data : null;
  }
}

module.exports = {
  BinarySearchTree,
};
