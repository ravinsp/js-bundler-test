const RippleAPI = require("ripple-lib").RippleAPI;

window.mylib = {
    myfunc: function() {

        // Create instance of RippleAPI and call a function from it.
        const api = new RippleAPI({server: "wss://s1.ripple.com"});
        var hex = api.convertStringToHex("Hello world");
        return hex;
    }
}