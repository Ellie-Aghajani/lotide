const tail = require('../tail');
const assertEqual = require('../assertEqual');



// TEST CODE

const X = tail([5,6,7]);
const Y = [6,7];
for(let i = 0; i < X.length; i++){
 assertEqual(X[i], Y[i]);
}