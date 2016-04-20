//Read contents from a file and  stream it to othe file

var fs = require('fs');
var file = fs.createReadStream("input.txt");   //creating a read stream from original file.
var newFile = fs.createWriteStream("output.txt");//create a write stream on the destination file.
file.pipe(newFile);
