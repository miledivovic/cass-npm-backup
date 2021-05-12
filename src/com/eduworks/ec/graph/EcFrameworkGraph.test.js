let EcFrameworkGraph = require("./EcFrameworkGraph.js");
const EcFramework = require("../../../../org/cass/competency/EcFramework.js");
let chai = require("chai");
const EcRepository = require("../../../../org/cassproject/ebac/repository/EcRepository.js");
const EcIdentity = require("../../../../org/cassproject/ebac/identity/EcIdentity.js");
const EcPpk = require("../crypto/EcPpk.js");
const EcAssertion = require("../../../../org/cass/profile/EcAssertion.js");
const EcCompetency = require("../../../../org/cass/competency/EcCompetency.js");
const EcRollupRule = require("../../../../org/cass/competency/EcRollupRule.js");
const EcAlignment = require("../../../../org/cass/competency/EcAlignment.js");
const EcRsaOaepAsyncWorker = require("../crypto/EcRsaOaepAsyncWorker.js");
const EcIdentityManager = require("../../../../org/cassproject/ebac/identity/EcIdentityManager");
const EcAes = require("../crypto/EcAes.js");

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

let deleteById = async function (id) {
    await EcRepository.get(
        id,
        function (p1) {
            EcRepository._delete(p1, null, function (p1) {
                console.log(p1);
            });
        },
        function (p1) {
            console.log(p1);
        }
    );
};
var failure = function (p1) {
    console.trace(p1);
    assert.fail();
};
let repo = new EcRepository();
repo.selectedServer = "http://localhost/api/";
let newId1 = new EcIdentity();
newId1.ppk = EcPpk.fromPem(
    "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
);
EcIdentityManager.default.ids = [];
EcIdentityManager.default.addIdentity(newId1);
async function newAssertion(competencyToAssert) {
    var a = new EcAssertion();
    a.generateId(repo.selectedServer);
    a.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
    a.addReader(EcIdentityManager.default.ids[0].ppk.toPk());
    await a.setSubject(EcIdentityManager.default.ids[0].ppk.toPk());
    await a.setAgent(EcIdentityManager.default.ids[0].ppk.toPk());
    await a.setCompetency(competencyToAssert.shortId());
    await a.setConfidence(1.0);
    await a.setAssertionDate(new Date().getTime());
    await a.setExpirationDate(new Date().getTime() + 1000 * 60 * 60);
    await a.setDecayFunction("t");
    await a.save(null, failure, repo);
    return a;
}
async function newFalseAssertion(competencyToAssert) {
    var a = new EcAssertion();
    a.generateId(repo.selectedServer);
    a.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
    await a.setSubject(EcIdentityManager.default.ids[0].ppk.toPk());
    await a.addReader(EcIdentityManager.default.ids[0].ppk.toPk());
    await a.setAgent(EcIdentityManager.default.ids[0].ppk.toPk());
    await a.setCompetency(competencyToAssert.shortId());
    await a.setConfidence(1.0);
    await a.setNegative(true);
    await a.setAssertionDate(new Date().getTime());
    await a.setExpirationDate(new Date().getTime() + 1000 * 60 * 60);
    await a.setDecayFunction("t");
    await a.save(null, failure, repo);
    return a;
}
async function newCompetency(competencyName) {
    var competency = new EcCompetency();
    competency.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
    competency.name = competencyName;
    competency.generateId(repo.selectedServer);
    await competency.save(null, failure, repo);
    return competency;
}
async function newRollupRule(competency, rule) {
    var rr = new EcRollupRule();
    rr.competency = competency.shortId();
    rr.rule = rule;
    rr.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
    rr.generateId(repo.selectedServer);
    await rr.save(null, failure, repo);
    return rr;
}
async function newRelation(c, c2, relationType) {
    var r = new EcAlignment();
    r.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
    r.generateId(repo.selectedServer);
    r.relationType = relationType;
    r.source = c.shortId();
    r.target = c2.shortId();
    await r.save(null, failure, repo);
    return r;
}
async function newFramework(frameworkName) {
    var framework = new EcFramework();
    framework.name = frameworkName;
    framework.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
    framework.generateId(repo.selectedServer);
    await framework.save(null, failure, repo);
    return framework;
}

