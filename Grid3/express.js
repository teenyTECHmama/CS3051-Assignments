/****

****/

// The following lines set up the webserver using the express module
const express = require('express'); //Set up the express module

const app = express();

const port = 8080;

const path = require('path') 

// Return an HTML file to a request to the domain's URL
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'fetch.html'));  // res.sendFile sends the contents of a file
});

// Return the contents of the file of my home page
app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Return the contents of the file about my hobbies
app.get('/hobbies', function (req, res) {
    res.sendFile(path.join(__dirname, 'hobbies.html'));
});

// Return the contents of the file with my favorite sites 
app.get('/favorite-sites', function (req, res) {
    res.sendFile(path.join(__dirname, 'favSites.html'));
});


// Return the contents of the file about my senior project
app.get('/senior-project', function (req, res) {
    res.sendFile(path.join(__dirname, 'sp.html'));
});


// Start listening for requests on the designated port
app.listen(port, function () {
    console.log("App server is running on port", port);
    console.log("to end press Ctrl + C");
});