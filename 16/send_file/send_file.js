const express = require('express');
const path= require('path');
const app = express();

app.listen (3000, function() {
    console.log ('funka');
});

app.get ('/', (req, res) => {
    res.send ('Hola, mundo!');
});

// send html

app.get('/send_file', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/index.html');
    res.sendFile(htmlPath);
});

// send html, otra opción

app.get ('/send_file2', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

//ejercicios


/* About us */

app.get ('/about-us', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/about-us.html'));
});