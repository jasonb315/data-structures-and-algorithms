'use strict';

const Node = require('../code_trees/bnode.js');

class BinaryTree {

  constructor(root = null) {
    this.root = root;
  }

  preOrder() {

    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  postOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);

    return results;
  }

  inOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  //////

  insert(value) {

    const node = this.root;
    if ( node === null ) {
      this.root = new Node(value);
      return;
    }

    let _insert = (node) => {

      // Left is less  (< value)  ()< value  ()< value  ()< value
      if ( value < node.value ) {
        // If no left node, create a new node for it, with the current value
        if ( node.left === null ) {
          node.left = new Node(value);
          return;
        }
        // Otherwise,
        else if ( node.left !== null ) {
          return _insert(node.left);
        }
      }
      // Right is might (> value)
      else if ( value >= node.value ) {
        // If no right node, create a new node for it, with the current value
        if ( node.right === null ) {
          node.right = new Node(value);
          return;
        }
        // Otherwise,
        else if ( node.right !== null ) {
          return _insert(node.right);
        }
      }
      else {
        return null;
      }
    };

    _insert(value);

  }

  //////

  remove(data) {

    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  min() {
    let current = this.root;
    while(current.left !== null ) {
      current = current.left;
    }
    return current.value;
  }

  max() {
    let current = this.root;
    while(current.right !== null ) {
      current = current.right;
    }
    return current.value;
  }


  minHeight(node=this.root) {

    if ( node === null ) { return -1; }

    let left = this.minHeight(node.left);
    let right = this.minHeight(node.right);

    if (left < right) { return left + 1; }
    else { return right + 1; }

  }

  maxHeight(node=this.root) {

    if ( node === null ) { return -1; }

    let left = this.maxHeight(node.left);
    let right = this.maxHeight(node.right);

    if (left > right) { return left + 1; }
    else { return right + 1; }

  }

  // isBalanced(node=this.root) {
  //   return ( this.minHeight() >= (this.maxHeight() - 1) );
  // }

  xinOrder() {

    let results = [];

    let _walk = (node) => {
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  fetch(value) {

    let current = this.root;

    while( current.value !== value ) {
      if ( value < current.value ) {
        current = current.left;
      }
      else {
        current = current.right;
      }
      if ( current === null ) { return null; }
    }

    return current;
  }

  exists(value) {

    let current = this.root;

    while( current ) {
      if ( current.value === value ) { return true; }
      if ( value < current.value ) { current = current.left; }
      else { current = current.right; }
    }

    return false;
  }

  sum(node=this.root) {
    if (!node) { return 0; }
    return (node.value + this.sum(node.left) + this.sum(node.right));
  }

  closest(value) {

    let node = this.root;
    let minDistance = 32768;//could use do while loop.
    let closestNode = null;

    while(node != null) {

      let distance = Math.abs( node.value - value );

      if(distance < minDistance) {
        minDistance = distance;
        closestNode = node;
      }

      if(distance == 0) { break; }

      if(node.value > value) {
        node = node.left;
      }

      else if(node.value < value) {
        node = node.right;
      }

    }

    return closestNode;

  }


}//fx

module.exports = BinaryTree;
