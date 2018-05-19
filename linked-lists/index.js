
'use strict';

const linkedList = require('./lib/link-list.js');

let ll = new linkedList();

ll.append('OVI');
console.log(ll);
console.log(ll.length);
ll.append('JASON');
console.log(ll);
console.log(ll.length);
ll.append('DEMI1');
console.log(ll);
console.log(ll.length);
ll.append('DEMI2');
console.log(ll);
console.log(ll.length);
ll.append('DEMI3');
console.log(ll);
console.log(ll.length);
ll.append('DEMI3');
console.log(ll);
console.log(ll.length);

console.log('---');

ll.append('DEMI3');
console.log(ll);
console.log(ll.length);

console.log('---');

ll.remove('DEMI2');
console.log(ll);
console.log(ll.length);