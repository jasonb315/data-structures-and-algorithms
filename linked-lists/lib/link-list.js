'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    let node = new Node(value);

    // This happens if the list is empty
    if (!this.head) {
      this.head = node;
      this.length = 1;
      return this;
    }

    // If we have stuff, need add to end
    let currentNode = this.head;
    while (currentNode.next) {

      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  remove(offset) {
    let currentNode = this.head;
    let prevNode = currentNode;
 
    for (var i = 0; i < this.length; i++) {
      if (offset == i) {
        let tempNode = currentNode.next;
        currentNode = undefined;
        prevNode.next = tempNode;
        this.length--;
        break;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
 
    return this;
  }

  reverse() {
    var currentNode = this.head;
    var next = null;
    var prev = null;
    
    while(currentNode) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    this.head = prev;

    return this;
  }

}

module.exports = LinkedList;


// Feature Tasks
// implement a Singly Linked List (SLL) data structure
// implement append(value), prepend(value), reverse(), and remove(offset) methods to the SLL class
// implement serialize() and deserialize() methods on the class
// in a comment within each function, note the it's Big-O runtime