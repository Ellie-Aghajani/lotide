// to compare the equality of two arrays
const eqArrays = function(array1, array2) {
    for (let i = 0; i < array1.length; i++){
      if (array1[i]!==array2[i]){
          return false;
      }
    }
    return true;
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
  
  
  module.exports = middle;