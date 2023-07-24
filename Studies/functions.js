/** 
FUNCTIONS

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
  } //Note that there is no semicolon. There's no semicolon grammatically required, but might wonder why?
  // Semicolons serve to separate statements from each other, and a FunctionDeclaration is not a statement.
  /** 
  CALLING FUNCTIONS
  
  Defining a function does not execute it. Defining it names the function and specifies what to do when the function is called.
  
  INVOKING or CALLING the function actually performs the specified action with the indicated parameters. For example, 
  let's call our addNum function
  
  We invoke a function by typing the function name, followed by parenthesis and then usually by placing arguements in the parenthesis,
   seperated by a comma if there is more than one arguement.
  ~~~~~~~~~~~~~PARAMETER VERSUS ARGUEMENTS~~~~~~~~~~~~~
  A parameter is a variable in a function definition. It is a placeholder and hence does not have a concrete value.
  An argument is a value passed during function invocation. In a way, arguments fill in the place the parameters have held for them.
  */
  // function name    arguements, seperated by commas
  console.log(addNum(6, 7));
  
  
  
  
  /** 
  OPTIONAL PARAMETERS
  
  Usually, when you don't pass parameters, 'undefined' is passed instead. But using Optional Parameters, you can define a default value. 
  So, whenever no value or undefined is passed, a default value is passed in its place.
  
  In this method, you can initialize named parameters with default values whenever no value or undefined is passed.
  */console.log()
  function add(a, b = 1) {
      return a + b;
  }
  
  console.log(add(1, 2));
  // expected output: 3
  
  console.log(add(1));
  // expected output: 2
  
  /** 
  SCOPE
  
  Functions can see and modify variables in parent or global scopes. The inverse is not true. 
  This is because code within a function has a local scope. Local scopes can only be accessed in the function that contains them, 
  or in a code block that the local scope contains. 
  */
  
  // code here can NOT use carName
  
  function myFunction() {
    let carName = "Honda";
    // code here CAN use carName
    console.log(carName + ' is local')
  }
  //myFunction();
  //console.log(carName);
  // code here can NOT use carName

  
  /** 
  ~~~~~~~~~~~CLOSURE~~~~~~~~~~~~~~~~~~~
  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
  In other words, a closure gives you access to an outer function's scope from an inner function. 
  In JavaScript, closures are created every time a function is created, at function creation time.
  */
  
  // function init() {
  //   var name = "James"; // name is a local variable created by init
  //   function displayName() {
  //     // displayName() is the inner function, that forms the closure
  //     console.log(name); // use variable declared in the parent function
  //   }
  //   displayName();
  // }
  // init();
  
  /** 
  init() creates a local variable called name and a function called displayName(). 
  The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. 
  Note that the displayName() function has no local variables of its own.
   However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared
    in the parent function, init().*/