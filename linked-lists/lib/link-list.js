'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {

    this.length = 0;

    this.head = null;

  }

  append(value) {
    // big O(n)

    // if (value === null){

    // }

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
    // big O(1)

    let newNode = new Node(value);

    newNode.next = this.head;

    this.head = newNode;

    this.length++;

    // return this;

  }//Fx prepend

  removeByValue(offsetVal) {
    // big O(n)

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
    // big O(n)

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
    // big O(n)

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
    // big O(n)

    let node = new Node(value);

    let currentNode = this.head;

    let currentIndex = 0;

    let wubbalubbadubdub;

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
        wubbalubbadubdub = currentNode;
        currentNode = currentNode.next;

      }

      wubbalubbadubdub.next = node;
      node.next = currentNode;

    }
    this.length++;
  }//Fx insertNode

  
  insertNodeAfter(index, value){
    // big O(n)

    let node = new Node(value);

    let currentNode = this.head;

    let currentIndex = 0;

    let wubbalubbadubdub;

    if(index > this.length){

      console.log('Index argument passed is larger than list length.');

      return false;

    }//works

    if(index === 0){

      node.next = currentNode;

      this.head = node;

    } //works

    else {


      while(currentIndex <= index){

        currentIndex++;
        wubbalubbadubdub = currentNode;
        currentNode = currentNode.next;

      }

      wubbalubbadubdub.next = node;
      node.next = currentNode;

    }
    this.length++;
  }//Fx insertNode

  
  reverse() {
    // big O(n)

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
    // big O(n)

    var currentNode = this.head;
    var list = [];
    // console.log('---');

    while (currentNode){

      list.push(currentNode.value);
      console.log(currentNode.value);

      if (!currentNode.next){
        break;
      }
      currentNode = currentNode.next;
    }
    // console.log('---');
    return list;
  }

  serialize() {
    var serialized = JSON.stringify(this);
    //server stuff - DB
    return serialized;
  }
 
  deserialize() {
    var deserialized = JSON.parse(JSON.stringify(this));
    // DB - server stuff
    return deserialized;
  }

  // serialize(obj){

  //   var serialized = JSON.stringify(obj);

  //   console.log(serialized);

  //   return serialized;

  // }


  // deserialize(jsonObj){

  //   var deserialized = JSON.parse(jsonObj);

  //   console.log(deserialized);

  //   return deserialized;
  // }


}//Fx LinkedList

module.exports = LinkedList;