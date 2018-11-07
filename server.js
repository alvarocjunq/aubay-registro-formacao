//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/aubay-registro-formacao'));

app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('X-Frame-Options', 'ALLOWALL');
    
    res.sendFile(path.join(__dirname + '/dist/aubay-registro-formacao/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);