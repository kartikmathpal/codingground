                                    //Creating Buffers

// //Method 1
// var buf = new Buffer(10);   //create an uninitiated buffer of 10 Octets

// //Method 2
// var buf = new Buffer([1,2,3,4,5,55]); //to create a Buffer from a given array

// //Method 3
// var buf = new Buffer("Learning node is fun","UTF-8"); //to create a Buffer from a given string and optionally encoding type


                                  //Writing  to buffers
//buf.write(string[, offset][, length][, encoding])
//This method returns the number of octets written. If there is not enough space in the buffer to fit the entire string,
//it will write a part of the string.

//Example1
buf = new Buffer(256);
len = buf.write("Simply Easy Learning");
console.log("Octets written : "+ len);

                                //Reading from 
//buf.toString([encoding][, start][, end])
//This method decodes and returns a string from buffer data encoded using the specified character set encoding.

///Example2
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
buf[i] = i + 97;
}
console.log( buf.toString('ascii'));
// outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));
// outputs: abcde
console.log( buf.toString('utf8',0,5));
// outputs: abcde
console.log( buf.toString(undefined,0,5));
// encoding defaults to 'utf8', outputs abcde