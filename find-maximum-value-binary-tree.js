'use strict';

const Tree = require('./exports/binarytree.js');

const tree = new Tree();

tree.append(50);
tree.append(60);
tree.append(70);
tree.append(40);
tree.append(30);
tree.append(59);
tree.append(58);
tree.append(69);
tree.append(68);

function findMaximumValueBinaryTree(tree){

  let highScore = tree.root.value;

  let _walk = (node) => {
    if(node.value > highScore){highScore = node.value;}
    if(node.left){_walk(node.left);}
    if(node.right){_walk(node.right);}
  };
  _walk(tree.root);
  return highScore;
}

findMaximumValueBinaryTree(tree);
