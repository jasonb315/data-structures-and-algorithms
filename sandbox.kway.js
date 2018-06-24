'use strict';
const inspect = require('util-inspect');
const Ktree = require ('./code_trees/kway_tree.js');
const Node = require ('./code_trees/kway_node.js');

let brain = new Ktree;
// console.log(brain);

brain.proGen(315);

// console.log(inspect(brain));

// reGen(stemFrom, genVal)
brain.reGen(315, 'a');
brain.reGen(315, 'b');
brain.reGen(315, 'c');
brain.reGen(315, 'c');
brain.reGen(315, 'c');

// console.log(inspect(brain.root));
// console.log(brain.root.children);

brain.reGen('b', 100);
brain.reGen(100, 'z');

// console.log(brain.root.children);


// brain.root.children[0] = new Node('315');

//                 console.log(inspect(brain));
//            console.log(inspect(brain.root));
//   console.log(inspect(brain.root.children));

