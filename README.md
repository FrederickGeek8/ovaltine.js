ovaltine.js
===========

A library for your Little Orphan Annie Secret decoder ring.

Examples
--------
```javascript
var ovaltine = require("./index.js"),
	// The string we want to encrypt
    encrypt = "Remember to drink your ovaltine!";
    // The offset or "pin" is set with the second arguement
console.log(ovaltine.encrypt(encrypt, 2));
```