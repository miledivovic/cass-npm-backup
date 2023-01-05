const envHttp2 = process.env.HTTP2 != null ? process.env.HTTP2.trim() == 'true' : true;
if (!envHttp2)
{
    global.axios = require("axios"); //Pre-empt http2 use.
}
const EcRemote = require("../remote/EcRemote.js");
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
const fs = require('fs');

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
let failure = function (p1) {
    console.trace(p1);
    assert.fail();
};

if (fs.readFileSync != null) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
}

let repo = new EcRepository();
repo.selectedServer = process.env.CASS_LOOPBACK || "http://localhost/api/";
repo.selectedServerProxy = process.env.CASS_LOOPBACK_PROXY || null;
async function newAssertion(competencyToAssert) {
    let a = new EcAssertion();
    a.generateId(repo.selectedServer);
    a.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
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
    let a = new EcAssertion();
    a.generateId(repo.selectedServer);
    a.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
    await a.setSubject(EcIdentityManager.default.ids[0].ppk.toPk());
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
    let competency = new EcCompetency();
    competency.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
    competency.name = competencyName;
    competency.generateId(repo.selectedServer);
    await competency.save(null, failure, repo);
    return competency;
}
async function newRollupRule(competency, rule) {
    let rr = new EcRollupRule();
    rr.competency = competency.shortId();
    rr.rule = rule;
    rr.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
    rr.generateId(repo.selectedServer);
    await rr.save(null, failure, repo);
    return rr;
}
async function newRelation(c, c2, relationType) {
    let r = new EcAlignment();
    r.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
    r.generateId(repo.selectedServer);
    r.relationType = relationType;
    r.source = c.shortId();
    r.target = c2.shortId();
    await r.save(null, failure, repo);
    return r;
}
async function newFramework(frameworkName) {
    let framework = new EcFramework();
    framework.name = frameworkName;
    framework.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
    framework.generateId(repo.selectedServer);
    await framework.save(null, failure, repo);
    return framework;
}

