'use strict';

let LL = require('../../lib/link-list.js');

describe('Linked List', () => {

  it('append()', ()=> {

    let list = new LL();
    list.append(null);
    list.append(null);
    list.append(null);
    expect(list.logList()).toEqual([null,null,null]);
    
  });

  it('append()', ()=> {

    let list = new LL();
    list.append([]);
    list.append([]);
    list.append([]);
    expect(list.logList()).toEqual([[],[],[]]);
    
  });

  it('append()', ()=> {

    let list = new LL();
    list.append('a');
    list.append('b');
    list.append('c');
    expect(list.logList()).toEqual(['a','b','c']);
    
  });

  it('reverse()', ()=> {

    let list = new LL();

    list.append('a');
    list.append('b');
    list.append('c');
    list.reverse();

    expect(list.logList()).toEqual(['c','b','a']);
    
    list.reverse();

    expect(list.logList()).toEqual(['a','b','c']);
    
  });

  it('remove at index', () => {
    let list = new LL();
 
    list.append('First One');
    list.append('Something Else');
    list.append('Another One');
    list.removeByIndex(2);
 
    expect(list.length).toEqual(2);
 
    list.append('Another One');
    list.removeByIndex(0);
    expect(list.length).toEqual(2);
 
    list.prepend('New Head');
    list.append('Another One');
    list.removeByIndex(3);
    expect(list.length).toEqual(3);
  });

  it('remove at index', () => {
    let list = new LL();
 
    list.append('First One');
    list.append('Something Else');
    list.append('Another One');
    list.removeByValue('Another One');
 
    expect(list.length).toEqual(2);
 
    list.append('Another One');
    list.removeByValue('Another One');
    expect(list.length).toEqual(2);
 
    list.prepend('New Head');
    list.append('Another One');
    list.removeByValue(3);
    expect(list.length).toEqual(3);
  });
  

});

// append(value) works
// prepend(value) works
// removeByValue(offsetVal) works
// removeByIndex(index) works
// findIndex(searchVal) works
// insertNode(index, value) works
// reverse() works
// logList() works