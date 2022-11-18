// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  };
const countLetters = function(sentence){
    const results = {};
    const letters = sentence.split('');
    console.log("letters",letters);
    for (const char of letters) {
        console.log("char",char);
            if (results[char]) {
                results[char] += 1;
            } else {
                results[char] = 1;
            }

    } 
    console.log("results",results);
    return results;
}
countLetters("lighthouse");
