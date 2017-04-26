/*Write an HTTP server that serves the same text file for each requist it receives.
Where the two arguments are objects representing the HTTP request and the corresponding response for this request
Both request and response are node streams The call back function has the signature function callback (request,response) Where the two arguments are objects representing the HTTP request and the corresponding response.
*/
var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var server = http.createServer(function (req, res) {
    //request handling logic
    //fs.createReadStream??
});
server.listen(port);
