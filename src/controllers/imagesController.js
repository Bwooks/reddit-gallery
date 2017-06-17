var axios = require('axios');
var endpointPrefix = "https://www.reddit.com/r/";

function fetchImagesFromSubreddit(subreddit) {
    var endpoint = endpointPrefix + subreddit + ".json";
    return axios.get(endpoint)
            .then(function(response){
                return response;
            });
}

module.exports = fetchImagesFromSubreddit;