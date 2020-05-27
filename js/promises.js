"use strict";

// function lastCommitDate(username, repo) {
//     var gitHubAPI = fetch(`https://api.github.com/repos/${username}/${repo}/commits`, {headers: {'Authorization': `token ${GITHUB_API_KEY}`}});
//
//     gitHubAPI.then(response => response.json())
//         .then(jsonResponse => console.log(jsonResponse[0].commit.author.date))
//         .catch(error => console.log(error));
// }
//     lastCommitDate('armandoroman20', 'codeup-web-exercises');


// function lastCommitDate(username) {
//     var commitDate = new Date();
//     var gitHubAPI = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_API_KEY}`}});
//     gitHubAPI.then(response => response.json())
//         .then(jsonResponse => jsonResponse[0].payload.commits = commitDate);
//         console.log("Your last commit date was: " + commitDate)
// }
//
// lastCommitDate('armandoroman20');

// function wait (number) {
//     return new Promise(resolve => setTimeout(resolve, number));
//
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


                            //=====Sophie's suggestion=====//

function getLastCommitDate (username) {
    return fetch(`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': `token ${GITHUB_API_KEY}`}
    }).then(response => response.json())
        // we want to filter through push events only
        .then(events => {
            return events.filter(event => event.type === "PushEvent")[0].created_at;
        });
}

getLastCommitDate('armandoroman20').then(date => {
    console.log(new Date(date).toDateString())
});


function wait (seconds) {
    seconds = seconds * 1000;
    return new Promise(resolve => {
        setTimeout(() => {
            if (seconds > 1000) {
                console.log("You'll see this after " + seconds/1000  + " seconds")
            }else{
                console.log("You'll see this after " + seconds/1000 + " seconds")
            }
        },seconds)
    });
}

wait(1);
wait(2);
wait(3);









