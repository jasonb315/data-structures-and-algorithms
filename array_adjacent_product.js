'use strict';

module.exports = exports = {};

exports.largestProduct = function (my2DArray) {

  var highestAdjNums;

  for (var i = 0; i < my2DArray.length; i++) {

    for (var j = 0; j < my2DArray[i].length; j++) {

      var currentNum = my2DArray[i][j];

      if (typeof my2DArray[i-1][j-1]!== 'undefined'){
        var topLeft = my2DArray[i-1][j-1] * currentNum;
        if (topLeft > highestAdjNums) {
          highestAdjNums = topLeft;
        }
      }

      if (typeof my2DArray[i-1][j]!== 'undefined'){
        var topMid = my2DArray[i-1][j] * currentNum;
        if (topMid > highestAdjNums) {
          highestAdjNums = topMid;
        }
      }

      if (typeof my2DArray[i-1][j+1]!== 'undefined'){
        var topRight = my2DArray[i-1][j+1] * currentNum;
        if (topRight > highestAdjNums) {
          highestAdjNums = topRight;
        }
      }

      if (typeof my2DArray[i][j-1]!== 'undefined'){
        var midLeft = my2DArray[i][j-1] * currentNum;
        if (midLeft > highestAdjNums) {
          highestAdjNums = midLeft;
        }
      }

      if (typeof my2DArray[i][j+1]!== 'undefined'){
        var midRight = my2DArray[i][j+1] * currentNum;
        if (midRight > highestAdjNums) {
          highestAdjNums = midRight;
        }
      }

      if (typeof my2DArray[i+1][j-1]!== 'undefined') {
        var bottomLeft = my2DArray[i+1][j-1] * currentNum;
        if (bottomLeft > highestAdjNums) {
          highestAdjNums = bottomLeft;
        }
      }

      if (typeof my2DArray[i+1][j]!== 'undefined'){
        var bottomMid = my2DArray[i+1][j] * currentNum;
        if (bottomMid > highestAdjNums) {
          highestAdjNums = bottomMid;
        }
      }

      if (typeof my2DArray[i+1][j+1]!== 'undefined'){
        var bottomRight = my2DArray[i+1][j+1] * currentNum;
        if (bottomRight > highestAdjNums) {
          highestAdjNums = bottomRight;
        }
      }
    }
  }
  if (typeof highestAdjNums === 'number' ){
    console.log(`highest combo of adjacent numbers: ${highestAdjNums}`);
    return highestAdjNums;
  } else {
    return null;
  }
};
