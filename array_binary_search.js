'use strict';

var myArr = [4,8,15,16,23,42];

var binarySearch = function(arr, val) {
   var half = Math.floor(arr.length / 2);
 
   if (arr.length === 1) {
       if (arr[0] === val) {
           return val;
       } else {
           return -1;
       }

   } else if (arr[half] === val) {
     console.log(“arr[half]: “, arr[half]);
     return val;

   } else if (val > arr[half]) {
     console.log(“arr[half]: “, arr[half]);
     return binarySearch(arr.createNewArray(half, arr.length), val);

   } else {
     console.log(“arr[half]: “, arr[half]);
     return binarySearch(arr.createNewArray(0, half), val);
   }
 }


Array.prototype.createNewArray = function (startingPoint, endingPoint) {
   const newArray = [];
   var newStartingPoint = 0;

   for (var i = startingPoint; i < endingPoint; i++) {
       newArray[newStartingPoint] = this[i];
       newStartingPoint++;
   }

   console.log(`new array: ${newArray}`);
   return newArray;
}

console.log(binarySearch(myArr, 12));