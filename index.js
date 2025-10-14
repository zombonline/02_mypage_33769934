var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello World!</h1>\n<p>This is my first Node.js web application and it is now being hosted on a virtual machine!</p>");
    }).listen(port, function() { 
        console.log(`Node server is now running on port ${port}...`); 
}); 
