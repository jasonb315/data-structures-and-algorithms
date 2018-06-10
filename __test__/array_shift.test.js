'use strict';

let insertShiftArray = require('../code_arrays/array_shift.js');

describe('Inserts key in middle of even array', () => {
  it('insertShiftArray([1,2,3,4], 7)', () => {
    let newArray = insertShiftArray([1,2,3,4], 7);
    expect(newArray).toEqual([1,2,7,3,4]);
  });
});

describe('Inserts key in middle mixed types array', () => {
  it('insertShiftArray([banana,7,slugbug], 2)', () => {
    let newArray = insertShiftArray(['banana',7,'slugbug'], 2);
    expect(newArray).toEqual(['banana',7,2,'slugbug']);
  });
});

describe('Inserts key in middle of odd array', () => {
  it('insertShiftArray([1,9,7], 2)', () => {
    let newArray = insertShiftArray([1, 9, 7], 2);
    expect(newArray).toEqual([1,9,2,7]);
  });
});
