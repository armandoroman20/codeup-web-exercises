"use strict";


while(true) {
    var number = parseInt(prompt("please enter an odd number between 1 and 50"));
    if (number > 50 || number % 2 === 0 || isNaN(number)) {
        alert("please enter a correct number");
    } else {
        console.log("The number to skip is:" + number);
        break;
    }
}
    for (var x = 1; x < 50; x++) {
        if(x === number) {
            console.log("Skipping " + number);
            continue;
        }
        if (number % 2 !== 0 && number < 50) {
            console.log("Here is an odd number: " + x);

        }
    }



