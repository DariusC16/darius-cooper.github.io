/** ~~~~~~~~~~~~~~~~~~~~~DATA TYPES~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Programming languages all have built-in data structures, but these often differ from one language to another. 
 * Here we will list the built in data structures available in JavaScript
 * 
 * ~~~~~~~~~~~~~~~~~~~~1. NUMBERS~~~~~~~~~~~~~~~~~~~~~~~~
 * The Number type is a double-precision 64-bit binary format IEEE 754 value. 
 * It is capable of storing positive floating-point numbers between 2-1074 (Number.MIN_VALUE) 
 * and 21024 (Number.MAX_VALUE) as well as negative floating-point numbers between -2-1074 and -21024, 
 * but it can only safely store integers in the range -(253 − 1) (Number.MIN_SAFE_INTEGER) to 253 − 1 (Number.MAX_SAFE_INTEGER). 
 * Outside this range, JavaScript can no longer safely represent integers; 
 * they will instead be represented by a double-precision floating point approximation. 
 * 
 * You can check if a number is within the range of safe integers using Number.isSafeInteger().
*/
var number = 21;
console.log(number);
/*
 * ~~~~~~~~~~~~~~~~~~~~2. STRINGS~~~~~~~~~~~~~~~~~~~~~~~~~
 * The String type represents textual data and is encoded as a sequence of 16-bit unsigned integer values representing UTF-16 code units. 
 * Each element in the string occupies a position in the string. The first element is at index 0, the next at index 1, and so on. 
 * The length of a string is the number of UTF-16 code units in it, which may not correspond to the actual number of Unicode characters; 
 * see the String reference page for more details.
 * 
 * JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it. 
 * String methods create new strings based on the content of the current string — for example:
 *          A substring of the original using substring().
 *          A concatenation of two strings using the concatenation operator (+) or concat().
 */
var name = 'Pete'
//strings can be concated as well
console.log('Hello, my name is ' + name);

/*
 * ~~~~~~~~~~~~~~~~~~~~3. BOOLEANS~~~~~~~~~~~~~~~~~~~~~~~~~
 *  The Boolean type represents a logical entity and is inhabited by two values: true and false.
 * 
 * Boolean values are usually used with conditional operators.
 */
var factual = true;
var fictional = false;
/* ~~~~~~~~~~~~~~~~~~~~4. ARRAYS~~~~~~~~~~~~~~~~~~~~~~~~~~
 * //Arrays
Arrays are a complex data type that can hold any number of various data types.
Arrays need to be declared and assigned if we are to use them
/we can then fill the brackets with any number of data types
*/
var array  = ['string', 100, true, ['another', 'array'], {evenAn : 'object'}];
console.log(array);

//arrays are zero indexed ordered lists
var numArray = ['zero', 'one', 'two', 'three', 'four'];
// index values:  0       1      2      3        4

//Use bracket notation to access data
console.log(numArray[3]);

//differentiate between simple and complex
//Arrays
//Arrays need to be declared and assigned if we are to use them
// we can then fill the brackets with any number of data types
var array  = ['string', 100, true, ['another', 'array'], {evenAn : 'object'}];
console.log(array);

//arrays are zero indexed ordered lists
var numArray = ['zero', 'one', 'two', 'three', 'four'];
// index values:  0       1      2      3        4

//Use bracket notation to access data
console.log(numArray[3]);


// ~~~~~~~~~~~~~~~~~~~~5.OBJECTS~~~~~~~~~~~~~~~~~~~~~~~~~~
//Objects are a complex data type. They  need to be declared and assigned if we are to use them
//Think of objects as a desctiption of an item
var carObj = {
  make: 'Toyota',
  model: 'Rav4',
  isRed: false,
  mileage: 65000,
  safetyFeatures: ['airbags', 'seatbelts', 'anti-lock brakes'],
  year: '2016'
};

//Objects are non-ordered and can use dot notation OR bracket notation to access data

console.log(carObj.model);
console.log(carObj['mileage']);

// You can also mutate the value of objects using dot notation:

carObj.model = 'Corolla';
console.log(carObj.model); //=> 'Corolla'

// ~~~~~~~~~~~~~~~~~~~~6.FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * FUNCTIONS

