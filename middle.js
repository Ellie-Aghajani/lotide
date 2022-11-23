const middle = function (array) {
    let arrayResult = [];
    // array that are smaller than length 2
    if (array.length <= 2 && array.length > 0) {
      return arrayResult;
      // for all other cases
    } else if (array.length % 2 === 0) {
      // cases where the index is even, needing to return both middle values
      return (arrayResult = [
        // accessing even (first) value
        array[array.length / 2 - 1],
        // accessing odd (second) value
        array[array.length / 2],
      ]);
    } else {
      // cases where the index is odd
      return (arrayResult = array[(array.length - 1) / 2]);
    }
  };
  
  module.exports = middle;