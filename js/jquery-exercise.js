"use strict";


// using an IFFE in combination with jquery DOM READY
// (function($) {
//     $(document).ready(function() {
//         alert( 'The DOM has finished loading!' );
//     });
// })(jQuery);


// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });

// var welcome = $('.bee-title').html();
// alert(welcome);

// add a border to all classes of codeup
// $('.codeup').css('border', 'solid red')

// $('ul').css('font-size', '20px');

// set multiple elements with one background colors
// $('h1, li, p').css('background-color', 'yellow');

// MULTIPLE STYLING
// $('h1, li, p').css({
//     'background-color': 'yellow',
//     'border': 'solid 5px red'
// });

// this will alert ALL h1 elements using a for loop
// var myHeadings = $('h1');
//
// //BONUS: iterating through jQuery node list
// for(var i = 0; i < myHeadings.length; i++){
//     alert(myHeadings[i].innerHTML);
// }
// alert(myHeadings);


$('h1').click(function() {
    $(this).css('background-color', 'yellow')
});

$('p').dblclick(function() {
    $(this).css({
        "font-size": "18px",
    })
});


// to change colors upon hovering and not hovering a link item
$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);

// this is the same as hover. Im setting the color to change to yellow when i mouseenter
// then change back to white when mouse leave

// $("#color-heading").mouseenter(function(){
//     $(this).css("background-color", "yellow");
// });
// $("#color-heading").mouseleave(function(){
//     $(this).css("background-color", "white");
// });

// target second h1 using the actual string within the <h1> on the htmland click to change color

// $('h1').dblclick(function() {
//     $(this).html('Colors bees like to wear').css({
//         "background": "yellow",
//         "transition": "0s"
//     }).off("dblclick");
// });

// $('p').css('white-space', 'pre-line');