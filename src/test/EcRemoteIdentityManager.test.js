const chai = require("chai");
const EcAes = require("../../../../../com/eduworks/ec/crypto/EcAes");
const EcPpk = require("../../../../../com/eduworks/ec/crypto/EcPpk");
const EcIdentity = require("../EcIdentity");
const EcIdentityManager = require("../EcIdentityManager");
const EcRemoteIdentityManager = require("./EcRemoteIdentityManager");

let should = chai.should();
let expect = chai.expect;
let assert = chai.assert;

describe("EcRemoteIdentityManager", () => {    
    it('splicePasswords', async () => {
        let rim= new EcRemoteIdentityManager();
        assert.equal(rim.splicePasswords(["abc","123"]),"a1b2c3");
        assert.equal(rim.splicePasswords(["abcde","123"]),"a1b2c3de");
        assert.equal(rim.splicePasswords(["abc","12345"]),"a1b2c345");
        assert.equal(rim.splicePasswords(["","123"]),"123");
        assert.equal(rim.splicePasswords(["abc",""]),"abc");
    });
});