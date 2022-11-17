const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  const eqArrays = function(array1, array2) {
    for( let i = 0; i < array1.length; i++){
        if(array1[i]=== array2[i]){
            return true;

        }else {
            return false;
        }
    }
  }
  const assertArraysEqual = function(array1, array2){
    console.log(`The result is ${eqArrays()}`);
  }
  const without = function( array1, array2){
    for(let i = 0; i < array1.length ; i++ ){
        let newArray = [];
        if(array1[i] !== array2[0]){
            newArray += array1[i];
        }
        console.log(newArray);
    }
  }
  
  // TEST CODE
  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);