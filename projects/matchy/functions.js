
//const { animal } = require("./data")
/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */



//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, string) {
console.log(animals, string, 'third');
 for (var i = 0; i <= animals.length - 1; i++) {
        if (animals[i].name === string) {
          return animals[i];
        } /*else if (!animals[i].name) {
          return null;
        }*/
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, string, replacement) {
  for (var j = 0; j <= animals.length - 1; j++) {
    if (animals[j]['name'] === string) {
      animals[j] = replacement; 
    }
  }

}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
  for (var i = 0; i < animals.length; i++) {
      if (animals[i].name === name) {
      animals.splice(animals[i], 1);
   }
  }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    
  for (var i = 0; i < animals.length; i++) {
  if (animal.name.length > 0 && animal.species.length > 0 && animal.name !== animals[i].name) {
      animals.push(animal);
  } 
  return animals;
}
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}

