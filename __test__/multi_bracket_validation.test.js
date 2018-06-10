'use strict';

const Braces = require('../code_linked_lists/multi_bracket_validation.js');

describe('Tests for the Multi-Bracket Validation', () => {

  let BalancedBraces = new Braces();

  it ('note', () => {

    expect(BalancedBraces.balancedBracesFun('{[()]}')).toEqual(false);
  });

  it ('note', () => {

    expect(BalancedBraces.balancedBracesFun('{[q()]}')).toEqual(false);
  });

  it ('note', () => {

    expect(BalancedBraces.balancedBracesFun(null)).toEqual(false);
  });

});
