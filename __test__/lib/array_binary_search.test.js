'use strict';

const arrayBS = require('../../array_binary_search.js'); //
console.log(arrayBS.BinarySearch);
it('315: BinarySearch() inserts properly', () => {
  let testArray = arrayBS.BinarySearch([1,2,3,4,5,6,7,8,9], 7);
  expect( testArray ).toEqual(6);
});