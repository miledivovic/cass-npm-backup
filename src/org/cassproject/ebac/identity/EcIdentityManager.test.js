const chai = require("chai");
const EcPpkFacade = require("../../../../com/eduworks/ec/crypto/EcPpkFacade");
const EcRsaOaepAsyncWorker = require("../../../../com/eduworks/ec/crypto/EcRsaOaepAsyncWorker");

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

after(()=>EcRsaOaepAsyncWorker.teardown());

describe("EcIdentityManager", () => {
    it('real simple stuff', () => {
        assert.isTrue(new EcPpkFacade() instanceof EcPpkFacade);
    })
    it('real simple stuff 2', () => {
        assert.isTrue(new EcPpkFacade() instanceof require("../../../../com/eduworks/ec/crypto/EcPpkFacade"));
    })
    it('real simple stuff 3', () => {
        assert.isTrue(new (require("../../../../com/eduworks/ec/crypto/EcPpkFacade"))() instanceof require("../../../../com/eduworks/ec/crypto/EcPpkFacade"));
    })
}); 