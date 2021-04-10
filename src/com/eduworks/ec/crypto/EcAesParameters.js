
module.exports = class EcAesParameters{
    constructor(iv)
    {
        iv = forge.util.decode64(iv);
    }
}
