var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./router.js');
var path = require('path');

app.use(routes);
app.use(express.static(path.join(__dirname,'views')));
app.listen(port,function() {
    console.log("Listening on port", port);
});