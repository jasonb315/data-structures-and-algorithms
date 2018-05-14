'use strict';

const arrayShift = require('../../array_shift.js'); //
const assert = require('assert'); 

it('insertShift() puts the value in the middle index', () => {
  let testArray = arrayShift([1, 3, 2, 4], 7);
  expect( testArray ).toEqual([1, 3, 7, 2, 4]);
});