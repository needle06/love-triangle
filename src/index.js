/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(arr) {
  let counter=0
  for(let a=1; a<=arr.length; a++ ) {
    for(let b=1; b<=arr.length; b++ ){
      for(let c=1; c<=arr.length; c++ ){
        if (isTriangle(arr, a, b, c)) counter ++;
      }
    }
  }
  return counter/3
};

let isTriangle = (arr, a, b, c)=>{
  if (arr[a - 1]==b &&
  arr[b - 1]==c &&
  arr[c - 1]==a &&
  a!=b&&
  b!=c) 
  return true

  else return false
};