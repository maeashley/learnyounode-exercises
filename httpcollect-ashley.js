/*Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first 'data' event) then write two lines to the console.

Collect data across multiple 'data' events and append the results together propr to printing the output. Use the "end"" event to determine when the stream is finished and you can write the output.*/
//HTTP Collect

var http = require("http");
var datas = '';

http.get(process.argv[2], function (res) {
    res.setEncoding('utf8');
    res.on('data', function (input) {
        datas += input;
    });
    res.on('end', function () {
        console.log(datas.length);
        console.log(datas);
    });
});
