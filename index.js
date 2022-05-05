var express = require('express');
var https = require('https');
const fs = require("fs");

var app = express();
var port = 8000;

app.get("/", (req, res) => {
    console.log("GET request received on port " + port);
});

const options = {
    key: fs.readFileSync('server-key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('Server listening on port ' + port);
}).listen(port);