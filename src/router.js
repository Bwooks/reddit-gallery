
var express = require('express');
var router = express.Router();
var path = require('path');
var fetchImagesFromSubreddit = require('./controllers/imagesController.js');

router.get('/images', function(req,res){
    var response = fetchImagesFromSubreddit('pics');
        response.then(function(object){
            var picsObject = object.data.data.children;
            res.send(picsObject);
        });
});

module.exports = router;