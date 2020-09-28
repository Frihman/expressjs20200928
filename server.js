var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(8080);

console.log('Server running on port 8080');
