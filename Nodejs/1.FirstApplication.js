//Step-1 Importing module
var http = require('http');  //require directive loads the http module and stores the returned HTTP instance in the http variable

//Step-2 Create server
http.createServer(function(request,response){
    response.writeHead(200);  // response.writeHead(200,{'Content-Type' : 'text/plain' });
    //response.write('Hello World\n');
    response.end('Hello World\n');  
}).listen(8081);
console.log('Server is running at http://127.0.0.1:8081/');

//Step-3 Read request and  return the response
