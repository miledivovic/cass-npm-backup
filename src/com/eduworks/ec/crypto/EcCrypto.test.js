let EcCrypto = require("./EcCrypto.js");
let EcAes = require("./EcAes.js");
let chai = require("chai");

var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;

describe("EcPpk", () => {
    it('md5', async () => {
        var randomString = EcAes.newIv(4096*4);
        var hrTime = process.hrtime();
        EcCrypto.caching = true;
        EcCrypto.md5(randomString);
        let elapsed = (process.hrtime()[0]*1000000 + process.hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
        console.log(randomString.length/1024+"KB md5 speed: " + elapsed+"ms");
        hrTime = process.hrtime();
        EcCrypto.md5(randomString);
        elapsed = (process.hrtime()[0]*1000000 + process.hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
        console.log("md5 w/caching speed: " + elapsed+"ms");
        assert.isTrue(elapsed < 1);
        EcCrypto.caching = false;
    });
    it('sha256', async () => {
        var randomString = EcAes.newIv(4096*4);
        var hrTime = process.hrtime();
        EcCrypto.caching = true;
        EcCrypto.sha256(randomString);
        let elapsed = (process.hrtime()[0]*1000000 + process.hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
        console.log(randomString.length/1024+"KB sha256 speed: " + elapsed+"ms");
        hrTime = process.hrtime();
        EcCrypto.sha256(randomString);
        elapsed = (process.hrtime()[0]*1000000 + process.hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
        console.log("sha256 w/caching speed: " + elapsed+"ms");
        assert.isTrue(elapsed < 1);
        EcCrypto.caching = false;
    });
});