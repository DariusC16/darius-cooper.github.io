//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
         //create storage arr
    let arr = [];
    //for in loop
    for(let key in object){
        arr.push(object[key])//push values into arr
    }
    return arr;//return arr

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var store = [];
    //for var in loop
    for (var key in object) {
     
        //should add values to array in each loop
        store.push(object[key]); 
    
    }
  var string = []
  for (var i = 0; i < store.length; i++) {
    if (typeof store[i] === 'string'){
      string.push(store[i]);
    }
  }
    return string.join(' ');
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
     //should use Array.isArray to determine if array. if not return object
     if (Array.isArray(collection)) {
        return 'array';
    } else {
        return 'object';
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
     //use .charAt(0), .toUpperCase() and .slice(1) -removes first letter of string methods to make a very dry code
     return string.charAt().toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
        //we need to split our string into an array
        var words = string.split(" ");
        //for loop
        for (var i = 0; i < words.length; i++) {
            //loop through and make the word[i] = to the first letter capitalized concat with a sliced remainder of word[i]
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
     //capitalize object name
     let name = object.name.charAt(0).toUpperCase() + object.name.slice(1);  
     return 'Welcome ' + name + '!';// return message

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
     //capitalize name
     let name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
     //capitalize species
     let species = object.species.charAt(0).toUpperCase() + object.species.slice(1);
     return name + ' is a ' + species;

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
      //if noises is an array and has a value
      if(Array.isArray(object.noises) && object.noises.length > 0){
        return object.noises.join(' ');// return joined with spaces
      } else{
        return 'there are no noises';//else return message
      }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    return string.includes(word);

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
        //if friends is an array
        if(Array.isArray(object.friends)){
            return object.friends.includes(name);//check friends includes name
          }else {
            return false;//else false
          }

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
      //storage arr
      let unfriend = [];
      //loop
      for(let i = 0; i < array.length; i++){
        //if friends !include name and array.name != name  
        if(!array[i].friends.includes(name) && array[i].name !== name){
            unfriend.push(array[i].name);//push array.name to arr
        }
      }
      return unfriend;//return arr

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
      //create key and assign value
      object[key] = value;
      return object;// return obj

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
        //loop
        for(let i = 0; i < array.length; i++){
            //delete prop
            delete object[array[i]];
          }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
     //storage arr
     let arr = [];
     //loop
     for(let i = 0; i < array.length; i++){
       //if arr does not include array[i]
       if(!arr.includes(array[i])){
         arr.push(array[i]);//push
       }
     }
     return arr;// return arr

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}