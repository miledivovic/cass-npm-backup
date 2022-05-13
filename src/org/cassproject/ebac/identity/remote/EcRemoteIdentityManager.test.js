let chai = require("chai");
const EcAes = require("../../../../../com/eduworks/ec/crypto/EcAes");
const EcPpk = require("../../../../../com/eduworks/ec/crypto/EcPpk");
const EcIdentity = require("../EcIdentity");
const EcIdentityManager = require("../EcIdentityManager");
const EcRemoteIdentityManager = require("./EcRemoteIdentityManager");

var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;

describe("EcRemoteIdentityManager", () => {    
    it('splicePasswords', async () => {
        let rim= new EcRemoteIdentityManager();
        assert.equal(rim.splicePasswords(["abc","123"]),"a1b2c3");
        assert.equal(rim.splicePasswords(["abcde","123"]),"a1b2c3de");
        assert.equal(rim.splicePasswords(["abc","12345"]),"a1b2c345");
        assert.equal(rim.splicePasswords(["","123"]),"123");
        assert.equal(rim.splicePasswords(["abc",""]),"abc");
    });
    
    let username = EcAes.newIv(6);
    let password = EcAes.newSecret(6);
    let name = "Test User";
    let email = username + "@test.cassproject.org";
    let ident = null;

    it('create user', async () => {
        let rld = new EcRemoteIdentityManager();
        rld.server = "http://localhost/api/";
        await rld.configureFromServer(null,null);
        rld.startLogin(username,password);
        let im = new EcIdentityManager();
        await rld.create(null,null,im);
        im = await rld.fetch();
        ident = new EcIdentity();
        ident.ppk = await EcPpk.generateKeyAsync(null,null);
        ident.displayName = name;
        im.addIdentity(ident);
        await rld.commit(null,null,im);
    }).timeout(1000);
    
    it('load user', async () => {
        let rld = new EcRemoteIdentityManager();
        rld.server = "http://localhost/api/";
        await rld.configureFromServer(null,null);
        rld.startLogin(username,password);
        let im = await rld.fetch();
        assert.equal(im.ids[0].ppk.toPem(),ident.ppk.toPem());
    }).timeout(1000);

});