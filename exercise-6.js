
//Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(myString) {
  var newString='';
  for (var i= myString.length -1;i>=0;i--) {
      newString += myString[i]
    }
  return  newString;
}
reverse('jag testar');

function reverse2(myString) {
  var chars = myString.split(''); 
  var newText = chars.reverse();
  return newText.join('');
  };
 reverse2('jag testar');

