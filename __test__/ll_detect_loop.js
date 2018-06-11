'use strict';

const BinaryTree = require('../code_linked_lists/ll_detect_loop.js');

describe('binaryTree', () => {

  //global
  let tree02 = new BinaryTree();
  tree02.append(50);//I AM ROOT
  let tree01 = new BinaryTree();
  tree01.append(50);
  tree01.append(60);
  tree01.append(70);

  it('append', () => {
    //internam vars, if needed
    expect( FX ).toEqual();
  });

  it('preOrder', () => {
    expect( FX() ).toEqual();
  });

  it('postOrder', () => {
    expect( FX() ).toEqual();
  });

  it('inOrder', () => {
    expect( FX() ).toEqual();
  });

});


// 'use strict';
//
// const ll = require('./linked-lists/lib/link-list.js');
//
// let testList = new ll();
//
// testList.append('a');
// testList.append('b');
// testList.append('c');
// testList.append('d');
// testList.append('e');
// testList.append('f');
// testList.append('g');
// testList.append('h');
// // console.log(testList.head.value);
//
// testList.hasLoop();
//
// function createLoop (linkedList){
//   let currentNode = testList.head;
//   while(currentNode.next){
//     currentNode = currentNode.next;
//   }//currentNode is now the last node in the chain.
//   currentNode.next = testList.findK(linkedList, 4);
//   //last node in the chain's next is now the 4th index from the end: 'd'
// }
//
// createLoop(testList);
// // console.log(testList);
//
// testList.hasLoop();
