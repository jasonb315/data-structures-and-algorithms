'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {

    this.length = 0;

    this.head = null;

  }

  //NODE REFRENCE

  // class Node {
  //   constructor(value) {
  //     this.value = value;
  //     this.next = null;
  //   }
  // }

  append(value) {
    
    let node = new Node(value);

    // This happens if the list is empty
    if (!this.head) {

      this.head = node;
      // return this;

    } else {

      let currentNode = this.head;

      while (currentNode.next) {
        
        currentNode = currentNode.next;

      }
      currentNode.next = node;
    }

    this.length++;
    // return this;

  }//Fx append

  prepend(value) {

    let newNode = new Node(value);

    newNode.next = this.head;

    this.head = newNode;

    this.length++;

    // return this;

  }//Fx prepend

  remove(offset) {

    let currentNode = this.head;
    let previousNode = currentNode;
 
    if(currentNode.value === offset){

      this.head = currentNode.next;

    } else {

      while(currentNode.value !== offset){
        previousNode = currentNode;
        currentNode = currentNode.next;

      }

      previousNode.next = currentNode.next;

    }

    this.length--;

  }//F remove

  //   for (var i = 0; i < this.length; i++) {
  //     if (offset == i) {
  //       let tempNode = currentNode.next;
  //       currentNode = undefined;
  //       prevNode.next = tempNode;
  //       this.length--;
  //       break;
  //     }
  //     prevNode = currentNode;
  //     currentNode = currentNode.next;
  //   }
 
  //   return this;
  // }

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

}//Fx LinkedList

module.exports = LinkedList;


// Feature Tasks
// implement a Singly Linked List (SLL) data structure
// implement append(value), prepend(value), reverse(), and remove(offset) methods to the SLL class
// implement serialize() and deserialize() methods on the class
// in a comment within each function, note the it's Big-O runtime