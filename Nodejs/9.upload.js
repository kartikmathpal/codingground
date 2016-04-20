//Require Modules
var fs = require('fs');
var http = require('http');

http.createServer(function(request,response){
    var newFile = fs.createWriteStream('output.tx');
    request.pipe(newFile);
    
    request.on('end',function(){
       response.end('Uploaded!...'); 
    });
}).listen(8080);


