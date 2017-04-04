//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(myArray, i) {
  return myArray.filter(function(word) {
    return word.length>i;
  })
};
filterLongWords(['Cheese', 'Cake', 'Pizza', 'Doughnuts'],5);