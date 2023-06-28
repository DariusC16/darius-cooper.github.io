/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal;
animal = {};
animal.species = 'dog';
animal['name'] = 'Bolt';
animal['noises'] = [];

console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises;
noises = [];
noises[0] = 'bark!';
noises.push('woof!');
noises.unshift('ruff!');
noises[3] = 'grrr!';

console.log(noises.length);
console.log(noises[noises.length - 1]);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal['noises'].push('woo!');

console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);

console.log(animals);

var duck;
duck = { 
  species: 'duck',
   name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
   };

animals.push(duck);

console.log(animals);

// Creating two more animal objects
var snake;
snake = {
  species: 'snake',
  name: 'Snivy',
  noises: ['hiss!', 'sitthh!']
};

var bird;
bird = {
  species: 'bird',
  name: 'Jack',
  noises: ['tweet!', 'chirp!']
};

animals.push(snake, bird);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Choosing array for data structure
// I chose an array, as it to acces with more methods at hand
var friends;
friends = [];

function getRandom(animals) {
  return Math.floor(Math.random() * animals.length);
}

//animals[getRandom()]["name"] = friends;
var i = getRandom(animals);
friends.push(animals[i].name);

console.log(friends);

animals[0]["friends"] = friends;

console.log(animals[0]);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}

