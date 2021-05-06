let EcAesCtr = require("./EcAesCtr.js");
let EcAesCtrAsyncWorker = require("./EcAesCtrAsyncWorker.js");
let EcAes = require("./EcAes.js");
let EcCrypto = require("./EcCrypto.js");
let chai = require("chai");

if (typeof process === 'undefined')
    var process = {};
if (process.hrtime === undefined)
    process.hrtime = function() {
        let t = performance.now();
        return [Math.round(t/1000), t * 1000];
    };

var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;

describe("EcAesCtrAsyncWorker", () => {
    it('await encryption then await decryption', async () => {
        var randomString = EcAes.newIv(1024);
        var secret = EcAes.newSecret(16);
        var iv = EcAes.newIv(16);
        var encrypted = await EcAesCtrAsyncWorker.encrypt(randomString, secret, iv);
        var decrypted = await EcAesCtrAsyncWorker.decrypt(encrypted, secret, iv);
        assert.isTrue(randomString == decrypted);
    });
    it('encryption then decryption (utf-8)', async () => {
        var randomString =
            "abc\u16a0\u16c7\u16bb\u16eb\u16d2\u16e6\u16a6\u16eb\u16a0\u16b1\u16a9\u16a0\u16a2\u16b1\u16eb\u16a0\u16c1\u16b1\u16aa\u16eb\u16b7\u16d6\u16bb\u16b9\u16e6\u16da\u16b3\u16a2\u16d7";
        var secret = EcAes.newSecret(16);
        var iv = EcAes.newIv(16);
        var encrypted = await EcAesCtrAsyncWorker.encrypt(randomString, secret, iv);
        var decrypted = await EcAesCtrAsyncWorker.decrypt(encrypted, secret, iv);
        assert.isTrue(randomString == decrypted);
    });
    it('large encryption then decryption w/caching', async () => {
        var randomString = EcAes.newIv(4096*4);
        var secret = EcAes.newSecret(16);
        var iv = EcAes.newIv(16);
        var hrTime = process.hrtime();
        var encrypted = await EcAesCtrAsyncWorker.encrypt(randomString, secret, iv);
        let elapsed = (process.hrtime()[0]*1000000 + process.hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
        console.log(randomString.length/1024+"KB encryption speed: " + elapsed+"ms");
        hrTime = process.hrtime();
        EcCrypto.caching = true;
        var decrypted = await EcAesCtrAsyncWorker.decrypt(encrypted, secret, iv);
        elapsed = (process.hrtime()[0]*1000000 + process.hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
        console.log("decryption wout/caching speed: " + elapsed+"ms");
        hrTime = process.hrtime();
        decrypted = null;
        decrypted = await EcAesCtrAsyncWorker.decrypt(encrypted, secret, iv);
        elapsed = (process.hrtime()[0]*1000000 + process.hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
        console.log("decryption w/caching speed: " + elapsed+"ms");
        assert.isTrue(elapsed < 1);
        assert.isTrue(randomString == decrypted);
        EcCrypto.caching = false;
    });
    it('large encryption then decryption parallelization', async () => {
        let secret = EcAes.newSecret(16);
        let iv = EcAes.newIv(16);
        for (let i = 4; i < 64+4; i+=16) {
        let randomStrings = [];
        for (let ii = 0; ii < i; ii++)
            randomStrings.push(EcAes.newIv(4096*4));
            let hrTime = process.hrtime();
            let encrypteds = await Promise.all(randomStrings.map((randomString)=>EcAesCtrAsyncWorker.encrypt(randomString, secret, iv)));
            let elapsed = (process.hrtime()[0]*1000000 + process.hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
            console.log(randomStrings[0].length/1024+"KB*"+randomStrings.length+" encryption speed: " + elapsed+"ms");
            hrTime = process.hrtime();
            let decrypteds = await Promise.all(encrypteds.map((encrypted)=>EcAesCtrAsyncWorker.decrypt(encrypted, secret, iv)));
            elapsed = (process.hrtime()[0]*1000000 + process.hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
            console.log("decryption wout/caching speed: " + elapsed+"ms");
            hrTime = process.hrtime();
            assert.isTrue(JSON.stringify(randomStrings) == JSON.stringify(decrypteds));
        }
    }).timeout(10000);
    it('EcAesCtrAsyncWorker encryption then EcAesCtr decryption', async () => {
        var randomString = EcAes.newIv(1024);
        var secret = EcAes.newSecret(16);
        var iv = EcAes.newIv(16);
        var encrypted = await EcAesCtrAsyncWorker.encrypt(randomString, secret, iv);
        var decrypted = EcAesCtr.decrypt(encrypted, secret, iv);
        assert.isTrue(randomString == decrypted);
    });
    it('EcAesCtr encryption then EcAesCtrAsyncWorker decryption', async () => {
        var randomString = EcAes.newIv(1024);
        var secret = EcAes.newSecret(16);
        var iv = EcAes.newIv(16);
        var encrypted = EcAesCtr.encrypt(randomString, secret, iv);
        var decrypted = await EcAesCtrAsyncWorker.decrypt(encrypted, secret, iv);
        assert.isTrue(randomString == decrypted);
    });
});