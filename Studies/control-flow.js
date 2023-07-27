/** 
~~~~~~~~~~~~~~CONTROL FLOW~~~~~~~~~~~~~~~~~~~~~

The control flow is the order in which the computer executes statements in a script.

Code is run in order from the first line in the file to the last line, unless the computer 
runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops.

-----------------IF, ELSE---------------------

The if...else statement executes a statement if a specified condition is truthy. 
If the condition is falsy, another statement in the optional else clause will be executed.
*/
var name = 'Darius';
//if statements can be used to test for a multitude of things. 
//If the if statement is evaluated to be truthy, the code block executes.
if (name === 'Darius') {
  console.log('Correct');
}
//We can use an ELSE statement to execute a different code block if the if statement is falsey

var userName = 'Rodman';

if (userName === 'Darius') {
  console.log('Welcome');
} else {
  console.log('Access Denied')
}

/** 
---------------ELSE IF-----------------------
Else if statements can be chained to an if statement so we can run a series of conditional tests on a piece of data.
*/

if (userName === 'Darius') {
  console.log('Welcome');
} else if (userName === 'Rodman') {
  console.log('Welcome, Guest')
}

/** 
--------------SWITCH-----------------------
The switch statement evaluates an expression, matching the expression's value against a series of case clauses, 
and executes statements after the first case clause with a matching value, until a break statement is encountered. 
The default clause of a switch statement will be jumped to if no case matches the expression's value.

Example of Switch Usage

switch (expression) {
  case value1:
    statements
  case value2:
    statements
  // …
  case valueN:
    statements
  default:
    statements
}

expression
An expression whose result is matched against each case clause.

case valueN Optional
A case clause used to match against expression. If the expression matches the specified valueN 
(which can be any expression), execution starts from the first statement after that case clause until 
either the end of the switch statement or the first encountered break.

default Optional
A default clause; if provided, this clause is executed if the value of expression doesn't match any of the case clauses.
 A switch statement can only have one default clause.

*/

//Here is an example of Switch in use:

let color = 'purple';

switch (color) {
  case 'red': //color doesn't match, so on to the next case
    console.log('Red');
    break;
  case 'yellow': //next
    console.log('Yellow');
    break;
  case 'blue': //next
    console.log('Blue');
    break;
  case 'purple': //match! so the code executes
    console.log('Purple');
    break;
  default:
    console.log('This is not a color choice');
}