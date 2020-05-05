"use strict";

// ========== Retrieve elements by id, class, tag name

// id
// var header = document.getElementById('main-title');
// console.log(header);



// class - will return an HTMLCollection
// var cards = document.getElementsByClassName('card');
//
// for (var i = 0; i < cards.length; i += 1) {
//     cards[i].innerHTML = "howdy";
// }

// this will show all the cards 0-3
// console.log(cards);
// this is how to target a specific one, in this case the first one
// console.log([0]);
// console.log(cards);
// console.log(cards[0]);
// cards.pop(); // ERROR: Array specific method
// var cardsArr = Array.from(cards); // convert HTMLCollection and NodeList to Array
// cardsArr.pop();

// tag
//     var h1 = document.getElementsByTagName('h1');
//     console.log(h1[0]);


// ========== Query Selector and Query Selector All

// querySelector()

// var headerTitle = document.querySelector('header h1');
// console.log(headerTitle);
// var headerTitle = document.querySelector('#main-title');
// console.log(headerTitle);
//
// var li = document.querySelector('li'); // only returns first matching
// console.log(li);
//
// var secondLi = document.querySelector('li:nth-child(2)');
// console.log(secondLi);


// querySelectorAll()

// var lis = document.querySelectorAll("li");
// console.log(lis);




// ========== Direct access to form inputs

// var forms = document.forms;
// console.log(forms['feedback-form'].feedback.value);


// ========== Accessing and modifying elements and properties

// get value of innerHTML
//     var title = document.getElementById("main-title");
//     console.log(title);

    // var body = document.getElementsByTagName('body');
    // console.log(body[0].innerHTML);
    // console.log(body[0].inrreText);
    // console.log(title.innerHTML);
    // console.log(title.innerText);

// set value of innerHTML
//     title.innerHTML = "<em>Hi MOM!</em>";

// set value of innerText
// this will show the tags on the HTML
//     title.innerText = "<em>Hi MOM!</em>";

// append value to innerText (works the same with innerHTML)
//     title.innerHTML += " ...and hi Mom!";


// ========== Accessing and modifying attributes

// check if attribute exists
//     var cowboy = document.getElementById('cowboy');
//     console.log(cowboy.hasAttribute('data-1'));

// get an attribute value
//     console.log(cowboy.getAttribute('data-1'));

// create a new attribute or change a value of an existing attribute
//     cowboy.setAttribute('data-1', 'hello');
//     cowboy.setAttribute('data-test', 'testing');
//     console.log(cowboy.getAttribute('data-1'));

// remove attribute
//     cowboy.removeAttribute("data-test");
//     console.log(cowboy);


// ========== Accessing and modifying styles

// single style
//     var jumbotron = document.querySelector('.jumbotron');
//     jumbotron.style.display = "none";
//     jumbotron.style.fontFamily = "aerial";
//     jumbotron.style['font-family'] = "times";


// ========== Add / Remove Elements

// see curriculum links


// make the whole background color of the page red

// document.body.style.backgroundColor = "red";

// change the text of "Some Items" to the word "Apple" with the background color of blue

// var h2 = document.querySelectorAll('h2')[2];
//
// h2.innerText = "Apple";
// h2.style.backgroundColor = "blue";
// h2.style.color = "white";
// h2.setAttribute('class', "blue-white");

