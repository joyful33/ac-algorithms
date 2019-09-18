//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
///input : a string
//output : a number
//we need to look at the length of each word, we need to compare the length of each word with the word with the others in the string. If a word is longer then the one that comes before it, we wll replace th evalue of its length.
// Tools: a variable to store the length of the longest string
//.split to chage our string and turns it into an array
//for loop : run through the words
//condtional statement: checkto see if the next word is longer than the word that came before it findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19. if true I want to replace the longer word with the length of the variable.


function findLongestWord(str) {
  var array= str.split(' ');
  var length=array[0].length;

  for(var i=0; i<array.length ; i++){
    if (array[i].length > length){
      length = array[i].length
    }
  }
  return length;
}

findLongestWord("Happy Birthday Douche")

