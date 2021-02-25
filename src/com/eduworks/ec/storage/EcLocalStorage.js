var EcLocalStorage = function() {};
EcLocalStorage = stjs.extend(EcLocalStorage, null, [], function(constructor, prototype) {
    constructor.removeItem = function(s, key) {
        ((s)["removeItem"])(key);
    };
}, {}, {});