describe("EcFrameworkGraph", () => {
    it('encryption then decryption', async () => {
        var randomString = EcAes.newIv(256).substring(0, 190);
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var pk = ppk.toPk();
        var encrypted = await EcRsaOaepAsyncWorker.encrypt(pk, randomString);
        var decrypted = await EcRsaOaepAsyncWorker.decrypt(ppk, encrypted);
        assert.isTrue(randomString == decrypted);
    }).timeout(10000);
    it('basic true test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        f.addCompetency(c.shortId());
        await f.save(null, failure, repo);
        var a = await newAssertion(c);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                assertions.push(a);
                await fg.processAssertionsBoolean(
                    assertions,
                    async () => {
                         //console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["positiveAssertion"]
                                .length
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(a.shortId());
    }).timeout(10000);
    it('basic false test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        f.addCompetency(c.shortId());
        await f.save(null, failure, repo);
        var a = await newFalseAssertion(c);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                assertions.push(a);
                await fg.processAssertionsBoolean(
                    assertions,
                    async () => {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["negativeAssertion"]
                                .length
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(a.shortId());
    }).timeout(10000);
    it('basic indeterminant test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        f.addCompetency(c.shortId());
        await f.save(null, failure, repo);
        var a = await newAssertion(c);
        var a2 = await newFalseAssertion(c);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                assertions.push(a);
                assertions.push(a2);
                await fg.processAssertionsBoolean(
                    assertions,
                    () => {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["positiveAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["negativeAssertion"]
                                .length
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(a.shortId());
        await deleteById(a2.shortId());
    }).timeout(10000);
    it('basic unknown test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        f.addCompetency(c.shortId());
        await f.save(null, failure, repo);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                await fg.processAssertionsBoolean(
                    assertions,
                    () => {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            null,
                            fg.getMetaStateCompetency(c)["positiveAssertion"]
                        );
                        assert.equal(
                            null,
                            fg.getMetaStateCompetency(c)["negativeAssertion"]
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
    }).timeout(10000);
    it('basic equivalence test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        var c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = await newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        var a = await newAssertion(c2);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                assertions.push(a);
                await fg.processAssertionsBoolean(
                    assertions,
                    async () => {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["positiveAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c2)["positiveAssertion"]
                                .length
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(c2.shortId());
        await deleteById(a.shortId());
        await deleteById(r.shortId());
    }).timeout(10000);
    it('basic equivalence false test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        var c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = await newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        var a = await newFalseAssertion(c2);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                assertions.push(a);
                await fg.processAssertionsBoolean(
                    assertions,
                    async () => {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["negativeAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c2)["negativeAssertion"]
                                .length
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(c2.shortId());
        await deleteById(a.shortId());
        await deleteById(r.shortId());
    }).timeout(10000);
    it('basic equivalence indeterminant test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        var c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = await newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        var a = await newAssertion(c);
        var a2 = await newFalseAssertion(c2);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                assertions.push(a);
                assertions.push(a2);
                await fg.processAssertionsBoolean(
                    assertions,
                    function () {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["positiveAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c2)["positiveAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["negativeAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c2)["negativeAssertion"]
                                .length
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(c2.shortId());
        await deleteById(a.shortId());
        await deleteById(a2.shortId());
        await deleteById(r.shortId());
    }).timeout(10000);
    it('basic equivalence unknown test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        var c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = await newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, failure, repo);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                await fg.processAssertionsBoolean(
                    assertions,
                    () => {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            null,
                            fg.getMetaStateCompetency(c)["positiveAssertion"]
                        );
                        assert.equal(
                            null,
                            fg.getMetaStateCompetency(c)["negativeAssertion"]
                        );
                        assert.equal(
                            null,
                            fg.getMetaStateCompetency(c2)["positiveAssertion"]
                        );
                        assert.equal(
                            null,
                            fg.getMetaStateCompetency(c2)["negativeAssertion"]
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(c2.shortId());
        await deleteById(r.shortId());
    }).timeout(10000);
    it('basic equivalence equivalence test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        var c2 = await newCompetency("Sum");
        var c3 = await newCompetency("Amass");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        var r = await newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        var r2 = await newRelation(c2, c3, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.addRelation(r2.shortId());
        await f.save(null, failure, repo);
        var a = await newAssertion(c3);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                assertions.push(a);
                await fg.processAssertionsBoolean(
                    assertions,
                    () => {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["positiveAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c2)["positiveAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c3)["positiveAssertion"]
                                .length
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(c2.shortId());
        await deleteById(c3.shortId());
        await deleteById(a.shortId());
        await deleteById(r.shortId());
        await deleteById(r2.shortId());
    }).timeout(10000);
    it('basic equivalence unequivalent test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        var c2 = await newCompetency("Sum");
        var c3 = await newCompetency("Amass");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        var r = await newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        var a = await newAssertion(c3);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                assertions.push(a);
                await fg.processAssertionsBoolean(
                    assertions,
                    async () => {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            null,
                            fg.getMetaStateCompetency(c)["positiveAssertion"]
                        );
                        assert.equal(
                            null,
                            fg.getMetaStateCompetency(c2)["positiveAssertion"]
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c3)["positiveAssertion"]
                                .length
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(c2.shortId());
        await deleteById(c3.shortId());
        await deleteById(a.shortId());
        await deleteById(r.shortId());
    }).timeout(10000);
    it('basic requires satisfied test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        var c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = await newRelation(c, c2, EcAlignment.REQUIRES);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        var a = await newAssertion(c);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                assertions.push(a);
                await fg.processAssertionsBoolean(
                    assertions,
                    async () => {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["positiveAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c2)["positiveAssertion"]
                                .length
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(c2.shortId());
        await deleteById(a.shortId());
        await deleteById(r.shortId());
    }).timeout(10000);
    it('basic requires false test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        var c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = await newRelation(c, c2, EcAlignment.REQUIRES);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        var a = await newFalseAssertion(c2);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                assertions.push(a);
                await fg.processAssertionsBoolean(
                    assertions,
                    async () => {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["negativeAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c2)["negativeAssertion"]
                                .length
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(c2.shortId());
        await deleteById(a.shortId());
        await deleteById(r.shortId());
    }).timeout(10000);
    it('basic narrows true test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        var c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = await newRelation(c, c2, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        var a = await newAssertion(c2);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                assertions.push(a);
                await fg.processAssertionsBoolean(
                    assertions,
                    () => {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["positiveAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c2)["positiveAssertion"]
                                .length
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(c2.shortId());
        await deleteById(a.shortId());
        await deleteById(r.shortId());
    }).timeout(10000);
    it('basic narrows false test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        var c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = await newRelation(c, c2, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        var a = await newFalseAssertion(c);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                assertions.push(a);
                await fg.processAssertionsBoolean(
                    assertions,
                    function () {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["negativeAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c2)["negativeAssertion"]
                                .length
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(c2.shortId());
        await deleteById(a.shortId());
        await deleteById(r.shortId());
    }).timeout(10000);
    it('basic narrows narrows test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        var c2 = await newCompetency("Sum");
        var c3 = await newCompetency("Amass");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        var r = await newRelation(c, c2, EcAlignment.NARROWS);
        var r2 = await newRelation(c2, c3, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        f.addRelation(r2.shortId());
        await f.save(null, failure, repo);
        var a = await newAssertion(c3);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                assertions.push(a);
                await fg.processAssertionsBoolean(
                    assertions,
                    () => {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["positiveAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c2)["positiveAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c3)["positiveAssertion"]
                                .length
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(c2.shortId());
        await deleteById(c3.shortId());
        await deleteById(a.shortId());
        await deleteById(r.shortId());
        await deleteById(r2.shortId());
    }).timeout(10000);
    it('basic narrows narrows false test', async () => {
        var f = await newFramework("Billy's Framework");
        var c = await newCompetency("Add");
        var c2 = await newCompetency("Sum");
        var c3 = await newCompetency("Amass");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        var r = await newRelation(c, c2, EcAlignment.NARROWS);
        var r2 = await newRelation(c2, c3, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        f.addRelation(r2.shortId());
        await f.save(null, failure, repo);
        var a = await newFalseAssertion(c);
        var fg = new EcFrameworkGraph();
        await fg.addFramework(
            f,
            repo,
            async () => {
                var assertions = [];
                assertions.push(a);
                await fg.processAssertionsBoolean(
                    assertions,
                    function () {
                        // console.log(fg.getMetaStateCompetency(c));
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c)["negativeAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c2)["negativeAssertion"]
                                .length
                        );
                        assert.equal(
                            1,
                            fg.getMetaStateCompetency(c3)["negativeAssertion"]
                                .length
                        );
                    },
                    failure
                );
            },
            failure
        );
        await deleteById(f.shortId());
        await deleteById(c.shortId());
        await deleteById(c2.shortId());
        await deleteById(c3.shortId());
        await deleteById(a.shortId());
        await deleteById(r.shortId());
        await deleteById(r2.shortId());
    }).timeout(10000);
});