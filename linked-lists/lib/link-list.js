'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {

    this.length = 0;

    this.head = null;

  }

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

  findIndex(searchVal){
    //search input by value key

    var currentNode = this.head;

    var index = -1;

    while(currentNode){

      index++;

      if(currentNode.value === searchVal){
        console.log(`${searchVal} found at index ${index}`);
        return index;
      }

      currentNode = currentNode.next;

    }

    return -1;
    //if not found

  }//Fx findIndex

  insertNode(index, value){

    let node = new Node(value);

    let currentNode = this.head;

    let currentIndex = 0;

    if(index > this.length){

      console.log('Index argument passed is larger than list length.');

      return false;

    }//works

    if(index === 0){

      node.next = currentNode;

      this.head = node;

    } //works

    else {


      while(currentIndex < index){

        currentIndex++;
        currentNode = currentNode.next;

        console.log(currentIndex);
        console.log(currentNode);

        

      }

      

    //     previousNode = currentNode;
    //     currentIndex++;
    //     currentNode = currentNode.next;
    //     // console.log(currentNode);
    //     console.log(previousNode);
    //   }
    // }
    //   while(currentIndex < index){

        
    //     previousNode = currentNode;
    //     // console.log('x' + previousNode);
    //     currentIndex++;
        
    //     currentNode = currentNode.next;
    //     //move down line until current node === index
    //   }
      
    //   node.next = currentNode;
    //   // console.log(previousNode);
    //   previousNode.next = node;//cannot read, previous node undefined?

    // }

    // this.length++;
    // return this;

    }//close else

  }//Fx insertNode

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

    // return this;

  }

  logList(){

    var currentNode = this.head;

    console.log('---');

    while (currentNode){

      console.log(currentNode.value);

      if (!currentNode.next){
        break;
      }
      currentNode = currentNode.next;
    }
    console.log('---');
  }

}//Fx LinkedList

module.exports = LinkedList;

// implement xappend(value), xprepend(value), xreverse(), and xxremove(offset) methods to the SLL class

// implement [ ] serialize() and [ ] deserialize() methods on the class

// in a comment within each function, note the it's Big-O runtime