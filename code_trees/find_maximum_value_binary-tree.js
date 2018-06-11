'use strict';

const Tree = require('./binary_tree.js');

const tree = new Tree();

tree.insert(50);
tree.insert(60);
tree.insert(70);
tree.insert(40);
tree.insert(30);
tree.insert(59);
tree.insert(58);
tree.insert(69);
tree.insert(68);


let highScore = tree.root.value;

function findMaximumValueBinaryTree(tree){
  console.log(tree);
  let _walk = (node) => {
    console.log('ding');
    if(node.value > highScore){highScore = node.value;}
    if(node.left){_walk(node.left);}
    if(node.right){_walk(node.right);}
  };
  _walk(tree.root);
  console.log(highScore);
  return highScore;
}

findMaximumValueBinaryTree(tree);

module.exports = findMaximumValueBinaryTree;
