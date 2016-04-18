// //Blocking Code
// var fs = require('fs');
// var content = fs.readFileSync('input.txt');
// console.log(content.toString());
// console.log('End');

//Non-Blocking
var fs = require('fs');
fs.readFile('input.txt',function(err,data){
   if (err){
       return console.error(err);
   } 
   console.log(data.toString());
});
console.log('END');
