/**
 * OPERATORS:
 * An operator performs some operation on single or multiple operands (data value) and produces a result. 
 * For example, in 1 + 2, the + sign is an operator and 1 is left side operand and 2 is right side operand. 
 * The + operator performs the addition of two numeric values and returns a result.
 */

// 1. Assignment Operators //
// These operators assign values to variables 

// =	Assigns right operand value to the left operand.
var x = 5, y = 10, z = 15;
// +=	Sums up left and right operand values and assigns the result to the left operand.
    x += 1; //x would be 6
// -=	Subtract right operand value from the left operand value and assigns the result to the left operand.
    x -= 1; //x would be 4
// *=	Multiply left and right operand values and assigns the result to the left operand.
    x *= 5; //x would be 25
// /=	Divide left operand value by right operand value and assign the result to the left operand.
    x /= 5; //x would be 1
// %=	Get the modulus of left operand divide by right operand and assign resulted modulus to the left operand.
    x %= 2; //x would be 1

// 2. Arithmetic Operators //
// Arithmetic Operators are used to perform mathematical operators between numeric operands.
var a = 5, b = 10;
// +	Adds two numeric operands.
var c = a + b; //performs addition and returns 15
// -	Subtract right operand from left operand
c = b - a; //performs subtraction and returns 5
// *	Multiply two numeric operands.
c = a * b; //performs multiplication and returns 50
// /	Divide left operand by right operand.
c = b / a; //performs division and returns 2
// %	Modulus operator. Returns remainder of two operands.
c = a % 2; //returns division remainder 1
// ++	Increment operator. Increase operand value by one.
let x = 5;
x++; //post-increment, x will be 5 here and 6 in the next line
// --	Decrement operator. Decrease value by one.
x--; //post-decrement, x will be 7 here and 6 in the next line

//3. Comparison Operators//
//JavaScript provides comparison operators that compare two operands and return a boolean value true or false.
let a = 5, b = 10, c = "5";
let x = a;
// ==	Equality Compares the equality of two operands without considering type.
a == c; // returns true
// ===	Strict Comparison Compares equality of two operands with type.
a === c; // returns false
// !=	Compares inequality of two operands.
a != b; // returns true
// >	Returns a boolean value true if the left-side value is greater than the right-side value; otherwise, returns false.
a > b; // returns false
// <	Returns a boolean value true if the left-side value is less than the right-side value; otherwise, returns false.
a < b; // returns true
// >=	Returns a boolean value true if the left-side value is greater than or equal to the right-side value; otherwise, returns false.
a >= b; // returns false
// <=	Returns a boolean value true if the left-side value is less than or equal to the right-side value; otherwise, returns false.
a <= b; // returns true

//4. Logical opreators//
//Logical operators are used to combine two or more conditions. 
// &&	&& is known as AND operator. It checks whether two operands are non-zero or not. It returns 1 if they are non-zero; otherwise, returns 0.
let a = 5, b = 10;
(a != b) && (a < b); // returns true
// ||	|| is known as OR operator. It checks whether any one of the two operands is non-zero or not . It returns 1 if any one of of them is non-zero; otherwise, returns 0.
(a > b) || (a == b); // returns false
(a < b) || (a == b); // returns true
// !	! is known as NOT operator. It reverses the boolean result of the operand (or condition). !false returns true, and !true returns false.
!(a < b); // returns false
!(a > b); // returns true

//5. Unary Operators (!, typeOf, -)//
//Unary operators work on one value//
//Unary plus + can convert all string representations of numbers, boolean values (true and false), and null to numbers. 
const x = 1;
const y = -1;
console.log(+x);// Expected output: 1
console.log(+y);// Expected output: -1
console.log(+'');// Expected output: 0
console.log(+true);// Expected output: 1
console.log(+false);// Expected output: 0
console.log(+'hello');// Expected output: NaN
//typeof The typeof operator returns a string indicating the type of the unevaluated operand.
console.log(typeof 3); //number
console.log(typeof '3'); //string
console.log(typeof true); //boolean
//The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa.
!true; // !t returns false
!false; // !f returns true
!""; // !f returns true
!"Cat"; // !t returns false

//6. Ternary Operators (a ? b: c)//
//The conditional (ternary) operator is the only JavaScript operator that takes three operands:
// a condition followed by a question mark (?), 
// then an expression to execute if the condition is truthy followed by a colon (:), 
//and finally the expression to execute if the condition is falsy. 
//This operator is frequently used as an alternative to an if...else statement.
//condition ? exprIfTrue : exprIfFalse
const age = 20;
const beverage = age >= 30 ? "Soda" : "Juice";
console.log(beverage); // "Soda"