Functions are one of the fundamental building blocks in Javascript.
A function is similar to a procedure: a set of statements that performs a task or calculates a value,
 but for it to qualify as a function, it should take some input and return an output 
 where there is some obvious relationship between the input and the output.
 
 DEFINING FUNCTIONS

A function definition (also called a function declaration, or function statement) consists of a function keyword, followed by:

The name of the function

A list of parameters to the function, enclosed in parenthesis and seperated by commas

The JavaScript statements that define the function, enclosed in curly brackets {}
*/
//~~~~~~~Here is the syntax for a named function:~~~~~~~~~~~~
// func   name   param1 param2 curlybracket
function addNum (num1, num2) {
  //code block which to execute inside curly brackets
  return num1 + num2
}
// We must invoke our function to make use of it and pass arguements into the parameters if any
addNum(5 + 6); // => 11

// ~~~~~~~~~~~~~~~~~~~~7.UNDEFINED~~~~~~~~~~~~~~~~~~~~~~~~~~
//The undefined global property represents the primitive value undefined. It is one of JavaScript's primitive types.
//If a variable is not assigned a value and then called, it will return undefined
var undef;
console.log(undef); // => undefined

// ~~~~~~~~~~~~~~~~~~~~8.NULL~~~~~~~~~~~~~~~~~~~~~~~~~~
//The null value represents the intentional absence of any object value. 
//It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
//null is not an identifier for a property of the global object, like undefined can be. 
//Instead, null expresses a lack of identification, indicating that a variable points to no object.

// foo does not exist. It is not defined and has never been initialized:
foo; //ReferenceError: foo is not defined

// ~~~~~~~~~~~~~~~~~~~~9.NaN~~~~~~~~~~~~~~~~~~~~~~~~~~
//The NaN global property is a value representing Not-A-Number.
//NaN is a number that is not a legal number.


// ~~~~~~~~~~~~~~~~~~~~10.INFINITY AND -INFINITY~~~~~~~~~~~~~~~~~~~~~~~~~~
//The Infinity global property is a numeric value representing infinity.
const maxNumber = Math.pow(10, 1000); // Max positive number

if (maxNumber === Infinity) {
  console.log('Let\'s call it Infinity!');
  // Expected output: "Let's call it Infinity!"
}
//he Number.NEGATIVE_INFINITY static data property represents the negative Infinity value.

// ~~~~~~~~~~~~~~~~~~~~11.PRIMITIVE AND COMPLEX DATA TYPES~~~~~~~~~~~~~~~~~~~~~~~~~~
//The difference between Simple and Complex data types is simply this:
//Simple data types contain one type of data. Numbers, strings, booleans undefined or null.
//Complex data types contain more than one type of data. Arrays and Objects are the examples.

// ~~~~~~~~~~~~~~~~~~~~12.COPY OR REFERENCE~~~~~~~~~~~~~~~~~~~~~~~~~~
//The difference between pass-by-reference and pass-by-value is, pass-by-value creates a new space in memory and makes a copy of a value, 
//whereas pass-by-reference does not. Instead of making a copy, pass-by-reference does exactly what it sounds like; 
//a value stored in memory gets referenced.
//Copying values
// When you assign a primitive value from one variable to another, 
// the JavaScript engine creates a copy of that value and assigns it to the variable. 
// For example:

let age = 25;
let newAge = age;

// In this example:

// First, declare a new variable age and initialize its value with 25.
// Second, declare another variable newAge and assign the age to the newAge variable.
// Behind the scene, the JavaScript engine creates a copy of the primitive value 25 and assign it to the newAge variable.

let john = {
	name: "John Smith",
	age: 45,
	gender: "male"
}

let newJohn = john 
//{name: "John Smith", age: 45, gender: "male"}

// Lets edit the name of newJohn variable

newJohn.name = "Tom Doe" // "Tom Doe"

console.log(newJohn) 
//{name: "Tom Doe", age: 45, gender: "male"}

console.log(john) 
// {name: "Tom Doe", age: 45, gender: "male"}

// The newJohn object is NOT a copy of the object stored inside of the john variable. 
// Instead, the variable newJohn is referencing the original john object.

// That means if you decide to edit thenewJohn object ( e.g changing the name property of newJohn on line 3 to "Tom Doe"), 
// you are in fact modifying the john object!

// As you can see in lines 16 and 19, both objects’ name property has a value of "Tom Doe".