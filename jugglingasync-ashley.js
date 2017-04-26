/*This problem is the same as the previous prob lem in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each ot the URLs and print it to the console. You don't need to prin out the length, just the data as a String, one line per URL. THe catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments*/

var http = require("http");
var url = [process.argv[2], process.argv[3], process.argv[4]];

var count = 0;
var datas = [];
url.forEach(getData);

function getData(url, index) {
    http.get(url, function (res) {
        var str = '';
        res.setEncoding('utf8');
        res.on('data', function (input) {
            str += input;
        });

        res.on('end', function () {
            datas[index] = str;
            count++;
            if (count == 3) {
                datas.forEach(function (msg) {
                    console.log(msg);
                });
            }

        });
    });
}
