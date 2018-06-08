'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.nodeCount = 0;
  }
}


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

const tree = new BinaryTree(one);

tree.root = one;
one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;



function fizzBuzzTree(atree) {

  if (!atree.root) return undefined;

  let mutate = (node) => {
    if (node.value % 15 === 0) return 'FizzBuzz';
    if (node.value % 5 === 0) return 'Buzz';
    if (node.value % 3 === 0) return 'Fizz';
    if(node.left) mutate(node.left);
    if(node.right) mutate(node.right);
  };
  mutate(atree.root);
  return atree;
}


module.exports = fizzBuzzTree;
