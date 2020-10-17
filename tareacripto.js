var xtea = require("xtea");

var plaintext = new Buffer('UQ9OfwCeMYA=', 'base64');
var key = new Buffer('0123456789012345', 'utf8');
var ciphertext = xtea.decryptBlock( plaintext, key );
 
console.log( ciphertext.toString('ascii') );
