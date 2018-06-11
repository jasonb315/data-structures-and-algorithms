'use strict';

const shift = function insertShift(arr, n){
  var newArr = [];
  var midPoint = Math.ceil(arr.length/2);
  var s = 0;
  for ( var i = 0 ; i < arr.length ; i++ ){
    if (s === midPoint){
      newArr[s] = n;
      s++;
    }//close if
    newArr[s] = arr[i];
    s++;
  }//close for
  return newArr;
};//close F

module.exports = shift;
