'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  //enqueue places node at tail.
  enqueue(value) {
    // big O(n)
    if (value === null){
      return null;
    }

    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.length = 1;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length++;
    return this;
  }//Fx append

  dequeue(){

    let returnHead = this.head;
    this.head = this.head.next;
    this.length--;
    console.log(`item returned: ${returnHead.value}`);
    return returnHead.value;

  }

}//close queue class

module.exports = Queue;
