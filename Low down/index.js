'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;hu

/**
 * typeOf: Takes in a value and determines what type of data it is and outputs the value as a string
 * @param {Any data type} value : Any value can be used including arrays, objects or functions 
 *  
 * @returns {string} value : Returns the type of data as a string of it's type
 */
function typeOf(value){
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else if (typeof value === 'object'){
        return 'object';
    } else if (typeof value === 'string') {
        return 'string'
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else if (typeof value === 'number') {
        return 'number';
    } else if (typeof value === 'boolean') {
        return 'boolean';
    } else if (typeof value === 'function') {
        return 'function';
    }
}

module.exports.typeOf = typeOf

/**
 *  first: Takes in an array and a number and returns the range of array indexes indicated by the number
 * 
 * @param {Array} collection : Function takes in an input value.
 * @param {Number} value : Function takes in a number
 * @returns {Array} collection : Function returns array based on parameters
 * Will retrun an empty array if array arguement is not an array or the number value is negative
 * Will return the first index of the array if the number arguement is NaN or null
 * Will return the array if the array length is less than the number
 * Will return the number of array indexes denoted by the number arguement
 *  
 */
function first(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (isNaN(number) || number === null) {
        return array[0];
    } else if (array.length < number) {
        return array;
    } else {
        let store = [];
        for (var i = 0; i < number; i++) {
            store.push(array[i])
        }
        return store;
    }
}

module.exports.first = first;

/**
 *  last: Takes in an array and a number and returns the last number of items in an array
 * 
 * @param {Array} collection : Function takes in an input value.
 * @param {Number} value : Function takes in a number
 * @returns {Array} collection : Function returns array based on parameters
 * Will retrun an empty array if array arguement is not an array
 * Will return the last element of the array if the number arguement is NaN or null
 * Will return the last number of array indexes denoted by the number arguement
 *  
 */

function last(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (isNaN(number) || number === null) {
        return array[array.length - 1];
    } else if (array.length < number) {
        return array;
    } else {
        let store = [];
        for (var i = 1; i <= number; i++) {
            store.push(array[i])
        }
        return store;
    }
}

module.exports.last = last

/**
 * indexOf:  Return the index of <array> that is the first occurrance of <value>
 * 
 * @param {*} array : Function takes in an input array
 * @param {*} value : Function takes in an input value
 * @returns {*} value : Function returns index of array
 */

function indexOf(array, value) {
    //return the index of array that is the first occurance of value
    //for loop with a return to break the loop and return the first occurance
    for (var i = 0; i < array.length; i++){
        if (array[i] === value) {
            //return the index number
            return i;
        }
         
    }
    //if nothing triggers the return index, return -1
    return -1;
}

module.exports.indexOf = indexOf

/**
 * contains: Takes in an array and a value and checks to see if the array contains said value.
 * 
 * @param {*} array : Function takes in an input array.
 * @param {*} value : Function takes in an input value.
 * @returns {*} boolean : Function returns true or false
 */

function contains(array, value) {
    //for loop to iterate through array and use a ternary operator
    let store = [];
    for (var i = 0; i < array.length; i++) {
       if (array[i] === value) {
        store.push(array[i]);
       }
    }
    return (store[0] === value ? true : false);
}

module.exports.contains = contains

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Takes in an array and returns a new array with duplicates eliminated
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @returns {Array} collection: returns a new array with duplicates eliminated
 */

function unique(array) {
    let store = [];
   // var result = [];
    for (var i = 0; i < array.length; i++){
     if(_.indexOf(store, array[i]) === -1){
        store.push(array[i]);
     }
        // if (!store.includes(array[_.indexOf(array, array[i])])){
     // store.push(array[_.indexOf(array, array[i])])
     // }
    }
    return store;
}

module.exports.unique = unique


/**
 * filter: call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>. Then return new array of elements 
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @returns {Array} collection: returns a new array of elements that pass true.
 */

function filter(array, func) {
    //call function for each element in array so for loop
   var store = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            store.push(array[i]);
        } 
             
    }
    return store;

}

module.exports.filter = filter


/**
 * reject: call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>. Then return new array of elements 
    (the logical inverse of filter)
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @returns {Array} collection: returns a new array of elements that pass false.
 */

    function reject(array, func) {
        var store = []
         for (var i = 0; i < array.length; i++) {
             if (!func(array[i], i, array)) {
                 store.push(array[i])
             } 
         }
         return store;
     }

module.exports.reject = reject


/**
 * partition: Takes in an array and passes them through a function. Returns a new nested array the first 
 *  being filled with elements that passed, the second filled with elements that failed
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @returns {Array} collection: Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
 */

function partition(array, func) {
    let tru = [];
    let fal = [];
    let final = [];
    for (var i = 0; i < array.length; i++) {
       

        if (func(array[i], i, array)) {
             tru.push(array[i])
        } else {
            fal.push(array[i])
        }
 
}
final.push(tru);
final.push(fal);
return final;
}

