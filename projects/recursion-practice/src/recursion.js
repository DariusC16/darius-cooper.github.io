// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, product=1) {
  // BASE //
  if (n <= 0) {
    return null;
  }

  // BASE //
  if (typeof n === 0) {
    return;
  }

  // RECURSION
  if (n >= 0) {
    return n *= product
  } 

  // FUNCTION CALL
  factorial(n.slice(1), product=1);

};

factorial(5);

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  var add = 0;
  // BASE //
  if (array === 0) {
    return 0;
  } else if (array < 0) {
    return add += array;
  } else if (array > 0) {
    return add += array;
  } else if (array > 0 && array < 0) {
    return add += array;
  } else {
    return 0
  }

  // RECURSION
  add + sum(array.slice(1));

};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
   //determine if number is negative and convert to positive
   if (n < 0){//if negative, multiply by -1 or use Math.abs() to retrun an absolute value
    n = n * -1;
  } 
  if (n === 0) { //if number is even
    return true;
  } 
  if (n === 1) { //if number is odd
    return false;
  } 
  else {
  //base two conditionals to return true or false. We want to reduce the intergers through recursion to return a 1 or 0
  n = n - 2; //continue to reduce by 2 until we get desired redult of 1 or 0
  return isEven(n);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base want to end recursion when n === 0
  if (n === 0) {
    return sum;
  }
  //recursion
  //run two if statements, one for positive ints one for negative
  if (n > 0){  //check to see if n is positive
    
      //init storage var
    
     // add numbers
     //the n - 1 is important for it will iterater through and subtract iterations * 1 in total
     return sum = n - 1 + sumBelow(n - 1); 
    //return sum;
    
   }
   if (n < 0) { //check to see if negative similar to positive but swap the n - 1 to +1
     
     // add numbers
     sum = n + 1 + sumBelow(n + 1);
     return sum;
   }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //init empty array
 let empty = [];
 //if x === y or y-x === 1, there are no range intergers to return
 //recursion
  if (x === y || y - x === 1) {
    return empty; //return empty array
  }
  if (x < y) { //conditional to see if x < y
    if (y - x === 2){//another conditional to see if there is only one number in range 
      //(2,4) => 4-2 = 2, so one number in range => x + 1 => [3]
    return [x + 1];
  }
  else {
    var store = range(x, y - 1); //else invoke our recursion decriminting y
      store.push(y - 1);
      return store;
  }
} else { // if y larger than x
  if (x - y === 2){
  return [y + 1];
}
else {
  var store = range(x, y + 1);
  store.push(y + 1);
    return store;
}
}

};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    //base
    if (exp < 0) { //if negative interger we have to divide
      return exponent(base, exp + 1) / base;
    } //edge case if exp is 0 return 1
    if(exp === 0){
      return 1;
    }//edge case if exp = 1 return base
    if(exp === 1){
      return base;
    }
    //recursion
    return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //var result = n / 2;
  if (n === 0){
    return false;
  } else if (n === 2 || n === 1) {
    return true;
  }
  //base
return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, out = []) {
   //let rev = [];
    //base case when no string exists
    if(string.length === 0) {
      return out.join('');
    } else {
      //recursion slice off each letter
    out.unshift(string[0]);
      
      return reverse(string.slice(1), out);
    }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string, out=[]) {
  const str = string.toLowerCase().replace(/\s/g, '');
  // base case
    if (str.length === 0 || str.length === 1){
      return true;
    }
  //recursion
    if (str[0] === str[str.length -1]){
      return palindrome(str.slice(1, -1))
    }
    return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    //base
    if(x === 0){
      return out;
    }
  out = x / y;
    //recursion
    return modulo(x-x, y, out)
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  if (y === 0){
    return 0;
   }
   if (y > 0) {
    return (x + multiply(x, y -1))
   }
   if (y < 0) {
    return -multiply(x, -y)
   }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base case
  if(str1.length === 0 && str2.length === 0){
    return true;
  }
  if (str1[0] != str2[0]){
    return false;
  }
  //recursion
  if (str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1))
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, out=[]){
    //base wants to return an indexed order string
    if (str.length === 0){
      return out;
    }
  //recursion
      out.push(str[0]);
      return createArray(str.slice(1), out);
};

