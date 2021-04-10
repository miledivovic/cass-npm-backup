module.exports = class EcLocalStorage{
    constructor.removeItem = function(s, key) {
        ((s)["removeItem"])(key);
    };
}, {}, {});
