const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


// let tail = require('lodash.tail');
const tail = function(array){
  return array.slice(1);
}

// TEST CODE
// assertEqual(tail([5,6,7]), [6,7]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
const X = tail([5,6,7]);
const Y = [6,7];
for(let i = 0; i < X.length; i++){
 assertEqual(X[i], Y[i]);
}
