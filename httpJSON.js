/*Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO format time as the value.*/
/*Add a second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds. You server should listen on the port provided by the first argument to your program*/

var port = process.argv[2];
var url = require('url');
var http = require('http');


function parsetime(time){
    return{
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
    
}

function unixtime(time){
    return{
        unixtime : time.getTime()
    }
}

function parseQuery(url){
    if(url.pathname == '/api/parsetime'){
        return parsetime(time);
    }

    else if(url.pathname =='/api/unixtime'){
        return unixtime(time);
    }
}


var server = http.createServer(function(req,res){
    var parsed = url.parse(req.url, true);
    var time = new Date().toISOString();
        if(res){
            res.writeHead(200, {'Content-Type': 'application/json'})
                res.end(JSON.stringify(parseQuery(url)))
            }
        else{
            res.writeHead(404);
            res.end();
        }
    
})
server.listen(port);
console.log('Server listening on http://localhost:&s' + port);