let EcCrypto = require("./EcCrypto.js");
let EcAes = require("./EcAes.js");
let chai = require("chai");

let hrtime = function() {
    try {
        return [Math.round(performance.now()/1000), performance.now() * 1000];
    } catch (e) {
        // Eat quietly.
    }
    return process.hrtime();
};

let should = chai.should();
let expect = chai.expect;
let assert = chai.assert;

describe("EcPpk", () => {
    it('md5', async () => {
        let randomString = EcAes.newIv(4096*4);
        let hrTime = hrtime();
        EcCrypto.caching = true;
        EcCrypto.md5(randomString);
        let elapsed = (hrtime()[0]*1000000 + hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
        console.log(randomString.length/1024+"KB md5 speed: " + elapsed+"ms");
        hrTime = hrtime();
        EcCrypto.md5(randomString);
        elapsed = (hrtime()[0]*1000000 + hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
        console.log("md5 w/caching speed: " + elapsed+"ms");
        assert.isTrue(elapsed < 1);
        EcCrypto.caching = false;
    });
    it('sha256', async () => {
        let randomString = EcAes.newIv(4096*4);
        let hrTime = hrtime();
        EcCrypto.caching = true;
        EcCrypto.sha256(randomString);
        let elapsed = (hrtime()[0]*1000000 + hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
        console.log(randomString.length/1024+"KB sha256 speed: " + elapsed+"ms");
        hrTime = hrtime();
        EcCrypto.sha256(randomString);
        elapsed = (hrtime()[0]*1000000 + hrtime()[1]/1000 - hrTime[0] * 1000000 - hrTime[1] / 1000)/1000;
        console.log("sha256 w/caching speed: " + elapsed+"ms");
        assert.isTrue(elapsed < 1);
        EcCrypto.caching = false;
    });
});