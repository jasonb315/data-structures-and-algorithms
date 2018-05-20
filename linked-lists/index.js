
'use strict';

const linkedList = require('./lib/link-list.js');

let ll = new linkedList();

ll.append('jason');

ll.append('harneet');

ll.append('baby');


ll.logList();

ll.reverse();

ll.logList();


ll.insertNode('a', 0);

ll.insertNode('b', 1);

ll.insertNode('c', 2);


ll.logList();





// append(value)
// prepend(value)
// removeByValue(offsetVal)
// removeByIndex(index)
// findIndex(searchVal)
// insertNode(index, value)
// reverse()
// logList()