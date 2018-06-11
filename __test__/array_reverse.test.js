'use strict';

let reverseArray = require('../code_arrays/array_reverse.js');

describe('Reverses array of integers', () => {
  it('reverseArray([1,2,3,4])', () => {
    let newArray = reverseArray([1,2,3,4]);
    expect(newArray).toEqual([4,3,2,1]);
  });
});

describe('Reverses mixed types array', () => {
  it('reverseArray([banana,7,slugbug])', () => {
    let newArray = [];
    newArray = reverseArray(['banana',7,'slugbug']);
    expect(newArray).toEqual(['slugbug',7,'banana']);
  });
});
