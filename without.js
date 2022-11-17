// to check the equality of two parameters
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
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
const without = function( array1, array2){
  let newArray = [];
  for(let i = 0; i < array1.length ; i++ ){
      if(! array2.includes(array1[i])){
          newArray.push(array1[i]);
          console.log(array1[i]);
      }
  }
  return newArray;
}
  
  // TEST CODE
  const words = ["hello", "world", "lighthouse"];
  console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);