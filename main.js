
var express = require('express');

var app = express();

var bodyParser = require('body-parser');

// port to listen
var port = 8000;

// Routes Configurations
//var apiRoutes = require('./codeBehindRoutes');


// Middleware set to to use bodyParser, uses url Encoder, then every data type will be included for parsing
app.use(bodyParser.urlencoded({ extended: true }));
// converts to json object
app.use(bodyParser.json());

app.use(express.static('app'));



// Registering Routes Configuration
// ===========================================

//app.use('/server', apiRoutes);

app.listen(port);

console.log("Server Started");