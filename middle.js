
// to compare equality of two arrays
const eqArrays = function(array1, array2) {
  for( let i = 0; i < array1.length; i++){
      if(array1[i]!== array2[i]){
          return false;
      }
  }
  return true
}
// using eqArray() and assertequal(), we get the final comparison result
const assertArraysEqual = function(array1, array2){
  const result = eqArrays(array1, array2);
  assertEqual(result, true);
}



const middle = function(array) {
  if(array.length > 2 ){
     if(array.length % 2 === 1 ){
         return [array[Math.floor(array.length / 2)]]; 
     } else if(array.length % 2 === 0){
         return [array[array.length / 2 - 1], array[array.length / 2]];
     }  
     
 } else{
     return [];
 }

}
console.log(middle([1,2]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5]));
