'use strict';

const breadthFirstTraversal = require('../code_trees/breadth_first_traversal.js');
const BinaryTree = require('../code_trees/binary_tree.js');

// const Node = require('../code_binary_tree/bnode.js');

describe('Tests for the Breadth First Traversal', () => {

  const tree02 = new BinaryTree();

  tree02.insert(50);
  tree02.insert(60);
  tree02.insert(70);
  tree02.insert(40);
  tree02.insert(30);
  tree02.insert(59);
  tree02.insert(58);
  tree02.insert(69);
  tree02.insert(68);


  it('check if the root node is correct', () => {
    expect(tree02.root.value).toBe(50);
  });

  it('check if the root node is correct', () => {
    expect(breadthFirstTraversal(tree02)).toBe(60);
  });


});
