var express = require('express');
var app = express();
var https = require('https');
var port = 8000;

app.get("/", (req, res) => {
    console.log("GET request received on port " + port);
});

const options = {
    key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
    cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
});