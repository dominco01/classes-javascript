var fs = require("fs");
const file2 = 'zad2.html';

//cors
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: '*'
}));


function onRequest_8080(request, response) {
    fs.stat(file2, function (err, stats) {
        if (err == null) { // If the file exists
            fs.readFile(file2, function (err, data) { // Read it content
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            response.write(data);   // Send the content to the web browser
            response.end();
            });
        }
        else { // If the file does not exists
            response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            response.write(`The '${file2}'file does not exist`);
            response.end();
        } //else
        }); //fs.stat
  }
  
  function onRequest_8081(request, response) {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    date=new Date();
    response.write(`
    <?xml version="1.0" encoding="UTF-8"?>
    <div>
        <span id='date'>`+date.getDate()+"-"+date.getMonth() +`</span>
        <span id='time'>` +date.getHours()+":"+date.getMinutes() + `</span>
    </div>
    `);
    response.end();
  }
  
  var http = require('http');
  
  http.createServer(onRequest_8080).listen(8080);
  http.createServer(onRequest_8081).listen(8081);
  console.log("The server was started on port 8080 and 8081");
  console.log("To stop the server, press 'CTRL + C'");