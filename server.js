var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/:id', (req, res) => {
    if (req.params.id == 'about') {
       res.sendFile(__dirname + '/about.html');
    } else {
        res.sendFile(__dirname + '/404.html');
    }

    
});

app.listen(process.env.PORT);

console.log('Server running...');
