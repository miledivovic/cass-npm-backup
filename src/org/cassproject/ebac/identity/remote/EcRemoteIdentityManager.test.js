let chai = require("chai");
const EcRemoteIdentityManager = require("./EcRemoteIdentityManager");

var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;

describe("EcRepository", () => {    
    it('splicePasswords', async () => {
        let rim= new EcRemoteIdentityManager();
        assert.equal(rim.splicePasswords(["abc","123"]),"a1b2c3");
    });
});