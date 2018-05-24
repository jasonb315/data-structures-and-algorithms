'use strict';

const ll = require('./linked-lists/lib/link-list.js');

let testList = new ll();

testList.append('a');
testList.append('b');
testList.append('c');
testList.append('d');
testList.append('e');
testList.append('f');
testList.append('g');
testList.append('h');
// console.log(testList.head.value);

testList.hasLoop();

function createLoop (linkedList){
  let currentNode = testList.head;
  while(currentNode.next){
    currentNode = currentNode.next;
  }//currentNode is now the last node in the chain.
  currentNode.next = testList.findK(linkedList, 4);
  //last node in the chain's next is now the 4th index from the end: 'd'
}

createLoop(testList);
// console.log(testList);

testList.hasLoop();
