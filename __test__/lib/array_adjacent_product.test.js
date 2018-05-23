'use strict';

const adjacent = require('../../array_adjacent_product.js'); //

describe('ArrayBinarySearch', () => {

  it('315: functional product', () => {
    let testOutput = adjacent.largestProduct( [ [1,1,1],[1,1,1],[1,1,1] ]);
    expect( testOutput ).toEqual(1);
  });

  it('315: functional product', () => {
    let testOutput = adjacent.largestProduct( [ [1,2,3],[1,2,3],[1,2,3] ]);
    expect( testOutput ).toEqual(9);
  });

  it('315: functional product', () => {
    let testOutput = adjacent.largestProduct( [ [10,2,1],[10,1,null],[1,1,1] ]);
    expect( testOutput ).toEqual(100);
  });

  it('315: functional product', () => {
    let testOutput = adjacent.largestProduct( [ [null,null,null],[null,null,null],[null,null,null] ]);
    expect( testOutput ).toEqual(null);
  });

  it('315: functional product', () => {
    let testOutput = adjacent.largestProduct( [ [[],[],[]],[[],[],[]],[[],[],[]] ]);
    expect( testOutput ).toEqual(null);
  });

  it('315: functional product', () => {
    let testOutput = adjacent.largestProduct( [ [{},{},{}],[{},{},{}],[{},{},{}] ]);
    expect( testOutput ).toEqual(null);
  });

});
