//Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.
var lexicon = {
  "merry": "god",
  "christmas": "jul",
  "and": "och",
  "happy": "gott",
  "new": "nytt",
  "year": "år"  
};
function translateToSwedish(myString) {
  var words = myString.split(' '); 
  //return words
  var swedishText = words.map(function(word) {return lexicon[word]});
  return swedishText.join(' ');
}
translateToSwedish('merry christmas and happy new year')

