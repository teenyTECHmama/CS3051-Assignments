const express = require('express'); 

const app = express();

const port = 8080;

const path = require('path')

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'fetch.html'));
});

const fs =require('fs');
let wordlist = [];
fs.readFile(path.join(__dirname, 'enwords.txt'), 'utf8',function(err, data) {
    wordlist = data.split('\n');
});

let server = app.listen(port, function() {

    console.log("App server is running on port", port);
    
    console.log("to end press Ctrl + C");
});

app.get('/english', function(req, res) {

    res.sendFile(path.join(__dirname, 'enwords.txt'));
    
    });

app.get('/french', function(req, res) {

    res.sendFile(path.join(__dirname, 'frwords.txt'));
        
    });

app.get('/spanish', function(req, res) {

    res.sendFile(path.join(__dirname, 'eswords.txt'));
            
        });
    
app.get('/nextwords', (req, res) => {
    let i = Number(req.query.index);
    let words = [];
    let targetI = 0;

    if(req.query.forwards=="true") {
        targetI = i + 20;

        for(let ix = i; ix<targetI;ix++) {
            if(ix>=wordlist.length){
                targetI = wordlist.length-1;  // set the index to return
                break;  // don't want to go past the end of the list
                // if you want to wrap, you have to change the limits of the loop
            }
            words.push(wordlist[ix]);
        };
    }
    else {
        targetI = i - 20;
        for( let ix = i; ix > targetI; ix--) {
            if(ix<0){
                targetI = 0; // set the index to return
                break;  // don't want to go past the beginning of the list
                // if you want to wrap, you have to change the limits of the loop
            }
            words.push(wordlist[ix]);
        };
    }
    res.json({"words" : words, "index" : targetI});
    res.end();

});
        