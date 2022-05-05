var express = require('express');
var app = express();
var https = require('https');
var port = 8000;
const fs = require("fs");

app.get("/", (req, res) => {
    console.log("GET request received on port " + port);
});

const options = {
    key: fs.readFileSync('server-key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
});