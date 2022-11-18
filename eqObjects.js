const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // check if length of both object keys are the same (i.e check if key for both objects are equal)
  if (keys1.length !== keys2.length) {
    return false;
  }

  //loop through keys
  for (key of keys1) {
    console.log(key);
    // check if values of both objects have an array (nested)
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // if eqArrays (checking if both arrays are equal) returns is false, return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // return array check function to see if arrays are matching (nested arrays)
      // return eqArrays(object1[key], object2[key]);
    } else {
      // if any values do not match
      if (object1[key] !== object2[key]) {
        // return false
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
