////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(num1, num2, step) {
  let store = [];
   
  if (step === undefined) {
    if (num1 < num2) {
      for (var i = num1; i <= num2; i++) {
        store.push(i);
  }
  } else if (num1 > num2) {
      for (var i = num1; i >= num2; i--) {
       store.push(i);
   }
}
  return store;

  } else if (step > 0){
       for (var i = num1; i <= num2; i += step) {
        store.push(i);
  }
  } else if (step < 0) {
    for (var i = num1; i >= num2; i+= step) {
       store.push(i);
   }
  }
      return store;

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  if (array.length === 1){
    return array[0];
  }
  //init storage var
  let sum = 0;
  //forloop
  for (var i = 0; i < array.length; i++){
    //aditional operator so sum is added each loop
    sum += array[i];
  }
  return sum;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(aray) {
 //init storage var
 let store = [];
 
 for (var i = 0; i < array.length; i++) {
   store.unshift(array[i]);
 }
return store;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {

 for (var i = 0; i < Math.floor(array.length / 2); i++){
  
  let hold = array[i];

  array[i] = array[array.length - 1 - i];

  array[array.length - 1 - i] = hold;
 }

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
    
  let rest = null;
 
for (var i = array.length - 1; i >= 0; i--){

 rest = { value : array[i], rest : rest}
}
return rest;

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output = []) {
//base
if(list.rest === null){
  output.push(list.value);
  return output;
 }
   //recursion
   //grab the current value at 'value and add to array
   output.push(list.value);
 
   return listToArray(list.rest, output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  //return a new list that adds element to the front
return {
  value : element,
  rest: list
}

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  //base
if (num === 0){
  return list.value;
}
if (num < 0){
  return undefined;
}

//recursion
return nth(list.rest, num - 1);

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
   // determine if x and y are not objects
   if (typeof x !== 'object' && typeof y !== 'object'){
    return x === y;
  }
  //determine if x OR y is not an object
  if (typeof x !== 'object' || typeof y !== 'object'){
    return false;
  }
  //create arrays of each inputs keys
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);

  if (xKeys.length !== yKeys.length){
    return false;
  }
  //iterate to determine if array keys match and values at keys match
  for (let i = 0; i < xKeys.length; i++){
    if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){ //determine if current key is NOT included in yKeys
    return false;
    }
  }
return true;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};