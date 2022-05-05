var express = require('express');
var https = require('https');
const fs = require("fs");
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://marck28:Travel012095@cluster0.nf2l6.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri);

var app = express();
var port = 8000;

app.get("/", (req, res) => {
    console.log("GET request received on port " + port);
});

async function run() {
    try {
      // Connect the client to the server
      await client.connect();
      // Establish and verify connection
      await client.db("marck283").command({ ping: 1 });
      console.log("Connected successfully to server");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
}

const options = {
    key: fs.readFileSync('server-key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('Server listening on port ' + port);
}).listen(port);