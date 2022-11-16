const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

let tail = require('lodash.tail');

// TEST CODE
assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");