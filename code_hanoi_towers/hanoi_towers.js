'use strict';

module.exports = exports = {};

// var steps = [];

function hanoi(discs, origin, destination, between) {

  if (discs >= 1) {
    hanoi(discs - 1, origin, between, destination);

    // steps.push(`Move disk from, ${origin}, to, ${destination}`);
    console.log('Move disk from', origin, ' to ', destination);
    hanoi(discs - 1, between, destination, origin);

  }
  // steps.push(`Move disk from, ${origin}, to, ${destination}`);
  // console.log(steps);
  return;

}

hanoi(4, 'A', 'C', 'B');
