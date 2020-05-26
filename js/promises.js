"Use strict";

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

                            //=====Sophie's suggestion=====//






function wait (number) {
    return new Promise(resolve => setTimeout(resolve, number));

}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));









