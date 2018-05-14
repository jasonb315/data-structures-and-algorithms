'use strict';

const arrayBS = require('../../array_binary_search.js'); //
console.log(arrayBS.BinarySearch);
it('315: BinarySearch() inserts properly', () => {
  let testArray = arrayBS.BinarySearch([4,8,15,16,23,42], 12);
  expect( testArray ).toEqual(-1);
});