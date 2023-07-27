/** 
~~~~~~~~~~~~~~~~~~~~LOOPS~~~~~~~~~~~~~~~~~~~

Loops offer a quick and efficient way to do something repeatedly.

There are many different kinds of loops, but they all essentially do the same thing: 
they repeat an action some number of times. 

You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction,
 then Y steps in another. For example, the idea "Go five steps to the north" could be expressed this way as a loop:
*/
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
  }
  /** 
   * 
  ~~~~~~~~Three important Loop Types~~~~~~~~
  
                WHILE
  
  While statement executes its statements as long as a specified condition evaluates to true.
  
  A while statement looks as follows:
  
  while (condition)
    statement
  
  If the condition becomes false, statement within the loop stops executing and control 
  passes to the statement following the loop.
  
  The condition test occurs before statement in the loop is executed. 
  If the condition returns true, statement is executed and the condition is tested again. 
  If the condition returns false, execution stops, and control is passed to the statement following while.
  
  To execute multiple statements, use a block statement ({ }) to group those statements.
  */
  //this will execute 3 times
  let w = 0;
  let h = 0
  while (w < 3) { //while w is less than 5
    h++;//increase h by one
    w += h;// w addition assignment h
  }
  console.log(w);
  /**
  First loop w === 0 / h === 1/ w === 1 / 1 < 3 true
  Second loop w === 1/ h === 2 / w === 3 / 3 < 3 false
  This now breaks the conditional and w ends up equating to 3
  */
  /** 
          FOR LOOPS
  
  A for loop repeats until a specified condition evaluates to false.
   
   A for statement looks as follows:
  for (initialization; condition; afterthought)
    statement
    
    1. The initializing expression initialization, if any, is executed. 
    This expression usually initializes one or more loop counters, but the syntax allows an expression 
    of any degree of complexity. This expression can also declare variables.
  
    2. The condition expression is evaluated. If the value of condition is true, the loop statements execute. 
    Otherwise, the for loop terminates. 
  
    3. The statement executes. 
  
    4. If present, the update expression afterthought is executed.
  
    5.Control returns to step 2.
  */
  //Here is an example of a for loop logging items in an array
  let array = [0, 1, 2, 3, 4];
  // initialization   condition       afterthought
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  //The loop starts at interger 0. if 0 is less than the length of the array, it executes the block of code. 
  //In this case a console logging of the indexed array. Afterwards, the interger increases by 1. 
  //The loop will continue until the interger is greater than or equal to the array length which is 5.
  
  //We can also loop backwards through the same array
  for (var i = array.length; i >= 0; i--){
    console.log(array[i]);
  }
  //In this instance, we equate our interger to the length of our array(5) and if the number is 
  //greater than or equal to 0 we execute our code block. Afterwards we decrement by one. 
  //The loop stops when we get to zero.
  
  
  /** 
        FOR ... IN LOOPS
  
    The for...in statement iterates a specified variable over all the enumerable properties of an object. 
    For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:
    
  for (variable in object)
    statement
  */
  
  let object = {
    name: 'Darius',
    age: 19,
    hairColor: 'black',
    height: '5ft 9in'
  }
  
  for (var key in object){
    console.log(key); // to log the keys
    console.log(object[key]) // to log values
  }