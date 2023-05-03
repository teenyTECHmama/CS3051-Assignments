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
    wordlist = data.split('/n');
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
    let i = Number(rea.query.index);
    let words = [];

    if(req.query.forwards=="true") {
        let targetI = i + 20;

        for(let ix = i; ix<targetI;ix++) {
            if(i>=wordlist.length){
                i = 0;
            }

            words.push((wordlist[i] + "/n")) // need to increment I
        };
    }
    else {
        let targetI = i - 20;
        for( let ix = i; ix > targetI; ix--) {
            if(i<=0){
                i = wordlist.length-1;

            }
            words.push((wordlist[i] + "/n"));
            i--;
        };
    }
    res.json({"words" : words,
"index" : i});
res.end();

});
        