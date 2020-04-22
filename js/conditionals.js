"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


    // function analyzeColor(color) {
    //     if ( color === 'blue') {
    //         return "Blue is the color of the sky";
    //     } else if (color === 'red') {
    //         return "Strawberries are red";
    //     } else {
    //         return "I don't know anything about" + randomColor;
    //         }
    //     }




// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

    // console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

    // switch(randomColor) {
    //     case 'red':
    //         console.log('strawberries are red');
    //         break;
    //     case 'orange':
    //         console.log('Oranges are orange');
    //         break;
    //     case 'yellow':
    //         console.log('Bananas are yellow');
    //         break;
    //     case 'green':
    //         console.log('grass is green');
    //         break;
    //     case 'blue':
    //         console.log('The sky is blue');
    //         break;
    //     case 'indigo':
    //         console.log('I know nothing about indigo');
    //         break;
    //     case 'violet':
    //         console.log("Violet you're turning violet");
    //         break;
    //
    // }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
    //
    // function analyzeColor(color) {
    //     if ( color === 'blue') {
    //         return "Blue is the color of the sky";
    //     } else if (color === 'red') {
    //         return "Strawberries are red";
    //     } else {
    //         return "I don't know anything about that color";
    //     }
    // }
    //
    // var userColor = prompt ("what is you're favorite color?");
    //
    // console.log(analyzeColor(userColor));




/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


// var numbers = [0, 1, 2, 3, 4, 5];
// var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
//
//     function calculateTotal(num) {
//             if (num === 0){
//                 return "You get no discount";
//             }
//             else if (num === 1) {
//                 return "you get a 10% discount";
//             } else if (num === 2) {
//                 return "You get a 25% discount!";
//             } else if (num === 3) {
//                 return "You get a 35% discount";
//             } else if(num === 4) {
//                 return "you get a 50% discount";
//             } else if (num === 5) {
//                 return "You get it all free!"
//             } else {
//                 return "please enter a number 1-5";
//             }
//     }

// console.log(calculateTotal(randomNumber));
// console.log(calculateTotal(0, 100));
// console.log(calculateTotal(1, 100));
// console.log(calculateTotal(2, 100));
// console.log(calculateTotal(3, 100));
// console.log(calculateTotal(4, 100));
// console.log(calculateTotal(5, 100));
// console.log(calculateTotal(99, 100));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);

var price = Number(prompt("Enter Bill Price"));

alert("Your lucky number was " + luckyNumber);

alert("Your price was " + price + " before your discount!");

function discount(num) {
    if (num === 0) {
        alert ("You're price is still $, " + price);
    }
    else if (num === 1) {
        alert ("You're new price is, $" + (price - (price * .10)));
    } else if (num === 2) {
        alert ("You're new price is, $" + (price - (price * .25)));
    } else if (num === 3) {
        alert ("You're new price is, $" + (price - (price * .35)));
    } else if(num === 4) {
        alert ("You're new price is, $" + (price - (price * .50)));
    } else if (num === 5) {
        alert ("You're new price is, $" + (price - (price * .65)));
    } else {
        return "please enter a number 1-6";
    }
}


console.log(discount(luckyNumber));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


