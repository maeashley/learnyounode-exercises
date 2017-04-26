/*For each connection you must write the current date & 24 hour time in the format: YYYY-MM-DD HH:MM followed by a new line character. Month, day, hour and minute must be zero-filled to 2 integers. 2013-07-06 17:42 After sending the string, close the connection.*/
/*Use the net module from Node core which has all the basic networking functions. Remember to use the port number supplied to you as the first command-line argument. Write data to and then close the socket object.*/

var net = require('net');
var port = process.argv[2];

function check(res) {
    //evaluate the number and see if its value is less than 10
    if (res < 10) {
        return "0" + res;
    } else {
        return res;
    }
    //if so, add a zero before the integer
}
var server = net.createServer(function (socket) {
    var date = new Date();
    var output = date.getFullYear() + "-" +
        check(date.getMonth() + 1) + "-" +
        check(date.getDate()) + " " +
        check(date.getHours()) + ":" +
        check(date.getMinutes()) +
        "\n";
    socket.end(output);
});
server.listen(port);
