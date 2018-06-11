'use strict';

const Tower = require('../code_hanoi_towers/hanoi_towers.js');

describe('Tests for Towers Of Tower', () => {

  it ('Count the number of steps required to meet the results for 3 discs', () => {
    let toh = new Tower;
    toh.Tower(3, 'start', 'buffer', 'dest');
    expect(toh.steps).toBe(7);
  });

  it ('Count the number of steps required to meet the results for 2 discs', () => {
    let toh = new Tower;
    toh.Tower(2, 'start', 'buffer', 'dest');
    expect(toh.steps).toBe(3);
  });

  it ('Count the number of steps required to meet the results for 7 discs', () => {
    let toh = new Tower;
    toh.Tower(7, 'start', 'buffer', 'dest');
    expect(toh.steps).toBe(127);
  });

});
