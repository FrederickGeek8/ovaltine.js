var ovaltine = require("./index.js"),
	encrypt = "Remember to drink your ovaltine!",
	decrypt = "21-9-10-20-20-9-16-22-13-5-15-16-21-3-6-22-20-6-5-7-16-19-17-2-20-20-24-16-19-5-20";
console.log(ovaltine.encrypt(encrypt), 2);
console.log(ovaltine.decrypt(decrypt, 2));