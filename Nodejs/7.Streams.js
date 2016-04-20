//reading from Request stream(request stream is a readable stream & response stream is a writeable stream)
//request object is a readable stream.It inherits from EventEmitter class.
//can fire 2 events : readable(fired when data is ready to be consumed) & end(fired when client is done sending data)

var http = require('http');
http.createServer(function(request,response){
   request.writeHead(200);
   request.on('readable',function(){
       var chunck = null;
       while(null!==(chunk = request.read())){
           console.log(chunk.toString()); //printing the data which we get from the client
        //   response.write(chunk);//to echo the message to client.Conversion taken care by node.
       }
   });
   request.on('end',function(){
       response.end();
    });
}).listen(8080);

/*    " request.pipe(response); "
 request.writeHead(200);
   request.on('readable',function(){
       var chunck = null;
       while(null!==(chunk = request.read())){
           console.log(chunk.toString()); //printing the data which we get from the client
        //   response.write(chunk);//to echo the message to client.Conversion taken care by node.
       }
   });
   request.on('end',function(){
       response.end();
    });
*/