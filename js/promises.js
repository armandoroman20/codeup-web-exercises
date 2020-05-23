"Use strict";

var gitHubAPI = fetch('https://api.github.com/users/armandoroman20/events', {headers: {
    'Authorization': `token ${GITHUB_API_KEY}`
    }
});

console.log(gitHubAPI);

// gitHubAPI.then(response => response.json())
//     .then(jsonResponse => jsonResponse.results)
//     .catch(error => console.log(error));


// 'https://api.github.com/users/armandoroman20/events'


gitHubAPI.then( response => {
    response.json().then( users => {
        users.forEach( userObj  => {
            console.log(userObj.events);
        });
    });
});