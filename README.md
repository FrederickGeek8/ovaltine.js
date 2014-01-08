ovaltine.js
===========

A library for your Little Orphan Annie Secret decoder ring.


Examples
--------

Encryption
```javascript
var ovaltine = require("./index.js"),
	// The string we want to encrypt
    encrypt = "Remember to drink your ovaltine!";

// The offset or "pin" is set with the second arguement
console.log(ovaltine.encrypt(encrypt, 2));
```

Decryption
```javascript
var ovaltine = require("./index.js"),
	// The string we want to decrypt (Decrypts to "thisshouldnotbeusedforpasswords")
    encrypt = "21-9-10-20-20-9-16-22-13-5-15-16-21-3-6-22-20-6-5-7-16-19-17-2-20-20-24-16-19-5-20";

// The offset or "pin" is set with the second arguement
console.log(ovaltine.decrypt(encrypt, 2));
```