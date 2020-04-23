"use strict";

// // function declaration
// function sayHello() {
//     console.log("Hello!");
// }
//
//
// // calling the function / invoking the function
//
// sayHello();
//
// //


// return value
//
// function sayHello() {
//     return "Hello!";
// }
//
// console.log(sayHello());

// console.log(sayHello); // This will show the definition of the function


// var x = sayHello;
//
// console.log(x());
// console.log(sayHello());


// arguments vs parameters (function input)


//======pure function

// function add(num1, num2) {  // this is the preferred method
//     return num1 + num2;
// }
//
// console.log(add(2, 2));



//======function with side effects

// var num = 2;
//
// function addTwo() {
//     return num + 2;
// }
//
// var globalVar = "Look, I'm Global!";
//
// function scopeExample() {
//     var localVar = "Look, I'm Local!";
//     // always declare variable at the top of a function
//     alert(localVar);
//     alert(globalVar);
//
// }
//
//     console.log(globalVar);
//     console.log(localVar);


// extra scope example

// var x = 300;
// var y = 100;
//
// function scopeExample2(x, y) {
//     var x = 1;
//     var y = 2;
//     console.log('x: ' + x + ' y: ' + y);
//         return x + y;
// }
//
// console.log(scopeExample2());
// console.log('x: ' + x + ' y: ' + y);


//======== CALLBACK, ANONYMOUS, HIGHER ORDER FUNCTIONS

function returnFive() {
    return 5;
}

// addTwo is  "Higher order Function" because it takes in other functions as arguments
// functions that return a function are also " Higher Order Functions"

function addTwo(fn) {
    return fn() + 2;
}

console.log(addTwo(returnFive)); // callback function 'returnFive" is passed to addTwo

console.log(addTwo(function())
{
    return 10;

})


