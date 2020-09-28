var express = require('express');
var app = express();

//app.use(express.static('public'));

app.get('/:id', (req, res) => {
    if (req.params.id == 'about') {
       res.sendFile(__dirname + '/about.html');
    }
    res.sendFile(__dirname + '/index.html');
});



app.listen(8080);

console.log('Server running on port 8080');
