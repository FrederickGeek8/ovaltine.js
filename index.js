module.exports = {
    encrypt: function encrypt(secretmessage, pin) {
        var product = "";
        if (pin == null){
            console.error("Must specify pin!");
            process.exit(1);
        }
        pin = parseInt(pin);
        if (pin < 0 || pin >= 26){
            console.error('Pin not on decoder ring!');
        }
        secretmessage = secretmessage.replace(/[^a-zA-Z]+/g,'');
        secretmessage = secretmessage.toLowerCase();
        for (var i = 0; i < secretmessage.length; i++) {
            var letter = secretmessage.charCodeAt(i);
            product += String((letter - 97) + pin)+"-";
        }
        return product.substring(0, product.length - 1);
    }
    ,
    decrypt: function decrypt(secretmessage, pin) {
        var product = "";
        if (pin == null){
            console.error("Must specify pin!");
            process.exit(1);
        }
        pin = parseInt(pin);
        secretmessage = secretmessage.split("-");
        if (pin < 0 || pin >= 26){
            console.error('Pin not on decoder ring!');
        }
        for (var i = 0; i < secretmessage.length; i++) {
            var letter = parseInt(secretmessage[i]);
            product += String.fromCharCode((letter + 97) - pin);
        }
        return product;
    }
}