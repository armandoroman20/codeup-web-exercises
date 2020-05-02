(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {

        firstName: "Armando",
        lastName: "Roman",
    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello = function() {
        return ("Hello from " + this.firstName + " " + this.lastName + "!");
    };

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron',
        amount: 180
        },
        {name: 'Ryan',
        amount: 250
        },
        {name: 'George',
        amount: 320
        }
    ];

    for(var a = 0; a < shoppers.length; a++) {
        var newAmount = (shoppers[a].amount * .88);
        if(shoppers[a].amount > 200) {
            console.log(shoppers[a].name + " you get a discount! \nYour price before the discount was: " + shoppers[a].amount +
            " \nYour new amount is: " + newAmount);
        }
    }


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [

        {
            book: 1,
            title: "Is it wrong to be strong? You be the judge.",
            author: {
                firstName: "Clark",
                lastName: 'Kent',
            }
        },
        {
            book: 2,
            title: "Am I a child trapped in a man's body, or is it the other way around?",
            author: {
                firstName: "Billy",
                lastName: "Batson",
            }
        },
        {
            book: 3,
            title: "True life: I'm addicted to messing with the timeline (A biography of The Flash)",
            author: {
                firstName: "Barry",
                lastName: "Allen",
            }
        },
        {
            book: 4,
            title: "You can keep your powers, I'M BATMAN!",
            author: {
                firstName: "Bruce",
                lastName: "Wayne",
            }
        },
        {
            book: 5,
            title: "Fish are friends not food (An argument against being pescatarian)",
            author: {
                firstName: "Arthur",
                lastName: "Curry",
            }
        }

    ];

    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);
    console.log(books[2].author.firstName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

for(var i = 0; i < books.length; i++) {
    console.log("Book # " + books[i].book );
    console.log("Title: " + books[i].title);
    console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
}


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
