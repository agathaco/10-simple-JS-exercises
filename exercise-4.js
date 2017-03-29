//Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
function isVowel2(char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1;
};
function checkConsonant(char) {
  //var vowels = ['a','e','i','o','u'];
  //var isVowel = false;
  var consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  var isConsonant = false;
    for (var i=0 ;i < consonant.length; i++) {
    if (char == consonant[i]) {
      isVowel = true;
    }   
  }
  return isConsonant;
}

function translateMe(myString) {
  var newString='';
  for (var j=0;j<myString.length;j++) {
    if (!isVowel2(myString[j])) {
      newString += myString[j]   + 'o' + myString[j] 
      }
    else {
      newString += myString[j]
    }
    }
  console.log('The result is: ' + '"' + newString + '"');
}
translate('this is fun');

function translate2(myString) {
  var chars = myString.split(''); //splitting text into individual characters
    newText = []; //creating a new array;
  for (var i=0;i<chars.length;i++) {
    if (checkConsonant(chars[i])) {
      newText.push(chars[i] + 'o' + chars[i]); //pushing characters to the new array
    }
    else {
        newText.push(chars[i]);
    }
  };
  return newText.join(''); //reconstructing the string
};
translate2('this is fun');