describe("EcFrameworkGraph", () => {
    it('init', async () => {
        let newId1;
        EcIdentityManager.default.clearIdentities();
        if ((typeof Cypress !== 'undefined') && Cypress != null && Cypress.env != null)
            process.env.CASS_LOOPBACK = Cypress.env('CASS_LOOPBACK');
        console.log(process.env.CASS_LOOPBACK);
        await repo.init(process.env.CASS_LOOPBACK || "http://localhost/api/", null, null, console.log);
        newId1 = null;
        if (EcIdentityManager.default.ids.length > 0)
            newId1 = EcIdentityManager.default.ids[0];
        else {
            newId1 = new EcIdentity();
            newId1.ppk = EcPpk.fromPem(
                "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
            );
            EcIdentityManager.default.ids = [];
            EcIdentityManager.default.addIdentity(newId1);
        }
    });
    it('encryption then decryption', async () => {
        let randomString = EcAes.newIv(256).substring(0, 190);
        let ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        let pk = ppk.toPk();
        let encrypted = await EcRsaOaepAsyncWorker.encrypt(pk, randomString);
        let decrypted = await EcRsaOaepAsyncWorker.decrypt(ppk, encrypted);
        assert.isTrue(randomString == decrypted);
    })
    it('basic true test', async () => {
        let f = await newFramework("basic true framework");
        let c = await newCompetency("Add");
        f.addCompetency(c.shortId());
        await f.save(null, failure, repo);
        let a = await newAssertion(c);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            assertions.push(a);
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                if (fg.getMetaStateCompetency(c)["positiveAssertion"] != null)
                    result.push(fg.getMetaStateCompetency(c)["positiveAssertion"].length);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(a.shortId());
        });
        assert.deepEqual(result, [1]);
    })
    it('basic false test', async () => {
        let f = await newFramework("basic false framework");
        let c = await newCompetency("Add");
        f.addCompetency(c.shortId());
        await f.save(null, failure, repo);
        let a = await newFalseAssertion(c);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            let assertion = await EcAssertion.get(a.shortId());
            assertions.push(assertion);
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                if (fg.getMetaStateCompetency(c)["negativeAssertion"] != null)
                    result.push(fg.getMetaStateCompetency(c)["negativeAssertion"].length);
                return result;
            }).catch((err) => {
                console.trace(err);
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            console.trace(err);
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(a.shortId());
        });
        assert.deepEqual(result, [1]);
    })
    it('basic indeterminant test', async () => {
        let f = await newFramework("basic indeterminant framework");
        let c = await newCompetency("Add");
        f.addCompetency(c.shortId());
        await f.save(null, failure, repo);
        let a = await newAssertion(c);
        let a2 = await newFalseAssertion(c);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            assertions.push(await EcAssertion.get(a.shortId()));
            assertions.push(await EcAssertion.get(a2.shortId()));
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                if (fg.getMetaStateCompetency(c)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c)["positiveAssertion"].length);
                if (fg.getMetaStateCompetency(c)["negativeAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c)["negativeAssertion"].length);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(a.shortId());
            await deleteById(a2.shortId());
        });
        assert.deepEqual(result, [1, 1]);
    })
    it('basic unknown test', async () => {
        let f = await newFramework("basic unknown framework");
        let c = await newCompetency("Add");
        f.addCompetency(c.shortId());
        await f.save(null, failure, repo);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                result.push(fg.getMetaStateCompetency(c)["positiveAssertion"]);
                result.push(fg.getMetaStateCompetency(c)["negativeAssertion"]);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
        });
        assert.deepEqual(result, [undefined, undefined]);
    })
    it('basic equivalence test', async () => {
        let f = await newFramework("basic equivalence framework");
        let c = await newCompetency("Add");
        let c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        let r = await newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        let a = await newAssertion(c2);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            assertions.push(a);
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                if (fg.getMetaStateCompetency(c)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c)["positiveAssertion"].length);
                if (fg.getMetaStateCompetency(c2)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c2)["positiveAssertion"].length);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(c2.shortId());
            await deleteById(a.shortId());
            await deleteById(r.shortId());
        });
        assert.deepEqual(result, [1, 1]);
    })
    it('basic equivalence false test', async () => {
        let f = await newFramework("basic equivalence false framework");
        let c = await newCompetency("Add");
        let c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        let r = await newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        let a = await newFalseAssertion(c2);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            assertions.push(await EcAssertion.get(a.shortId()));
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                if (fg.getMetaStateCompetency(c)["negativeAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c)["negativeAssertion"].length);
                if (fg.getMetaStateCompetency(c2)["negativeAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c2)["negativeAssertion"].length);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(c2.shortId());
            await deleteById(a.shortId());
            await deleteById(r.shortId());
        });
        assert.deepEqual(result, [1, 1]);
    })
    it('basic equivalence indeterminant test', async () => {
        let f = await newFramework("basic equivalence indeterminant framework");
        let c = await newCompetency("Add");
        let c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        let r = await newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        let a = await newAssertion(c);
        let a2 = await newFalseAssertion(c2);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            assertions.push(await EcAssertion.get(a.shortId()));
            assertions.push(await EcAssertion.get(a2.shortId()));
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                if (fg.getMetaStateCompetency(c)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c)["positiveAssertion"].length);
                if (fg.getMetaStateCompetency(c2)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c2)["positiveAssertion"].length);
                if (fg.getMetaStateCompetency(c)["negativeAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c)["negativeAssertion"].length);
                if (fg.getMetaStateCompetency(c2)["negativeAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c2)["negativeAssertion"].length);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(c2.shortId());
            await deleteById(a.shortId());
            await deleteById(a2.shortId());
            await deleteById(r.shortId());
        });
        assert.deepEqual(result, [1, 1, 1, 1]);
    })
    it('basic equivalence unknown test', async () => {
        let f = await newFramework("basic equivalence unknown framework");
        let c = await newCompetency("Add");
        let c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        let r = await newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, failure, repo);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                result.push(fg.getMetaStateCompetency(c)["positiveAssertion"]);
                result.push(fg.getMetaStateCompetency(c2)["positiveAssertion"]);
                result.push(fg.getMetaStateCompetency(c)["negativeAssertion"]);
                result.push(fg.getMetaStateCompetency(c2)["negativeAssertion"]);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(c2.shortId());
            await deleteById(r.shortId());
        });
        assert.deepEqual(result, [undefined, undefined, undefined, undefined]);
    })
    it('basic equivalence equivalence test', async () => {
        let f = await newFramework("basic equivalence equivalence framework");
        let c = await newCompetency("Add");
        let c2 = await newCompetency("Sum");
        let c3 = await newCompetency("Amass");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        let r = await newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        let r2 = await newRelation(c2, c3, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.addRelation(r2.shortId());
        await f.save(null, failure, repo);
        let a = await newAssertion(c3);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            assertions.push(a);
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                if (fg.getMetaStateCompetency(c)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c)["positiveAssertion"].length);
                if (fg.getMetaStateCompetency(c2)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c2)["positiveAssertion"].length);
                if (fg.getMetaStateCompetency(c3)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c3)["positiveAssertion"].length);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(c2.shortId());
            await deleteById(c3.shortId());
            await deleteById(a.shortId());
            await deleteById(r.shortId());
            await deleteById(r2.shortId());
        });
        assert.deepEqual(result, [1, 1, 1]);
    })
    it('basic equivalence unequivalent test', async () => {
        let f = await newFramework("basic equivalence unequivalent framework");
        let c = await newCompetency("Add");
        let c2 = await newCompetency("Sum");
        let c3 = await newCompetency("Amass");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        let r = await newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        let a = await newAssertion(c3);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            assertions.push(a);
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                result.push(fg.getMetaStateCompetency(c)["positiveAssertion"]);
                result.push(fg.getMetaStateCompetency(c2)["positiveAssertion"]);
                if (fg.getMetaStateCompetency(c3)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c3)["positiveAssertion"].length);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(c2.shortId());
            await deleteById(c3.shortId());
            await deleteById(a.shortId());
            await deleteById(r.shortId());
        });
        assert.deepEqual(result, [undefined, undefined, 1]);
    })
    it('basic requires satisfied test', async () => {
        let f = await newFramework("basic requires satisfied framework");
        let c = await newCompetency("Add");
        let c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        let r = await newRelation(c, c2, EcAlignment.REQUIRES);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        let a = await newAssertion(c);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            assertions.push(a);
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                if (fg.getMetaStateCompetency(c)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c)["positiveAssertion"].length);
                if (fg.getMetaStateCompetency(c2)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c2)["positiveAssertion"].length);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(c2.shortId());
            await deleteById(a.shortId());
            await deleteById(r.shortId());
        });
        assert.deepEqual(result, [1, 1]);
    })
    it('basic requires false test', async () => {
        let f = await newFramework("basic requires false framework");
        let c = await newCompetency("Add");
        let c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        let r = await newRelation(c, c2, EcAlignment.REQUIRES);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        let a = await newFalseAssertion(c2);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            assertions.push(await EcAssertion.get(a.shortId()));
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                if (fg.getMetaStateCompetency(c)["negativeAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c)["negativeAssertion"].length);
                if (fg.getMetaStateCompetency(c2)["negativeAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c2)["negativeAssertion"].length);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(c2.shortId());
            await deleteById(a.shortId());
            await deleteById(r.shortId());
        });
        assert.deepEqual(result, [1, 1]);
    })
    it('basic narrows true test', async () => {
        let f = await newFramework("basic narrows true framework");
        let c = await newCompetency("Add");
        let c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        let r = await newRelation(c, c2, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        let a = await newAssertion(c2);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            assertions.push(await EcAssertion.get(a.shortId()));
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                if (fg.getMetaStateCompetency(c)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c)["positiveAssertion"].length);
                if (fg.getMetaStateCompetency(c2)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c2)["positiveAssertion"].length);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(c2.shortId());
            await deleteById(a.shortId());
            await deleteById(r.shortId());
        });
        assert.deepEqual(result, [1, 1]);
    })
    it('basic narrows false test', async () => {
        let f = await newFramework("basic narrows false framework");
        let c = await newCompetency("Add");
        let c2 = await newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        let r = await newRelation(c, c2, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        await f.save(null, failure, repo);
        let a = await newFalseAssertion(c);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            assertions.push(await EcAssertion.get(a.shortId()));
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                if (fg.getMetaStateCompetency(c)["negativeAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c)["negativeAssertion"].length);
                if (fg.getMetaStateCompetency(c2)["negativeAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c2)["negativeAssertion"].length);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(c2.shortId());
            await deleteById(a.shortId());
            await deleteById(r.shortId());
        });
        assert.deepEqual(result, [1, 1]);
    })
    it('basic narrows narrows test', async () => {
        let f = await newFramework("basic narrows narrows framework");
        let c = await newCompetency("Add");
        let c2 = await newCompetency("Sum");
        let c3 = await newCompetency("Amass");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        let r = await newRelation(c, c2, EcAlignment.NARROWS);
        let r2 = await newRelation(c2, c3, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        f.addRelation(r2.shortId());
        await f.save(null, failure, repo);
        let a = await newAssertion(c3);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            assertions.push(a);
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                if (fg.getMetaStateCompetency(c)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c)["positiveAssertion"].length);
                if (fg.getMetaStateCompetency(c2)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c2)["positiveAssertion"].length);
                if (fg.getMetaStateCompetency(c3)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c3)["positiveAssertion"].length);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(c2.shortId());
            await deleteById(c3.shortId());
            await deleteById(a.shortId());
            await deleteById(r.shortId());
            await deleteById(r2.shortId());
        });
        assert.deepEqual(result, [1, 1, 1]);
    })
    it('basic narrows narrows false test', async () => {
        let f = await newFramework("basic narrows narrows false framework");
        let c = await newCompetency("Add");
        let c2 = await newCompetency("Sum");
        let c3 = await newCompetency("Amass");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        let r = await newRelation(c, c2, EcAlignment.NARROWS);
        let r2 = await newRelation(c2, c3, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        f.addRelation(r2.shortId());
        await f.save(null, failure, repo);
        let a = await newFalseAssertion(c);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo,
            () => {},
            () => {}
        ).then(async () => {
            let assertions = [];
            assertions.push(await EcAssertion.get(a.shortId()));
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                if (fg.getMetaStateCompetency(c)["negativeAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c)["negativeAssertion"].length);
                if (fg.getMetaStateCompetency(c2)["negativeAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c2)["negativeAssertion"].length);
                if (fg.getMetaStateCompetency(c3)["negativeAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c3)["negativeAssertion"].length);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(c2.shortId());
            await deleteById(c3.shortId());
            await deleteById(a.shortId());
            await deleteById(r.shortId());
            await deleteById(r2.shortId());
        });
        assert.deepEqual(result, [1, 1, 1]);
    })
    it('callbacks removed test', async () => {
        let f = await newFramework("callbacks removed framework");
        let c = await newCompetency("Add");
        f.addCompetency(c.shortId());
        await f.save(null, failure, repo);
        let a = await newAssertion(c);
        let fg = new EcFrameworkGraph();
        let result = await fg.addFramework(
            f,
            repo
        ).then(async () => {
            let assertions = [];
            assertions.push(a);
            let result = await fg.processAssertionsBoolean(
                assertions,
                () => {},
                () => {}
            ).then(() => {
                let result = [];
                if (fg.getMetaStateCompetency(c)["positiveAssertion"] != null)
                result.push(fg.getMetaStateCompetency(c)["positiveAssertion"].length);
                return result;
            }).catch((err) => {
                assert.fail(err);
            });
            return result;
        }).catch((err) => {
            console.error(err);
            assert.fail(err);
        }).finally(async () => {
            await deleteById(f.shortId());
            await deleteById(c.shortId());
            await deleteById(a.shortId());
        });
        assert.deepEqual(result, [1]);
    })
});