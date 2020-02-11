var http = require("http");
http.createServer(function(require,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write("Hello\n");
	response.end();
}).listen(8888);

console.log("Server running at http://127.0.0.1:8888/");
