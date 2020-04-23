"use strict";

// ================================= First exercise

//
// console.log("Hello from external javascript");
//
// alert ("Welcome to my website");
//
// var favColor = prompt ("What is your favorite color?");
//
// alert ('Great ' + favColor + ' is my favorite color too!');


// ================================= Movie rental

var dailyRentalPrice = 3;

var littleMermaidDays = Number(prompt("How many days did you rent Little Mermaid?"));

var herculesDays = Number(prompt("How many days did you rent Hercules?"));

var brotherBearDays = Number(prompt ( "How many days did you rent Brother Bear?"));

var totalRentalCost = ((littleMermaidDays + herculesDays + brotherBearDays) * dailyRentalPrice);

alert('The total rental price is $' + totalRentalCost.toFixed( 2));


