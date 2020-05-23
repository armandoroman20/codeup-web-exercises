"use strict";

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */

var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
// return of fetch request is a promise

//TODO: console log the results of the above Promise. What is the result?

console.log(pokemonAPI);

//TODO: add a method that runs if the Promise resolves successfully

function jsonResponse(response){
    return response.json();
}

function listNames (arr) {
    arr.forEach(element => console.log(element.name));
}


pokemonPromise.then(response => response .json())
    .then(jsonResponse => jsonResponse.results)
    .then(pokemonArray => pokemonArray.forEach(pokemon => {
        console.log(pokemon.name)
    }))
    .catch(error => console.log(error));

//=====above turns into bottom because i refactored

pokemonAPI.then(jsonResponse)
    .then(jsonResponse => jsonResponse.results)
    .then(listNames)
    .catch(error => console.log(error));

//TODO: add a method that runs if the Promise fails


//TODO: In the callback function of the .then method, parse the response into JSON



/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.
// BONUS: Is there a way for us to clean up our code?

// Let's try working with the Star Wars API!

// TODO: Using Promises, make a fetch request to the Star Wars API

// making a request to the star wars api

let starWarsAPI = fetch("https://swapi.dev/api/films/");

// TODO: Use Promise chaining to console log the json response

// parse the response into json
starWarsAPI.then(response => response.json())
            // access the results property from the json object
            .then(jsonResponse => jsonResponse.results)
    // iterate over the results array, and access title and id properties  of each film
            .then(resultsArray => resultsArray.forEach(film => {
                console.log(film.title + " " + film.episode_id);
            }))
            .catch(error => console.log(error));

// starWarsAPI.then(response => response.json())
//     .then(jsonResponse => console.log(jsonResponse.count));


// TODO: chain another method that iterates through the results array and console logs the names
//  of all characters and their birth_years

/*********************************************
 *              CUSTOM PROMISES
 ******************************************** */

// To further understand Promises, we can create our own custom Promise object
// Let's take a look at the example from the curriculum

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('this is where the API data would be');
        } else {
            reject('your API request failed');
        }
    }, 3000);
});

myPromise.then(response => console.log(response))
    .catch(error => console.log(error));

// The resolve and reject functions can also be passed a value.
// These can then be used in our .resolve and .reject methods

// TODO: pass in a message argument into the resolve and reject functions
// TODO: use the passed in arguments in the callback functions

// This is a simplified example of what goes on underneath the hood of a more complex fetch
// request. The concepts we covered are similar to what you learned when using AJAX with jQuery.

Promise.all([pokemonAPI, starWarsAPI])
    .then(data => console.log(data));

Promise.race([pokemonAPI, starWarsAPI])
    .then(data => console.log(data));

