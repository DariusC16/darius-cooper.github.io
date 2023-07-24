/** 
------------------STRING MANIPULATION WITH METHODS-------------------
STRING.LENGTH  
Similar to arrays, we can determine the length of a string by adding .length after the variable

*/ //          1234
let string1 = 'four';
console.log(string1.length); //=> logs 4

//SLICE
//slice() extracts a part of a string and returns the extracted part in a new string.

//The method takes 2 parameters: start position, and end position (end not included).
let sliced = 'ePizzas';
console.log(sliced.slice(1)); //=> slices off the first letter and returns the rest of the word
  //           123456789 
let sliced2 = 'Heartburn';
        //slice at the 5th index of the word, to the end of the word
console.log(sliced2.slice(5, sliced2.length));//=> Logs burn

//CHARAT
//The charAt() method returns the character at a specified index (position) in a string:
let text = "HELLO WORLD";
let char = text.charAt(0);//selects the character at index 0 (H)
console.log(char);// returns H

//TOUPPERCASE/TOLOWERCASE
//The toUpperCase() mathod returns the string converted to either all caps or all lowercase

let lower = 'capitalize';
let upper = 'LOWERCASE';
console.log(lower.toUpperCase()); // returns all letters capitalized
console.log(upper.toLowerCase()); // returns all letters lowercased

//COMBINATION
//One can combine both the methods of charAt, toUpperCase, concatenate and Slice to capitalize only the first letter of the word

function capitalize(word){
//selects the first letter, uppercase, concat the rest of the sliced word
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(capitalize('thanks for reading!')); //=> returns Thanks for reading!