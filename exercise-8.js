
//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(myArray) {
  var newArray =[];
  for (var i in myArray) {
    newArray.push(myArray[i].length); 
  }
  var largest = Math.max.apply(Math, newArray); 
    console.log(largest);
}
findLongestWord(['Cheese','Cake','Pizza','Doughnuts']) 

var findLongestWord2 = function (words) {
  var lengths = words.map(function (word) {
    return word.length;
  });
  return Math.max.apply(null, lengths);
};
findLongestWord2(['Cheese','Cake','Pizza','Doughnuts']);
