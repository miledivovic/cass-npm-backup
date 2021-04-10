module.exports = class EcLocalStorage{
    static removeItem(s, key) {
        ((s)["removeItem"])(key);
    };
};
