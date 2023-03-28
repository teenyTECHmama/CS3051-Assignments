const express = require('express');
const app = express();
const port = 8080;

const path = require('path')

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'fetch.html'));  // res.sendFile sends the contents of a file
});

app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, 'gridAM.html'));
});

app.get('/hobbies', function (req, res) {
    res.sendFile(path.join(__dirname, 'likes.html'));
});

app.get('/favsites', function (req, res) {
    res.sendFile(path.join(__dirname, 'favsites.html'));
});

app.get('/seniorproject', function (req, res) {
    res.sendFile(path.join(__dirname, 'sp.html'));
});