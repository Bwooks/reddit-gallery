var axios = require('axios');
var endpointPrefix = "https://www.reddit.com/r/";

function fetchImagesFromSubreddit(subreddit, lastImageId, redditType) {

    var afterLastImage = redditType + lastImageId;
    var endpoint = endpointPrefix + subreddit + ".json";

    if(afterLastImage !== "") {
        endpoint += "?after=" + afterLastImage;
    }
    return axios.get(endpoint)
            .then(function(response){
                return response;
            });
}

module.exports = fetchImagesFromSubreddit;