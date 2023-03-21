const express = require('express');
const path = require('path');

const app = express();

app.get ('/', function(req,res) {
    res.sendFile (path.join (__dirname, 'formularios.html'))
})

app.listen (3000, () => {
    console.log ('funka http://localhost:3000');
});