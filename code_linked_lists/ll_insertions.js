'use strict';

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(value){

    let node = value;
    if(!this.head){
      this.head = node;
    }

    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode = node;
    return this;
  }

  insertBefore(value, newValue) {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      if (currentNode.value === value) {
        break;
      }
    }

    prevNode.next = new Node(newValue);
    prevNode.next.next = currentNode;
    this.length++;
    return this;
  }

  insertAfter(value, newValue){
    let currentNode = this.head;
    let nextNode = currentNode.next;
    let newNode = newValue;
    while(currentNode.next){
      if(currentNode.value === value){
        currentNode.next = newNode;
        newNode.next = nextNode;
      }
      break;
    }
    return this;
  }
}


module.exports = LinkedList;
