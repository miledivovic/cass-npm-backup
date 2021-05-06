let EcAesCtr = require("./EcAesCtr.js");
let EcAes = require("./EcAes.js");
let EcCrypto = require("./EcCrypto.js");
let chai = require("chai");

let hrtime = function() {
    try {
        return [Math.round(performance.now()/1000), performance.now() * 1000];
    } catch (e) {
        // Eat quietly.
    }
    return process.hrtime();
};

var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;

describe("EcAesCtr", () => {
    it('encryption then decryption', () => {
        var randomString = EcAes.newIv(1024);
        var secret = EcAes.newSecret(16);
        var iv = EcAes.newIv(16);
        var encrypted = EcAesCtr.encrypt(randomString, secret, iv);
        var decrypted = EcAesCtr.decrypt(encrypted, secret, iv);
        assert.isTrue(randomString == decrypted);
    });
    it('encryption then decryption (utf-8)', () => {
        var randomString =
            "abc\u16a0\u16c7\u16bb\u16eb\u16d2\u16e6\u16a6\u16eb\u16a0\u16b1\u16a9\u16a0\u16a2\u16b1\u16eb\u16a0\u16c1\u16b1\u16aa\u16eb\u16b7\u16d6\u16bb\u16b9\u16e6\u16da\u16b3\u16a2\u16d7";
        var secret = EcAes.newSecret(16);
        var iv = EcAes.newIv(16);
        var encrypted = EcAesCtr.encrypt(randomString, secret, iv);
        var decrypted = EcAesCtr.decrypt(encrypted, secret, iv);
        assert.isTrue(randomString == decrypted);
    });
    it('large encryption then decryption w/caching', () => {
        var randomString = EcAes.newIv(4096*16);
        var secret = EcAes.newSecret(16);
        var iv = EcAes.newIv(16);
        var hrTime = hrtime();
        var encrypted = EcAesCtr.encrypt(randomString, secret, iv);
        let elapsed = (hrtime()[0]*1000000 + hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
        console.log(randomString.length/1024+"KB encryption speed: " + elapsed+"ms");
        hrTime = hrtime();
        EcCrypto.caching = true;
        var decrypted = EcAesCtr.decrypt(encrypted, secret, iv);
        elapsed = (hrtime()[0]*1000000 + hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
        console.log("decryption wout/caching speed: " + elapsed+"ms");
        hrTime = hrtime();
        decrypted = null;
        decrypted = EcAesCtr.decrypt(encrypted, secret, iv);
        elapsed = (hrtime()[0]*1000000 + hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
        console.log("decryption w/caching speed: " + elapsed+"ms");
        assert.isTrue(elapsed < 1);
        assert.isTrue(randomString == decrypted);
    });
});