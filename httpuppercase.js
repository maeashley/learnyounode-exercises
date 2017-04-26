/*Wrire an http server that receives only POSTrequests and converts incoming POST body characters to upper-case and returns it to the client.
Your server should listen on the port provided by the first argument to your program.*/
var http = require('http');
var port = process.argv[2];
var map = require('through2-map');

http.createServer(function (req, res) {
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
  })).pipe(res);
}).listen(port);