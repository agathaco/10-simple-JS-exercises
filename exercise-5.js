//Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
var myArray = [];
var isNumber = myArray.every(function(element) {return typeof element === 'number';});
function add (myArray) {
  if (isNumber) {
     var sum=0;
    for (var i in myArray) {
      sum += myArray[i];
    }
    console.log('The sum is ' + sum)
  }
  else {console.log('Please use numbers only')
     }
}
add([1,2,3,4]) 

function multiply(myArray) {
  if (isNumber) {
     var product=1;
    for (var i in myArray) {
      product *= myArray[i];
    }
    console.log('The product is ' + product)
  }
  else {console.log('Please use numbers only')
     }
}
multiply([1,2,3,4]) 

function add2(myArray){
  var sum = myArray.reduce(function(acc, val) {
  return acc + val;
});
  return sum;
}
add2([1,2,3,4]) 

function multiply2(myArray){
  var sum = myArray.reduce(function(acc, val) {
  return acc * val;
});
  return sum;
}
multiply2([1,2,3,4]) 

