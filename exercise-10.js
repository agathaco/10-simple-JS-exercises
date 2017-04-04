
//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
function charFreq(string) {
  var freq = {};
  for(var i = 0; i < string.length; i++){
  var chars = string.charAt(i);
    if (freq[chars]) {
           freq[chars]++;
        } else {
           freq[chars] = 1;
        }
  }
   return freq;
}
charFreq("abbabcbdbabdbdbabababcbcbab")