"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
                            //=====MY WAY=====//
let threeLanguages = users.filter((user) => user.languages.length >= 3);
console.log(threeLanguages);

// Use .map to create an array of strings where each element is a user's email address
                            //=====MY WAY=====//
// const userEmail = users.map((person) => person.email );
// console.log(userEmail);

                            //=====Davids WAY=====//
let userEmails = users.map(user => {
    return user.email;
});
console.log(userEmails);

// Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.
                            //=====MY WAY=====//
// let totalYearsExperience = users.reduce((total, person) =>  {
//    return total + person.yearsOfExperience
// }, 0);

// console.log(totalYearsExperience);

// let average = totalYearsExperience / users.length;

// console.log(`The average years of experience is:  ${average}`);

                            //=====DAVIDS WY=====//

// let totalExp = users.reduce((total, user) => {
//     return total + user.yearsOfExperience;
// }, 0);
//
// console.log(totalExp);
//
// let average = totalExp / users.length;
//
// console.log(`The average years of experience is:  ${average}`);

// Use .reduce to get the longest email from the list of users.
                            //=====MY WAY=====//
// let longest = users.reduce((a, b) => {
//     return a.email.length > b.email.length ? a : b;
// }).email;
//
// console.log(longest);

                            //=====DAVIDS WAY=====//
let longestEmail = users.reduce((longestEmail, user) => {
    if (longestEmail.length > user.email.length) {
        return longestEmail;
    } else {
        return user.email;
    }
}, "");

console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.
                            //=====MY WAY=====//
// let instructorNames = users.reduce((name, person) => {
//     return `${name} ${person.name},`;
//     }, "Your instructors are");
//
// console.log(instructorNames);

                            //=====DAVIDS WAY=====//
let instructorString = users.reduce((finalString, instructor, index) => {
    if (index < users.length - 1) {
        return `${finalString}${instructor.name.substring(0, 1).toUpperCase()}${instructor.name.substring(1, instructor.name.length).toLowerCase()}, `
    } else {
        return `${finalString}${instructor.name.substring(0, 1).toUpperCase()}${instructor.name.substring(1, instructor.name.length).toLowerCase()}. `
    }
}, "your instructors are: ");

console.log(instructorString);


                            //=====BONUS=====//

let uniqueLangs = users.reduce((langList, user) => {
    for (let lang of user.languages) {
        if(!langList.includes(lang)) {
            langList.push(lang);
        }
    }
    return langList;
}, []);

console.log(uniqueLangs);


                    //=====DAVIDS WEIRD WAY=====//

let arr = users.reduce((langs, user) => {
    for (let lang of user.languages) {
        langs.push(lang);
    }
    return langs;
}, []);

let set = new Set(arr);

let uniqueLangsQuick = Array.from(set);

console.log(uniqueLangsQuick);

