'use strict';

const Node = require('./nodebinary.js');

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

    let _walk = (value, node) => {

      if(node.value === value){
        return node.value;
      }

      if(value < node.value){
        if(node.left === null){
          node.left = new Node(value);
          this.nodeCount++;
          return this;
        }else if(node.left !== null){
          _walk(value, node.left);
        }
      }
      if(value > node.value){
        if(node.right === null){
          node.right = new Node(value);
          this.nodeCount++;
          return this;
        }else if(node.right !== null){
          _walk(value, node.right);        }
      }

    };
    console.log(this.root);
    _walk(value, this.root);

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
