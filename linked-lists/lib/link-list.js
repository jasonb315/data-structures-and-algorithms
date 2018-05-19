'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {

    this.length = 0;

    this.head = null;

  }

  //NODE.JS REFRENCE

  // class Node {
  //   constructor(value) {
  //     this.value = value;
  //     this.next = null;
  //   }
  // }

  append(value) {
    
    let node = new Node(value);

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

  removeByValue(offsetVal) {

    let currentNode = this.head;
    let previousNode = currentNode;
 
    if(currentNode.value === offsetVal){

      //if HEAD is being removed
      this.head = currentNode.next;

    } else {

      while(currentNode.value !== offsetVal){
        previousNode = currentNode;
        currentNode = currentNode.next;

      }

      //connect across/through current node after val match found
      previousNode.next = currentNode.next;

    }

    this.length--;

  }//F removeByVal

  removeByIndex(index){

    var currentNode = this.head;

    var previousNode;

    var currentIndex = 0;

    if(index < 0 || index >= this.length){

      console.log('requested index is out of bounds');
      return null;

    }

    if (index === 0){

      this.head = currentNode.next;

    } else {

      while(currentIndex < index){

        currentIndex++;

        previousNode = currentNode;

        currentNode = currentNode.next;

      }

      previousNode.next = currentNode.next;

    }

    this.length--;

    return currentNode.value;

  }//Fx removeByIndex

  lengthOf(){

    console.log(`this.length: ${this.length}`);

    return this.length;

  }//Fx lengthOf

  findIndex(searchVal){
    //search input by value key

    var currentNode = this.head;

    var index = -1;

    while(currentNode){

      index++;

      if(currentNode.value === searchVal){
        return index;
      }

      currentNode = currentNode.next;

    }

    return -1;
    //if not found

  }//Fx findIndex

  insertNode(index, value){

    let node = new Node(value);

    var currentNode = this.head;

    var previousNode;

    var currentIndex = 0;

    if(index > this.length){

      console.log('Index argument passed is larger than list length.');
      return false;

    }

    if(index === 0){
      //user is inserting node as new HEAD

      node.next = currentNode;

      this.head = node;

    } else {

      while(currentIndex < index){

        currentIndex++;

        previousNode = currentNode;//c becomes p in next line

        currentNode = currentNode.next;//move down line until current node === index

      }

      node.next = currentNode;

      previousNode.next = node;

    }
    this.length++;
  }//Fx insertNode




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
// ximplement a Singly Linked List (SLL) data structure
// implement xappend(value), xprepend(value), reverse(), and xxremove(offset) methods to the SLL class

// implement serialize() and deserialize() methods on the class

// in a comment within each function, note the it's Big-O runtime