'use strict';

const arrayShift = require('../../array_shift.js'); //
const assert = require('assert'); 

it('315: insertShift() inserts properly', () => {
  let testArray = arrayShift([1, 3, 2, 4], 7);
  expect( testArray ).toEqual([1, 3, 7, 2, 4]);
});