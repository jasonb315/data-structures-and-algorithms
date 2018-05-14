'use strict';

const arrayBS = require('../../array_binary_search.js'); //

it('315: insertShift() inserts properly', () => {
  let testArray = arrayBS([1,2,3,4,5,6,7,8,9], 7);
  expect( testArray ).toEqual(6);
});