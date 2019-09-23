/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""
for loop to look thru each 
letter look thru arrays turn string into array .split("")
.toLowerCase
if conditional statement to test if it is lower
checking the case in position zero 
something to store the output variable inside or outside
Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/
//create a variable to store the output of the transformed letters, a string
// create a variable to store the array (once I have split the string into an array
// 	create a loop: the purpose is to run through the array and look at each letter 
// 	each time the loop runs 1) add one to i, 2) run a conditional statement that looks at whether or not te letter I am on is toLowerCase
// 	if true add that letter to our output string 
// 	if false add that letter to our output string once we 
// ternary- i have a condition write a ? if true write the output you want : output

function swapCase(str) {
	var output="";
	var array=str.split("");
// 	array.map((letter, i) => {
	// letter===letter.toUperCase
})

for (var i=0; i<array.length;i++){
// 		if (array[i] === array[i].toLowerCase()) {
// 			output = output + array[i].toUpperCase();
// 		} else {
// 			output = output + array[i].toLowerCase()
// 		}
// 	}
// 	return output;
// }
// var result = swapCase("Oh, Hello!!");
// console.log(result) // "oH, hELLO!!"