// 17. Reverse the order of an array
var reverseArr = function (array, out=[]) {
  //base
  if (array.length === 0){
    return out;
  }
  //recursion
  out.unshift(array[0]);
  return reverseArr(array.slice(1), out)
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, arr=[]) {
  //base
  if (length === 0){
    return arr;
  };
  //recursion
  arr.push(value);
  return buildList(value, length - 1, arr)
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count=[]) {
  if (array.length === 0){
    return count;
  }
  //recursion
  if (array[0] === value){
    
    return countOccurrence(array.slice(1), value, count += 1);
  } else {
  return countOccurrence(array.slice(1), value, count);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, out=[]) {
   //base case
   if (array.length === 0){
    return out;
  }
  //recursion
  out.push(callback(array[0]))
  return rMap(array.slice(1), callback, out);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, f = [0, 1]) {
   //return fib number loacated at the index n 
   if (n < 0) {
    return null;
  }
  
  //base case does n exist as an index in fib if not go to recursion and build the fib sequence
  if (n === 0 && f.length <= 2) {
    return 0;
  }  
  else if (n === 1){
    return f[f.length -1];
  }
//recursion
  f.push(f[f.length - 1] + f[f.length -2]);

  return nthFibo(n - 1, f)
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, cap=[]) {
    //base
    if (input.length === 0){
      return cap;
    }
    cap.push(input[0].toUpperCase())
    return capitalizeWords(input.slice(1), cap)
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, cap=[]) {
    //similar to our last one but will be using char at to upper case and slice
  //base case
  if (array.length === 0) {
    return cap;
  }
  cap.push(array[0].charAt(0).toUpperCase() + array[0].slice(1))
  return capitalizeFirst(array.slice(1), cap);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) {
    //base case
    if (str.length === 0) {
      return obj;
    }
    //recursion
    if (obj[str[0]]){
      obj[str[0]] += 1;
    } else {
      obj[str[0]] = 1;
    }
    return letterTally(str.slice(1), obj)
  
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, out=[]) {
   //base case
   if (list.length === 0) {
    return out;
  }
  //recursion
  if(out[out.length - 1] === list[0]){
    return compress(list.slice(1), out);
  } else {
    out.push(list[0]);
    return compress(list.slice(1), out);
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //base
  if (array.length === 0){
    return out;
  }
  //recursion
  if (out[out.length - 1] === 0 && array[0] === 0){
    return minimizeZeroes(array.slice(1), out);
  } else {
    out.push(array[0]);
    return minimizeZeroes(array.slice(1), out);
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //base case 
  if (array.length === 0){
    return out;
  }
  //recursion
  if (out.length === 0 && array[0] < 0) {
    out.push(array[0] * -1);
  } else if (out.length === 0 && array[0] >= 0){
    out.push(array[0]);
  } else if (out[out.length - 1] < 0 && array[0] < 0) {
    out.push(array[0] * -1);
  } else if (out[out.length - 1] < 0 && array[0] >= 0) {
    out.push(array[0]);
  } else if (out[out.length - 1] >= 0 && array[0] >= 0){
    out.push(array[0] * -1);
  } else if (out[out.length - 1] >= 0 && array[0] < 0){
    out.push(array[0]);
  }

  return alternateSign(array.slice(1), out)
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str,con = []) {
   //base case 
 //base case 
 str.split(' ')
 //return place
 if (str.length === 0){
   return con.join('')//word has a space
 }
 //if (typeof place[0] === 'number'){
   if (str[0] === '0'){
     con.push('zero');
   } else if (str[0] === '1'){
     con.push('one');
   } else if (str[0] === '2'){
     con.push('two');
   } else if (str[0] === '3'){
     con.push('three');
   } else if (str[0] === '4'){
     con.push('four');
   } else if (str[0] === '5'){
     con.push('five');
   } else if (str[0] === '6'){
     con.push('six');
   } else if (str[0] === '7'){
     con.push('seven');
   } else if (str[0] === '8'){
     con.push('eight');
   } else if (str[0] === '9'){
     con.push('nine');
   } else {
     con.push(str[0]);
   }
   //str.join(' ');
   return numToText(str.slice(1), con)
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
