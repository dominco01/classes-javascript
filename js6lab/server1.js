var http = require("http");
var fs = require("fs");
const file = 'zad1.html';

http.createServer(function (request, response) {
  console.log("--------------------------------------");
  console.log("The relative URL of the current request: " + request.url + "\n");
  var url = new URL(request.url, `http://${request.headers.host}`); // Create the URL object

  //new by me
  if(request.method === 'POST') {
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    request.on('end', () => {
        console.log(body);
        response.end(body);
    });
    }
    else
    {

    
  //Compare the relative URL
  switch (url.pathname) {

    case '/':
      fs.stat(file, function (err, stats) {
        if (err == null) { // If the file exists
          fs.readFile(file, function (err, data) { // Read it content
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            response.write(data);   // Send the content to the web browser
            response.end();
          });
        }
        else { // If the file does not exists
          response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
          response.write(`The '${file}'file does not exist`);
          response.end();
        } //else
      }); //fs.stat
      break;

    case '/submit':
      // Only one of the three lines below can be uncommented
      const urlParams = new URLSearchParams(url.search);
      const name = urlParams.get('imie');
      var welcomeText ='Hello world';
      if(name) welcomeText ="Witaj "+name +"!";                   // Plain text greeting
      // var welcomeXML = '<welcome>Hello World</welcome>'; // XML greeting
      //var welcomeJSON = '{"welcome":"Hello World"}';     // JSON greeting

      // Send the plain text greeting
      if (typeof welcomeText !== 'undefined') {
        response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        response.write(welcomeText); // Data (response) that we want to send to the web browser
        response.end(); // Sending the response
        console.log("The server sent the '" + welcomeText + "' text to the browser");
        break;
      }

      // Send the XML greeting
      if (typeof welcomeXML !== 'undefined') {
        response.writeHead(200, { "Content-Type": "application/xml" });
        response.write(welcomeXML); // Data (response) that we want to send to the web browser
        response.end(); // Sending the response
        console.log("The server sent the '" + welcomeXML + "' text to the browser");
        break;
      }

      // Send the JSON greeting
      if (typeof welcomeJSON !== 'undefined') {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(welcomeJSON); // Data (response) that we want to send to the web browser
        response.end(); // Sending the response
        console.log("The server sent the '" + welcomeJSON + "' text to the browser");
        break;
      }

    // Other cases
}
  } //switch
}).listen(8080);
console.log("The server was started on port 8080");
console.log("To stop the server, press 'CTRL + C'");