module.exports.partition = partition


/**
 * map: Takes in an array and returns a new nested array the first being filled with 
 * elements that passed, the second filled with elements that failed
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @returns {Array} collection: Return an array that is the result of the map iterating
 * through the array or object and mutating tha values based on the function.
 */

function map(collection, func) {
    //init store array
    var store = [];
    //call function for each element in collection
        if(Array.isArray(collection)){
            for (var i = 0; i < collection.length; i++) {
            store.push(func(collection[i], i, collection));
        }
    }
         else {
            for (var key in collection) {
            store.push(func(collection[key], key, collection))
        }
    }
    
    return store;
}

module.exports.map = map


/**
 * pluck: Takes in an array and returns a new array Return an array containing the value of 
 * <property> for every element in <array>
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {property} value: The Function to be applied to each value in the 
 * collection
 * @returns {Array} collection: Return an array containing the value of <property> for every element in <array>
 */

function pluck(array, prop) {
    //return an array containing the value of prop for every element in array must use .map
  
   let result = _.map(array, function(item){
    return item[prop];
});
 
    return result;
}

module.exports.pluck = pluck


/**
 * every: Takes in a collection and calls a function for every element of the collection with the set paramaters :
 * if <collection> is an array: current element, it's index, <collection>
*  if <collection> is an object: current value, current key, <collection>
*  If the return value of calling <function> for every element is true, return true, however if one of them is false,
 *  return false.
 * @param {Array or Object} collection: The collection over which to iterate.
 * @returns {Boolean} collection: Returns true or false 
 */

function every(collection, func) {

    let passes = [];

    //determine if collection is array
    if (Array.isArray(collection)){
        //determine if function wasnt't provided
        if (func === undefined) {
             for (let i = 0; i < collection.length; i++) {
                if (!collection[i]){//test every value for truthy or falsey
                    return false;
                }
             }
        } else {
            for (let i = 0; i < collection.length; i++) {
                if (!func(collection[i], i, collection)) {//if result of invoking func is falsey
                    return false;
                }
            }
        }
    } else { //else it is an object
        if (func === undefined){
            for (var key in collection) {
                if (!collection[key]){//test every value for truthy or falsey
                    return false;
                }
             }
        }   else {
            for (var key in collection) {
                if (!func(collection[key], key, collection)) {
                    return false;
                }

            }

        }// else it was
    }
    return true;
};

module.exports.every = every


/**
 * some: Calls a function for every element of collection with different parameters that differ if it is an array or object
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: If the return value for even one is true, return true 
 * @returns {Boolean} collection: Returns true or false 
 */

function some(collection, func){
    //init passes array
    let value = [];
    //determine if func is undefined return true if at least one element is truthy, otherwise return false
    if (func === undefined) {
        for (let i = 0; i < collection.length; i++) {
           if (collection[i]){//test every value for truthy or falsey
               return true;
           }
           return false; 
        }
    }

    //determine if collection is ARRAY  
    if (Array.isArray(collection)){
        //func is defined and an Array
            //for loop to pass func on each iteration
            for (let i = 0; i < collection.length; i++) {
                if (func(collection[i], i, collection)){
                    return true;
                } 
            } return false;
       
           

    } else { //else it is an OBJECT
       

            for (var key in collection) {
               if (func(collection[key], key, collection)) {
                    return true;
               }
                return false;
             }
             
       //}
    }
    if (value.length > 0){
        return true;
    } return false;
}

module.exports.some = some


/**
 * reduce: Uses a callback function on each element of the array, in order, passing in the return value
 *  from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function}  action: The Function to be applied to each value in the collection that returns value of the previous calculation
 * @param {Seed} element: A precreated arguement to be used in the function
 * @returns {number} element: return the sum of all the elements in an array
 */

function reduce(array, func, seed) {
    // let result; (prev)
     //let nut = array[0];    
         //init a previous value variable
     let result;
     if (seed === undefined) {      
         result = array[0]; 
         for (let i = 1; i < array.length; i++) {
             result = func(result, array[i], i, array); //array isnt strictly necessary 
         }  
     } else { 
        result = seed;
         //loop through array and call a function for every element        
         for (var i = 0; i < array.length; i++){
                 result = func(result, array[i], i, array);  //array isnt strictly necessary                
         }
     }
           return result;
 
 };

 module.exports.reduce = reduce


/**
 * extend: Takes in an two or more objects and copies the data of subsequent objects to the first
 * @param {Object} collection: The collection over which to add to.
 * @returns {Object} collection: Return an array containing the value of the other object arguements
 */

function extend(obj1, obj2, obj3) {
    for (var key in obj2){
        Object.assign(obj1, obj2, obj3);
    }
    return obj1;
}

module.exports.extend = extend