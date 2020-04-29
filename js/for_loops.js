"use strict";

//2

// function generateTable(number)
// {
//     var output = "";
//     for ( var i = 1; i < 11; i+=1) {
//         output += number + " x " + i + " = " + number * i;
//         output += "\n"
//     }
//     return output;
// }
//
// console.log(generateTable(7));


//// 3

    // for (var i = 0; i <= 9; i+= 1) {
    //     var random = Math.floor(Math.random() * 180) + 20;
    //
    //     if (random % 2 === 0) {
    //         console.log(random + " is even");
    //     } else {
    //         console.log(random + " is odd");
    //     }
    // }


////4


// for (var i = 1; i < 10; i += 1) {
//     var j = "".repeat(10) + (i + "").repeat(i);
//     console.log(j)
//     }


//============ Justin's way below

// for (var i = 1; i < 10; i += 1) {
//     var output = "";
//     for (var j = 1; j <= i; j += 1) {
//         output += i
//     }
//     console.log(output);
// }

// for (var i = 1; i < 10; i += 1) {
//     console.log(i.toString().repeat(i));
// }

////5


// for (var i = 100; i >= 5; i -= 5) {
//     console.log(i);
// }

