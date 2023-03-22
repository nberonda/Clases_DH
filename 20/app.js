const express = require('express');
const path = require('path');

const app = express();

app.get ('/', function(req,res) {
    res.sendFile (path.join (__dirname, 'formularios.html'));
});

app.get ('/2', function(req,res) {
    res.sendFile (path.join (__dirname, 'radio_button_checks.html'));
});

app.get ('/3', (req,res) => {
    res.sendFile (path.resolve (__dirname, 'formularios_avanzados.html'))
})

app.listen (3000, () => {
    console.log ('funka http://localhost:3000');
});