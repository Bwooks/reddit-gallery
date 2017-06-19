
var express = require('express');
var router = express.Router();
var path = require('path');
var fetchImagesFromSubreddit = require('./controllers/imagesController.js');

router.get('/api/v1/images', function(req,res){
    var lastImageId = req.query.lastImageId;
    var redditType = req.query.redditType;
    var response = fetchImagesFromSubreddit('pics', lastImageId, redditType);
        response.then(function(object){
            var picsObject = object.data.data.children;
            res.send(picsObject);
        });
});

module.exports = router;