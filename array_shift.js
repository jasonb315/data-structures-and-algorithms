function insertShift(arr, n){
  newArr = [];
  midPoint = math.ceil(arr.length/2)
  s = 0;
  for ( var i = 0 ; i < arr.length ; i++ ){
    if (s === midPoint){
      new Arr[s] = n;
      s++;
    }//close if
    newArr[s] = arr[i];
    s++;
  }//close for
  return newArr;
}//close Fx