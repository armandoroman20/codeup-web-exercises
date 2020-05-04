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

    // console.log(person.firstName);
    // console.log(person.lastName);

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
        return "Hello from " + this.firstName + " " + this.lastName + "!";
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


    // function discountChecker(shoppers) {
    //     shoppers.forEach(function(shopper) {
    //         if(shopper.amount >= 200) {
    //             console.log(shopper.name + " you get a discount! \nYour price before the discount was: " + shopper.amount.toFixed(2) + " \nYour new amount is: " + (shopper.amount - (shopper.amount * .12 )).toFixed(2));
    //         } else {
    //             console.log(shopper.name + "You dont qualify for a discount")
    //         }
    //     })
    // }
    //
    // console.log(discountChecker(shoppers));


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
            title: "Is it wrong to be strong? You be the judge.",
            author: {
                firstName: "Clark",
                lastName: 'Kent',
            }
        },
        {
            title: "Am I a child trapped in a man's body, or is it the other way around?",
            author: {
                firstName: "Billy",
                lastName: "Batson",
            }
        },
        {
            title: "True life: I'm addicted to messing with the timeline (A biography of The Flash)",
            author: {
                firstName: "Barry",
                lastName: "Allen",
            }
        },
        {
            title: "You can keep your powers, I'M BATMAN!",
            author: {
                firstName: "Bruce",
                lastName: "Wayne",
            }
        },
        {
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


    //=========for loop method

    function loggingBooks(books) {
        for(var x = 0; x < books.length; x++) {
            console.log("Book # " + (x + 1) + "\n" + "Book Title: " + books[x].title + "\n" + "Book Author: " + books[x].author.firstName + " " + books[x].author.lastName);
        }
    }

    loggingBooks(books);


    //===== forEach loop method


    // function loggingBooks(books) {
    //     books.forEach(function(books, index) {
    //         console.log("Book # " + (index + 1) + "\n" + "Book Title: " + books.title + "\n" + "Book Author: " + books.author.firstName + " " + books.author.lastName)
    //     })
    // }
    //
    // loggingBooks(books);

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


        // for (var i = 0; i < books.length; i++) {
        //     function indexPlueOne(title) {
        //         for (var i = 0; i < books.length; i++) {
        //             if(books[i].hasOwnProperty('title')) {
        //                 if(books[i].title === title) {
        //                     return ++i;
        //                 }
        //             }
        //         }
        //     }
        //     console.log("Book # " + indexPlueOne(books[i].title)+ "\nTitle: " + books[i].title + "\nAuthor: " + books[i].author.firstName + " " + books[i].author.lastName);
        //     // console.log("Title: " + books[i].title);
        //     // console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
        // }
        //

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

    function createBook(title, fName, lName, arr) {
        var newBook = {
            title: title,
            author: {
                firstName:fName,
                lastName: lName
            }
        };
        arr.push(newBook);
        return arr;
    }

    createBook("How Learning Works", "Susan", "Amberose", books)

})();
