const { NotImplementedError } = require("../lib/errors");
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.items = null;
  }

  getUnderlyingList() {
    return this.items;
  }

  enqueue(value) {
    const newNode = { value, next: null };
    if (!this.items) {
      this.items = newNode;
      return;
    }

    let current = this.items;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  dequeue() {
    if (!this.items) return undefined;
    const value = this.items.value;
    this.items = this.items.next;
    return value;
  }
}

module.exports = {
  Queue,
};
