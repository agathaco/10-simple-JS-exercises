//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(char) {
  var vowels = ['a','e','i','o','u'];
  for (var i = 0; i <vowels.length; i++) {
    if (char === vowels[i]) {
      return true
    } else 
    {
      return false
    }
  }
}
isVowel('a');

var isVowel2 = function (char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1;
};
console.log(isVowel2('e'));

