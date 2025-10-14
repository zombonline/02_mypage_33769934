var http = require("http"); 
var fs = require("fs");
const port = 8000; 

http.createServer(function(req, res) { 
    console.log("Request for " + req.url + " received.");
    if (req.url === "/"){
        res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("index.html", function(err, data) {
        if (err) {
            res.writeHead(404);
            res.end("404 Not Found");
        } else {
            res.end(data);
        }
    }); 
    } else {
        sendFileContent(res, req.url.substr(1), "text/plain");
    }
    }).listen(port, function() { 
        console.log(`Node server is now running on port ${port}...`); 
}); 

function sendFileContent(res, fileName, contentType){
    fs.readFile(fileName, function(err, data){
        if(err){
            console.log(err);
            res.writeHead(404);
            res.end("404 Not Found");
        } else {
            res.writeHead(200, { "Content": contentType });
            res.end(data);
        }
    });
}
