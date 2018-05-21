
'use strict';

const linkedList = require('./lib/link-list.js');

let ll = new linkedList();

ll.append('0');

ll.append('1');

ll.append('2');

ll.append('3');

ll.append('4');


// ll.logList();

console.log(ll);

var dbSim = ll.serialize(ll);

ll.deserialize(dbSim);

// ll.logList();

// ll.insertNode('a', 0);

// ll.insertNode('b', 1);

// ll.insertNode('c', 2);

// console.log(ll.head.next.next.value);




// append(value) works
// prepend(value) works
// removeByValue(offsetVal) works
// removeByIndex(index) works
// findIndex(searchVal) works
// insertNode(index, value) works
// reverse() works
// logList() works