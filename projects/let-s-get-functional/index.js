// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./darius-cooper.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    });// filter male customer objects into array

    return males.length;//return length of array
};

var femaleCount = function(array) {
    let females = _.reduce(array, (acc, current) => {
        //if current object is female
        if(current.gender === 'female'){
            acc ++;//increment count
        }
        return acc;//return count
    }, 0);
    return females;
};

var oldestCustomer = function(array) {
    //determine if the current custome is older than accumulator
        //if true, return current
        let oldest = _.reduce(array, function(accumulator, current){
            if (current.age > accumulator.age) {
                accumulator = current;
            }
            return accumulator;
        },{age : 0})
    //else
       return oldest.name;
}
var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(accumulator,current){
        //similar to oldest
        if(current.age < accumulator.age) {
            accumulator = current;
        }
        return accumulator;
    })
    //return string
    return youngest.name;
};

var averageBalance = function(array){
    
    let total = _.map(array, function(customer){
            return customer.balance;
        }     
        
    )
    const num = total.length;
    //return console.log(total);
    //console.log(num)
    let added = 0;
   for (var i = 0; i < total.length; i++){
    added += parseFloat(total[i].replace(/[\$,]/g, ''))
   }
  return added / num;

};

var firstLetterCount = function(array, letter) {
    let names = _.filter(array, function(customer){
        if(customer.name.charAt(0) === letter || customer.name.charAt(0) === letter.toUpperCase()) {
            return true;
        }
    });
    
return names.length;
  
};

var friendFirstLetterCount = function(array, customer, letter) {
    //find the customer in the array
    var store;
    for (var i = 0; i < array.length; i++){
        if (array[i].name === customer){
            store = array[i].friends
        }
    }
    
    let names = _.filter(store, function(store){
        if(store.name.charAt(0) === letter || store.name.charAt(0) === letter.toUpperCase()) {
            return true;
        }     
    });

    //console.log(names);
return names.length
};

var friendsCount = function(array, customer){
    //for (let x = 0; x < array.length; x++){
   let pick = array.reduce(function(accumulator, current){
     for (var j = 0; j < current.friends.length; j++){
            if (current.friends[j].name === customer) {
                accumulator.push(current.name);
            }
            }
            return accumulator;
        },[])
    return pick;
  //}
    //else
  }

var topThreeTags = function(customers) {
    let counter = {};
  let final = [];
  
let acc = customers.reduce(function(accumulator, current){
 for (var i = 0; i < current.tags.length; i++){
   accumulator.push(current.tags[i]);
 } 
 let counter = {};
return accumulator;
},[]);
  
   acc.forEach(function(each){
   if (counter[each]){
     counter[each] += 1;
   } else {
     counter[each] = 1;
   }
   return counter;
 })
  //return counter;
for (var key in counter){
  final.push([key, counter[key]])
}
  //return final;
let ordered = final.sort(function(a, b){
    return b[1] - a[1];
  })
let done = [ordered[0][0], ordered[1][0], ordered[2][0]];
  return done;
  };

var genderCount =  function(array){
    let sling = _.map(array, function(customer){
        return customer.gender;
    })
    let total = sling;
    let count = {};
    let fem = [];
    let mal = [];
    let non = [];
    for (var i = 0; i < total.length; i++){
        if (total[i] === 'female') {
            fem.push(total[i]);
        } else if (total[i] === 'male') {
            mal.push(total[i]);
        } else {
            non.push(total[i]);
        }
       
    }
        count.female = fem.length;
        count.male = mal.length;
        count['non-binary'] = non.length;
    //return console.log(count);
   return count;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
