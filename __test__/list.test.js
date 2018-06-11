'use strict';

const List = require('../code_arrays/list.js'); //

describe('ArrayBinarySearch', () => {

  let list = new List;
  list.push(1);

  it('BinarySearch() inserts properly', () => {
    expect( list.length ).toEqual(1);
  });

  list.push('a');

  it('BinarySearch() inserts properly', () => {
    expect( list.length ).toEqual(2);
  });


});
