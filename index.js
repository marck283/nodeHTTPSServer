var express = require('express');
var https = require('https');
const fs = require("fs");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://marck28:Travel012095@cluster0.nf2l6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

var app = express();
var port = 8000;

app.get("/", (req, res) => {
    console.log("GET request received on port " + port);
});

app.post("/", (req, res) => {
    console.log("POST request received on port " + port);
});

const options = {
    key: fs.readFileSync('server-key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('Server listening on port ' + port);
}).listen(port);