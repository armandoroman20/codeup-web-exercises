"use strict";


//====Dont like to use this because it acceots the length instead of the actual sequence

// a key map of allowed keys
var allowedKeys = {
    38: 'up',
    37: 'left',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
    13: 'enter'
};


var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

var konamiCodePosition = 0;

$(Document).keydown(function(e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the  code
    var requiredKey = konamiCode[konamiCodePosition];
    // compare the key with the required key
    if (key === requiredKey) {

        // move to the next key in the konami code sequence
        konamiCodePosition++;
        // this is to see if input is equal to the code i want
        // if i put an else it'll expect user to remember the last character they pressed
        // so without an else they can just restart with no penalty
        if (konamiCodePosition === konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }

    }
});

function activateCheats() {

    alert("HERE WE GO AGAIN!");

    document.body.style.backgroundImage = "url('img/cj-dance.gif')";

    var audio = new Audio('mp3/gta.mp3');
    audio.play();

}


// var dragonCode = ['left', 'down', 'right', 'up', 'left', 'down', 'right', 'up'];
//
// || key === dragonKey
//
// var dragonCodePosition = 0;
//
// var dragonKey = dragonCode[dragonCodePosition]
//
// dragonCodePosition++;
//
// if (dragonCodePosition === dragonCode.length) {
//     enterTheDragon();
//     dragonCodePosition = 0;
// }
// function enterTheDragon () {
//     alert("dragon");
// }
