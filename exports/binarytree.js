'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor() {
    this.root = null;
    this.nodeCount = 0;
  }


  //for binary search
  append(value){
    // O(1) (helper function is looped)
    if (value === null){
      return null;
    }

    if(!this.root){
      this.root = new Node(value);
      this.nodeCount = 1;
      return this;
    }

    let _walk = (value) => {
      let currentNode = this.root;

      if(currentNode.value === value){
        return currentNode.value;
      }

      if(value < currentNode.value){
        if(currentNode.left === null){
          currentNode.left = new Node(value);
          this.nodeCount++;
          return this;
        }else if(currentNode.left !== null)
          return this.looptiverse(value, currentNode.left);
      }
      if(value > currentNode.value){
        if(currentNode.right === null){
          currentNode.right = new Node(value);
          this.nodeCount++;
          return this;
        }else if(currentNode.right !== null)
          return this.looptiverse(value, currentNode.right);
      }

    };
    _walk(value);

    // this.looptiverse(value, this.root);

  }//append

  // looptiverse(value, currentNode){
  //   //O(n)
  //   if(value === currentNode.value){
  //     return currentNode;
  //   }
  //
  //   if(value < currentNode.value){
  //     if(currentNode.left === null){
  //       currentNode.left = new Node(value);
  //       this.nodeCount++;
  //       return this;
  //     }else if(currentNode.left !== null)
  //       return this.looptiverse(value, currentNode.left);
  //   }
  //   if(value > currentNode.value){
  //     if(currentNode.right === null){
  //       currentNode.right = new Node(value);
  //       this.nodeCount++;
  //       return this;
  //     }else if(currentNode.right !== null)
  //       return this.looptiverse(value, currentNode.right);
  //   }
  //
  // }//looptiverse helper

}//binaryTree

module.exports = BinaryTree;
