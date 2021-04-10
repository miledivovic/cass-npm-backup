
require("./newIndex.js");

var clog = console.log;
console.log = function(s){
    let e = new Error();
    let frame = e.stack.split("\n")[2];
    let lineNumber = frame.split(":")[1];
    let functionName = frame.split(" ")[5];
    clog(functionName + ":" + lineNumber + " " + s);
    
}

var Assert = {
    assertTrue: function (val, val2) {
        if (val2 == null || val2 === undefined) {
            if (val == false) {
                console.log("PROBLEM: " + val + " == false");
                console.trace();
                process.exit(1);
            }
        } else if (val2 == false)
        {
            console.log("PROBLEM: " + val + " - " + val2 + " == false");
            console.trace();
            process.exit(1);
        }
    },
    assertFalse: function (val, val2) {
        if (val2 == null || val2 === undefined) {
            if (val == true) {
                console.log("PROBLEM: " + val + " == true");
                console.trace();
                process.exit(1);
            }
        } else if (val2 == true)
        {
            console.log("PROBLEM: " + val + " - " + val2 + " != true");
            console.trace();
            process.exit(1);
        }

    },
    assertEquals: function (val, val2, val3) {
        if (val2 == undefined && val3 == undefined)
            return;
        if (val3 != null && val3 !== undefined) {
            if (val2 != val3) {
                console.log("PROBLEM: " + val + " - " + val2 + " != " + val3);
                console.trace();
                process.exit(1);
            }
        } else if (val != val2) {
            console.log("PROBLEM: " + val + " != " + val2);
            console.trace();
            process.exit(1);
        }
    },
    assertSame: function (val, val2, val3) {
        if (val2 == undefined && val3 == undefined)
            return;
        if (val3 != null && val3 !== undefined) {
            if (val2 != val3) {
                console.log("PROBLEM: " + val + " - " + val2 + " != " + val3);
                console.trace();
                process.exit(1);
            }
        } else if (val != val2) {
            console.log("PROBLEM: " + val + " != " + val2);
            console.trace();
            process.exit(1);
        }
    },
    assertNotSame: function (val, val2, val3) {
        if (val2 == undefined && val3 == undefined)
            return;
        if (val3 != null && val3 !== undefined) {
            if (val2 == val3) {
                console.log("PROBLEM: " + val + " - " + val2 + " != " + val3);
                console.trace();
                process.exit(1);
            }
        } else if (val == val2) {
            console.log("PROBLEM: " + val + " != " + val2);
            console.trace();
            process.exit(1);
        }
    },
    assertFail: function(val){
        console.log("PROBLEM: " + val);
        console.trace();
        process.exit(1);
    },
    fail: function(val){
        console.log("PROBLEM: " + val);
        console.trace();
        process.exit(1);
    }
};

var failure = function(val){
    console.log("PROBLEM: " + val);
    console.trace();
    process.exit(1);
}

var repo = new EcRepository();
repo.selectedServer = "https://dev.cassproject.org/api/";
repo.search("@type:Framework", console.log, console.error);
var EcRandomTest = function() {};
EcRandomTest = stjs.extend(EcRandomTest, null, [], function(constructor, prototype) {
    prototype.testLength = function() {
        Assert.assertTrue(generateUUID().length == "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".length);
    };
}, {}, {});
var EcRsaTest = function() {};
EcRsaTest = stjs.extend(EcRsaTest, null, [], function(constructor, prototype) {
    prototype.rsaOaepTest = function() {
        console.log("-----rsaOaepTest-----");
        var randomString = EcAes.newIv(32);
        console.log("Generated string: " + randomString);
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var encrypted = EcRsaOaep.encrypt(ppk.toPk(), randomString);
        console.log("Encrypted string: " + encrypted);
        var decrypted = EcRsaOaep.decrypt(ppk, encrypted);
        console.log("Decrypted string: " + decrypted);
        Assert.assertTrue(decrypted.equals(randomString));
    };
    prototype.rsaUtf8OaepTest = function() {
        console.log("-----rsaUtf8OaepTest-----");
        var randomString = "\u16a0\u16c7\u16bb\u16eb\u16d2\u16e6\u16a6\u16eb\u16a0\u16b1\u16a9\u16a0\u16a2\u16b1\u16eb\u16a0\u16c1\u16b1\u16aa\u16eb\u16b7\u16d6\u16bb\u16b9\u16e6\u16da\u16b3\u16a2\u16d7";
        console.log("Generated string: " + randomString);
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var encrypted = EcRsaOaep.encrypt(ppk.toPk(), randomString);
        console.log("Encrypted string: " + encrypted);
        var decrypted = EcRsaOaep.decrypt(ppk, encrypted);
        console.log("Decrypted string: " + decrypted);
        Assert.assertTrue(decrypted.equals(randomString));
    };
    prototype.rsaOaepAsyncNativeTest = function() {
        console.log("-----rsaOaepAsyncNativeTest-----");
        require("pem-jwk");
        var log = function(o) {
            console.log(o);
        };
        var randomString = EcAes.newIv(32);
        console.log("Generated string: " + randomString);
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        EcRsaOaepAsync.encrypt(ppk.toPk(), randomString, function(encrypted) {
            console.log(encrypted);
            EcRsaOaepAsync.decrypt(ppk, encrypted, log, log);
        }, log);
        Assert.assertTrue(true);
    };
    prototype.rsaUtf8OaepAsyncNativeTest = function() {
        console.log("-----rsaUtf8OaepAsyncNativeTest-----");
        require("pem-jwk");
        var log = function(o) {
            console.log(o);
        };
        var randomString = "\u16a0\u16c7\u16bb\u16eb\u16d2\u16e6\u16a6\u16eb\u16a0\u16b1\u16a9\u16a0\u16a2\u16b1\u16eb\u16a0\u16c1\u16b1\u16aa\u16eb\u16b7\u16d6\u16bb\u16b9\u16e6\u16da\u16b3\u16a2\u16d7";
        console.log("Generated string: " + randomString);
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        EcRsaOaepAsync.encrypt(ppk.toPk(), randomString, function(encrypted) {
            console.log(encrypted);
            EcRsaOaepAsync.decrypt(ppk, encrypted, log, log);
        }, log);
        Assert.assertTrue(true);
    };
    prototype.rsaOaepAsyncNativeTestWorker = function() {
        console.log("-----rsaOaepAsyncNativeTestWorker-----");
        require("pem-jwk");
        var log = function(o) {
            console.log(o);
        };
        var randomString = EcAes.newIv(32);
        console.log("Generated string: " + randomString);
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        EcRsaOaepAsyncWorker.encrypt(ppk.toPk(), randomString, function(encrypted) {
            console.log(encrypted);
            EcRsaOaepAsync.decrypt(ppk, encrypted, log, log);
        }, log);
        Assert.assertTrue(true);
    };
    prototype.rsaUtf8OaepAsyncNativeTestWorker = function() {
        console.log("-----rsaUtf8OaepAsyncNativeTestWorker-----");
        require("pem-jwk");
        var log = function(o) {
            console.log(o);
        };
        var randomString = "\u16a0\u16c7\u16bb\u16eb\u16d2\u16e6\u16a6\u16eb\u16a0\u16b1\u16a9\u16a0\u16a2\u16b1\u16eb\u16a0\u16c1\u16b1\u16aa\u16eb\u16b7\u16d6\u16bb\u16b9\u16e6\u16da\u16b3\u16a2\u16d7";
        console.log("Generated string: " + randomString);
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        EcRsaOaepAsyncWorker.encrypt(ppk.toPk(), randomString, function(encrypted) {
            console.log(encrypted);
            EcRsaOaepAsync.decrypt(ppk, encrypted, log, log);
        }, log);
        Assert.assertTrue(true);
    };
}, {}, {});
var EcAesTest = function() {};
EcAesTest = stjs.extend(EcAesTest, null, [], function(constructor, prototype) {
    prototype.aesTest = function() {
        console.log("-----aesTest-----");
        var randomString = EcAes.newIv(1024);
        console.log("Random string: " + randomString);
        var secret = EcAes.newIv(16);
        console.log("Random secret: " + secret);
        var iv = EcAes.newIv(16);
        console.log("Random iv:" + iv);
        var encrypted = EcAesCtr.encrypt(randomString, secret, iv);
        console.log("Encrypted String: " + encrypted);
        var decrypted = EcAesCtr.decrypt(encrypted, secret, iv);
        console.log("Decrypted String: " + decrypted);
        Assert.assertTrue(randomString.equals(decrypted));
    };
    prototype.aesUtf8Test = function() {
        console.log("-----aesUtf8Test-----");
        var randomString = "abc\u16a0\u16c7\u16bb\u16eb\u16d2\u16e6\u16a6\u16eb\u16a0\u16b1\u16a9\u16a0\u16a2\u16b1\u16eb\u16a0\u16c1\u16b1\u16aa\u16eb\u16b7\u16d6\u16bb\u16b9\u16e6\u16da\u16b3\u16a2\u16d7";
        console.log("Random string: " + randomString);
        var secret = EcAes.newIv(16);
        console.log("Random secret: " + secret);
        var iv = EcAes.newIv(16);
        console.log("Random iv:" + iv);
        var encrypted = EcAesCtr.encrypt(randomString, secret, iv);
        console.log("Encrypted String: " + encrypted);
        var decrypted = EcAesCtr.decrypt(encrypted, secret, iv);
        console.log("Decrypted String: " + decrypted);
        Assert.assertTrue(randomString.equals(decrypted));
    };
}, {}, {});
var EcAesAsyncTest = function() {};
EcAesAsyncTest = stjs.extend(EcAesAsyncTest, null, [], function(constructor, prototype) {
    prototype.aesTest = function() {
        console.log("-----aesTest-----");
        var randomString = "foo is bar";
        console.log("Random string: " + randomString);
        var secret = EcAes.newIv(16);
        console.log("Random secret: " + secret);
        var iv = EcAes.newIv(16);
        console.log("Random iv:" + iv);
        EcAesCtrAsync.encrypt(randomString, secret, iv, function(encrypted) {
            console.log("Encrypted String: " + encrypted);
            console.log("Encrypted String (Proper): " + EcAesCtr.encrypt(randomString, secret, iv));
            EcAesCtrAsync.decrypt(encrypted, secret, iv, function(decrypted) {
                console.log("Decrypted String: " + decrypted);
                Assert.assertEquals("EcAesAsyncTest:aesTest", randomString, decrypted);
            }, function(p1) {
                Assert.assertTrue(false);
            });
        }, function(p1) {
            Assert.assertTrue("EcAesAsyncTest:aesTest" + p1, false);
        });
    };
    prototype.aesCrossTest1 = function() {
        console.log("-----aesCrossTest1-----");
        var randomString = EcAes.newIv(1024);
        console.log("Random string: " + randomString);
        var secret = EcAes.newIv(16);
        console.log("Random secret: " + secret);
        var iv = EcAes.newIv(16);
        console.log("Random iv:" + iv);
        EcAesCtrAsync.encrypt(randomString, secret, iv, function(encrypted) {
            console.log("Encrypted String: " + encrypted);
            var decrypted = EcAesCtr.decrypt(encrypted, secret, iv);
            console.log("Decrypted String: " + decrypted);
            Assert.assertEquals("EcAesAsyncTest:aesCrossTest1", randomString, decrypted);
        }, function(p1) {
            Assert.assertTrue("EcAesAsyncTest:aesCrossTest1", false);
        });
    };
    prototype.aesCrossTest1Utf8 = function() {
        console.log("-----aesCrossTest1Utf8-----");
        var randomString = "\u16a0\u16c7\u16bb\u16eb\u16d2\u16e6\u16a6\u16eb\u16a0\u16b1\u16a9\u16a0\u16a2\u16b1\u16eb\u16a0\u16c1\u16b1\u16aa\u16eb\u16b7\u16d6\u16bb\u16b9\u16e6\u16da\u16b3\u16a2\u16d7";
        console.log("Random string: " + randomString);
        var secret = EcAes.newIv(16);
        console.log("Random secret: " + secret);
        var iv = EcAes.newIv(16);
        console.log("Random iv:" + iv);
        EcAesCtrAsync.encrypt(randomString, secret, iv, function(encrypted) {
            console.log("Encrypted String: " + encrypted);
            var decrypted = EcAesCtr.decrypt(encrypted, secret, iv);
            console.log("Decrypted String: " + decrypted);
            Assert.assertEquals("EcAesAsyncTest:aesCrossTest1Utf8", randomString, decrypted);
        }, function(p1) {
            Assert.assertTrue("EcAesAsyncTest:aesCrossTest1Utf8", false);
        });
    };
    prototype.aesCrossTest2Utf8 = function() {
        console.log("-----aesCrossTest2Utf8-----");
        var randomString = "\u16a0\u16c7\u16bb\u16eb\u16d2\u16e6\u16a6\u16eb\u16a0\u16b1\u16a9\u16a0\u16a2\u16b1\u16eb\u16a0\u16c1\u16b1\u16aa\u16eb\u16b7\u16d6\u16bb\u16b9\u16e6\u16da\u16b3\u16a2\u16d7";
        console.log("Random string: " + randomString);
        var secret = EcAes.newIv(16);
        console.log("Random secret: " + secret);
        var iv = EcAes.newIv(16);
        console.log("Random iv:" + iv);
        var encrypted = EcAesCtr.encrypt(randomString, secret, iv);
        console.log("Encrypted String: " + encrypted);
        EcAesCtrAsync.decrypt(encrypted, secret, iv, function(decrypted) {
            console.log("Decrypted String: " + decrypted);
            Assert.assertEquals("EcAesAsyncTest:aesCrossTest2Utf8", randomString, decrypted);
        }, function(p1) {
            Assert.assertTrue("EcAesAsyncTest:aesCrossTest2Utf8", false);
        });
    };
    prototype.aesTestWorker = function() {
        console.log("-----aesTestWorker-----");
        var randomString = "foo is bar";
        console.log("Random string: " + randomString);
        var secret = EcAes.newIv(16);
        console.log("Random secret: " + secret);
        var iv = EcAes.newIv(16);
        console.log("Random iv:" + iv);
        EcAesCtrAsyncWorker.encrypt(randomString, secret, iv, function(encrypted) {
            console.log("Encrypted String: " + encrypted);
            console.log("Encrypted String (Proper): " + EcAesCtr.encrypt(randomString, secret, iv));
            EcAesCtrAsyncWorker.decrypt(encrypted, secret, iv, function(decrypted) {
                console.log("Decrypted String: " + decrypted);
                Assert.assertEquals("EcAesAsyncTest:aesTestWorker", randomString, decrypted);
            }, function(p1) {
                Assert.assertTrue(false);
            });
        }, function(p1) {
            Assert.assertTrue("EcAesAsyncTest:aesTestWorker", false);
        });
    };
    prototype.aesCrossTest1Worker = function() {
        console.log("-----aesCrossTest1Worker-----");
        var randomString = EcAes.newIv(1024);
        console.log("Random string: " + randomString);
        var secret = EcAes.newIv(16);
        console.log("Random secret: " + secret);
        var iv = EcAes.newIv(16);
        console.log("Random iv:" + iv);
        EcAesCtrAsyncWorker.encrypt(randomString, secret, iv, function(encrypted) {
            console.log("Encrypted String: " + encrypted);
            var decrypted = EcAesCtr.decrypt(encrypted, secret, iv);
            console.log("Decrypted String: " + decrypted);
            Assert.assertEquals("EcAesAsyncTest:aesCrossTest1Worker", randomString, decrypted);
        }, function(p1) {
            Assert.assertTrue("EcAesAsyncTest:aesCrossTest1Worker", false);
        });
    };
    prototype.aesCrossTest1Utf8Worker = function() {
        console.log("-----aesCrossTest1Utf8Worker-----");
        var randomString = "\u16a0\u16c7\u16bb\u16eb\u16d2\u16e6\u16a6\u16eb\u16a0\u16b1\u16a9\u16a0\u16a2\u16b1\u16eb\u16a0\u16c1\u16b1\u16aa\u16eb\u16b7\u16d6\u16bb\u16b9\u16e6\u16da\u16b3\u16a2\u16d7";
        console.log("Random string: " + randomString);
        var secret = EcAes.newIv(16);
        console.log("Random secret: " + secret);
        var iv = EcAes.newIv(16);
        console.log("Random iv:" + iv);
        EcAesCtrAsyncWorker.encrypt(randomString, secret, iv, function(encrypted) {
            console.log("Encrypted String: " + encrypted);
            var decrypted = EcAesCtr.decrypt(encrypted, secret, iv);
            console.log("Decrypted String: " + decrypted);
            Assert.assertEquals("EcAesAsyncTest:aesCrossTest1Utf8Worker", randomString, decrypted);
        }, function(p1) {
            Assert.assertTrue("EcAesAsyncTest:aesCrossTest1Utf8Worker", false);
        });
    };
    prototype.aesCrossTest2Utf8Worker = function() {
        console.log("-----aesCrossTest2Utf8Worker-----");
        var randomString = "\u16a0\u16c7\u16bb\u16eb\u16d2\u16e6\u16a6\u16eb\u16a0\u16b1\u16a9\u16a0\u16a2\u16b1\u16eb\u16a0\u16c1\u16b1\u16aa\u16eb\u16b7\u16d6\u16bb\u16b9\u16e6\u16da\u16b3\u16a2\u16d7";
        console.log("Random string: " + randomString);
        var secret = EcAes.newIv(16);
        console.log("Random secret: " + secret);
        var iv = EcAes.newIv(16);
        console.log("Random iv:" + iv);
        var encrypted = EcAesCtr.encrypt(randomString, secret, iv);
        console.log("Encrypted String: " + encrypted);
        EcAesCtrAsyncWorker.decrypt(encrypted, secret, iv, function(decrypted) {
            console.log("Decrypted String: " + decrypted);
            Assert.assertEquals("EcAesAsyncTest:aesCrossTest2Utf8Worker", randomString, decrypted);
        }, function(p1) {
            Assert.assertTrue("EcAesAsyncTest:aesCrossTest2Utf8Worker", false);
        });
    };
}, {}, {});
var EcPpkTest = function() {};
EcPpkTest = stjs.extend(EcPpkTest, null, [], function(constructor, prototype) {
    prototype.ppkPkKeyTest = function() {
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        Assert.assertTrue("PPK != null", ppk.ppk != null);
        Assert.assertTrue("PPK.N != 0", ppk.ppk.n != 0);
        Assert.assertTrue("PPK.E != 0", ppk.ppk.e != 0);
        Assert.assertTrue("PPK.D != 0", ppk.ppk.d != 0);
        Assert.assertTrue("PPK.P != 0", ppk.ppk.p != 0);
        Assert.assertTrue("PPK.Q != 0", ppk.ppk.q != 0);
        var ppkPem = ppk.toPem();
        console.log(ppkPem);
        Assert.assertTrue("PPK.toPem != null", ppkPem != null);
        var pk = ppk.toPk();
        console.log(pk.toPem());
        Assert.assertTrue("PPK.toPk != null", pk != null);
        Assert.assertTrue("PPK.toPk().pk != null", pk.pk != null);
        Assert.assertTrue("PPK.toPk().e == PPK.e", pk.pk.e == ppk.ppk.e);
        Assert.assertTrue("PPK.toPk().n == PPK.n", pk.pk.n == ppk.ppk.n);
        var ppkToFromPem = EcPpk.fromPem(ppkPem);
        Assert.assertTrue("PPK.toPem().fromPem().n == PPK.n", ("" + ppkToFromPem.ppk.n) == ("" + ppk.ppk.n));
        Assert.assertTrue("PPK.toPem().fromPem().e == PPK.e", ("" + ppkToFromPem.ppk.e) == ("" + ppk.ppk.e));
        Assert.assertTrue("PPK.toPem().fromPem().d == PPK.d", ("" + ppkToFromPem.ppk.d) == ("" + ppk.ppk.d));
        Assert.assertTrue("PPK.toPem().fromPem().p == PPK.p", ("" + ppkToFromPem.ppk.p) == ("" + ppk.ppk.p));
        Assert.assertTrue("PPK.toPem().fromPem().q == PPK.q", ("" + ppkToFromPem.ppk.q) == ("" + ppk.ppk.q));
        var pkToFromPem = EcPk.fromPem(pk.toPem());
        Assert.assertTrue("PPK.toPk().toPem().fromPem().n == PPK.n", ("" + pkToFromPem.pk.n) == ("" + ppk.ppk.n));
        Assert.assertTrue("PPK.toPk().toPem().fromPem().e == PPK.e", ("" + pkToFromPem.pk.e) == ("" + ppk.ppk.e));
    };
}, {}, {});
var EcTaskTest = function() {};
EcTaskTest = stjs.extend(EcTaskTest, null, [], function(constructor, prototype) {
    prototype.createTest = function() {
        var task = new EcAsyncTask(function(p1) {
            return "Hello " + p1;
        }, null, null, null, null);
        setTimeout(function() {
            var val = "World";
            var ret = task.doTask(val);
            console.log(ret);
            Assert.assertTrue(ret == "Hello " + val);
        }, 200);
    };
}, {}, {});
var EcRemoteLinkedDataTest = function() {};
EcRemoteLinkedDataTest = stjs.extend(EcRemoteLinkedDataTest, null, [], function(constructor, prototype) {
    prototype.signableDataTest = function() {
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var f = new EcRemoteLinkedData(General.context, "testType");
        (f)["name"] = "My_File.txt";
        (f)["mimeType"] = "text/plain";
        (f)["data"] = "BASE64ENCODEDDATA";
        f.generateId("http://localhost:9722/api");
        (f)["checksum"] = "ABC123";
        f.addOwner(ppk.toPk());
        f.signWith(ppk);
        var signableJson = f.toSignableJson();
        console.log("Signable JSON: " + signableJson);
        Assert.assertTrue("No Tabs.", signableJson.indexOf("\t") == -1);
        Assert.assertTrue("@Context before @Type", signableJson.indexOf("\"@context\"") < signableJson.indexOf("\"@type\""));
        Assert.assertTrue("@Type before Checksum", signableJson.indexOf("\"@type\"") < signableJson.indexOf("\"checksum\""));
        Assert.assertTrue("Checksum before Data", signableJson.indexOf("\"checksum\"") < signableJson.indexOf("\"data\""));
        Assert.assertTrue("Data before MimeType", signableJson.indexOf("\"data\"") < signableJson.indexOf("\"mimeType\""));
        Assert.assertTrue("MimeType before Name", signableJson.indexOf("\"mimeType\"") < signableJson.indexOf("\"name\""));
    };
    prototype.signAndVerifyTest = function() {
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var ppk2 = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAl4oeWRsroJqAR8UXkmkhDHMcRaDM6a9wsFWNkokyugMevv5TtwHVrm9HMJqVlXn1U1AiVS1rEYB7Iavi2IE7e8WV6GkLrGTrce+YcqhrwF3g104ZEuIC2aFCcLrxvXbSqmmuddS3lRMEwqdWkYIS7MKRSKUBpbydl8wScYxjzUSMNzQrvgUpNc//N7GkpEFXYLjYmVWhYdUp578nw/K9StRqTfku8U+Ub86U0mHXowms4spV8IoOlV53OLpOL+8QwcQYZ+koWL4B0rhz6cvelvBAFygx94t8IzZtRiBniaTF+1nBjyj4+R8PdprxFNnM+S2IQBqUdBKJ3oDoKMqdAwIDAQABAoIBAC3BWmB1P7sCa3FAJVnjvELSDttHLhfxDQlxC4oPOu3HO2VXzVcYirhciRY31qqHZHd/Xp5xVD64mHUWPSw5+QfqJNVDwm6PGjgQq+sSx1YSAm1/+zokW8/yTOlUyOD4G6uwtSiGzdeJIorTk+PjbmtmZA+XIuQ0CzFmQLtgNFIpxRmDKLZrjEO5NSaeStZRgi+WVkgfOnvQvWtFK8/djeXfb4f3BnquCRKjm/cOjtdqBHcFq7Fzlyh0U64XXcJPPgBX3hLNK7mr0ZBCwUDOUs0Xna0a/2FHsjESPX7grZ9J1fbkXRwUrSJ04zbeijqROkjni7wokT+HiWtVcZ/HLOECgYEA0/CykuniBAE+Oqt+qj1OEQSnyiENJffnSzeOOjI17ygxcXYFxprEVjYL1ZVj28appGqs4tueNRoxl7jf4jpD6sDMM32scwmUcCA6K3yqk/F/WVj4MYdn7ETtACCZ9m08EUzksrWOaAb86jqm7k1+mM5xu6lbN3dSua1lKxsNFi0CgYEAtwrwuVupz+GmMna7DtW9S2q0ZwgSoUEcELqcXq2cwAPutrd4rh/xS1xsZZNGqnyT1b3/6vFT2zAyxUiL3o+bhDEEv5HcRJ2rugIhUq2dPAJMYf+kBAFONakir2wHwUUXIkaEHecwxsaI8rsTnXDW+anbJogZSLNcFOBydOaBLe8CgYBKDZknsibxxUlsEI4Ch8cmNR03iBLjCFq9sly0wuSLetzDyzw7Z8pgYSQDbd5lZWXS+B8OaTQ/U7auT7+SeU9P0CvJdgjybQ97mhcZKMclSEV5/5dBHxHVwUOaPsntC7/oP5jNRJjMilyGrxWywEsSs1eT/ZnMqJm0HPzzcdFBxQKBgQAMOkTefQsZAf/yOxA/63NbyGMIxvdHomvXij/L61kfUqPtvM/pAeVCnYf4OSBtXykZDDo+XaS2bb/WggQl9/3xlLy2d235f3brVB0ZwtNQIO8tVMCGK/gniYbxpQvXk1/6QC+vN7SAct7PKEQlLlaOExS6vDjELIcoNd4vhP54LQKBgQAOE7+S2AdjUEVXqWBPnlidZV08HMduy3yZ7mblCX0dA07/ozuM/WOfk92cgqcLddOmsbYdTuqTq1sB98v1QN1RwYe9Eiw0dmfbFlQcXT1YAZVfHNQOMO2xI4gJtkNGUqg1HQsYghOO2wkNHSMCNsoq9GWeIzCF2q6/7oH74jfoaQ==-----END RSA PRIVATE KEY-----");
        var f = new EcRemoteLinkedData(General.context, "testType");
        (f)["name"] = "My_File.txt";
        (f)["mimeType"] = "text/plain";
        (f)["data"] = "BASE64ENCODEDDATA";
        f.generateId("http://localhost:9722/api");
        (f)["checksum"] = "ABC123";
        f.addOwner(ppk.toPk());
        f.signWith(ppk);
        console.log("Signature: " + f.signature[0]);
        Assert.assertTrue("Signature Verification", f.verify());
        f.removeOwner(ppk.toPk());
        Assert.assertTrue("Removed Owner Verification", !f.verify());
        f.addOwner(ppk2.toPk());
        f.addOwner(ppk.toPk());
        f.signWith(ppk);
        Assert.assertTrue("Multi Owner Single Signature Verification", f.verify());
        f.signWith(ppk2);
        Assert.assertTrue("Multi Owner Multi Signature Verification", f.verify());
        f.signature[0] = "z" + f.signature[0].substring(1);
        console.log("Tampered Signature: " + f.signature[0]);
        Assert.assertTrue("Tampered Signature Verification", !f.verify());
    };
}, {}, {});
var EcContactTest = function() {};
EcContactTest = stjs.extend(EcContactTest, null, [], function(constructor, prototype) {
    prototype.encryptContactTest = function() {
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var contact = new EcContact();
        contact.pk = ppk.toPk();
        contact.displayName = "Test Person";
        contact.source = "http://sandbox.service.cassproject.org";
        var secret = EcAes.newIv(32);
        console.log("Secret: " + secret);
        console.log("Encrypting contact...");
        var encryptedContact = contact.toEncryptedContact(secret);
        console.log("Decrypting contact...");
        var decryptedContact = EcContact.fromEncryptedContact(encryptedContact, secret, contact.source);
        console.log("OK.");
        Assert.assertTrue(contact.pk.toPem().equals(decryptedContact.pk.toPem()));
        Assert.assertTrue(contact.displayName.equals(decryptedContact.displayName));
    };
}, {}, {});
var EcRepositoryTest = function() {};
EcRepositoryTest = stjs.extend(EcRepositoryTest, null, [], function(constructor, prototype) {
    constructor.server = "http://localhost/api/";
    prototype.begin = function() {
        EcRemote.async = false;
    };
    prototype.createPublicObjectTest = function() {
        EcRemote.async = false;
        var r = new EcRepository();
        r.selectedServer = EcRepositoryTest.server;
        var thing = new EcRemoteLinkedData(General.context, General.context + "/test");
        thing.id = EcRepositoryTest.server;
        if (!thing.id.endsWith("/")) 
            thing.id += "/";
        thing.id += "data/";
        thing.id += thing.type.replace("http://", "").replace("https://", "").replaceAll("/", ".");
        thing.id += "/";
        thing.id += "test-public-object";
        thing.id += "/";
        (thing)["name"] = "Test Public Object";
        console.log("Saving Public Object...");
        EcRepository.save(thing, function(p1) {
            console.log("Saved.");
        }, function(p1) {
            console.log("Failed to save.");
            console.log(p1);
            Assert.fail("Failed to save object.");
        });
        console.log("Retrieving Public Object...");
        EcRepository.get(thing.shortId(), function(p1) {
            var retrieved = p1;
            if (retrieved.owner != null) 
                Assert.assertEquals("File is not Public, has an owner", retrieved.owner.length, 0);
            Assert.assertEquals("Name Does Not Match Saved Object Name", (thing)["name"], retrieved.name);
            Assert.assertEquals("ID Does Not Match Saved Object ID", thing.id, retrieved.id);
            console.log("Retrieved Unchanged.");
        }, function(p1) {
            console.log("Failed to retrieve");
            console.log(p1);
            Assert.fail("Failed to retrieve public object after save.");
        });
        var thing2 = new EcRemoteLinkedData(General.context, General.context + "/test");
        thing2.copyFrom(thing);
        ;
        (thing)["name"] = "Changed Public Object Name";
        console.log("Updating Public Object...");
        EcRepository.save(thing2, function(p1) {
            console.log("Updated.");
        }, function(p1) {
            console.log("Failed to update.");
            console.log(p1);
            Assert.fail("Failed to update object.");
        });
        console.log("Retrieving After update...");
        EcRepository.get(thing2.shortId(), function(p1) {
            var retrieved = p1;
            if (retrieved.owner != null) 
                Assert.assertEquals("File is not Public, has an owner", retrieved.owner.length, 0);
            Assert.assertEquals("Name Does Not Match Saved Object Name", (thing2)["name"], retrieved.name);
            Assert.assertEquals("ID Does Not Match Saved Object ID", thing2.id, retrieved.id);
            console.log("Retrieved Unchanged.");
        }, function(p1) {
            console.log("Failed to retrieve after update");
            console.log(p1);
            Assert.fail("Failed to retrieve public object after update.");
        });
        console.log("Trying to Delete...");
        r.constructor._delete(thing, function(p1) {
            console.log("Good, Can Delete Public Object.");
            console.log(p1);
        }, function(p1) {
            Assert.fail("Could not delete public object. This is now allowed (10/26/2016).");
        });
    };
    prototype.createPublicRegisteredObjectTest = function() {
        EcRemote.async = false;
        var r = new EcRepository();
        r.selectedServer = EcRepositoryTest.server;
        var thing = new EcRemoteLinkedData(General.context, General.context + "/test");
        thing.id = "http://cnn.com";
        if (!thing.id.endsWith("/")) 
            thing.id += "/";
        thing.id += "dunno/";
        thing.id += thing.type.replace("http://", "").replace("https://", "").replaceAll("/", ".");
        thing.id += "/";
        thing.id += "test-public-object";
        thing.id += "/";
        (thing)["name"] = "Test Public Registered Object";
        console.log("Saving Public Registered Object...");
        r.saveTo(thing, function(p1) {
            console.log("Saved.");
        }, function(p1) {
            console.log("Failed to save.");
            console.log(p1);
            Assert.fail("Failed to save object.");
        });
        console.log("Retrieving Public Registered Object...");
        EcRepository.get(thing.shortId(), function(p1) {
            var retrieved = p1;
            if (retrieved.owner != null) 
                Assert.assertEquals("File is not Public, has an owner", retrieved.owner.length, 0);
            Assert.assertEquals("Name Does Not Match Registered Object Name", (thing)["name"], retrieved.name);
            Assert.assertEquals("ID Does Not Match Registered Object ID", thing.id, retrieved.id);
            console.log("Retrieved Unchanged.");
        }, function(p1) {
            console.log("Failed to retrieve");
            console.log(p1);
            Assert.fail("Failed to retrieve public Registered object after save.");
        });
        var thing2 = new EcRemoteLinkedData(General.context, General.context + "/test");
        thing2.copyFrom(thing);
        ;
        (thing)["name"] = "Changed Public Registered Object Name";
        console.log("Updating Public Registered Object...");
        r.saveTo(thing2, function(p1) {
            console.log("Updated.");
        }, function(p1) {
            console.log("Failed to update.");
            console.log(p1);
            Assert.fail("Failed to update object.");
        });
        console.log("Retrieving After update...");
        EcRepository.get(thing2.shortId(), function(p1) {
            var retrieved = p1;
            if (retrieved.owner != null) 
                Assert.assertEquals("File is not Public, has an owner", retrieved.owner.length, 0);
            Assert.assertEquals("Name Does Not Match Registered Object Name", (thing2)["name"], retrieved.name);
            Assert.assertEquals("ID Does Not Match Registered Object ID", thing2.id, retrieved.id);
            console.log("Retrieved Unchanged.");
        }, function(p1) {
            console.log("Failed to retrieve after update");
            console.log(p1);
            Assert.fail("Failed to retrieve public Registered object after update.");
        });
        console.log("Trying to Delete...");
        r.deleteRegistered(thing, function(p1) {
            console.log("Good, Can Delete Public Registered Object.");
            console.log(p1);
        }, function(p1) {
            Assert.fail("Could not delete public Registered object. This is now allowed (10/26/2016).");
        });
    };
    prototype.createAndDeleteSingleOwnedObjectTest = function() {
        EcRemote.async = false;
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var thing = new EcRemoteLinkedData(General.context, General.context + "/test");
        thing.generateId(EcRepositoryTest.server);
        (thing)["name"] = "Testing Owned Object";
        thing.addOwner(ppk.toPk());
        thing.signWith(ppk);
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(newId1);
        var r = new EcRepository();
        r.selectedServer = EcRepositoryTest.server;
        console.log("Saving...");
        EcRepository.save(thing, function(p1) {
            console.log("Saved.");
        }, function(p1) {
            console.log("Failed to save.");
            console.log(p1);
            Assert.fail("Failed to save object.");
        });
        EcIdentityManager.ids = [];
        console.log("Retrieving...");
        EcRepository.get(thing.shortId(), function(p1) {
            var retrieved = p1;
            Assert.assertTrue("Object is not Owned by the Identity that Created It", retrieved.canEdit(newId1.ppk.toPk()));
            Assert.assertEquals("Name Does Not Match Saved Object Name", (thing)["name"], retrieved.name);
            Assert.assertEquals("ID Does Not Match Saved Object ID", thing.id, retrieved.id);
            console.log("Retrieved Unchanged");
        }, function(p1) {
            console.log("Failed to retrieve.");
            console.log(p1);
            Assert.fail("Failed to retrieve object after save.");
        });
        console.log("Searching...");
        r.search("@id:\"" + thing.id + "\"", null, function(p1) {
            var found = false;
            for (var i = 0; i < p1.length; i++) {
                if (p1[i].shortId().equals(thing.shortId())) 
                    found = true;
            }
            Assert.assertTrue("Unable to find object in search. ", found);
        }, function(p1) {
            console.log("Failed to search.");
            console.log(p1);
            Assert.fail("Failed to search for object after save.");
        });
        console.log("Trying to delete as public...");
        r.constructor._delete(thing, function(p1) {
            Assert.fail("Deleted the Owned Object as public");
        }, function(p1) {
            console.log(p1);
            console.log("Denied Access");
        });
        EcIdentityManager.addIdentity(newId1);
        var thing2 = new EcRemoteLinkedData(General.context, General.context + "/test");
        thing2.copyFrom(thing);
        ;
        (thing)["name"] = "Changed Object Name";
        console.log("Updating Owned Object...");
        EcRepository.save(thing2, function(p1) {
            console.log("Updated.");
        }, function(p1) {
            console.log("Failed to update.");
            console.log(p1);
            Assert.fail("Failed to update object.");
        });
        console.log("Retrieving Owned Object...");
        EcRepository.get(thing2.shortId(), function(p1) {
            var retrieved = p1;
            Assert.assertEquals("Name Does Not Match Saved Object Name", (thing2)["name"], retrieved.name);
            Assert.assertEquals("Id Does Not Match Saved Object Id", thing2.id, retrieved.id);
            console.log("Retrieved Unchanged.");
        }, function(p1) {
            console.log("Failed to retrieve");
            console.log(p1);
            Assert.fail("Failed to retrieve public object after save.");
        });
        console.log("Deleting...");
        r.constructor._delete(thing, function(p1) {
            console.log("Deleted the Owned Object.");
        }, function(p1) {
            console.log(p1);
            Assert.fail("Failed to Delete the Owned Object from Repository");
        });
    };
    prototype.createAndDeleteTwoOwnerObjectTest = function() {
        EcRemote.async = false;
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var ppk2 = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEowIBAAKCAQEAg2cDnkHswuKCvjpFwiXuMoHf9C0qEFupDBalvVscxg7F6qWUSxpISYznkZ/dpXwtrR6w+C5fB+KmTNRUxTl9uT4O1Z4AhJ6b9l6WGQWYlRBZZqXmJwcWnCFcOPGfbVcKHuX7AlIaend7/HC7IudfSiLTcfo6EM7k2xiygrGagW89yEe+Q9DsnruU8UkkT9J7Hzi70RVnc6ovqasqFubECNbIoiFW52AJ2EZYRFCXAAfA2Wb9Tmv170RRjsjBS8TJ+C8WSbtCWOztMnUJlJmQtbiVRnfXRFI9igR4bzpQHmOS1khln9VBo4aiosUeaLNMjs2suEia+6HdLbhZfP26cQIDAQABAoIBAEFu+9tD4t2NJCQMKo6qirn1+IrELs0kh8KwSGpJw8NQuffF6lmXxeVyWCIpJJtygeBShzefB82KbNuXZHstzNCA+awgWQuxW+LMaRwesEOSd6Jo/Hn0yqqG5kCo+YXeMPj/9wXJ0sunUkN784RHCSmGvBpmy6FxFX+RBduVC2ZmPCxsv21HXjGAUled7mzZ/6u7g2Q7nAFd72QLKK3qaLflzfCnqTYqdsIwlR8Lp8F5+FcGQUM9SGv/mdAT9U05ovVuQSB7yToe4d+vV/u+6ixk0TM4RFm7ZWYyXqpuGCy5Logo6aZYWfKWZbKJuGmgwf1przZC3euu91kKR+ui81ECgYEA8QhPYGEG+ExaQ6vQzeLlddxriAQuvfBQR7W82/6UnaBtswolNQdRQ1KeOV8MJ57pYZeZidPq7Xc2tFcrH6FYVF2h+Sxe0jpKFf9CAzqammZjR3c7ddHeif45VeGUM0kdID1baAMvLIJg0e7Q2n/PuEY3FL+5GBlkxJdQnz6r2V0CgYEAi4/ql978ac63ex0Rz898lWMYY60nrJaYBPohpf+CMQ7c/lrretbX2ZoswheVKaho/yn3fpcPnUwh7rTuTLnMjxbl5D7LWfHIA9ZyNqwGZjL525p+pSjPsN3S1NNI8tH8UQ9lMuV/xr3R6vVdZT7UiWr09MUX4DYceKAuoP4/kCUCgYBQq0VVrmOUyokTSPfTUHMXpTPgC/ZQ35MezPZucp/uuXi9iVG2k8Jg08/cx7DbudXGMeTTOjfQTivi46GtLmTPp57ENFNv7M5K2mmPhxejQU1M59zgq+LdMFakJaFiIMA8wAxNnXM2ZFRfLpx75Hby550btqcOJ8GQAkybX3BIiQKBgQCIJGUpr6m1oaTVIV9txC75H4j8Oz7XmrRDLqpCX4TmTGSCb7kExK4dpMuCrzSgRZvfRlYblEr0G/+B99f62sjU0PaD+EmwvS5rp/cUpC095v5cHlLq1Gv+UfXIDTA9R2CGxqjmxIAoJKWxOZfZGziDsOWyHM4Ut1SAy2mRPVROTQKBgD5lboXnZMpRsamgZ5Jwg4bES6npFyPsrNaeJnp6QWz0Q1Ur/dw473VafpeKUZc4/uRRWTtuwooD4x2iCRZzRYAgImyZMeISMOIy8Yt6UZh9AScXsuhOSWiUKj/c1EGjMzMvV59ZzEddXohzMysZ0V/hjVW48HG7ZOcqIAk83Et+-----END RSA PRIVATE KEY-----");
        var thing = new EcRemoteLinkedData(General.context, General.context + "/test");
        thing.generateId(EcRepositoryTest.server);
        (thing)["name"] = "Testing Owned Object";
        thing.addOwner(ppk.toPk());
        thing.signWith(ppk);
        ppk2.toPk().toPem();
        var pk2 = EcPk.fromPem(ppk2.toPk().toPem());
        thing.addOwner(pk2);
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(newId1);
        console.log("Saving...");
        EcRepository.save(thing, function(p1) {
            console.log("Saved.");
        }, function(p1) {
            console.log("Failed to save.");
            console.log(p1);
            Assert.fail("Failed to save object.");
        });
        EcIdentityManager.ids = [];
        console.log("Retrieving...");
        EcRepository.get(thing.shortId(), function(p1) {
            var retrieved = p1;
            Assert.assertTrue("Object is not Owned by the Identity that Created It", retrieved.canEdit(newId1.ppk.toPk()));
            Assert.assertEquals("Name Does Not Match Saved Object Name", (thing)["name"], retrieved.name);
            Assert.assertEquals("Name Does Not Match Saved Object Name", thing.id, retrieved.id);
            console.log("Retrieved Unchanged");
        }, function(p1) {
            console.log("Failed to retrieve.");
            console.log(p1);
            Assert.fail("Failed to retrieve object after save.");
        });
        var r = new EcRepository();
        r.selectedServer = EcRepositoryTest.server;
        console.log("Searching...");
        r.search("@id:\"" + thing.id + "\"", null, function(p1) {
            var found = false;
            for (var i = 0; i < p1.length; i++) {
                if (p1[i].shortId().equals(thing.shortId())) 
                    found = true;
            }
            Assert.assertTrue("Unable to find object in search. ", found);
        }, function(p1) {
            console.log("Failed to search.");
            console.log(p1);
            Assert.fail("Failed to search for object after save.");
        });
        var newId2 = new EcIdentity();
        newId2.ppk = ppk2;
        EcIdentityManager.addIdentity(newId2);
        var thing2 = new EcRemoteLinkedData(General.context, General.context + "/test");
        thing2.copyFrom(thing);
        (thing)["name"] = "Changed Object Name";
        console.log("Updating Owned Object as owner 2...");
        EcRepository.save(thing2, function(p1) {
            console.log("Updated.");
        }, function(p1) {
            console.log("Failed to update.");
            console.log(p1);
            Assert.fail("Failed to update object.");
        });
        console.log("Retrieving Owned Object as owner 2...");
        EcRepository.get(thing2.shortId(), function(p1) {
            var retrieved = p1;
            Assert.assertEquals("Name Does Not Match Saved Object Name", (thing2)["name"], retrieved.name);
            Assert.assertEquals("Id Does Not Match Saved Object Id", thing2.id, retrieved.id);
            console.log("Retrieved Unchanged.");
        }, function(p1) {
            console.log("Failed to retrieve");
            console.log(p1);
            Assert.fail("Failed to retrieve public object after save.");
        });
        console.log("Deleting...");
        r.constructor._delete(thing, function(p1) {
            console.log("Deleted the Owned Object.");
        }, function(p1) {
            console.log(p1);
            Assert.fail("Failed to Delete the Owned Object from Repository");
        });
    };
    prototype.searchForSomethingThatCantExist = function() {
        EcRemote.async = false;
        var r = new EcRepository();
        r.selectedServer = EcRepositoryTest.server;
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        console.log("Searching...");
        r.search("@type:\"http://schema.eduworks.com/general/0.2/nonsense\"", null, function(p1) {
            Assert.assertTrue(true);
        }, function(p1) {
            console.log("Failed to search.");
            console.log(p1);
            Assert.fail("Failed to search for object that doesn't have an existing type in the database.");
        });
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(newId1);
        console.log("Searching...");
        r.search("@type:\"http://schema.eduworks.com/general/0.2/nonsense\"", null, function(p1) {
            Assert.assertTrue(true);
        }, function(p1) {
            console.log("Failed to search w/signature.");
            console.log(p1);
            Assert.fail("Failed to search for object that doesn't have an existing type in the database (using a signature).");
        });
    };
}, {}, {});
var EcEncryptedValueTest = function() {};
EcEncryptedValueTest = stjs.extend(EcEncryptedValueTest, null, [], function(constructor, prototype) {
    constructor.server = "http://localhost/api/";
    prototype.begin = function() {
        EcRemote.async = false;
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var ppk2 = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAl4oeWRsroJqAR8UXkmkhDHMcRaDM6a9wsFWNkokyugMevv5TtwHVrm9HMJqVlXn1U1AiVS1rEYB7Iavi2IE7e8WV6GkLrGTrce+YcqhrwF3g104ZEuIC2aFCcLrxvXbSqmmuddS3lRMEwqdWkYIS7MKRSKUBpbydl8wScYxjzUSMNzQrvgUpNc//N7GkpEFXYLjYmVWhYdUp578nw/K9StRqTfku8U+Ub86U0mHXowms4spV8IoOlV53OLpOL+8QwcQYZ+koWL4B0rhz6cvelvBAFygx94t8IzZtRiBniaTF+1nBjyj4+R8PdprxFNnM+S2IQBqUdBKJ3oDoKMqdAwIDAQABAoIBAC3BWmB1P7sCa3FAJVnjvELSDttHLhfxDQlxC4oPOu3HO2VXzVcYirhciRY31qqHZHd/Xp5xVD64mHUWPSw5+QfqJNVDwm6PGjgQq+sSx1YSAm1/+zokW8/yTOlUyOD4G6uwtSiGzdeJIorTk+PjbmtmZA+XIuQ0CzFmQLtgNFIpxRmDKLZrjEO5NSaeStZRgi+WVkgfOnvQvWtFK8/djeXfb4f3BnquCRKjm/cOjtdqBHcFq7Fzlyh0U64XXcJPPgBX3hLNK7mr0ZBCwUDOUs0Xna0a/2FHsjESPX7grZ9J1fbkXRwUrSJ04zbeijqROkjni7wokT+HiWtVcZ/HLOECgYEA0/CykuniBAE+Oqt+qj1OEQSnyiENJffnSzeOOjI17ygxcXYFxprEVjYL1ZVj28appGqs4tueNRoxl7jf4jpD6sDMM32scwmUcCA6K3yqk/F/WVj4MYdn7ETtACCZ9m08EUzksrWOaAb86jqm7k1+mM5xu6lbN3dSua1lKxsNFi0CgYEAtwrwuVupz+GmMna7DtW9S2q0ZwgSoUEcELqcXq2cwAPutrd4rh/xS1xsZZNGqnyT1b3/6vFT2zAyxUiL3o+bhDEEv5HcRJ2rugIhUq2dPAJMYf+kBAFONakir2wHwUUXIkaEHecwxsaI8rsTnXDW+anbJogZSLNcFOBydOaBLe8CgYBKDZknsibxxUlsEI4Ch8cmNR03iBLjCFq9sly0wuSLetzDyzw7Z8pgYSQDbd5lZWXS+B8OaTQ/U7auT7+SeU9P0CvJdgjybQ97mhcZKMclSEV5/5dBHxHVwUOaPsntC7/oP5jNRJjMilyGrxWywEsSs1eT/ZnMqJm0HPzzcdFBxQKBgQAMOkTefQsZAf/yOxA/63NbyGMIxvdHomvXij/L61kfUqPtvM/pAeVCnYf4OSBtXykZDDo+XaS2bb/WggQl9/3xlLy2d235f3brVB0ZwtNQIO8tVMCGK/gniYbxpQvXk1/6QC+vN7SAct7PKEQlLlaOExS6vDjELIcoNd4vhP54LQKBgQAOE7+S2AdjUEVXqWBPnlidZV08HMduy3yZ7mblCX0dA07/ozuM/WOfk92cgqcLddOmsbYdTuqTq1sB98v1QN1RwYe9Eiw0dmfbFlQcXT1YAZVfHNQOMO2xI4gJtkNGUqg1HQsYghOO2wkNHSMCNsoq9GWeIzCF2q6/7oH74jfoaQ==-----END RSA PRIVATE KEY-----");
        var r = new EcRepository();
        r.selectedServer = EcEncryptedValueTest.server;
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        var newId2 = new EcIdentity();
        newId2.ppk = ppk2;
        EcIdentityManager.addIdentity(newId1);
        EcIdentityManager.addIdentity(newId2);
        r.search("\"" + ppk.toPk().toPem() + "\"", function(ecRemoteLinkedData) {
            r.constructor._delete(ecRemoteLinkedData, null, null);
        }, function(p1) {}, function(p1) {
            console.log("Could not find objects to delete");
        });
        EcIdentityManager.clearIdentities();
    };
    prototype.encryptDecryptTest = function() {
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var ppk2 = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAl4oeWRsroJqAR8UXkmkhDHMcRaDM6a9wsFWNkokyugMevv5TtwHVrm9HMJqVlXn1U1AiVS1rEYB7Iavi2IE7e8WV6GkLrGTrce+YcqhrwF3g104ZEuIC2aFCcLrxvXbSqmmuddS3lRMEwqdWkYIS7MKRSKUBpbydl8wScYxjzUSMNzQrvgUpNc//N7GkpEFXYLjYmVWhYdUp578nw/K9StRqTfku8U+Ub86U0mHXowms4spV8IoOlV53OLpOL+8QwcQYZ+koWL4B0rhz6cvelvBAFygx94t8IzZtRiBniaTF+1nBjyj4+R8PdprxFNnM+S2IQBqUdBKJ3oDoKMqdAwIDAQABAoIBAC3BWmB1P7sCa3FAJVnjvELSDttHLhfxDQlxC4oPOu3HO2VXzVcYirhciRY31qqHZHd/Xp5xVD64mHUWPSw5+QfqJNVDwm6PGjgQq+sSx1YSAm1/+zokW8/yTOlUyOD4G6uwtSiGzdeJIorTk+PjbmtmZA+XIuQ0CzFmQLtgNFIpxRmDKLZrjEO5NSaeStZRgi+WVkgfOnvQvWtFK8/djeXfb4f3BnquCRKjm/cOjtdqBHcFq7Fzlyh0U64XXcJPPgBX3hLNK7mr0ZBCwUDOUs0Xna0a/2FHsjESPX7grZ9J1fbkXRwUrSJ04zbeijqROkjni7wokT+HiWtVcZ/HLOECgYEA0/CykuniBAE+Oqt+qj1OEQSnyiENJffnSzeOOjI17ygxcXYFxprEVjYL1ZVj28appGqs4tueNRoxl7jf4jpD6sDMM32scwmUcCA6K3yqk/F/WVj4MYdn7ETtACCZ9m08EUzksrWOaAb86jqm7k1+mM5xu6lbN3dSua1lKxsNFi0CgYEAtwrwuVupz+GmMna7DtW9S2q0ZwgSoUEcELqcXq2cwAPutrd4rh/xS1xsZZNGqnyT1b3/6vFT2zAyxUiL3o+bhDEEv5HcRJ2rugIhUq2dPAJMYf+kBAFONakir2wHwUUXIkaEHecwxsaI8rsTnXDW+anbJogZSLNcFOBydOaBLe8CgYBKDZknsibxxUlsEI4Ch8cmNR03iBLjCFq9sly0wuSLetzDyzw7Z8pgYSQDbd5lZWXS+B8OaTQ/U7auT7+SeU9P0CvJdgjybQ97mhcZKMclSEV5/5dBHxHVwUOaPsntC7/oP5jNRJjMilyGrxWywEsSs1eT/ZnMqJm0HPzzcdFBxQKBgQAMOkTefQsZAf/yOxA/63NbyGMIxvdHomvXij/L61kfUqPtvM/pAeVCnYf4OSBtXykZDDo+XaS2bb/WggQl9/3xlLy2d235f3brVB0ZwtNQIO8tVMCGK/gniYbxpQvXk1/6QC+vN7SAct7PKEQlLlaOExS6vDjELIcoNd4vhP54LQKBgQAOE7+S2AdjUEVXqWBPnlidZV08HMduy3yZ7mblCX0dA07/ozuM/WOfk92cgqcLddOmsbYdTuqTq1sB98v1QN1RwYe9Eiw0dmfbFlQcXT1YAZVfHNQOMO2xI4gJtkNGUqg1HQsYghOO2wkNHSMCNsoq9GWeIzCF2q6/7oH74jfoaQ==-----END RSA PRIVATE KEY-----");
        var f = new GeneralFile();
        f.name = "My_File.txt";
        f.mimeType = "text/plain";
        f.data = "BASE64ENCODEDDATA";
        f.generateId(EcEncryptedValueTest.server);
        f.checksum = "ABC123";
        f.addOwner(ppk.toPk());
        f.signWith(ppk);
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.addIdentity(newId1);
        var v = null;
        console.log("Encrypting: " + f.name);
        v = EcEncryptedValue.encryptValueOld(f.name, f.id, ppk.toPk());
        console.log("Encrypted object: " + v.toJson());
        Assert.assertTrue("Owner exists in encrypted object.", v.hasOwner(ppk.toPk()));
        Assert.assertTrue("Owner can decrypt object.", v.decryptIntoString() == f.name);
        var readers = new Array();
        readers.push(ppk2.toPk().toPem());
        var v2 = null;
        console.log("Encrypting: " + f.name);
        v2 = EcEncryptedValue.encryptValue(f.name, f.id, f.owner, readers);
        console.log("Encrypted object: " + v2.toJson());
        var newId2 = new EcIdentity();
        newId2.ppk = ppk2;
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(newId2);
        Assert.assertTrue("Reader Decryption:", v2.decryptIntoString() == f.name);
    };
    prototype.encryptObjectUploadDownloadDecryptTest = function() {
        EcRemote.async = false;
        console.log("Encrypted Object Upload Download then Decrypt Test.");
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var ppk2 = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAl4oeWRsroJqAR8UXkmkhDHMcRaDM6a9wsFWNkokyugMevv5TtwHVrm9HMJqVlXn1U1AiVS1rEYB7Iavi2IE7e8WV6GkLrGTrce+YcqhrwF3g104ZEuIC2aFCcLrxvXbSqmmuddS3lRMEwqdWkYIS7MKRSKUBpbydl8wScYxjzUSMNzQrvgUpNc//N7GkpEFXYLjYmVWhYdUp578nw/K9StRqTfku8U+Ub86U0mHXowms4spV8IoOlV53OLpOL+8QwcQYZ+koWL4B0rhz6cvelvBAFygx94t8IzZtRiBniaTF+1nBjyj4+R8PdprxFNnM+S2IQBqUdBKJ3oDoKMqdAwIDAQABAoIBAC3BWmB1P7sCa3FAJVnjvELSDttHLhfxDQlxC4oPOu3HO2VXzVcYirhciRY31qqHZHd/Xp5xVD64mHUWPSw5+QfqJNVDwm6PGjgQq+sSx1YSAm1/+zokW8/yTOlUyOD4G6uwtSiGzdeJIorTk+PjbmtmZA+XIuQ0CzFmQLtgNFIpxRmDKLZrjEO5NSaeStZRgi+WVkgfOnvQvWtFK8/djeXfb4f3BnquCRKjm/cOjtdqBHcFq7Fzlyh0U64XXcJPPgBX3hLNK7mr0ZBCwUDOUs0Xna0a/2FHsjESPX7grZ9J1fbkXRwUrSJ04zbeijqROkjni7wokT+HiWtVcZ/HLOECgYEA0/CykuniBAE+Oqt+qj1OEQSnyiENJffnSzeOOjI17ygxcXYFxprEVjYL1ZVj28appGqs4tueNRoxl7jf4jpD6sDMM32scwmUcCA6K3yqk/F/WVj4MYdn7ETtACCZ9m08EUzksrWOaAb86jqm7k1+mM5xu6lbN3dSua1lKxsNFi0CgYEAtwrwuVupz+GmMna7DtW9S2q0ZwgSoUEcELqcXq2cwAPutrd4rh/xS1xsZZNGqnyT1b3/6vFT2zAyxUiL3o+bhDEEv5HcRJ2rugIhUq2dPAJMYf+kBAFONakir2wHwUUXIkaEHecwxsaI8rsTnXDW+anbJogZSLNcFOBydOaBLe8CgYBKDZknsibxxUlsEI4Ch8cmNR03iBLjCFq9sly0wuSLetzDyzw7Z8pgYSQDbd5lZWXS+B8OaTQ/U7auT7+SeU9P0CvJdgjybQ97mhcZKMclSEV5/5dBHxHVwUOaPsntC7/oP5jNRJjMilyGrxWywEsSs1eT/ZnMqJm0HPzzcdFBxQKBgQAMOkTefQsZAf/yOxA/63NbyGMIxvdHomvXij/L61kfUqPtvM/pAeVCnYf4OSBtXykZDDo+XaS2bb/WggQl9/3xlLy2d235f3brVB0ZwtNQIO8tVMCGK/gniYbxpQvXk1/6QC+vN7SAct7PKEQlLlaOExS6vDjELIcoNd4vhP54LQKBgQAOE7+S2AdjUEVXqWBPnlidZV08HMduy3yZ7mblCX0dA07/ozuM/WOfk92cgqcLddOmsbYdTuqTq1sB98v1QN1RwYe9Eiw0dmfbFlQcXT1YAZVfHNQOMO2xI4gJtkNGUqg1HQsYghOO2wkNHSMCNsoq9GWeIzCF2q6/7oH74jfoaQ==-----END RSA PRIVATE KEY-----");
        var f = new GeneralFile();
        f.name = "My_File.txt";
        f.mimeType = "text/plain";
        f.data = "BASE64ENCODEDDATA";
        f.generateId(EcEncryptedValueTest.server);
        f.checksum = "ABC123";
        f.addOwner(ppk.toPk());
        f.signWith(ppk);
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.addIdentity(newId1);
        var v = null;
        console.log("Encrypting: " + f.name);
        v = EcEncryptedValue.toEncryptedValue(f, false);
        console.log("Encrypted object: " + v.toJson());
        Assert.assertTrue("Owner exists in encrypted object.", v.hasOwner(ppk.toPk()));
        EcRepository.save(v, function(p1) {
            console.log("Saved.");
        }, function(p1) {
            console.log("Failed to save.");
            console.log(p1);
            Assert.fail("Failed to save object.");
        });
        EcRepository.get(v.shortId(), function(p1) {
            console.log("Read.");
            var val = new EcEncryptedValue();
            val.copyFrom(p1);
            var decryptedObject = val.decryptIntoObject();
            var file = new GeneralFile();
            file.copyFrom(decryptedObject);
            Assert.assertTrue(file.name == f.name);
        }, function(p1) {
            Assert.fail("Failed to read object.");
        });
        var r = new EcRepository();
        r.selectedServer = EcEncryptedValueTest.server;
        r.constructor._delete(f, function(p1) {}, function(p1) {
            Assert.fail("Failed to delete object. " + p1);
        });
    };
    prototype.encryptValueUploadDownloadDecryptTest = function() {
        EcRemote.async = false;
        console.log("Encrypted Value Upload Download then Decrypt Test.");
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var ppk2 = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAl4oeWRsroJqAR8UXkmkhDHMcRaDM6a9wsFWNkokyugMevv5TtwHVrm9HMJqVlXn1U1AiVS1rEYB7Iavi2IE7e8WV6GkLrGTrce+YcqhrwF3g104ZEuIC2aFCcLrxvXbSqmmuddS3lRMEwqdWkYIS7MKRSKUBpbydl8wScYxjzUSMNzQrvgUpNc//N7GkpEFXYLjYmVWhYdUp578nw/K9StRqTfku8U+Ub86U0mHXowms4spV8IoOlV53OLpOL+8QwcQYZ+koWL4B0rhz6cvelvBAFygx94t8IzZtRiBniaTF+1nBjyj4+R8PdprxFNnM+S2IQBqUdBKJ3oDoKMqdAwIDAQABAoIBAC3BWmB1P7sCa3FAJVnjvELSDttHLhfxDQlxC4oPOu3HO2VXzVcYirhciRY31qqHZHd/Xp5xVD64mHUWPSw5+QfqJNVDwm6PGjgQq+sSx1YSAm1/+zokW8/yTOlUyOD4G6uwtSiGzdeJIorTk+PjbmtmZA+XIuQ0CzFmQLtgNFIpxRmDKLZrjEO5NSaeStZRgi+WVkgfOnvQvWtFK8/djeXfb4f3BnquCRKjm/cOjtdqBHcFq7Fzlyh0U64XXcJPPgBX3hLNK7mr0ZBCwUDOUs0Xna0a/2FHsjESPX7grZ9J1fbkXRwUrSJ04zbeijqROkjni7wokT+HiWtVcZ/HLOECgYEA0/CykuniBAE+Oqt+qj1OEQSnyiENJffnSzeOOjI17ygxcXYFxprEVjYL1ZVj28appGqs4tueNRoxl7jf4jpD6sDMM32scwmUcCA6K3yqk/F/WVj4MYdn7ETtACCZ9m08EUzksrWOaAb86jqm7k1+mM5xu6lbN3dSua1lKxsNFi0CgYEAtwrwuVupz+GmMna7DtW9S2q0ZwgSoUEcELqcXq2cwAPutrd4rh/xS1xsZZNGqnyT1b3/6vFT2zAyxUiL3o+bhDEEv5HcRJ2rugIhUq2dPAJMYf+kBAFONakir2wHwUUXIkaEHecwxsaI8rsTnXDW+anbJogZSLNcFOBydOaBLe8CgYBKDZknsibxxUlsEI4Ch8cmNR03iBLjCFq9sly0wuSLetzDyzw7Z8pgYSQDbd5lZWXS+B8OaTQ/U7auT7+SeU9P0CvJdgjybQ97mhcZKMclSEV5/5dBHxHVwUOaPsntC7/oP5jNRJjMilyGrxWywEsSs1eT/ZnMqJm0HPzzcdFBxQKBgQAMOkTefQsZAf/yOxA/63NbyGMIxvdHomvXij/L61kfUqPtvM/pAeVCnYf4OSBtXykZDDo+XaS2bb/WggQl9/3xlLy2d235f3brVB0ZwtNQIO8tVMCGK/gniYbxpQvXk1/6QC+vN7SAct7PKEQlLlaOExS6vDjELIcoNd4vhP54LQKBgQAOE7+S2AdjUEVXqWBPnlidZV08HMduy3yZ7mblCX0dA07/ozuM/WOfk92cgqcLddOmsbYdTuqTq1sB98v1QN1RwYe9Eiw0dmfbFlQcXT1YAZVfHNQOMO2xI4gJtkNGUqg1HQsYghOO2wkNHSMCNsoq9GWeIzCF2q6/7oH74jfoaQ==-----END RSA PRIVATE KEY-----");
        var f = new GeneralFile();
        f.name = "My_File.txt";
        f.mimeType = "text/plain";
        f.data = "BASE64ENCODEDDATA";
        f.generateId(EcEncryptedValueTest.server);
        f.checksum = "ABC123";
        f.addOwner(ppk.toPk());
        f.signWith(ppk);
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.addIdentity(newId1);
        (f)["encryptedName"] = EcEncryptedValue.encryptValue(f.name, f.shortId(), f.owner, null);
        console.log(f.toJson());
        EcRepository.save(f, function(p1) {
            console.log("Saved.");
        }, function(p1) {
            console.log("Failed to save.");
            console.log(p1);
            Assert.fail("Failed to save object.");
        });
        EcRepository.get(f.shortId(), function(p1) {
            console.log("Read.");
            var val = new GeneralFile();
            console.log(p1.toJson());
            val.copyFrom(p1);
            console.log(val.toJson());
            var val1 = new EcEncryptedValue();
            val1.copyFrom((val)["encryptedName"]);
            console.log("Encrypted, downloaded = " + val1.toJson());
            var decryptIntoString = val1.decryptIntoString();
            console.log("Decrypted = " + decryptIntoString);
            Assert.assertTrue(decryptIntoString == "My_File.txt");
        }, function(p1) {
            Assert.fail("Failed to read object.");
        });
        var r = new EcRepository();
        r.selectedServer = EcEncryptedValueTest.server;
        r.constructor._delete(f, function(p1) {}, function(p1) {
            Assert.fail("Failed to delete object. " + p1);
        });
    };
    prototype.encryptValueWithReaderUploadSearchByPkWithSignatureTest = function() {
        EcRemote.async = false;
        console.log("encryptValueWithReaderUploadSearchByPkWithSignatureTest Test.");
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var ppk2 = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAl4oeWRsroJqAR8UXkmkhDHMcRaDM6a9wsFWNkokyugMevv5TtwHVrm9HMJqVlXn1U1AiVS1rEYB7Iavi2IE7e8WV6GkLrGTrce+YcqhrwF3g104ZEuIC2aFCcLrxvXbSqmmuddS3lRMEwqdWkYIS7MKRSKUBpbydl8wScYxjzUSMNzQrvgUpNc//N7GkpEFXYLjYmVWhYdUp578nw/K9StRqTfku8U+Ub86U0mHXowms4spV8IoOlV53OLpOL+8QwcQYZ+koWL4B0rhz6cvelvBAFygx94t8IzZtRiBniaTF+1nBjyj4+R8PdprxFNnM+S2IQBqUdBKJ3oDoKMqdAwIDAQABAoIBAC3BWmB1P7sCa3FAJVnjvELSDttHLhfxDQlxC4oPOu3HO2VXzVcYirhciRY31qqHZHd/Xp5xVD64mHUWPSw5+QfqJNVDwm6PGjgQq+sSx1YSAm1/+zokW8/yTOlUyOD4G6uwtSiGzdeJIorTk+PjbmtmZA+XIuQ0CzFmQLtgNFIpxRmDKLZrjEO5NSaeStZRgi+WVkgfOnvQvWtFK8/djeXfb4f3BnquCRKjm/cOjtdqBHcFq7Fzlyh0U64XXcJPPgBX3hLNK7mr0ZBCwUDOUs0Xna0a/2FHsjESPX7grZ9J1fbkXRwUrSJ04zbeijqROkjni7wokT+HiWtVcZ/HLOECgYEA0/CykuniBAE+Oqt+qj1OEQSnyiENJffnSzeOOjI17ygxcXYFxprEVjYL1ZVj28appGqs4tueNRoxl7jf4jpD6sDMM32scwmUcCA6K3yqk/F/WVj4MYdn7ETtACCZ9m08EUzksrWOaAb86jqm7k1+mM5xu6lbN3dSua1lKxsNFi0CgYEAtwrwuVupz+GmMna7DtW9S2q0ZwgSoUEcELqcXq2cwAPutrd4rh/xS1xsZZNGqnyT1b3/6vFT2zAyxUiL3o+bhDEEv5HcRJ2rugIhUq2dPAJMYf+kBAFONakir2wHwUUXIkaEHecwxsaI8rsTnXDW+anbJogZSLNcFOBydOaBLe8CgYBKDZknsibxxUlsEI4Ch8cmNR03iBLjCFq9sly0wuSLetzDyzw7Z8pgYSQDbd5lZWXS+B8OaTQ/U7auT7+SeU9P0CvJdgjybQ97mhcZKMclSEV5/5dBHxHVwUOaPsntC7/oP5jNRJjMilyGrxWywEsSs1eT/ZnMqJm0HPzzcdFBxQKBgQAMOkTefQsZAf/yOxA/63NbyGMIxvdHomvXij/L61kfUqPtvM/pAeVCnYf4OSBtXykZDDo+XaS2bb/WggQl9/3xlLy2d235f3brVB0ZwtNQIO8tVMCGK/gniYbxpQvXk1/6QC+vN7SAct7PKEQlLlaOExS6vDjELIcoNd4vhP54LQKBgQAOE7+S2AdjUEVXqWBPnlidZV08HMduy3yZ7mblCX0dA07/ozuM/WOfk92cgqcLddOmsbYdTuqTq1sB98v1QN1RwYe9Eiw0dmfbFlQcXT1YAZVfHNQOMO2xI4gJtkNGUqg1HQsYghOO2wkNHSMCNsoq9GWeIzCF2q6/7oH74jfoaQ==-----END RSA PRIVATE KEY-----");
        var ppk3 = EcPpk.generateKey();
        var r = new EcRepository();
        r.selectedServer = EcEncryptedValueTest.server;
        var f = new GeneralFile();
        f.name = "My_File.txt";
        f.mimeType = "text/plain";
        f.data = "BASE64ENCODEDDATA";
        f.generateId(r.selectedServer);
        f.checksum = "ABC123";
        f.addOwner(ppk.toPk());
        f.signWith(ppk);
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        var newId2 = new EcIdentity();
        newId2.ppk = ppk2;
        var newId3 = new EcIdentity();
        newId3.ppk = ppk3;
        EcIdentityManager.addIdentity(newId1);
        var readers = new Array();
        readers.push(ppk2.toPk().toPem());
        (f)["encryptedName"] = EcEncryptedValue.encryptValue(f.name, f.shortId(), f.owner, readers);
        console.log(f.toJson());
        EcRepository.save(f, function(p1) {
            console.log("Saved.");
        }, function(p1) {
            console.log("Failed to save.");
            console.log(p1);
            Assert.fail("Failed to save object.");
        });
        var eachCallback = function(p1) {};
        var success = function(p1) {
            var found = false;
            for (var i = 0; i < p1.length; i++) {
                if (p1[i].shortId() == f.shortId()) 
                    found = true;
            }
            Assert.assertTrue(found);
        };
        var successInvert = function(p1) {
            var found = false;
            for (var i = 0; i < p1.length; i++) {
                if (p1[i].shortId() == f.shortId()) 
                    found = true;
            }
            Assert.assertTrue(!found);
        };
        var failure = function(p1) {
            Assert.fail(p1);
        };
        try {
            var o = new Object();
            (o)["size"] = 5000;
            console.log("ID Search, searching with signature 1.");
            r.searchWithParams("@id:\"" + f.shortId() + "\"", o, eachCallback, success, failure);
            console.log("Owner Search, searching for signature 1 using signature 1 signatureSheet.");
            r.searchWithParams("\\*owner:\"" + ppk.toPk().toPem() + "\"", o, eachCallback, success, failure);
            console.log("Owner Search minus whitespace, searching for signature 1 using signature 1 signatureSheet.");
            r.searchWithParams("\\*owner:\"" + ppk.toPk().toPem().replaceAll("\r", "").replaceAll("\n", "") + "\"", o, eachCallback, success, failure);
            console.log("Reader Search, searching for signature 2 using signature 1 signatureSheet.");
            r.searchWithParams("\\*reader:\"" + ppk2.toPk().toPem() + "\" OR \\*reader:\"" + ppk2.toPk().toPem() + "\"", o, eachCallback, success, failure);
            console.log("Reader Search minus whitespace, searching for signature 2 using signature 1 signatureSheet.");
            r.searchWithParams("\\*reader:\"" + ppk2.toPk().toPem().replaceAll("\r", "").replaceAll("\n", "") + "\" OR \\*reader:\"" + ppk2.toPk().toPem().replaceAll("\r", "").replaceAll("\n", "") + "\"", o, eachCallback, success, failure);
            console.log("_all Search, searching for signature 1 using signature 1 signatureSheet.");
            r.searchWithParams("\"" + ppk.toPk().toPem() + "\"", o, eachCallback, success, failure);
            console.log("_all Search minus whitespace, searching for signature 1 using signature 1 signatureSheet.");
            r.searchWithParams("\"" + ppk.toPk().toPem().replaceAll("\r", "").replaceAll("\n", "") + "\"", o, eachCallback, success, failure);
            EcIdentityManager.ids = new Array();
            EcIdentityManager.addIdentity(newId2);
            console.log("ID Search, searching with signature 2.");
            r.searchWithParams("@id:\"" + f.shortId() + "\"", o, eachCallback, success, failure);
            console.log("_all Search, searching for signature 1 using signature 2 signatureSheet.");
            r.searchWithParams("\"" + ppk.toPk().toPem() + "\"", o, eachCallback, success, failure);
            EcIdentityManager.ids = new Array();
            EcIdentityManager.addIdentity(newId3);
            console.log("ID Search.");
            r.searchWithParams("@id:\"" + f.shortId() + "\"", o, eachCallback, successInvert, failure);
            console.log("_all Search, searching for signature 1.");
            r.searchWithParams("\"" + ppk.toPk().toPem() + "\"", o, eachCallback, successInvert, failure);
            console.log("Owner Search, searching for signature 1");
            r.searchWithParams("\\*owner:\"" + ppk.toPk().toPem() + "\"", o, eachCallback, successInvert, failure);
            console.log("(SHOULD NOT FIND) Reader Search, searching for signature 2.");
            r.searchWithParams("\\*reader:\"" + ppk2.toPk().toPem() + "\" OR \\*reader:\"" + ppk2.toPk().toPem() + "\"", o, eachCallback, successInvert, failure);
            console.log("_all Search, searching for signature 1.");
            r.searchWithParams("\"" + ppk.toPk().toPem() + "\"", o, eachCallback, successInvert, failure);
            console.log("(SHOULD NOT FIND) _all Search, searching for signature 2.");
            r.searchWithParams("\"" + ppk2.toPk().toPem() + "\"", o, eachCallback, successInvert, failure);
        } finally {
            EcIdentityManager.ids = new Array();
            EcIdentityManager.addIdentity(newId1);
            r.constructor._delete(f, function(p1) {}, function(p1) {
                Assert.fail("Failed to delete object. " + p1);
            });
        }
    };
    prototype.encryptedValueOneOwnerTest = function() {
        EcRemote.async = false;
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var thing = new EcRemoteLinkedData(General.context, General.context + "/test");
        thing.generateId(EcEncryptedValueTest.server);
        (thing)["value"] = "Private Object Value";
        thing.addOwner(ppk.toPk());
        thing.signWith(ppk);
        var encThing = EcEncryptedValue.toEncryptedValue(thing, false);
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(newId1);
        console.log("Saving...");
        EcRepository.save(encThing, function(p1) {
            console.log("Saved.");
        }, function(p1) {
            console.log("Failed to save.");
            console.log(p1);
            Assert.fail("Failed to save object.");
        });
        console.log("Retrieving...");
        EcRepository.get(encThing.shortId(), function(p1) {
            var retrieved = new EcEncryptedValue();
            retrieved.copyFrom(p1);
            Assert.assertEquals("ID Does Not Match Saved Object", encThing.id, retrieved.id);
            Assert.assertTrue("Object is not Owned by the Identity that Created It", retrieved.canEdit(newId1.ppk.toPk()));
            Assert.assertEquals("Name Does Not Match Saved Object Name", (encThing.decryptIntoObject())["value"], (retrieved.decryptIntoObject())["value"]);
            console.log("Retrieved Unchanged");
        }, function(p1) {
            console.log("Failed to retrieve.");
            console.log(p1);
            Assert.fail("Failed to retrieve object after save.");
        });
        var r = new EcRepository();
        r.selectedServer = EcEncryptedValueTest.server;
        console.log("Searching...");
        r.search("\\*encryptedType:\"" + thing.type + "\"", null, function(p1) {
            var found = false;
            for (var i = 0; i < p1.length; i++) {
                if (p1[i].shortId() == thing.shortId()) 
                    found = true;
            }
            Assert.assertTrue("Unable to find object in search. ", found);
        }, function(p1) {
            console.log("Failed to search.");
            console.log(p1);
            Assert.fail("Failed to search for object after save.");
        });
        EcIdentityManager.ids = [];
        console.log("Trying to retrieve as public...");
        EcRepository.get(encThing.shortId(), function(p1) {
            console.log("Retrieved encrypted object as public");
            if (p1.type != null && p1.type != "") 
                Assert.fail("Retrieved encrypted object as public");
        }, function(p1) {
            console.log("Access Denied");
        });
        console.log("Searching public...");
        r.search("\\*encryptedType:\"" + thing.type + "\"", null, function(p1) {
            var found = false;
            for (var i = 0; i < p1.length; i++) {
                if (p1[i].shortId() == thing.shortId()) 
                    found = true;
            }
            Assert.assertFalse("Found the encrypted Object", found);
        }, function(p1) {
            console.log("Could not find object in search");
        });
        console.log("Deleting as Public...");
        r.constructor._delete(thing, function(p1) {
            Assert.fail("Deleted the Owned Object from Repository as public");
        }, function(p1) {
            console.log("Failed to Delete the Owned Object.");
            console.log(p1);
        });
        (thing)["value"] = "Changed Value";
        var encThing2 = EcEncryptedValue.toEncryptedValue(thing, false);
        console.log("Trying to Update as Public...");
        EcRepository.save(encThing2, function(p1) {
            console.log("Saved as public.");
        }, function(p1) {
            console.log("Failed to save as public.");
            console.log(p1);
        });
        EcIdentityManager.addIdentity(newId1);
        console.log("Updating...");
        EcRepository.save(encThing2, function(p1) {
            console.log("Updated.");
        }, function(p1) {
            console.log("Failed to update.");
            console.log(p1);
            Assert.fail("Failed to update object.");
        });
        console.log("Retrieving after update...");
        EcRepository.get(encThing.shortId(), function(p1) {
            var retrieved = new EcEncryptedValue();
            retrieved.copyFrom(p1);
            Assert.assertEquals("ID Does Not Match Saved Object Name", encThing2.id, retrieved.id);
            Assert.assertTrue("Object is not Owned by the Identity that Created It", retrieved.canEdit(newId1.ppk.toPk()));
            Assert.assertEquals("Name Does Not Match Saved Object Name", (encThing2.decryptIntoObject())["value"], (retrieved.decryptIntoObject())["value"]);
            console.log("Retrieved After update");
        }, function(p1) {
            console.log("Failed to retrieve updates.");
            console.log(p1);
            Assert.fail("Failed to retrieve updated object");
        });
        console.log("Deleting...");
        r.constructor._delete(thing, function(p1) {
            console.log("Deleted the Owned Object.");
        }, function(p1) {
            console.log(p1);
            Assert.fail("Failed to Delete the Owned Object from Repository");
        });
    };
    prototype.encryptedValueTwoOwnerTest = function() {
        EcRemote.async = false;
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var ppk2 = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEowIBAAKCAQEAg2cDnkHswuKCvjpFwiXuMoHf9C0qEFupDBalvVscxg7F6qWUSxpISYznkZ/dpXwtrR6w+C5fB+KmTNRUxTl9uT4O1Z4AhJ6b9l6WGQWYlRBZZqXmJwcWnCFcOPGfbVcKHuX7AlIaend7/HC7IudfSiLTcfo6EM7k2xiygrGagW89yEe+Q9DsnruU8UkkT9J7Hzi70RVnc6ovqasqFubECNbIoiFW52AJ2EZYRFCXAAfA2Wb9Tmv170RRjsjBS8TJ+C8WSbtCWOztMnUJlJmQtbiVRnfXRFI9igR4bzpQHmOS1khln9VBo4aiosUeaLNMjs2suEia+6HdLbhZfP26cQIDAQABAoIBAEFu+9tD4t2NJCQMKo6qirn1+IrELs0kh8KwSGpJw8NQuffF6lmXxeVyWCIpJJtygeBShzefB82KbNuXZHstzNCA+awgWQuxW+LMaRwesEOSd6Jo/Hn0yqqG5kCo+YXeMPj/9wXJ0sunUkN784RHCSmGvBpmy6FxFX+RBduVC2ZmPCxsv21HXjGAUled7mzZ/6u7g2Q7nAFd72QLKK3qaLflzfCnqTYqdsIwlR8Lp8F5+FcGQUM9SGv/mdAT9U05ovVuQSB7yToe4d+vV/u+6ixk0TM4RFm7ZWYyXqpuGCy5Logo6aZYWfKWZbKJuGmgwf1przZC3euu91kKR+ui81ECgYEA8QhPYGEG+ExaQ6vQzeLlddxriAQuvfBQR7W82/6UnaBtswolNQdRQ1KeOV8MJ57pYZeZidPq7Xc2tFcrH6FYVF2h+Sxe0jpKFf9CAzqammZjR3c7ddHeif45VeGUM0kdID1baAMvLIJg0e7Q2n/PuEY3FL+5GBlkxJdQnz6r2V0CgYEAi4/ql978ac63ex0Rz898lWMYY60nrJaYBPohpf+CMQ7c/lrretbX2ZoswheVKaho/yn3fpcPnUwh7rTuTLnMjxbl5D7LWfHIA9ZyNqwGZjL525p+pSjPsN3S1NNI8tH8UQ9lMuV/xr3R6vVdZT7UiWr09MUX4DYceKAuoP4/kCUCgYBQq0VVrmOUyokTSPfTUHMXpTPgC/ZQ35MezPZucp/uuXi9iVG2k8Jg08/cx7DbudXGMeTTOjfQTivi46GtLmTPp57ENFNv7M5K2mmPhxejQU1M59zgq+LdMFakJaFiIMA8wAxNnXM2ZFRfLpx75Hby550btqcOJ8GQAkybX3BIiQKBgQCIJGUpr6m1oaTVIV9txC75H4j8Oz7XmrRDLqpCX4TmTGSCb7kExK4dpMuCrzSgRZvfRlYblEr0G/+B99f62sjU0PaD+EmwvS5rp/cUpC095v5cHlLq1Gv+UfXIDTA9R2CGxqjmxIAoJKWxOZfZGziDsOWyHM4Ut1SAy2mRPVROTQKBgD5lboXnZMpRsamgZ5Jwg4bES6npFyPsrNaeJnp6QWz0Q1Ur/dw473VafpeKUZc4/uRRWTtuwooD4x2iCRZzRYAgImyZMeISMOIy8Yt6UZh9AScXsuhOSWiUKj/c1EGjMzMvV59ZzEddXohzMysZ0V/hjVW48HG7ZOcqIAk83Et+-----END RSA PRIVATE KEY-----");
        var thing = new EcRemoteLinkedData(General.context, General.context + "/test");
        thing.generateId(EcEncryptedValueTest.server);
        (thing)["value"] = "Private Object Value";
        (thing)["name"] = "Private Object Name";
        thing.addOwner(ppk.toPk());
        thing.signWith(ppk);
        thing.addOwner(EcPk.fromPem(ppk2.toPk().toPem()));
        var encThing = EcEncryptedValue.toEncryptedValue(thing, false);
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(newId1);
        console.log("Saving...");
        EcRepository.save(encThing, function(p1) {
            console.log("Saved.");
        }, function(p1) {
            console.log("Failed to save.");
            console.log(p1);
            Assert.fail("Failed to save object.");
        });
        console.log("Retrieving as owner 1...");
        EcRepository.get(encThing.shortId(), function(p1) {
            var retrieved = new EcEncryptedValue();
            retrieved.copyFrom(p1);
            Assert.assertTrue("Object is not Owned by the Identity that Created It", retrieved.canEdit(newId1.ppk.toPk()));
            Assert.assertEquals("Value Does Not Match Saved Object Value", (encThing.decryptIntoObject())["name"], (retrieved.decryptIntoObject())["name"]);
            Assert.assertEquals("ID Does Not Match Saved Object Name", encThing.id, retrieved.id);
            Assert.assertTrue("Object does not have first owner", retrieved.hasOwner(ppk.toPk()));
            Assert.assertTrue("Object does not have second owner", retrieved.hasOwner(ppk2.toPk()));
            console.log("Retrieved Unchanged");
        }, function(p1) {
            console.log("Failed to retrieve as owner 1.");
            console.log(p1);
            Assert.fail("Failed to retrieve object as owner 1 after save.");
        });
        var r = new EcRepository();
        r.selectedServer = EcEncryptedValueTest.server;
        console.log("Searching as owner 1...");
        r.search("\\*encryptedType:\"" + thing.type + "\"", null, function(p1) {
            var found = false;
            for (var i = 0; i < p1.length; i++) {
                if (p1[i].shortId() == thing.shortId()) 
                    found = true;
            }
            Assert.assertTrue("Unable to find object in search as owner 1. ", found);
        }, function(p1) {
            console.log("Failed to search.");
            console.log(p1);
            Assert.fail("Failed to search for object as owner 1.");
        });
        var newId2 = new EcIdentity();
        newId2.ppk = ppk2;
        EcIdentityManager.ids = [];
        EcIdentityManager.addIdentity(newId2);
        console.log("Retrieving as owner 2...");
        EcRepository.get(encThing.shortId(), function(p1) {
            var retrieved = new EcEncryptedValue();
            retrieved.copyFrom(p1);
            Assert.assertTrue("Object is not Owned by the Identity that Created It", retrieved.canEdit(newId1.ppk.toPk()));
            Assert.assertEquals("Name Does Not Match Saved Object Name", (encThing.decryptIntoObject())["name"], (retrieved.decryptIntoObject())["name"]);
            Assert.assertEquals("ID Does Not Match Saved Object Name", encThing.id, retrieved.id);
            Assert.assertTrue("Object does not have first owner", retrieved.hasOwner(ppk.toPk()));
            Assert.assertTrue("Object does not have second owner", retrieved.hasOwner(ppk2.toPk()));
            console.log("Retrieved Unchanged");
        }, function(p1) {
            console.log("Failed to retrieve as owner 2.");
            console.log(p1);
            Assert.fail("Failed to retrieve object as owner 2");
        });
        console.log("Searching as owner 2...");
        r.search("\\*encryptedType:\"" + thing.type + "\"", null, function(p1) {
            var found = false;
            for (var i = 0; i < p1.length; i++) {
                if (p1[i].shortId() == thing.shortId()) 
                    found = true;
            }
            Assert.assertTrue("Unable to find object in search as owner 2. ", found);
        }, function(p1) {
            console.log("Failed to search.");
            console.log(p1);
            Assert.fail("Failed to search for object as owner 2.");
        });
        EcIdentityManager.ids = [];
        console.log("Trying to retrieve as public...");
        EcRepository.get(encThing.shortId(), function(p1) {
            console.log("Retrieved encrypted object as public");
            if (p1.type != null && !p1.type.equals("")) 
                Assert.fail("Retrieved encrypted object as public");
        }, function(p1) {
            console.log("Access Denied");
        });
        console.log("Searching public...");
        r.search("\\*encryptedType:\"" + thing.type + "\"", null, function(p1) {
            var found = false;
            for (var i = 0; i < p1.length; i++) {
                if (p1[i].shortId().equals(thing.shortId())) 
                    found = true;
            }
            Assert.assertFalse("Found the encrypted Object", found);
        }, function(p1) {
            console.log("Could not find object in search");
        });
        console.log("Deleting as Public...");
        r.constructor._delete(thing, function(p1) {
            Assert.fail("Deleted the Owned Object from Repository as public");
        }, function(p1) {
            console.log("Failed to Delete the Owned Object.");
            console.log(p1);
        });
        EcIdentityManager.addIdentity(newId2);
        (thing)["value"] = "Changed Object Value";
        var encThing2 = EcEncryptedValue.toEncryptedValue(thing, false);
        console.log("Updating as owner 2...");
        EcRepository.save(encThing, function(p1) {
            console.log("Updated as owner 2.");
        }, function(p1) {
            console.log("Failed to Update as owner2.");
            console.log(p1);
            Assert.fail("Failed to Update object as owner2.");
        });
        console.log("Retrieving after update...");
        EcRepository.get(encThing.shortId(), function(p1) {
            var retrieved = new EcEncryptedValue();
            retrieved.copyFrom(p1);
            Assert.assertTrue("Object is not Owned by the Identity that Created It", retrieved.canEdit(newId1.ppk.toPk()));
            Assert.assertEquals("Name Does Not Match Saved Object Name", (encThing.decryptIntoObject())["value"], (retrieved.decryptIntoObject())["value"]);
            Assert.assertEquals("ID Does Not Match Saved Object Name", encThing.id, retrieved.id);
            Assert.assertTrue("Object does not have first owner", retrieved.hasOwner(ppk.toPk()));
            Assert.assertTrue("Object does not have second owner", retrieved.hasOwner(ppk2.toPk()));
            console.log("Retrieved Unchanged");
        }, function(p1) {
            console.log("Failed to retrieve as owner 2 after update.");
            console.log(p1);
            Assert.fail("Failed to retrieve object as owner 2");
        });
        console.log("Deleting as owner 2...");
        r.constructor._delete(thing, function(p1) {
            console.log("Deleted the Owned Object as owner 2.");
        }, function(p1) {
            console.log(p1);
            Assert.fail("Failed to Delete the Owned Object from Repository as owner 2");
        });
    };
    prototype.encryptedValueOwnerReaderTest = function() {
        EcRemote.async = false;
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var ppk2 = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEowIBAAKCAQEAg2cDnkHswuKCvjpFwiXuMoHf9C0qEFupDBalvVscxg7F6qWUSxpISYznkZ/dpXwtrR6w+C5fB+KmTNRUxTl9uT4O1Z4AhJ6b9l6WGQWYlRBZZqXmJwcWnCFcOPGfbVcKHuX7AlIaend7/HC7IudfSiLTcfo6EM7k2xiygrGagW89yEe+Q9DsnruU8UkkT9J7Hzi70RVnc6ovqasqFubECNbIoiFW52AJ2EZYRFCXAAfA2Wb9Tmv170RRjsjBS8TJ+C8WSbtCWOztMnUJlJmQtbiVRnfXRFI9igR4bzpQHmOS1khln9VBo4aiosUeaLNMjs2suEia+6HdLbhZfP26cQIDAQABAoIBAEFu+9tD4t2NJCQMKo6qirn1+IrELs0kh8KwSGpJw8NQuffF6lmXxeVyWCIpJJtygeBShzefB82KbNuXZHstzNCA+awgWQuxW+LMaRwesEOSd6Jo/Hn0yqqG5kCo+YXeMPj/9wXJ0sunUkN784RHCSmGvBpmy6FxFX+RBduVC2ZmPCxsv21HXjGAUled7mzZ/6u7g2Q7nAFd72QLKK3qaLflzfCnqTYqdsIwlR8Lp8F5+FcGQUM9SGv/mdAT9U05ovVuQSB7yToe4d+vV/u+6ixk0TM4RFm7ZWYyXqpuGCy5Logo6aZYWfKWZbKJuGmgwf1przZC3euu91kKR+ui81ECgYEA8QhPYGEG+ExaQ6vQzeLlddxriAQuvfBQR7W82/6UnaBtswolNQdRQ1KeOV8MJ57pYZeZidPq7Xc2tFcrH6FYVF2h+Sxe0jpKFf9CAzqammZjR3c7ddHeif45VeGUM0kdID1baAMvLIJg0e7Q2n/PuEY3FL+5GBlkxJdQnz6r2V0CgYEAi4/ql978ac63ex0Rz898lWMYY60nrJaYBPohpf+CMQ7c/lrretbX2ZoswheVKaho/yn3fpcPnUwh7rTuTLnMjxbl5D7LWfHIA9ZyNqwGZjL525p+pSjPsN3S1NNI8tH8UQ9lMuV/xr3R6vVdZT7UiWr09MUX4DYceKAuoP4/kCUCgYBQq0VVrmOUyokTSPfTUHMXpTPgC/ZQ35MezPZucp/uuXi9iVG2k8Jg08/cx7DbudXGMeTTOjfQTivi46GtLmTPp57ENFNv7M5K2mmPhxejQU1M59zgq+LdMFakJaFiIMA8wAxNnXM2ZFRfLpx75Hby550btqcOJ8GQAkybX3BIiQKBgQCIJGUpr6m1oaTVIV9txC75H4j8Oz7XmrRDLqpCX4TmTGSCb7kExK4dpMuCrzSgRZvfRlYblEr0G/+B99f62sjU0PaD+EmwvS5rp/cUpC095v5cHlLq1Gv+UfXIDTA9R2CGxqjmxIAoJKWxOZfZGziDsOWyHM4Ut1SAy2mRPVROTQKBgD5lboXnZMpRsamgZ5Jwg4bES6npFyPsrNaeJnp6QWz0Q1Ur/dw473VafpeKUZc4/uRRWTtuwooD4x2iCRZzRYAgImyZMeISMOIy8Yt6UZh9AScXsuhOSWiUKj/c1EGjMzMvV59ZzEddXohzMysZ0V/hjVW48HG7ZOcqIAk83Et+-----END RSA PRIVATE KEY-----");
        var thing = new EcRemoteLinkedData(General.context, General.context + "/test");
        thing.generateId(EcEncryptedValueTest.server);
        (thing)["value"] = "Private Object Value";
        thing.addOwner(ppk.toPk());
        thing.signWith(ppk);
        var encThing = EcEncryptedValue.toEncryptedValue(thing, false);
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(newId1);
        console.log("Saving...");
        EcRepository.save(encThing, function(p1) {
            console.log("Saved.");
        }, function(p1) {
            console.log("Failed to save.");
            console.log(p1);
            Assert.fail("Failed to save object.");
        });
        console.log("Retrieving as owner ...");
        EcRepository.get(encThing.shortId(), function(p1) {
            var retrieved = new EcEncryptedValue();
            retrieved.copyFrom(p1);
            Assert.assertTrue("Object is not Owned by the Identity that Created It", retrieved.canEdit(newId1.ppk.toPk()));
            Assert.assertEquals("Value Does Not Match Saved Object Value", (encThing.decryptIntoObject())["value"], (retrieved.decryptIntoObject())["value"]);
            Assert.assertEquals("ID Does Not Match Saved Object Name", encThing.id, retrieved.id);
            Assert.assertTrue("Object does not have first owner", retrieved.hasOwner(ppk.toPk()));
            console.log("Retrieved Unchanged");
        }, function(p1) {
            console.log("Failed to retrieve as owner 1.");
            console.log(p1);
            Assert.fail("Failed to retrieve object as owner 1 after save.");
        });
        var r = new EcRepository();
        r.selectedServer = EcEncryptedValueTest.server;
        console.log("Searching as owner ...");
        r.search("\\*encryptedType:\"" + thing.type + "\"", null, function(p1) {
            var found = false;
            for (var i = 0; i < p1.length; i++) {
                if (p1[i].shortId().equals(thing.shortId())) 
                    found = true;
            }
            Assert.assertTrue("Unable to find object in search as owner. ", found);
        }, function(p1) {
            console.log("Failed to search.");
            console.log(p1);
            Assert.fail("Failed to search for object after save.");
        });
        var newId2 = new EcIdentity();
        newId2.ppk = ppk2;
        EcIdentityManager.ids = [];
        EcIdentityManager.addIdentity(newId2);
        console.log("Trying to retrieve as other user...");
        EcRepository.get(encThing.shortId(), function(p1) {
            console.log("Retrieved encrypted object as other user");
            if (p1.type != null && !p1.type.equals("")) 
                Assert.fail("Retrieved encrypted object as other user");
        }, function(p1) {
            console.log("Access Denied");
        });
        EcIdentityManager.ids = [];
        EcIdentityManager.addIdentity(newId1);
        var encThingWithReader = EcEncryptedValue.toEncryptedValue(thing, false);
        encThingWithReader.addReader(EcPk.fromPem(ppk2.toPk().toPem()));
        console.log("Adding reader...");
        EcRepository.save(encThingWithReader, function(p1) {
            console.log("Reader Added.");
        }, function(p1) {
            console.log("Failed to add reader.");
            console.log(p1);
            Assert.fail("Failed to add reader to object.");
        });
        EcIdentityManager.ids = [];
        EcIdentityManager.addIdentity(newId2);
        console.log("Retrieving as reader...");
        EcRepository.get(encThingWithReader.shortId(), function(p1) {
            if (p1.type == null || p1.type.equals("")) 
                Assert.fail("Unable to retreive object as reader");
            var retrieved = new EcEncryptedValue();
            retrieved.copyFrom(p1);
            EcIdentityManager.addIdentity(newId2);
            Assert.assertTrue("Object is not Owned by the Identity that Created It", retrieved.canEdit(newId1.ppk.toPk()));
            Assert.assertEquals("Value Does Not Match Saved Object Value", (encThingWithReader.decryptIntoObject())["value"], (retrieved.decryptIntoObject())["value"]);
            Assert.assertEquals("ID Does Not Match Saved Object Id", encThingWithReader.id, retrieved.id);
            Assert.assertTrue("Object does not have first owner", retrieved.hasOwner(ppk.toPk()));
            console.log("Retrieved as Reader");
        }, function(p1) {
            console.log("Failed to retrieve as reader");
            console.log(p1);
            Assert.fail("Failed to retrieve object as reader.");
        });
        console.log("Searching as reader...");
        r.search("\\*encryptedType:\"" + thing.type + "\"", null, function(p1) {
            var found = false;
            for (var i = 0; i < p1.length; i++) {
                if (p1[i].shortId().equals(thing.shortId())) 
                    found = true;
            }
            Assert.assertTrue("Unable to find object in search as reader ", found);
        }, function(p1) {
            console.log("Failed to search.");
            console.log(p1);
            Assert.fail("Failed to search for object after save.");
        });
        EcIdentityManager.ids = [];
        console.log("Trying to retrieve as public...");
        EcRepository.get(encThingWithReader.shortId(), function(p1) {
            console.log("Retrieved encrypted object as public");
            if (p1.type != null && !p1.type.equals("")) 
                Assert.fail("Retrieved encrypted object as public");
        }, function(p1) {
            console.log("Access Denied");
        });
        console.log("Searching public...");
        r.search("\\*encryptedType:\"" + thing.type + "\"", null, function(p1) {
            var found = false;
            for (var i = 0; i < p1.length; i++) {
                if (p1[i].shortId().equals(thing.shortId())) 
                    found = true;
            }
            Assert.assertFalse("Found the encrypted Object", found);
        }, function(p1) {
            console.log("Could not find object in search");
        });
        console.log("Deleting as Public...");
        r.constructor._delete(encThingWithReader, function(p1) {
            Assert.fail("Deleted the Owned Object from Repository as public");
        }, function(p1) {
            console.log("Failed to Delete Owned Object as public.");
            console.log(p1);
        });
        EcIdentityManager.addIdentity(newId2);
        console.log("Deleting as reader...");
        r.constructor._delete(encThingWithReader, function(p1) {
            Assert.fail("Deleted the Owned Object from Repository as reader");
        }, function(p1) {
            console.log("Failed to Delete the Object as reader.");
            console.log(p1);
        });
        EcIdentityManager.ids = [];
        EcIdentityManager.addIdentity(newId1);
        var encThingNoReader = new EcEncryptedValue();
        encThingNoReader.copyFrom(encThingWithReader);
        encThingNoReader.removeReader(EcPk.fromPem(ppk2.toPk().toPem()));
        console.log("removing reader...");
        EcRepository.save(encThingNoReader, function(p1) {
            console.log("Updated without reader.");
        }, function(p1) {
            console.log("Failed to remove reader.");
            console.log(p1);
            Assert.fail("Failed to remove reader from object.");
        });
        EcIdentityManager.ids = [];
        EcIdentityManager.addIdentity(newId2);
        console.log("Trying to retrieve as other user...");
        EcRepository.get(encThing.shortId(), function(p1) {
            console.log("Retrieved encrypted object as other user");
            if (p1.type != null && !p1.type.equals("")) 
                Assert.fail("Retrieved encrypted object as other user");
        }, function(p1) {
            console.log("Access Denied");
        });
        EcIdentityManager.ids = [];
        EcIdentityManager.addIdentity(newId1);
        console.log("Deleting...");
        r.constructor._delete(encThingNoReader, function(p1) {
            console.log("Deleted the Owned Object as owner.");
        }, function(p1) {
            console.log(p1);
            Assert.fail("Failed to Delete the Owned Object from Repository as owner");
        });
    };
}, {}, {});
var EcVersioningTest = function() {};
EcVersioningTest = stjs.extend(EcVersioningTest, null, [], function(constructor, prototype) {
    constructor.server = "http://localhost/api/";
    prototype.begin = function() {
        EcRemote.async = false;
    };
    prototype.testSaveTwoVersionsBothExist = function() {
        EcRemote.async = false;
        var r = new EcRepository();
        r.selectedServer = EcVersioningTest.server;
        var ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(newId1);
        var t = new Thing();
        t.name = "Foo";
        t.generateId(r.selectedServer);
        t.addOwner(ppk.toPk());
        EcRepository.save(t, function(p1) {
            console.log("First save OK.");
        }, function(p1) {
            Assert.fail("Couldn't save the object.");
        });
        t.name = "Foo2";
        var oldVersion = t.id;
        EcRepository.save(t, function(p1) {
            console.log("First save OK.");
        }, function(p1) {
            Assert.fail("Couldn't save the object.");
        });
        var newVersion = t.id;
        EcRepository.get(oldVersion, function(p1) {
            var t = new Thing();
            t.copyFrom(p1);
            Assert.assertEquals(t.name, "Foo");
            Assert.assertEquals(t.id, oldVersion);
        }, function(p1) {
            Assert.fail("Couldn't retrieve the old version.");
        });
        EcRepository.get(newVersion, function(p1) {
            var t = new Thing();
            t.copyFrom(p1);
            Assert.assertEquals(t.name, "Foo2");
            Assert.assertEquals(t.id, newVersion);
        }, function(p1) {
            Assert.fail("Couldn't retrieve the old version.");
        });
        r.constructor._delete(t, function(p1) {
            console.log("Deleted the thing.");
            EcRepository.get(t.shortId(), function(p1) {
                Assert.fail("Could find the thing that was supposed to be gone.");
            }, function(p1) {
                console.log("Couldn't find the deleted 'latest' -- good.");
            });
            r.search("\"" + t.shortId() + "\"", null, function(p1) {
                if (p1.length != 0) 
                    Assert.fail("Could find the thing that was supposed to be gone.");
            }, function(p1) {
                console.log("Couldn't find the deleted 'latest' -- good.");
            });
        }, function(p1) {
            Assert.fail("Couldn't delete it.");
        });
        EcRepository.get(oldVersion, function(p1) {
            var t = new Thing();
            t.copyFrom(p1);
            Assert.assertEquals(t.name, "Foo");
            Assert.assertEquals(t.id, oldVersion);
        }, function(p1) {
            Assert.fail("Couldn't retrieve the old version 2.");
        });
        EcRepository.get(newVersion, function(p1) {
            var t = new Thing();
            t.copyFrom(p1);
            Assert.assertEquals(t.name, "Foo2");
            Assert.assertEquals(t.id, newVersion);
        }, function(p1) {
            Assert.fail("Couldn't retrieve the old version 2.");
        });
    };
}, {}, {});
var EcRekeyTest = function() {};
EcRekeyTest = stjs.extend(EcRekeyTest, null, [], function(constructor, prototype) {
    constructor.server = "http://localhost/api/";
    prototype.begin = function() {
        EcRemote.async = false;
        EcRekeyTest.oldKey = EcPpk.generateKey().toPem();
        EcRekeyTest.newerKey = EcPpk.generateKey().toPem();
        EcRekeyTest.newestKey = EcPpk.generateKey().toPem();
    };
    constructor.oldKey = null;
    constructor.newerKey = null;
    constructor.newestKey = null;
    prototype.basicInMemoryForwardingTest = function() {
        EcRemote.async = false;
        EcRemoteLinkedData.forwardingTable = new Object();
        var rld = new EcRemoteLinkedData("https://cass.test", "TestObject");
        rld.addOwner(EcPpk.fromPem(EcRekeyTest.oldKey).toPk());
        var oldestData = rld.toJson();
        EcRemoteLinkedData.forwardKey(EcPpk.fromPem(EcRekeyTest.oldKey).toPk().toPem(), EcPpk.fromPem(EcRekeyTest.newerKey).toPk().toPem());
        rld.copyFrom(JSON.parse(rld.toJson()));
        Assert.assertEquals(rld.owner[0], EcPpk.fromPem(EcRekeyTest.newerKey).toPk().toPem());
        EcRemoteLinkedData.forwardKey(EcPpk.fromPem(EcRekeyTest.newerKey).toPk().toPem(), EcPpk.fromPem(EcRekeyTest.newestKey).toPk().toPem());
        rld.copyFrom(JSON.parse(rld.toJson()));
        Assert.assertEquals(rld.owner[0], EcPpk.fromPem(EcRekeyTest.newestKey).toPk().toPem());
        rld.copyFrom(JSON.parse(oldestData));
        Assert.assertEquals(rld.owner[0], EcPpk.fromPem(EcRekeyTest.newestKey).toPk().toPem());
    };
    prototype.basicRekeyRecordForwardingTest = function() {
        EcIdentityManager.ids[0] = new EcIdentity();
        EcIdentityManager.ids[0].ppk = EcPpk.fromPem(EcRekeyTest.newerKey);
        EcRemote.async = false;
        EcRemoteLinkedData.forwardingTable = new Object();
        var err = EcRekeyRequest.generateRekeyRequest(EcRekeyTest.server, EcPpk.fromPem(EcRekeyTest.oldKey), EcPpk.fromPem(EcRekeyTest.newerKey));
        EcRepository.save(err, function(s) {
            EcIdentityManager.clearIdentities();
            var repo = new EcRepository();
            repo.init(EcRekeyTest.server, function() {
                var rld = new EcRemoteLinkedData("https://cass.test", "TestObject");
                rld.addOwner(EcPpk.fromPem(EcRekeyTest.oldKey).toPk());
                rld.copyFrom(JSON.parse(rld.toJson()));
                Assert.assertEquals(rld.owner[0], EcPpk.fromPem(EcRekeyTest.newerKey).toPk().toPem());
            }, function(s) {
                Assert.fail("Could not init server. " + s);
            });
        }, function(s) {
            Assert.fail("Could not save EcRekeyRequest to server. " + s);
        });
    };
    prototype.basicRekeyRecordClientTest = function() {
        EcIdentityManager.ids[0] = new EcIdentity();
        EcIdentityManager.ids[0].ppk = EcPpk.fromPem(EcRekeyTest.newerKey);
        EcRemote.async = false;
        EcRemoteLinkedData.forwardingTable = new Object();
        var err = EcRekeyRequest.generateRekeyRequest(EcRekeyTest.server, EcPpk.fromPem(EcRekeyTest.oldKey), EcPpk.fromPem(EcRekeyTest.newerKey));
        EcRepository.save(err, function(s) {
            EcIdentityManager.clearIdentities();
            var repo = new EcRepository();
            repo.init(EcRekeyTest.server, function() {
                EcIdentityManager.ids[0] = new EcIdentity();
                EcIdentityManager.ids[0].ppk = EcPpk.fromPem(EcRekeyTest.oldKey);
                var rld = new EcRemoteLinkedData("https://cass.test", "TestObject");
                rld.generateId(EcRekeyTest.server);
                rld.addOwner(EcPpk.fromPem(EcRekeyTest.oldKey).toPk());
                EcRepository.save(rld, function(s) {
                    EcIdentityManager.clearIdentities();
                    var rld2 = EcRepository.getBlocking(rld.shortId());
                    Assert.assertEquals(rld2.owner[0], EcPpk.fromPem(EcRekeyTest.newerKey).toPk().toPem());
                }, function(s) {
                    Assert.fail("Could not save record that needs to be forwarded. " + s);
                });
            }, function(s) {
                Assert.fail("Could not init server. " + s);
            });
        }, function(s) {
            Assert.fail("Could not save EcRekeyRequest to server. " + s);
        });
    };
    prototype.basicRekeyRecordServerTest = function() {
        EcIdentityManager.ids[0] = new EcIdentity();
        EcIdentityManager.ids[0].ppk = EcPpk.fromPem(EcRekeyTest.newerKey);
        EcRemote.async = false;
        EcRemoteLinkedData.forwardingTable = new Object();
        var err = EcRekeyRequest.generateRekeyRequest(EcRekeyTest.server, EcPpk.fromPem(EcRekeyTest.oldKey), EcPpk.fromPem(EcRekeyTest.newerKey));
        EcRepository.save(err, function(s) {
            EcIdentityManager.clearIdentities();
            var repo = new EcRepository();
            repo.init(EcRekeyTest.server, function() {
                EcIdentityManager.ids[0] = new EcIdentity();
                EcIdentityManager.ids[0].ppk = EcPpk.fromPem(EcRekeyTest.oldKey);
                var rld = new EcRemoteLinkedData("https://cass.test", "TestObject");
                rld.generateId(EcRekeyTest.server);
                rld.addOwner(EcPpk.fromPem(EcRekeyTest.oldKey).toPk());
                EcEncryptedValue.encryptOnSave(rld.id, true);
                EcRepository.save(rld, function(s) {
                    EcIdentityManager.clearIdentities();
                    EcIdentityManager.ids[0] = new EcIdentity();
                    EcIdentityManager.ids[0].ppk = EcPpk.fromPem(EcRekeyTest.oldKey);
                    var rld2 = EcRepository.getBlocking(rld.shortId());
                    Assert.assertEquals("Could retreive object, shouldn't be able to.", rld2, null);
                    EcIdentityManager.clearIdentities();
                    EcIdentityManager.ids[0] = new EcIdentity();
                    EcIdentityManager.ids[0].ppk = EcPpk.fromPem(EcRekeyTest.newerKey);
                    rld2 = EcRepository.getBlocking(rld.shortId());
                    Assert.assertEquals("Should not be able to decrypt object, can(?)", EcEncryptedValue.fromEncryptedValue(rld2), null);
                    EcIdentityManager.ids[1] = new EcIdentity();
                    EcIdentityManager.ids[1].ppk = EcPpk.fromPem(EcRekeyTest.oldKey);
                    Assert.assertTrue("Should be able to decrypt object, can't", (rld2 = EcEncryptedValue.fromEncryptedValue(rld2)) != null);
                    Assert.assertEquals(rld2.owner[0], EcPpk.fromPem(EcRekeyTest.newerKey).toPk().toPem());
                }, function(s) {
                    Assert.fail("Could not save record that needs to be forwarded. " + s);
                });
            }, function(s) {
                Assert.fail("Could not init server. " + s);
            });
        }, function(s) {
            Assert.fail("Could not save EcRekeyRequest to server. " + s);
        });
    };
}, {}, {});
var OrganizationTest = function() {};
OrganizationTest = stjs.extend(OrganizationTest, null, [], function(constructor, prototype) {
    constructor.CASS_SERVER = "";
    constructor.PPK_PEM = "";
    constructor.ORG_ID = "";
    constructor.newId1 = new EcIdentity();
    constructor.repo = new EcRepository();
    prototype.setup = function() {};
    prototype.basicOrganizationUpgradeTest = function() {
        Assert.assertTrue(true);
    };
}, {newId1: "EcIdentity", repo: "EcRepository"}, {});
var EcAlignmentTest = function() {};
EcAlignmentTest = stjs.extend(EcAlignmentTest, null, [], function(constructor, prototype) {
    constructor.server = "http://localhost/api/";
    constructor.ppk = null;
    constructor.newId1 = new EcIdentity();
    constructor.repo = new EcRepository();
    constructor.sourceComp = null;
    constructor.targetComp = null;
    constructor.relation = null;
    prototype.setup = function() {
        console.log("setup");
        EcRemote.async = false;
        EcAlignmentTest.repo.selectedServer = EcAlignmentTest.server;
        EcAlignmentTest.ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        EcAlignmentTest.newId1.ppk = EcAlignmentTest.ppk;
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(EcAlignmentTest.newId1);
        EcAlignmentTest.sourceComp = new EcCompetency();
        EcAlignmentTest.sourceComp.generateId(EcAlignmentTest.server);
        EcAlignmentTest.sourceComp.name = "Source Name";
        EcAlignmentTest.sourceComp.addOwner(EcAlignmentTest.ppk.toPk());
        EcAlignmentTest.targetComp = new EcCompetency();
        EcAlignmentTest.targetComp.generateId(EcAlignmentTest.server);
        EcAlignmentTest.targetComp.name = "Target Name";
        EcAlignmentTest.targetComp.addOwner(EcAlignmentTest.ppk.toPk());
        EcAlignmentTest.relation = new EcAlignment();
        EcAlignmentTest.relation.generateId(EcAlignmentTest.server);
        EcAlignmentTest.relation.source = EcAlignmentTest.sourceComp.shortId();
        EcAlignmentTest.relation.target = EcAlignmentTest.targetComp.shortId();
        EcAlignmentTest.relation.name = "source to target relation";
        EcAlignmentTest.relation.relationType = "requires";
        EcAlignmentTest.relation.addOwner(EcAlignmentTest.ppk.toPk());
        EcAlignmentTest.relation.validFrom = new Date().toDateString();
        var end = new Date();
        end.setFullYear(2017);
        EcAlignmentTest.relation.validThrough = end.toDateString();
        EcAlignmentTest.sourceComp.save(null, function(p1) {
            Assert.fail("Failed to create Source Competency");
        }, null);
        EcAlignmentTest.targetComp.save(null, function(p1) {
            Assert.fail("Failed to create Target Competency");
        }, null);
        EcAlignmentTest.relation.save(null, function(p1) {
            Assert.fail("Failed to create Relation");
        }, null);
    };
    prototype.breakdown = function() {
        EcAlignmentTest.relation._delete(null, function(p1) {
            Assert.fail("failed to delete relation");
        });
        EcAlignmentTest.sourceComp._delete(null, function(p1) {
            Assert.fail("failed to delete source competency");
        }, null);
        EcAlignmentTest.targetComp._delete(null, function(p1) {
            Assert.fail("failed to delete target competency");
        }, null);
    };
    prototype.createAlignmentTest = function() {
        var paramObj = new Object();
        (paramObj)["size"] = 1000;
        EcAlignmentTest.repo.searchWithParams(new Relation().getSearchStringByType(), paramObj, null, function(p1) {
            for (var i = 0; i < p1.length; i++) {
                var d = p1[i];
                if (d.id == EcAlignmentTest.relation.id) {
                    return;
                }
            }
            Assert.fail("Unable to find relation after save");
        }, function(p1) {
            Assert.fail("Failed to Search for relation after save");
        });
    };
    prototype.createNoSourceAlignmentTest = function() {
        var noSource = new EcAlignment();
        noSource.generateId(EcAlignmentTest.server);
        noSource.target = EcAlignmentTest.targetComp.shortId();
        noSource.relationType = "requires";
        noSource.addOwner(EcAlignmentTest.ppk.toPk());
        noSource.save(function(p1) {
            Assert.fail("Relation Saved without source competency, shouldn't happen");
        }, null, null);
    };
    prototype.createNoTargetAlignmentTest = function() {
        var noSource = new EcAlignment();
        noSource.generateId(EcAlignmentTest.server);
        noSource.source = EcAlignmentTest.sourceComp.shortId();
        noSource.relationType = "requires";
        noSource.addOwner(EcAlignmentTest.ppk.toPk());
        noSource.save(function(p1) {
            Assert.fail("Relation Saved without target competency, shouldn't happen");
        }, null, null);
    };
    prototype.createNoTypeAlignmentTest = function() {
        var noSource = new EcAlignment();
        noSource.generateId(EcAlignmentTest.server);
        noSource.source = EcAlignmentTest.sourceComp.shortId();
        noSource.target = EcAlignmentTest.targetComp.shortId();
        noSource.addOwner(EcAlignmentTest.ppk.toPk());
        noSource.save(function(p1) {
            Assert.fail("Relation Saved without relationType field, shouldn't happen");
        }, null, null);
    };
    prototype.viewAlignmentTest = function() {
        EcRepository.get(EcAlignmentTest.relation.id, function(p1) {
            var r = new EcAlignment();
            r.copyFrom(p1);
            Assert.assertEquals(EcAlignmentTest.relation.id, r.id);
            Assert.assertEquals("Name not equal to saved name", EcAlignmentTest.relation.name, r.name);
            Assert.assertEquals("Title not equal to saved Title", EcAlignmentTest.relation.description, r.description);
            Assert.assertEquals("Source does not match source competency short Id", EcAlignmentTest.relation.source, EcAlignmentTest.sourceComp.shortId());
            Assert.assertEquals("Target does not match target competency short Id", EcAlignmentTest.relation.target, EcAlignmentTest.targetComp.shortId());
            Assert.assertEquals("validFrom does not match saved validFrom", EcAlignmentTest.relation.validFrom, r.validFrom);
            Assert.assertEquals("validThrough does not match saved validThrough", EcAlignmentTest.relation.validThrough, r.validThrough);
        }, function(p1) {
            Assert.fail("Failed to Get relation");
        });
    };
    prototype.updateAlignmentInfo = function() {
        EcAlignmentTest.relation.name = "changed relation name";
        EcAlignmentTest.relation.description = "changed description";
        EcAlignmentTest.relation.relationType = "required By";
        EcAlignmentTest.relation.validFrom = new Date().toDateString();
        var end = new Date();
        end.setFullYear(2017);
        EcAlignmentTest.relation.validThrough = end.toDateString();
        console.log("Updating Relation");
        EcAlignmentTest.relation.save(function(p1) {
            console.log("Updated Relation successfully");
        }, function(p1) {
            Assert.fail("Failed to save updated relation");
        }, null);
        console.log("Getting Relation after update");
        EcRepository.get(EcAlignmentTest.relation.id, function(p1) {
            var r = new EcAlignment();
            r.copyFrom(p1);
            Assert.assertEquals(EcAlignmentTest.relation.id, r.id);
            Assert.assertEquals("Name not equal to saved name", EcAlignmentTest.relation.name, r.name);
            Assert.assertEquals("Title not equal to saved Title", EcAlignmentTest.relation.description, r.description);
            Assert.assertEquals("validFrom does not match saved validFrom", EcAlignmentTest.relation.validFrom, r.validFrom);
            Assert.assertEquals("validThrough does not match saved validThrough", EcAlignmentTest.relation.validThrough, r.validThrough);
        }, function(p1) {
            Assert.fail("Failed to Get relation after update");
        });
    };
    prototype.updateAlignmentRemoveSource = function() {
        EcAlignmentTest.relation.source = null;
        EcAlignmentTest.relation.target = EcAlignmentTest.targetComp.shortId();
        EcAlignmentTest.relation.save(function(p1) {
            Assert.fail("Saved Relation without source, shouldn't be allowed");
        }, null, null);
    };
    prototype.updateAlignmentRemoveTarget = function() {
        EcAlignmentTest.relation.source = EcAlignmentTest.sourceComp.shortId();
        EcAlignmentTest.relation.target = null;
        EcAlignmentTest.relation.save(function(p1) {
            Assert.fail("Saved Relation without target, shouldn't be allowed");
        }, null, null);
    };
    prototype.updateAlignmentRemoveType = function() {
        EcAlignmentTest.relation.source = EcAlignmentTest.sourceComp.shortId();
        EcAlignmentTest.relation.target = EcAlignmentTest.targetComp.shortId();
        EcAlignmentTest.relation.relationType = null;
        EcAlignmentTest.relation.save(function(p1) {
            Assert.fail("Saved Relation without relation Type, shouldn't be allowed");
        }, null, null);
    };
    prototype.deleteAlignmentTest = function() {
        var toDelete = new EcAlignment();
        toDelete.generateId(EcAlignmentTest.server);
        toDelete.name = "Relation To Delete";
        toDelete.source = EcAlignmentTest.sourceComp.shortId();
        toDelete.target = EcAlignmentTest.targetComp.shortId();
        toDelete.addOwner(EcAlignmentTest.ppk.toPk());
        console.log("saving relation to delete...");
        EcRepository.save(toDelete, null, function(p1) {
            Assert.fail("Failed to save relation for delete");
        });
        console.log("deleting relation...");
        toDelete._delete(function(p1) {}, function(p1) {
            Assert.fail("Failed to delete relation");
        });
        console.log("searching for deleted relation...");
        EcAlignmentTest.repo.search("@type:\"" + toDelete.constructor.myType + "\"", null, function(p1) {
            for (var i = 0; i < p1.length; i++) {
                var d = p1[i];
                if (d.id == toDelete.id) {
                    Assert.fail("Shouldnt find relation after delete");
                }
            }
        }, function(p1) {
            Assert.fail("Failed to Search for relation after delete");
        });
    };
}, {ppk: "EcPpk", newId1: "EcIdentity", repo: "EcRepository", sourceComp: "EcCompetency", targetComp: "EcCompetency", relation: "EcAlignment"}, {});
var EcCompetencyTest = function() {};
EcCompetencyTest = stjs.extend(EcCompetencyTest, null, [], function(constructor, prototype) {
    constructor.server = "http://localhost/api/";
    constructor.ppk = null;
    constructor.newId1 = new EcIdentity();
    constructor.repo = new EcRepository();
    constructor.comp = null;
    prototype.setup = function() {
        console.log("setup");
        EcRemote.async = false;
        EcCompetencyTest.repo.selectedServer = EcCompetencyTest.server;
        EcCompetencyTest.ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        EcCompetencyTest.newId1.ppk = EcCompetencyTest.ppk;
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(EcCompetencyTest.newId1);
        EcCompetencyTest.comp = new EcCompetency();
        EcCompetencyTest.comp.generateId(EcCompetencyTest.server);
        EcCompetencyTest.comp.name = "Test Competency Name";
        EcCompetencyTest.comp.description = "Test Competency Description";
        EcCompetencyTest.comp.addOwner(EcCompetencyTest.ppk.toPk());
        EcCompetencyTest.comp.save(function(s) {
            console.log("Saved " + EcCompetencyTest.comp.id);
        }, function(p1) {
            Assert.fail("Unable to save Competency");
        }, null);
    };
    prototype.breakdown = function() {
        EcCompetencyTest.comp._delete(null, function(p1) {
            Assert.fail("Unable to delete Competency");
        }, null);
    };
    prototype.createCompetencyTest = function() {
        var paramObj = new Object();
        (paramObj)["size"] = 5000;
        EcCompetencyTest.repo.searchWithParams(new EcCompetency().getSearchStringByType(), paramObj, null, function(p1) {
            for (var i = 0; i < p1.length; i++) {
                var d = p1[i];
                if (d.id == EcCompetencyTest.comp.id) {
                    return;
                }
            }
            Assert.fail("Unable to search for competency after save");
        }, function(p1) {
            Assert.fail("Failed to Search for Competency");
        });
    };
    prototype.createNoNameCompetencyTest = function() {
        var noName = new EcCompetency();
        noName.generateId(EcCompetencyTest.server);
        noName.addOwner(EcCompetencyTest.ppk.toPk());
        noName.save(function(p1) {
            Assert.fail("Saved Competency with missing name, shouldn't happen");
        }, null, null);
    };
    prototype.viewCompetencyTest = function() {
        EcRepository.get(EcCompetencyTest.comp.id, function(p1) {
            var c = new EcCompetency();
            c.copyFrom(p1);
            Assert.assertEquals("Name not equal to saved name", c.name, EcCompetencyTest.comp.name);
            Assert.assertEquals("Description not equal to saved description", c.description, EcCompetencyTest.comp.description);
        }, function(p1) {
            Assert.fail("Failed to Get Competency");
        });
    };
    prototype.competencyAddRemoveRelationshipTest = function() {
        var comp2 = new EcCompetency();
        comp2.name = "Relation Target Competency";
        comp2.addOwner(EcCompetencyTest.ppk.toPk());
        comp2.generateId(EcCompetencyTest.server);
        comp2.save(function(p1) {}, function(p1) {
            Assert.fail("failed to save target competency");
        }, null);
        console.log("Creating Relationship..");
        var rel = EcCompetencyTest.comp.addAlignment(comp2, "requires", EcCompetencyTest.ppk, EcCompetencyTest.server, function(p1) {
            console.log("Relationship Created");
        }, function(p1) {
            Assert.fail("Failed to create relationship");
        }, null);
        console.log("finding relationships...");
        EcCompetencyTest.comp.relationships(EcCompetencyTest.repo, function(p1) {
            Assert.assertEquals(rel.id, p1.id);
            Assert.assertEquals("Relationship source does not match competency", EcCompetencyTest.comp.shortId(), p1.source);
        }, function(p1) {
            Assert.fail("failed to find relationships");
        }, function(p1) {
            if (p1.length == 0) 
                Assert.fail("Relationship does not exist in the repository");
        });
        console.log("deleting relationship...");
        EcRepository._delete(rel, function(p1) {
            console.log("finding relationships after delete...");
            EcCompetencyTest.comp.relationships(EcCompetencyTest.repo, function(p1) {
                Assert.fail("No Relationships should be found. " + p1.shortId());
            }, function(p1) {
                Assert.fail("failed to search for relationships");
            }, function(p1) {
                if (p1.length > 0) 
                    Assert.fail("Return a relationship after deleting it");
            });
        }, function(p1) {
            Assert.fail("failed to delete relationship");
        });
        comp2._delete(null, function(p1) {
            Assert.fail("failed to delete target competency");
        }, null);
    };
    prototype.competencyAddRemoveLevelTest = function() {
        console.log("Creating Level...");
        var lev = EcCompetencyTest.comp.addLevel("Level Test", "Description of level Test", EcCompetencyTest.ppk, EcCompetencyTest.server, function(p1) {
            console.log("Level Created");
        }, function(p1) {
            Assert.fail("Failed to Create Level");
        }, null);
        console.log("Finding level...");
        EcCompetencyTest.comp.levels(EcCompetencyTest.repo, function(p1) {
            Assert.assertEquals(lev.id, p1.id);
            Assert.assertEquals("Level Competency does not match competency ID", EcCompetencyTest.comp.shortId(), lev.competency);
        }, function(p1) {
            Assert.fail("Failed to Retrieve Level");
        }, function(p1) {
            if (p1.length != 1) 
                Assert.fail("Unable to find competency");
        });
        console.log("deleting level...");
        EcRepository._delete(lev, function(p1) {
            console.log("deleted level");
        }, function(p1) {
            Assert.fail("failed to delete level");
        });
        console.log("finding relationships after delete...");
        EcCompetencyTest.comp.levels(EcCompetencyTest.repo, function(p1) {
            Assert.fail("No levels should be found");
        }, function(p1) {
            Assert.fail("failed to search for levels");
        }, function(p1) {
            if (p1.length > 0) 
                Assert.fail("Returned a level after deleting it");
        });
    };
    prototype.updateCompetencyInfo = function() {
        EcCompetencyTest.comp.name = "Changed Name";
        EcCompetencyTest.comp.description = "Changed Description";
        EcCompetencyTest.comp.scope = "a scope is added!";
        console.log("Updating Competency...");
        EcCompetencyTest.comp.save(function(p1) {
            console.log("Competency Updated");
        }, function(p1) {
            Assert.fail("Failed to Update the Competency");
        }, null);
        console.log("Retrieving Competency after update...");
        EcRepository.get(EcCompetencyTest.comp.id, function(p1) {
            var c = new EcCompetency();
            c.copyFrom(p1);
            Assert.assertEquals(EcCompetencyTest.comp.id, c.id);
            Assert.assertEquals(EcCompetencyTest.comp.name, c.name);
            Assert.assertEquals(EcCompetencyTest.comp.description, c.description);
            Assert.assertEquals(EcCompetencyTest.comp.scope, c.scope);
        }, function(p1) {
            Assert.fail("Failed to Retrieve Competency after Update");
        });
    };
    prototype.deleteCompetencyTest = function() {
        var toDelete = new EcCompetency();
        toDelete.generateId(EcCompetencyTest.server);
        toDelete.name = "Competency To Delete";
        toDelete.addOwner(EcCompetencyTest.ppk.toPk());
        console.log("saving competency to delete...");
        toDelete.save(null, function(p1) {
            Assert.fail("Failed to save competency for delete");
        }, null);
        console.log("deleting competency...");
        toDelete._delete(function(p1) {}, function(p1) {
            Assert.fail("Failed to delete Competency");
        }, null);
        console.log("searching for deleted competency...");
        EcCompetencyTest.repo.search("@type:\"" + toDelete.constructor.myType + "\"", null, function(p1) {
            for (var i = 0; i < p1.length; i++) {
                var d = p1[i];
                if (d.id == toDelete.id) {
                    Assert.fail("Shouldnt find competency after delete");
                }
            }
        }, function(p1) {
            Assert.fail("Failed to Search for Competency");
        });
    };
    prototype.deleteCompetencyWithRelationshipTest = function() {
        var toDelete = new EcCompetency();
        toDelete.generateId(EcCompetencyTest.server);
        toDelete.name = "Competency To Delete";
        toDelete.addOwner(EcCompetencyTest.ppk.toPk());
        console.log("saving competency to delete...");
        toDelete.save(null, function(p1) {
            Assert.fail("Failed to save competency for delete");
        }, null);
        var comp2 = new EcCompetency();
        comp2.generateId(EcCompetencyTest.server);
        comp2.name = "target Comeptency";
        comp2.addOwner(EcCompetencyTest.ppk.toPk());
        console.log("Saving Target Competency...");
        comp2.save(null, function(p1) {
            console.log("Saved Target Competency");
        }, null);
        console.log("Creating Relationship...");
        var rel = toDelete.addAlignment(comp2, "requires", EcCompetencyTest.ppk, EcCompetencyTest.server, function(p1) {
            console.log("Created Relationship");
        }, function(p1) {
            Assert.fail("Failed to Create Relationship");
        }, null);
        console.log("Deleting Competency with Relationship...");
        toDelete._delete(function(p1) {
            console.log("Deleted Competency with Relationship");
            toDelete.relationships(EcCompetencyTest.repo, function(p1) {
                Assert.fail("No Relationships should be found");
            }, function(p1) {
                Assert.fail("failed to search for relationships");
            }, function(p1) {
                if (p1.length > 0) 
                    Assert.fail("Returned a relationship after deleting the competency");
            });
        }, function(p1) {
            Assert.fail("Failed to delete relationship Competency");
        }, EcCompetencyTest.repo);
        comp2._delete(function(p1) {}, function(p1) {
            Assert.fail("Failed to delete target Competency");
        }, null);
    };
    prototype.deleteCompetencyWithLevelTest = function() {
        var toDelete = new EcCompetency();
        toDelete.generateId(EcCompetencyTest.server);
        toDelete.name = "Competency To Delete";
        toDelete.addOwner(EcCompetencyTest.ppk.toPk());
        console.log("saving competency to delete...");
        toDelete.save(null, function(p1) {
            Assert.fail("Failed to save competency for delete");
        }, null);
        console.log("Creating Relationship...");
        var level = toDelete.addLevel("level to be deleted", "level description", EcCompetencyTest.ppk, EcCompetencyTest.server, function(p1) {
            console.log("Created Level");
        }, function(p1) {
            Assert.fail("Failed to Create Level");
        }, null);
        console.log("Deleting Competency with Level...");
        toDelete._delete(function(p1) {
            console.log("Deleted Competency with Level");
            toDelete.levels(EcCompetencyTest.repo, function(p1) {
                Assert.fail("No Relationships should be found");
            }, function(p1) {
                Assert.fail("failed to search for relationships");
            }, function(p1) {
                if (p1.length > 0) 
                    Assert.fail("Returned a relationship after deleting the competency");
            });
        }, function(p1) {
            Assert.fail("Failed to delete Level Competency");
        }, EcCompetencyTest.repo);
    };
}, {ppk: "EcPpk", newId1: "EcIdentity", repo: "EcRepository", comp: "EcCompetency"}, {});
var EcLevelTest = function() {};
EcLevelTest = stjs.extend(EcLevelTest, null, [], function(constructor, prototype) {
    constructor.server = "http://localhost/api/";
    constructor.ppk = null;
    constructor.newId1 = new EcIdentity();
    constructor.repo = new EcRepository();
    constructor.level = null;
    constructor.comp = null;
    prototype.setup = function() {
        console.log("setup");
        EcRemote.async = false;
        EcLevelTest.repo.selectedServer = EcLevelTest.server;
        EcLevelTest.ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        EcLevelTest.newId1.ppk = EcLevelTest.ppk;
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(EcLevelTest.newId1);
        EcLevelTest.level = new EcLevel();
        EcLevelTest.level.generateId(EcLevelTest.server);
        EcLevelTest.level.name = "Test Level Name";
        EcLevelTest.level.description = "Test Level Description";
        EcLevelTest.level.title = "test level Title";
        EcLevelTest.level.performance = "Performance Description";
        EcLevelTest.level.addOwner(EcLevelTest.ppk.toPk());
        EcLevelTest.comp = new EcCompetency();
        EcLevelTest.comp.name = "Level Competency";
        EcLevelTest.comp.generateId(EcLevelTest.server);
        EcLevelTest.comp.addOwner(EcLevelTest.ppk.toPk());
        EcLevelTest.comp.save(null, function(p1) {
            Assert.fail("Failed to Save Level Competency");
        }, null);
        EcLevelTest.level.competency = EcLevelTest.comp.shortId();
        EcLevelTest.level.save(null, function(p1) {
            Assert.fail("Unable to save Level");
        }, null);
    };
    prototype.breakdown = function() {
        EcLevelTest.level._delete(null, function(p1) {
            Assert.fail("Unable to delete Level");
        });
        EcLevelTest.comp._delete(null, function(p1) {
            Assert.fail("Unable to delete Level Competency");
        }, null);
    };
    prototype.createLevelTest = function() {
        EcLevelTest.repo.search(new EcLevel().getSearchStringByType() + " AND name:\"Test Level Name\"", null, function(p1) {
            for (var i = 0; i < p1.length; i++) {
                var d = p1[i];
                if (d.id == EcLevelTest.level.id) {
                    return;
                }
            }
            Assert.fail("Unable to search for level after save");
        }, function(p1) {
            Assert.fail("Failed to Search for level");
        });
    };
    prototype.createLevelNoNameTest = function() {
        var noName = new EcLevel();
        noName.generateId(EcLevelTest.server);
        noName.competency = EcLevelTest.comp.shortId();
        noName.save(function(p1) {
            Assert.fail("Level saved without name, should not happen");
        }, null, null);
    };
    prototype.createLevelNoCompetencyTest = function() {
        var noComp = new EcLevel();
        noComp.generateId(EcLevelTest.server);
        noComp.name = "Test Level Name";
        noComp.save(function(p1) {
            Assert.fail("Level saved without competency, should not happen");
        }, null, null);
    };
    prototype.viewLevelTest = function() {
        EcRepository.get(EcLevelTest.level.id, function(p1) {
            var l = new EcLevel();
            l.copyFrom(p1);
            Assert.assertEquals(EcLevelTest.level.id, l.id);
            Assert.assertEquals("Name not equal to saved name", EcLevelTest.level.name, l.name);
            Assert.assertEquals("Description not equal to saved description", EcLevelTest.level.description, l.description);
            Assert.assertEquals("Title not equal to saved Title", EcLevelTest.level.title, l.title);
            Assert.assertEquals("Performance not equal to saved Performance", EcLevelTest.level.performance, l.performance);
        }, function(p1) {
            Assert.fail("Failed to Get Competency");
        });
    };
    prototype.updateLevelInfoTest = function() {
        EcLevelTest.level.name = "Changed Name";
        EcLevelTest.level.description = "Changed Description";
        EcLevelTest.level.title = "Changed Title";
        EcLevelTest.level.performance = "Changed performance";
        console.log("Updating Level...");
        EcLevelTest.level.save(function(p1) {
            console.log("Level Updated");
        }, function(p1) {
            Assert.fail("Failed to Update the Level");
        }, null);
        console.log("Retrieving Level after update...");
        EcRepository.get(EcLevelTest.level.id, function(p1) {
            var l = new EcLevel();
            l.copyFrom(p1);
            Assert.assertEquals(EcLevelTest.level.id, l.id);
            Assert.assertEquals("Name not equal to updated name", EcLevelTest.level.name, l.name);
            Assert.assertEquals("Description not equal to updated description", EcLevelTest.level.description, l.description);
            Assert.assertEquals("Title not equal to updated Title", EcLevelTest.level.title, l.title);
            Assert.assertEquals("Performance not equal to updated Performance", EcLevelTest.level.performance, l.performance);
        }, function(p1) {
            Assert.fail("Failed to Retrieve Competency after Update");
        });
    };
    prototype.updateLevelNoNameTest = function() {
        EcLevelTest.level.name = "";
        EcLevelTest.level.competency = EcLevelTest.comp.shortId();
        console.log("Updating Level without name...");
        EcLevelTest.level.save(function(p1) {
            Assert.fail("Updated Level without name, shouldn't happen");
        }, function(p1) {
            console.log("Failed to update Level");
        }, null);
    };
    prototype.updateLevelNoCompetencyTest = function() {
        EcLevelTest.level.name = "updated name";
        EcLevelTest.level.competency = "";
        console.log("Updating Level without competency...");
        EcLevelTest.level.save(function(p1) {
            Assert.fail("Updated Level without competency, shouldn't happen");
        }, function(p1) {
            console.log("Failed to update Level");
        }, null);
    };
    prototype.deleteLevelTest = function() {
        var toDelete = new EcLevel();
        toDelete.generateId(EcLevelTest.server);
        toDelete.name = "Competency To Delete";
        toDelete.addOwner(EcLevelTest.ppk.toPk());
        toDelete.competency = EcLevelTest.comp.shortId();
        console.log("saving level to delete...");
        toDelete.save(null, function(p1) {
            Assert.fail("Failed to save level for delete");
        }, null);
        console.log("deleting level...");
        toDelete._delete(null, function(p1) {
            Assert.fail("Failed to delete Level");
        });
        console.log("searching for deleted level...");
        EcLevelTest.repo.search("@type:\"" + toDelete.constructor.myType + "\"", null, function(p1) {
            for (var i = 0; i < p1.length; i++) {
                var d = p1[i];
                if (d.id == toDelete.id) {
                    Assert.fail("Shouldnt find level after delete");
                }
            }
        }, function(p1) {
            Assert.fail("Failed to Search for level after delete");
        });
    };
}, {ppk: "EcPpk", newId1: "EcIdentity", repo: "EcRepository", level: "EcLevel", comp: "EcCompetency"}, {});
var EcAssertionTest = function() {};
EcAssertionTest = stjs.extend(EcAssertionTest, null, [], function(constructor, prototype) {
    constructor.server = "http://localhost/api/";
    constructor.ppk1 = null;
    constructor.ppk2 = null;
    constructor.ppk3 = null;
    constructor.newId1 = new EcIdentity();
    constructor.newId2 = new EcIdentity();
    constructor.newId3 = new EcIdentity();
    constructor.repo = new EcRepository();
    constructor.comp = null;
    constructor.assn = null;
    prototype.setup = function() {
        console.log("setup");
        EcRemote.async = false;
        EcAssertionTest.repo.selectedServer = EcAssertionTest.server;
        EcAssertionTest.ppk1 = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        EcAssertionTest.newId1.ppk = EcAssertionTest.ppk1;
        EcAssertionTest.ppk2 = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEowIBAAKCAQEAtjVO4W6FVf1SyCKEzwd2dKnT43dWRFes6SJeKVI+/GalNR1bxhc7UWOBZ3T2xuIo83tRot0ybFpTHMD7JAptkfP4C9YtidVyRBznQLwqExS6+0Qc39L+lefpHbi6QD24MKPZa5+FylcQJ7Olu30NIXDQd7ZOZrXkV/C4KAHVKg+CrhDPGfLp3IuQh3+ZAhRKIvP3I2MP0rUpNU5ChdjQJyro3AzBuuf92K6QBG8sfn2al0qJiNqREhusHE+SDhk+IbvISr38nmEMgwZrN1z/UrXf0ycK6hIpgTQH0SVWMxYTt4G3MLLALGTUzAM1LcmOaDwt8xAdJyS/4Y/BicsuVQIDAQABAoIBAFFV9JNPKbgb8AMk3ZIpK6iiUtK8Z8b0OFyNmejqLPGwxFi0dU40+qa3O4G6RZq8RDmEOAnyodqaa3Vvc+w/t2+qr3RhNEzN+kcLe/N6y3FfFKSrYBRN9JVoQ7ifyIx6wKj9y0VunWOYf76pQ/cwuFbQLE70E4Vn9rmG3D4Hq2ctabiIxl00h1CQ0t7EyOsneOmiMkBFjSguzJDRD8q3eFD39rpRdP913G0HsqhHEh3/nvK2rXnGHki3VEVp2TupPUyWu2RyK1liAJe8zqt0ghosu5DutBkbxdVL4e3AqmZy4yBc6sKGhg4pfyBbLumO5keZa63ynESbiDGdNw4WtKECgYEA7D197RuirwlCtWIhWKVQCzKLdKEsqzsIDQ/QtERSNJjAPGEcsNWlFUV6yPTRjtHpmN9gWTmWzaXBE9zVUMDIdWDxdyr5O11rXV0ZIjJ3GepTd9fpelOzxJhmA96LHVXS2OeyThY6T/gpl6tKLTPD2KUKVAgXUWcSnrZuHeVv8C0CgYEAxXLadIXn0AXe7zk3t2Ff78njEEPSdzLcRzG35k6NoBgUTr2rJKe8oYMS4L6NWFMfZWla1YSNCC/vINJLdbJGvSI8ttTMAs8IM2PegrW2QLS596TDqMsVbo1PfyawlmGjybvZf7zIm0lDW1qUTWgQMdealdEwn4ONmlQdpt5L58kCgYEAvjGnn2yfZmKDRXrStAar0cgIxIY6a0UkbzerZGaY9GWCZ1ob+jaXKO/+MaoAyQYxFnXIoS0fP0PSlYY2a0Q6X14EKVf8vhGxLcKVSJXuk3u3ZYX8IBMhaQb1IupZf+2nyh+HyxxUKCv4eHZcStYhN9tv3EWDWHMuZ38iWolsvKUCgYBMIgsl3vQRfBIH//IB3aQWW6wX+27N02iocv1L6oIlduNtsSiqi5rqVBYVXqQ1qGd0vPjvV5rhy0nTSAMcsM8h4m+yt76qXpX06s9DazmJHaaPXJKtJRFwfUBn8M0qTx/Oi4ZEANEBP3Cfav/AER4dedr7ZZvwBdO17DU6wIBYMQKBgCpQSniwFgW54C4OGUUBnSil/mKBo7mC8DJdOaXqLp5yjNqGGxVH78FAnkYpLpO+mbF2GUFWs8GvXY08Bt/hN2DdqIxViUqGcppr7LHxMRdEj7vGxL+ek5VdUvC8eIzeOtNBzypBBo1lSQD49c3Fg9Dc5DYa+oZSWqGOo1+InUbC-----END RSA PRIVATE KEY-----");
        EcAssertionTest.newId2.ppk = EcAssertionTest.ppk2;
        EcAssertionTest.ppk3 = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpQIBAAKCAQEAlDSpGeoXBxlIKLglcMKDtTLbiY/KZfndBfP1OQbRZTYpR2/IXAG3t5IJqHa2UzQjwNzFVPXACtLC3v/lNCorwbecol9Y3soYOrtHb6UjR8PifqnCRUqb1/wQMJ+HS3iqIa1R1R341fdPdtD/HASgcNp8kpgiSrh/wQOrsc4BD8zysu4mWA331rTLhuwTGgEovc+ua64DIHEgTqVcQy36cw8FUKtkQDSX6pZyAUKfF0aTibfxHJCLKTasITkne/FUKrp2watJ+hnUih8LsXSQzeVkOdkK1RhZjFYzqigwdWhYKy36ArEJz3bdSA/Y03wKqzUfn/bMvPTR1ACRkRc83QIDAQABAoIBAQCDbtAoczlIylr8AZLylQ5Iu3mGXUaZeSVSCjAHCszYfVfOSovdTIio+5IlHGJFF5A9kYxO9EIDVzYKndWelWeIvFTkiro9mewy6bNIh6LqGgXbXqEy4h+jQ574AAH0JGZ8x0AzSAlNd625KU+UgWXnr1uaheCjc0uY2LCDVrYKU9Bca5+mTzQzUrmrVG0U8xS1C3uVYKAGbnjHup3PEW0wXA3FPeq6YKw3BSxO3EggMPLiLTElWTVEsnZY0zBU5eXMS/e7iJvc5QgmrT4N7+rDY00ZUlcgoU51WyQmAIOrtEHqQHBAF68s3lHxHrix1y9+spaA8PYWKdxePto1gWEBAoGBAOiLXWum4v7AGNX5iLvr1rsL6h7WO6V/VqZ4JGnzDu/Ww7i1ODaAa6HX8rrNsnWFJgQH3Mkc1q81m5rnyH7q7TpEC9rC6trZhhCDfIGsxWo3+6lc6zxUVoiAyLADLfh/ND49kLivHklQIwhwfUxDVTb7SFwMJPS4fad49Ms76UbpAoGBAKMnjDx2ia4gjQghiN3aDaHYhCBn5sQ1q8xxQGcDD3Kfot9djoXpdLb2wrW9KalAaCZGROyl3DREDdJ8vKAS6LW2Hfom2bO11szjsNwkjDoyw2y4owfkRAXfN5BDIRQAPxsY+y/qtPiBPccsI68g6FhUi4VeJ8rOqHyZb/PpKTXVAoGALx/2+ZbjT17caZhc9kAvzs32TvN5OOuaQrf8ISBpeX8bQLYwwxK5PR4HCYYf0SL/djelrXfTpcQGWZj5D4dKNdGOWXHAqEMGoRgURi8d/o2DyWmUHjC1LIp0oP6z9TTKAIb3agXK7G55+v7Y1Xibrz2zBzxKzPEKPcMMUJc+iekCgYEAlwsFyPP0gj+gUOa6zqgP9sV7jISkHwGRCrPN64/pvTQMlL0INPDsHHZVy+pTp1z5DnX/WRYzxi86nKLd/VOEHLV9CxjscnLlaMlh8mvjZf2Y7g4A4E1yq/z6c5OyC9IumeeGo9WltGnxx3IVlwvgDeY3REDmldq8IJ3sBuLURAECgYEA4cA5aTnJ8EWhDSW12QVxUdgaPN6YYfpCHV42UgLbz7Zc3yT3K7aTLVJRxBPenk9Hbc3y81y1INmgRDfzkpgNgTHkfqME6AVMeCD9N6YSz+Gz4NEsfZ9W11uXoCPCywKC1iw8x2YOaq7ilAH6NQLgZO1/Om693Z4tUwn0OEZ/tcY=-----END RSA PRIVATE KEY-----");
        EcAssertionTest.newId3.ppk = EcAssertionTest.ppk3;
        EcAssertionTest.comp = new EcCompetency();
        EcAssertionTest.comp.name = "Just a Competency";
        EcAssertionTest.comp.generateId(EcAssertionTest.server);
        EcAssertionTest.comp.addOwner(EcAssertionTest.ppk1.toPk());
        EcAssertionTest.comp.save(null, function(p1) {
            Assert.fail("Failed to Save Competency");
        }, null);
    };
    prototype.breakdown = function() {
        EcAssertionTest.comp._delete(null, function(p1) {
            Assert.fail("Unable to delete Competency");
        }, null);
    };
    prototype.assertionEncryptDecryptTest = function() {
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(EcAssertionTest.newId1);
        var assn = new EcAssertion();
        var agent = EcAssertionTest.ppk1.toPk();
        var subject = EcAssertionTest.ppk2.toPk();
        var thirdParty = EcAssertionTest.ppk3.toPk();
        var assertionDate = Date.now();
        var expirationDate = Date.now() + 1000 * 60 * 60 * 24 * 30;
        assn.generateId(EcAssertionTest.server);
        assn.addOwner(agent);
        assn.setSubject(subject);
        assn.setAgent(agent);
        assn.setCompetency(EcAssertionTest.comp.id);
        assn.setConfidence(0.85);
        assn.setAssertionDate(assertionDate);
        assn.setExpirationDate(expirationDate);
        assn.setDecayFunction("t");
        assn.setNegative(false);
        var evidences = new Array();
        evidences.push("I saw them do it.");
        assn.setEvidence(evidences);
        console.log("Setup of assertion");
        console.log(assn);
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(EcAssertionTest.newId2);
        Assert.assertEquals("Subject not readable by subject.", subject.toPem(), assn.getSubject().toPem());
        Assert.assertEquals("Agent not readable by subject.", agent.toPem(), assn.getAgent().toPem());
        Assert.assertEquals("Assertion Date not readable by subject.", assertionDate, assn.getAssertionDate());
        Assert.assertEquals("Expiration Date not readable by subject.", expirationDate, assn.getExpirationDate());
        Assert.assertEquals("Evidence not readable by subject.", evidences[0], assn.getEvidence(0));
        Assert.assertEquals("Negative not readable by subject.", false, assn.getNegative());
        Assert.assertEquals("Decay Function not readable by subject.", "t", assn.getDecayFunction());
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(EcAssertionTest.newId1);
        assn.addReader(thirdParty);
        console.log("Added Third Party to assertion");
        console.log(assn);
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(EcAssertionTest.newId3);
        Assert.assertEquals("Subject not readable by third party.", subject.toPem(), assn.getSubject().toPem());
        Assert.assertEquals("Agent not readable by third party.", agent.toPem(), assn.getAgent().toPem());
        Assert.assertEquals("Assertion Date not readable by third party.", assertionDate, assn.getAssertionDate());
        Assert.assertEquals("Expiration Date not readable by third party.", expirationDate, assn.getExpirationDate());
        Assert.assertEquals("Evidence not readable by third party.", evidences[0], assn.getEvidence(0));
        Assert.assertEquals("Negative not readable by third party.", false, assn.getNegative());
        Assert.assertEquals("Decay Function not readable by third party.", "t", assn.getDecayFunction());
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(EcAssertionTest.newId1);
        assn.removeReader(thirdParty);
        console.log("Removed Third Party to assertion");
        console.log(assn);
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(EcAssertionTest.newId3);
        Assert.assertEquals("Subject readable by third party.", null, assn.getSubject());
        Assert.assertEquals("Agent readable by third party.", null, assn.getAgent());
        Assert.assertEquals("Assertion Date readable by third party.", null, assn.getAssertionDate());
        Assert.assertEquals("Expiration Date readable by third party.", null, assn.getExpirationDate());
        Assert.assertEquals("Evidence readable by third party.", null, assn.getEvidence(0));
        Assert.assertEquals("Negative readable by third party.", false, assn.getNegative());
        Assert.assertEquals("Decay Function readable by third party.", null, assn.getDecayFunction());
    };
}, {ppk1: "EcPpk", ppk2: "EcPpk", ppk3: "EcPpk", newId1: "EcIdentity", newId2: "EcIdentity", newId3: "EcIdentity", repo: "EcRepository", comp: "EcCompetency", assn: "EcAssertion"}, {});
var EcFrameworkTest = function() {};
EcFrameworkTest = stjs.extend(EcFrameworkTest, null, [], function(constructor, prototype) {
    constructor.server = "http://localhost/api/";
    constructor.ppk = null;
    constructor.newId1 = new EcIdentity();
    constructor.repo = new EcRepository();
    constructor.frameworkId = null;
    constructor.framework = null;
    constructor.comp = null;
    constructor.comp2 = null;
    constructor.level = null;
    constructor.rel = null;
    prototype.setup = function() {
        console.log("setup");
        EcRemote.async = false;
        EcFrameworkTest.frameworkId = EcFrameworkTest.server + "data/" + EcFramework.myType.replace("http://", "").replace("https://", "").replaceAll("/", ".") + "/testFramework/1";
        EcFrameworkTest.ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        EcFrameworkTest.newId1.ppk = EcFrameworkTest.ppk;
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(EcFrameworkTest.newId1);
        EcFrameworkTest.repo.selectedServer = EcFrameworkTest.server;
        EcFrameworkTest.framework = new EcFramework();
        EcFrameworkTest.framework.generateId(EcFrameworkTest.server);
        EcFrameworkTest.framework.description = "Testing framework description";
        EcFrameworkTest.framework.name = "Framework Name";
        EcFrameworkTest.frameworkId = EcFrameworkTest.framework.id;
        EcFrameworkTest.framework.addOwner(EcFrameworkTest.ppk.toPk());
        console.log("Saving Framework...");
        EcFrameworkTest.framework.save(function(p1) {
            EcFrameworkTest.frameworkId = EcFrameworkTest.framework.id;
            console.log("Framework Saved.");
        }, function(p1) {
            Assert.fail("Failed to Save Framework");
        }, null);
        EcFrameworkTest.comp = new EcCompetency();
        EcFrameworkTest.comp.generateId(EcFrameworkTest.server);
        EcFrameworkTest.comp.setName("Test Competency");
        EcFrameworkTest.comp.addOwner(EcFrameworkTest.ppk.toPk());
        console.log("Saving Competency");
        EcRepository.save(EcFrameworkTest.comp, function(p1) {}, function(p1) {
            Assert.fail("Unable to Save Competency");
        });
        EcFrameworkTest.level = new EcLevel();
        EcFrameworkTest.level.generateId(EcFrameworkTest.server);
        EcFrameworkTest.level.setName("Test Level");
        EcFrameworkTest.level.addOwner(EcFrameworkTest.ppk.toPk());
        console.log("Saving Level");
        EcRepository.save(EcFrameworkTest.level, function(p1) {}, function(p1) {
            Assert.fail("Unable to Save Level");
        });
        EcFrameworkTest.comp2 = new EcCompetency();
        EcFrameworkTest.comp2.generateId(EcFrameworkTest.server);
        EcFrameworkTest.comp2.setName("Test Competency 2");
        EcFrameworkTest.comp2.addOwner(EcFrameworkTest.ppk.toPk());
        console.log("Saving 2nd Competency");
        EcRepository.save(EcFrameworkTest.comp2, function(p1) {}, function(p1) {
            Assert.fail("Unable to Save 2nd Competency");
        });
        EcFrameworkTest.rel = new EcAlignment();
        EcFrameworkTest.rel.generateId(EcFrameworkTest.server);
        EcFrameworkTest.rel.source = EcFrameworkTest.comp.id;
        EcFrameworkTest.rel.target = EcFrameworkTest.comp2.id;
        EcFrameworkTest.rel.name = "Test Relation";
        EcFrameworkTest.rel.relationType = "requires";
        EcFrameworkTest.rel.addOwner(EcFrameworkTest.ppk.toPk());
        console.log("Saving Relation");
        EcRepository.save(EcFrameworkTest.rel, function(p1) {}, function(p1) {
            Assert.fail("Unable to Save Relation");
        });
    };
    prototype.afterTest = function() {
        EcFrameworkTest.framework._delete(null, function(p1) {
            Assert.fail("Failed to Delete Framework");
        });
        EcFrameworkTest.comp._delete(null, function(p1) {
            Assert.fail("Failed to Delete Competency");
        }, null);
        EcFrameworkTest.comp2._delete(null, function(p1) {
            Assert.fail("Failed to Delete 2nd Competency");
        }, null);
        EcRepository._delete(EcFrameworkTest.rel, null, function(p1) {
            Assert.fail("Failed to Delete Relation");
        });
        EcRepository._delete(EcFrameworkTest.level, null, function(p1) {
            Assert.fail("Failed to Delete Level");
        });
    };
    prototype.createFrameworkTest = function() {
        var paramObj = new Object();
        (paramObj)["size"] = 1000;
        EcFrameworkTest.repo.searchWithParams(new EcFramework().getSearchStringByType(), paramObj, null, function(p1) {
            for (var i = 0; i < p1.length; i++) {
                var d = p1[i];
                if (d.id == EcFrameworkTest.framework.id) {
                    return;
                }
            }
            Assert.fail("Unable to search for framework after save");
        }, function(p1) {
            Assert.fail("Failed to Search for Framework");
        });
    };
    prototype.createNoNameFrameworkTest = function() {
        var noName = new EcFramework();
        noName.generateId(EcFrameworkTest.server);
        noName.save(function(p1) {
            Assert.fail("No Name Framework saved, should not be able to save a framework without a name");
        }, function(p1) {
            console.log("Failed to save a Framework without a name");
        }, null);
    };
    prototype.viewFrameworkTest = function() {
        EcRepository.get(EcFrameworkTest.framework.id, function(p1) {
            var f = p1;
            Assert.assertEquals("Name does not match saved name", EcFrameworkTest.framework.name, f.name);
            Assert.assertEquals("Description does not match saved description", EcFrameworkTest.framework.description, f.description);
        }, function(p1) {
            Assert.fail("Unable to Retreive Framework");
        });
    };
    prototype.updateFrameworkInfoTest = function() {
        var editedFramework = new EcFramework();
        editedFramework.copyFrom(EcFrameworkTest.framework);
        editedFramework.name = "Updated Name";
        editedFramework.description = "Updated Description";
        console.log("Updating Framework...");
        editedFramework.save(function(p1) {
            console.log("Framework Updated.");
        }, function(p1) {
            Assert.fail("Failed to update Framework");
        }, null);
        EcRepository.get(editedFramework.id, function(p1) {
            var f = p1;
            Assert.assertEquals("Name does not match updated name", editedFramework.name, f.name);
            Assert.assertEquals("Description does not match updated description", editedFramework.description, f.description);
        }, function(p1) {
            Assert.fail("Unable to Retreive Framework after update");
        });
    };
    prototype.updateFrameworkNoNameTest = function() {
        var editedFramework = new EcFramework();
        editedFramework.copyFrom(EcFrameworkTest.framework);
        editedFramework.name = "";
        editedFramework.description = "Updated Description";
        console.log("Updating Framework...");
        editedFramework.save(function(p1) {
            Assert.fail("Saved Framework with no name, this shouldnt be allowed");
        }, function(p1) {
            console.log("Failed to update framework with no name");
        }, null);
        EcRepository.get(editedFramework.id, function(p1) {
            var f = p1;
            Assert.assertNotSame("Name should not be empty", editedFramework.name, f.name);
        }, function(p1) {
            Assert.fail("Unable to Retreive Framework after update");
        });
    };
    prototype.updateFrameworkAddRemoveCompetencyTest = function() {
        var editedFramework = new EcFramework();
        editedFramework.copyFrom(EcFrameworkTest.framework);
        editedFramework.addCompetency(EcFrameworkTest.comp.id);
        console.log("Adding Competency to Framework...");
        editedFramework.save(function(p1) {
            console.log("Framework Updated.");
        }, function(p1) {
            Assert.fail("Failed to add competency to Framework");
        }, null);
        EcRepository.get(editedFramework.id, function(p1) {
            var f = p1;
            if (f.competency.indexOf(EcFrameworkTest.comp.shortId()) != -1) 
                return;
            Assert.fail("Unable to find competency in framework");
        }, function(p1) {
            Assert.fail("Unable to Retreive Framework after update");
        });
        var frameworkCompRemoved = new EcFramework();
        frameworkCompRemoved.copyFrom(editedFramework);
        frameworkCompRemoved.removeCompetency(EcFrameworkTest.comp.id, null, null);
        console.log("Updating Framework...");
        frameworkCompRemoved.save(function(p1) {
            console.log("Framework Updated.");
        }, function(p1) {
            Assert.fail("Failed to Remove Competency from Framework");
        }, null);
        EcRepository.get(frameworkCompRemoved.id, function(p1) {
            var f = p1;
            if (f.competency.indexOf(EcFrameworkTest.comp.id) == -1) 
                return;
            Assert.fail("Competency not removed from framework");
        }, function(p1) {
            Assert.fail("Unable to Retreive Framework after update");
        });
    };
    prototype.updateFrameworkRemoveNonCompetencyTest = function() {
        var frameworkCompRemoved = new EcFramework();
        frameworkCompRemoved.copyFrom(EcFrameworkTest.framework);
        var compSize = EcFrameworkTest.framework.competency == null ? 0 : frameworkCompRemoved.competency.length;
        frameworkCompRemoved.removeCompetency(EcFrameworkTest.comp.id, null, null);
        console.log("Updating Framework...");
        frameworkCompRemoved.save(function(p1) {
            console.log("Framework Updated.");
        }, function(p1) {
            Assert.fail("Failed to Remove Competency from Framework");
        }, null);
        EcRepository.get(frameworkCompRemoved.id, function(p1) {
            var f = p1;
            if ((f.competency == null && compSize == 0) || f.competency.length == compSize) 
                return;
            Assert.fail("Competency array size did not remain unchanged");
        }, function(p1) {
            Assert.fail("Unable to Retreive Framework after update");
        });
    };
    prototype.updateFrameworkAddRemoveLevelTest = function() {
        var editedFramework = new EcFramework();
        editedFramework.copyFrom(EcFrameworkTest.framework);
        editedFramework.addLevel(EcFrameworkTest.level.id);
        console.log("Adding Level to Framework...");
        editedFramework.save(function(p1) {
            console.log("Framework Updated.");
        }, function(p1) {
            Assert.fail("Failed to add level to Framework");
        }, null);
        EcRepository.get(editedFramework.id, function(p1) {
            var f = p1;
            if (f.level.indexOf(EcFrameworkTest.level.shortId()) != -1) 
                return;
            Assert.fail("Unable to find level in framework");
        }, function(p1) {
            Assert.fail("Unable to Retreive Framework after update");
        });
        var frameworkLevelRemoved = new EcFramework();
        frameworkLevelRemoved.copyFrom(editedFramework);
        frameworkLevelRemoved.removeLevel(EcFrameworkTest.level.id);
        console.log("Updating Framework...");
        frameworkLevelRemoved.save(function(p1) {
            console.log("Framework Updated.");
        }, function(p1) {
            Assert.fail("Failed to Remove Level from Framework");
        }, null);
        EcRepository.get(frameworkLevelRemoved.id, function(p1) {
            var f = p1;
            if (f.level.indexOf(EcFrameworkTest.level.id) == -1) 
                return;
            Assert.fail("Level not removed from framework");
        }, function(p1) {
            Assert.fail("Unable to Retreive Framework after update");
        });
    };
    prototype.updateFrameworkRemoveNonLevelTest = function() {
        var frameworkCompRemoved = new EcFramework();
        frameworkCompRemoved.copyFrom(EcFrameworkTest.framework);
        var levelSize = EcFrameworkTest.framework.level == null ? 0 : frameworkCompRemoved.level.length;
        frameworkCompRemoved.removeLevel(EcFrameworkTest.level.id);
        console.log("Updating Framework...");
        frameworkCompRemoved.save(function(p1) {
            console.log("Framework Updated.");
        }, function(p1) {
            Assert.fail("Failed to Remove Competency from Framework");
        }, null);
        EcRepository.get(frameworkCompRemoved.id, function(p1) {
            var f = p1;
            if ((f.level == null && levelSize == 0) || f.level.length == levelSize) 
                return;
            Assert.fail("Level array size did not remain unchanged");
        }, function(p1) {
            Assert.fail("Unable to Retreive Framework after update");
        });
    };
    prototype.updateFrameworkAddRemoveRelationTest = function() {
        var editedFramework = new EcFramework();
        editedFramework.copyFrom(EcFrameworkTest.framework);
        editedFramework.addRelation(EcFrameworkTest.rel.id);
        console.log("Adding Level to Framework...");
        editedFramework.save(function(p1) {
            console.log("Framework Updated.");
        }, function(p1) {
            Assert.fail("Failed to add relation to Framework");
        }, null);
        EcRepository.get(editedFramework.id, function(p1) {
            var f = p1;
            if (f.relation.indexOf(EcFrameworkTest.rel.shortId()) != -1) 
                return;
            Assert.fail("Unable to find relation in framework");
        }, function(p1) {
            Assert.fail("Unable to Retreive Framework after update");
        });
        var frameworkRelationRemoved = new EcFramework();
        frameworkRelationRemoved.copyFrom(editedFramework);
        frameworkRelationRemoved.removeRelation(EcFrameworkTest.rel.id);
        console.log("Updating Framework...");
        frameworkRelationRemoved.save(function(p1) {
            console.log("Framework Updated.");
        }, function(p1) {
            Assert.fail("Failed to Remove relation from Framework");
        }, null);
        EcRepository.get(frameworkRelationRemoved.id, function(p1) {
            var f = p1;
            if (f.relation.indexOf(EcFrameworkTest.rel.id) == -1) 
                return;
            Assert.fail("relation not removed from framework");
        }, function(p1) {
            Assert.fail("Unable to Retreive Framework after update");
        });
    };
    prototype.updateFrameworkRemoveNonRelationTest = function() {
        var frameworkCompRemoved = new EcFramework();
        frameworkCompRemoved.copyFrom(EcFrameworkTest.framework);
        var relSize = EcFrameworkTest.framework.relation == null ? 0 : frameworkCompRemoved.relation.length;
        frameworkCompRemoved.removeRelation(EcFrameworkTest.rel.id);
        console.log("Updating Framework...");
        frameworkCompRemoved.save(function(p1) {
            console.log("Framework Updated.");
        }, function(p1) {
            Assert.fail("Failed to Remove Competency from Framework");
        }, null);
        EcRepository.get(frameworkCompRemoved.id, function(p1) {
            var f = p1;
            if ((f.relation == null && relSize == 0) || f.relation.length == relSize) 
                return;
            Assert.fail("Level array size did not remain unchanged");
        }, function(p1) {
            Assert.fail("Unable to Retreive Framework after update");
        });
    };
    prototype.deleteFramework = function() {
        var toDelete = new EcFramework();
        toDelete.generateId(EcFrameworkTest.server);
        toDelete.name = "Framework to Delete";
        toDelete.addOwner(EcFrameworkTest.ppk.toPk());
        console.log("Saving Framework to Delete");
        toDelete.save(function(p1) {
            console.log("Framework Saved.");
        }, function(p1) {
            Assert.fail("Failed to Save Framework");
        }, null);
        console.log("Deleting Framework...");
        toDelete._delete(function(p1) {
            console.log("Successfully deleted Framework");
        }, function(p1) {
            Assert.fail("Unable to Delete Framework");
        });
        EcRepository.get(toDelete.shortId(), function(p1) {
            if ((p1.context != "" && p1.context != null) || (p1.type != "" && p1.type != null)) 
                Assert.fail("Shouldn't be able to Retreive Framework after delete");
        }, null);
    };
}, {ppk: "EcPpk", newId1: "EcIdentity", repo: "EcRepository", framework: "EcFramework", comp: "EcCompetency", comp2: "EcCompetency", level: "EcLevel", rel: "EcAlignment"}, {});
var ProfileProcessorTest = function() {};
ProfileProcessorTest = stjs.extend(ProfileProcessorTest, null, [], function(constructor, prototype) {
    constructor.SANDBOX_SERVER = "https://sandbox.cassproject.org/api/";
    constructor.JILL_DABOSS_PPK_PEM = "xxx";
    constructor.SAMANTHA_SMITH_PPK_PEM = "xxx";
    constructor.SAMANTHA_SMITH_PK_PEM = "xxx";
    constructor.SELECTED_SERVER = ProfileProcessorTest.SANDBOX_SERVER;
    constructor.TEST_END_USER_PPK_PEM = ProfileProcessorTest.JILL_DABOSS_PPK_PEM;
    constructor.CAP_DBS_FWK_ID = "https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Framework/fd992893-1d5a-432f-ba24-d88d20d44f50";
    constructor.CAP_PL_FWK_ID = "https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Framework/6c297f8e-8e94-47e7-b298-1104b2652361";
    constructor.FWK_GRPH_PERF_TEST_ID = ProfileProcessorTest.CAP_PL_FWK_ID;
    prototype.capFrameworkGraphPerfTest = function() {
        Assert.assertSame(true, true);
    };
    prototype.samanthaSmithProfileTest = function() {
        Assert.assertSame(true, true);
    };
}, {}, {});
var FrameworkCollapserTest = function() {};
FrameworkCollapserTest = stjs.extend(FrameworkCollapserTest, null, [], function(constructor, prototype) {
    constructor.SANDBOX_SERVER = "https://sandbox.cassproject.org/api/";
    constructor.JILL_DABOSS_PPK_PEM = "xxx";
    constructor.SELECTED_SERVER = FrameworkCollapserTest.SANDBOX_SERVER;
    constructor.TEST_END_USER_PPK_PEM = FrameworkCollapserTest.JILL_DABOSS_PPK_PEM;
    constructor.CAP_DBS_FWK_ID = "https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Framework/fd992893-1d5a-432f-ba24-d88d20d44f50";
    constructor.CAP_PL_FWK_ID = "https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Framework/6c297f8e-8e94-47e7-b298-1104b2652361";
    constructor.FWK_GRPH_PERF_TEST_ID = FrameworkCollapserTest.CAP_PL_FWK_ID;
    prototype.FRAMEWORK_ID = "https://sandbox.service.cassproject.org/data/schema.cassproject.org.0.3.Framework/ef23be65-b99e-44c6-93e6-1fdeacf1bbe2";
    prototype.repo = null;
    prototype.urlArray = null;
    prototype.capFrameworkCollapseTest = function() {
        Assert.assertSame(true, true);
    };
    prototype.basicFrameworkCollapseTest = function() {
        EcRemote.async = false;
        console.log("start basicFrameworkCollapseTest:");
        try {
            this.repo = new EcRepository();
            this.repo.selectedServer = "https://sandbox.cassproject.org/api/";
            var fct = this;
            var framework = EcFramework.getBlocking(this.FRAMEWORK_ID);
            console.log("Framework: " + framework.name);
            var fc = new FrameworkCollapser();
            fc.collapseFramework(this.repo, framework, true, function(fwId, npg) {
                console.log("--================ FRAMEWORK COLLAPSED GRAPH ================--");
                console.log(npg.toStringGraphAll());
            }, function(err) {
                console.log("collapseFramework Failure: " + err);
            });
        }catch (e) {
            console.log("Exception: " + e.toString());
        }
        Assert.assertSame(true, true);
        console.log("end basicFrameworkCollapseTest");
    };
    prototype.basicAssertionSearchTest = function() {
        EcRemote.async = false;
        console.log("start basicCollapseTest:");
        try {
            this.repo = new EcRepository();
            this.repo.selectedServer = "https://sandbox.cassproject.org/api/";
            EcAssertion.search(this.repo, null, function(eca) {
                console.log("Success: " + eca.length);
            }, function(err) {
                console.log("Failure: " + err);
            }, null);
        }catch (e) {
            console.log("Exception: " + e.toString());
        }
        Assert.assertSame(true, true);
        console.log("end basicCollapseTest TEST");
    };
    prototype.basicMultiGetTest = function() {
        EcRemote.async = false;
        console.log("start basicCollapseTest:");
        try {
            this.repo = new EcRepository();
            this.repo.selectedServer = "https://sandbox.cassproject.org/api/";
            this.urlArray = new Array();
            this.urlArray.push("https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Competency/5f1e58d5-1073-4381-b6e6-e4943d35606a");
            this.urlArray.push("https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Competency/23d8e2cb-2af7-4e3a-bdb8-392d18f625d8");
            this.urlArray.push("https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Relation/c275ee4d-f831-46a6-bd52-3e9a5892bf98");
            this.urlArray.push("https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Relation/67b68aa4-1156-443d-8c92-2636ca1eb129");
            this.urlArray.push("https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Relation/9bc16b74-dd96-4ba7-b0a4-038e6edb4f50");
            var fct = this;
            this.repo.multiget(this.urlArray, function(rlda) {
                var rld;
                for (var i = 0; i < rlda.length; i++) {
                    rld = rlda[i];
                    if ("competency".equals(rld.type.toLowerCase())) {
                        console.log("rlda[" + i + "]: " + rld.type + " - " + rld.shortId() + " - " + (rld).name);
                    } else {
                        console.log("rlda[" + i + "]: " + rld.type + " - " + rld.shortId() + " - " + (rld).source + " " + (rld).relationType + " " + (rld).target);
                    }
                }
            }, function(err) {
                console.log("Failure: " + err);
            });
        }catch (e) {
            console.log("Exception: " + e.toString());
        }
        Assert.assertSame(true, true);
        console.log("end basicCollapseTest TEST");
    };
}, {repo: "EcRepository", urlArray: {name: "Array", arguments: [null]}}, {});
var CollapserTest = function() {};
CollapserTest = stjs.extend(CollapserTest, null, [], function(constructor, prototype) {
    prototype.basicCollapseTest = function() {
        console.log("start basicCollapseTest:");
        try {
            var graph1 = this.buildTest2();
            console.log("--================ INPUT GRAPH ================--");
            console.log(graph1.toStringGraphByNode());
            var cgc = new CyclicGraphCollapser();
            var npg = cgc.collapseGraph(graph1);
            if (npg == null) 
                console.log("COLLAPSED GRAPH IS NULL!!!");
             else {
                console.log("--================ COLLAPSED GRAPH ================--");
                console.log(npg.toStringGraphAll());
            }
        }catch (e) {
            console.log("Exception: " + e.toString());
        }
        Assert.assertSame(true, true);
        console.log("end basicCollapseTest");
    };
    prototype.buildTest0 = function() {
        var graph = new NodeGraph();
        var nodeA = new Node("A");
        var nodeB = new Node("B");
        var nodeC = new Node("C");
        graph.addNode(nodeA);
        graph.addNode(nodeB);
        graph.addNode(nodeC);
        graph.addRelation(nodeA, nodeB, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeB, nodeC, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeC, nodeA, RelationType.RELATION_TYPE.NARROWS);
        graph.createImpliedRelations();
        return graph;
    };
    prototype.buildTest1 = function() {
        var graph = new NodeGraph();
        var nodeA = new Node("A");
        var nodeB = new Node("B");
        var nodeC = new Node("C");
        var nodeD = new Node("D");
        var nodeE = new Node("E");
        graph.addNode(nodeA);
        graph.addNode(nodeB);
        graph.addNode(nodeC);
        graph.addNode(nodeD);
        graph.addNode(nodeE);
        graph.addRelation(nodeA, nodeB, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeB, nodeC, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeC, nodeD, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeD, nodeB, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeC, nodeE, RelationType.RELATION_TYPE.NARROWS);
        graph.createImpliedRelations();
        return graph;
    };
    prototype.buildTest2 = function() {
        var graph = new NodeGraph();
        var nodeA = new Node("A");
        var nodeB = new Node("B");
        var nodeC = new Node("C");
        var nodeD = new Node("D");
        var nodeE = new Node("E");
        var nodeF = new Node("F");
        var nodeG = new Node("G");
        graph.addNode(nodeA);
        graph.addNode(nodeB);
        graph.addNode(nodeC);
        graph.addNode(nodeD);
        graph.addNode(nodeE);
        graph.addNode(nodeF);
        graph.addNode(nodeG);
        graph.addRelation(nodeA, nodeB, RelationType.RELATION_TYPE.IS_EQUIVALENT_TO);
        graph.addRelation(nodeB, nodeC, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeC, nodeD, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeD, nodeF, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeF, nodeB, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeD, nodeE, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeE, nodeG, RelationType.RELATION_TYPE.REQUIRES);
        graph.createImpliedRelations();
        return graph;
    };
    prototype.buildTest3 = function() {
        var graph = new NodeGraph();
        var nodeA = new Node("A");
        var nodeB = new Node("B");
        var nodeC = new Node("C");
        var nodeD = new Node("D");
        var nodeE = new Node("E");
        var nodeF = new Node("F");
        var nodeG = new Node("G");
        var nodeH = new Node("H");
        var nodeI = new Node("I");
        graph.addNode(nodeA);
        graph.addNode(nodeB);
        graph.addNode(nodeC);
        graph.addNode(nodeD);
        graph.addNode(nodeE);
        graph.addNode(nodeF);
        graph.addNode(nodeG);
        graph.addNode(nodeH);
        graph.addNode(nodeI);
        graph.addRelation(nodeA, nodeB, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeB, nodeC, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeC, nodeD, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeD, nodeI, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeI, nodeB, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeD, nodeE, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeE, nodeF, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeF, nodeG, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeG, nodeH, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeH, nodeE, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.createImpliedRelations();
        return graph;
    };
    prototype.buildTest4 = function() {
        var graph = new NodeGraph();
        var nodeA = new Node("A");
        var nodeB = new Node("B");
        var nodeC = new Node("C");
        var nodeD = new Node("D");
        var nodeE = new Node("E");
        var nodeF = new Node("F");
        var nodeG = new Node("G");
        var nodeH = new Node("H");
        var nodeI = new Node("I");
        graph.addNode(nodeA);
        graph.addNode(nodeB);
        graph.addNode(nodeC);
        graph.addNode(nodeD);
        graph.addNode(nodeE);
        graph.addNode(nodeF);
        graph.addNode(nodeG);
        graph.addNode(nodeH);
        graph.addNode(nodeI);
        graph.addRelation(nodeD, nodeE, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeA, nodeB, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeB, nodeC, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeF, nodeG, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeG, nodeH, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeI, nodeB, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeE, nodeF, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeC, nodeD, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeD, nodeI, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeH, nodeE, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeG, nodeB, RelationType.RELATION_TYPE.NARROWS);
        graph.createImpliedRelations();
        return graph;
    };
    prototype.buildTest5 = function() {
        var graph = new NodeGraph();
        var nodeA = new Node("A");
        var nodeB = new Node("B");
        var nodeC = new Node("C");
        var nodeD = new Node("D");
        var nodeE = new Node("E");
        var nodeF = new Node("F");
        var nodeG = new Node("G");
        var nodeH = new Node("H");
        var nodeI = new Node("I");
        graph.addNode(nodeA);
        graph.addNode(nodeB);
        graph.addNode(nodeC);
        graph.addNode(nodeD);
        graph.addNode(nodeE);
        graph.addNode(nodeF);
        graph.addNode(nodeG);
        graph.addNode(nodeH);
        graph.addNode(nodeI);
        graph.addRelation(nodeA, nodeB, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeB, nodeC, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeC, nodeD, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeD, nodeI, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeI, nodeB, RelationType.RELATION_TYPE.BROADENS);
        graph.addRelation(nodeD, nodeE, RelationType.RELATION_TYPE.BROADENS);
        graph.addRelation(nodeE, nodeF, RelationType.RELATION_TYPE.BROADENS);
        graph.addRelation(nodeF, nodeG, RelationType.RELATION_TYPE.BROADENS);
        graph.addRelation(nodeG, nodeH, RelationType.RELATION_TYPE.REQUIRES);
        graph.addRelation(nodeH, nodeE, RelationType.RELATION_TYPE.NARROWS);
        graph.createImpliedRelations();
        return graph;
    };
    prototype.buildTest6 = function() {
        var graph = new NodeGraph();
        var nodeA = new Node("A");
        var nodeB = new Node("B");
        var nodeC = new Node("C");
        var nodeD = new Node("D");
        var nodeE = new Node("E");
        var nodeF = new Node("F");
        var nodeG = new Node("G");
        var nodeH = new Node("H");
        var nodeI = new Node("I");
        graph.addNode(nodeA);
        graph.addNode(nodeB);
        graph.addNode(nodeC);
        graph.addNode(nodeD);
        graph.addNode(nodeE);
        graph.addNode(nodeF);
        graph.addNode(nodeG);
        graph.addNode(nodeH);
        graph.addNode(nodeI);
        graph.addRelation(nodeA, nodeB, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeB, nodeC, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeC, nodeD, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeD, nodeI, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeI, nodeB, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeD, nodeE, RelationType.RELATION_TYPE.REQUIRES);
        graph.addRelation(nodeE, nodeF, RelationType.RELATION_TYPE.BROADENS);
        graph.addRelation(nodeF, nodeG, RelationType.RELATION_TYPE.BROADENS);
        graph.addRelation(nodeG, nodeH, RelationType.RELATION_TYPE.REQUIRES);
        graph.addRelation(nodeH, nodeE, RelationType.RELATION_TYPE.REQUIRES);
        graph.createImpliedRelations();
        return graph;
    };
    prototype.buildTest7 = function() {
        var graph = new NodeGraph();
        var nodeA = new Node("A");
        var nodeB = new Node("B");
        var nodeC = new Node("C");
        var nodeD = new Node("D");
        var nodeE = new Node("E");
        var nodeF = new Node("F");
        graph.addNode(nodeA);
        graph.addNode(nodeB);
        graph.addNode(nodeC);
        graph.addNode(nodeD);
        graph.addNode(nodeE);
        graph.addNode(nodeF);
        graph.addRelation(nodeA, nodeB, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeB, nodeC, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeC, nodeD, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeD, nodeB, RelationType.RELATION_TYPE.IS_REQUIRED_BY);
        graph.addRelation(nodeB, nodeF, RelationType.RELATION_TYPE.BROADENS);
        graph.addRelation(nodeF, nodeE, RelationType.RELATION_TYPE.REQUIRES);
        graph.addRelation(nodeE, nodeB, RelationType.RELATION_TYPE.REQUIRES);
        graph.createImpliedRelations();
        return graph;
    };
}, {}, {});
var EvidenceProcessingTestBase = function() {};
EvidenceProcessingTestBase = stjs.extend(EvidenceProcessingTestBase, null, [], function(constructor, prototype) {
    prototype.ask = null;
    prototype.repo = null;
    prototype.failure = null;
    prototype.logObject = null;
    prototype.newId1 = null;
    constructor.deleteById = function(id) {
        EcRepository.get(id, function(p1) {
            EcRepository._delete(p1, null, function(p1) {
                console.log(p1);
            });
        }, function(p1) {
            console.log(p1);
        });
    };
    prototype.setup = function() {
        EcRemote.async = false;
        this.failure = function(p1) {
            console.log(p1);
            Assert.fail();
        };
        this.logObject = function(p1) {
            console.log(p1);
        };
        this.ask = function(param1) {
            console.log(param1);
            return null;
        };
        this.repo = new EcRepository();
        this.repo.selectedServer = "http://localhost/api/";
        this.newId1 = new EcIdentity();
        this.newId1.ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(this.newId1);
    };
    prototype.newAssertion = function(competencyToAssert) {
        var a = new EcAssertion();
        a.generateId(this.repo.selectedServer);
        a.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        a.addReader(EcIdentityManager.ids[0].ppk.toPk());
        a.setSubject(EcIdentityManager.ids[0].ppk.toPk());
        a.setAgent(EcIdentityManager.ids[0].ppk.toPk());
        a.setCompetency(competencyToAssert.shortId());
        a.setConfidence(1.0);
        a.setAssertionDate(stjs.trunc(new Date().getTime()));
        a.setExpirationDate(stjs.trunc((new Date().getTime())) + 1000 * 60 * 60);
        a.setDecayFunction("t");
        a.save(null, this.failure, this.repo);
        return a;
    };
    prototype.newFalseAssertion = function(competencyToAssert) {
        var a = new EcAssertion();
        a.generateId(this.repo.selectedServer);
        a.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        a.setSubject(EcIdentityManager.ids[0].ppk.toPk());
        a.addReader(EcIdentityManager.ids[0].ppk.toPk());
        a.setAgent(EcIdentityManager.ids[0].ppk.toPk());
        a.setCompetency(competencyToAssert.shortId());
        a.setConfidence(1.0);
        a.setNegative(true);
        a.setAssertionDate(stjs.trunc(new Date().getTime()));
        a.setExpirationDate(stjs.trunc((new Date().getTime())) + 1000 * 60 * 60);
        a.setDecayFunction("t");
        a.save(null, this.failure, this.repo);
        return a;
    };
    prototype.newCompetency = function(competencyName) {
        var competency = new EcCompetency();
        competency.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        competency.name = competencyName;
        competency.generateId(this.repo.selectedServer);
        competency.save(null, this.failure, this.repo);
        return competency;
    };
    prototype.newRollupRule = function(competency, rule) {
        var rr = new EcRollupRule();
        rr.competency = competency.shortId();
        rr.rule = rule;
        rr.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        rr.generateId(this.repo.selectedServer);
        rr.save(null, this.failure, this.repo);
        return rr;
    };
    prototype.newRelation = function(c, c2, relationType) {
        var r = new EcAlignment();
        r.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        r.generateId(this.repo.selectedServer);
        r.relationType = relationType;
        r.source = c.shortId();
        r.target = c2.shortId();
        r.save(null, this.failure, this.repo);
        return r;
    };
    prototype.performTest = function(context, target, isTest) {
        var ep = new PessimisticQuadnaryAssertionProcessor();
        ep.logFunction = this.logObject;
        ep.repositories.push(this.repo);
        var subject = new Array();
        subject.push(EcIdentityManager.ids[0].ppk.toPk());
        var additionalSignatures = null;
        ep.has(subject, target, null, context, additionalSignatures, isTest, this.ask, this.failure);
    };
    prototype.newFramework = function(frameworkName) {
        var framework = new EcFramework();
        framework.name = frameworkName;
        framework.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        framework.generateId(this.repo.selectedServer);
        framework.save(null, this.failure, this.repo);
        return framework;
    };
}, {ask: {name: "Function1", arguments: [null, null]}, repo: "EcRepository", failure: {name: "Callback1", arguments: [null]}, logObject: {name: "Callback1", arguments: ["Object"]}, newId1: "EcIdentity"}, {});
var GraphEvidenceProcessingTest = function() {
    EvidenceProcessingTestBase.call(this);
};
GraphEvidenceProcessingTest = stjs.extend(GraphEvidenceProcessingTest, EvidenceProcessingTestBase, [], function(constructor, prototype) {
    prototype.basicTrueTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        f.addCompetency(c.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            assertions.push(a);
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["positiveAssertion"]).length);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
    };
    prototype.basicFalseTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        f.addCompetency(c.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newFalseAssertion(c);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            assertions.push(a);
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["negativeAssertion"]).length);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
    };
    prototype.basicIndeterminantTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        f.addCompetency(c.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c);
        var a2 = this.newFalseAssertion(c);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            assertions.push(a);
            assertions.push(a2);
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["positiveAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["negativeAssertion"]).length);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(a2.shortId());
    };
    prototype.basicUnknownTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        f.addCompetency(c.shortId());
        f.save(null, this.failure, this.repo);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(null, (fg.getMetaStateCompetency(c))["positiveAssertion"]);
                Assert.assertEquals(null, (fg.getMetaStateCompetency(c))["negativeAssertion"]);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
    };
    prototype.basicEquivalenceTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c2);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            assertions.push(a);
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["positiveAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c2))["positiveAssertion"]).length);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicEquivalenceFalseTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newFalseAssertion(c2);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            assertions.push(a);
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["negativeAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c2))["negativeAssertion"]).length);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicEquivalenceIndeterminantTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c);
        var a2 = this.newFalseAssertion(c2);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            assertions.push(a);
            assertions.push(a2);
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["positiveAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c2))["positiveAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["negativeAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c2))["negativeAssertion"]).length);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(a2.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicEquivalenceUnknownTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(null, (fg.getMetaStateCompetency(c))["positiveAssertion"]);
                Assert.assertEquals(null, (fg.getMetaStateCompetency(c))["negativeAssertion"]);
                Assert.assertEquals(null, (fg.getMetaStateCompetency(c2))["positiveAssertion"]);
                Assert.assertEquals(null, (fg.getMetaStateCompetency(c2))["negativeAssertion"]);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicEquivalenceEquivalenceTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        var c3 = this.newCompetency("Amass");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        var r2 = this.newRelation(c2, c3, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.addRelation(r2.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c3);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            assertions.push(a);
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["positiveAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c2))["positiveAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c3))["positiveAssertion"]).length);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(c3.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
        EvidenceProcessingTestBase.deleteById(r2.shortId());
    };
    prototype.basicEquivalenceUnEquivalentTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        var c3 = this.newCompetency("Amass");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c3);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            assertions.push(a);
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(null, ((fg.getMetaStateCompetency(c))["positiveAssertion"]));
                Assert.assertEquals(null, ((fg.getMetaStateCompetency(c2))["positiveAssertion"]));
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c3))["positiveAssertion"]).length);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(c3.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicRequiresSatisfiedTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.REQUIRES);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            assertions.push(a);
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["positiveAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c2))["positiveAssertion"]).length);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicRequiresFalseTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.REQUIRES);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newFalseAssertion(c2);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            assertions.push(a);
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["negativeAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c2))["negativeAssertion"]).length);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicNarrowsTrueTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c2);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            assertions.push(a);
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["positiveAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c2))["positiveAssertion"]).length);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicNarrowsFalseTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newFalseAssertion(c);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            assertions.push(a);
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["negativeAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c2))["negativeAssertion"]).length);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicNarrowsNarrowsTrueTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        var c3 = this.newCompetency("Amass");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        var r = this.newRelation(c, c2, EcAlignment.NARROWS);
        var r2 = this.newRelation(c2, c3, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        f.addRelation(r2.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c3);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            assertions.push(a);
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["positiveAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c2))["positiveAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c3))["positiveAssertion"]).length);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(c3.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
        EvidenceProcessingTestBase.deleteById(r2.shortId());
    };
    prototype.basicNarrowsNarrowsFalseTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        var c3 = this.newCompetency("Amass");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        var r = this.newRelation(c, c2, EcAlignment.NARROWS);
        var r2 = this.newRelation(c2, c3, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        f.addRelation(r2.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newFalseAssertion(c);
        var fg = new EcFrameworkGraph();
        fg.addFramework(f, this.repo, function() {
            var assertions = new Array();
            assertions.push(a);
            fg.processAssertionsBoolean(assertions, function() {
                console.log(fg.getMetaStateCompetency(c));
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c))["negativeAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c2))["negativeAssertion"]).length);
                Assert.assertEquals(1, ((fg.getMetaStateCompetency(c3))["negativeAssertion"]).length);
            }, this.failure);
        }, this.failure);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(c3.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
        EvidenceProcessingTestBase.deleteById(r2.shortId());
    };
}, {ask: {name: "Function1", arguments: [null, null]}, repo: "EcRepository", failure: {name: "Callback1", arguments: [null]}, logObject: {name: "Callback1", arguments: ["Object"]}, newId1: "EcIdentity"}, {});
var RollupRuleInterfaceTest = function() {
    EvidenceProcessingTestBase.call(this);
};
RollupRuleInterfaceTest = stjs.extend(RollupRuleInterfaceTest, EvidenceProcessingTestBase, [], function(constructor, prototype) {
    prototype.input = "[competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/d885dcd8-f00b-4ccf-82d8-ee14d6c84ef0 AND confidence:>0.6] AND [competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/31971023-5d61-42c0-bc64-ae8e8b7f0d09 AND confidence:>0.6 ] AND [competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/625c9e61-2503-401a-8df7-c9f14133ce95 AND confidence:>0.6] AND [competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/0a2ea5e4-b5b4-461e-a19c-d17772da4d16 AND confidence:>0.6]";
    prototype.basicTrueTest = function() {
        var f = this.newFramework("Woodworking");
        var cx = this.newCompetency("Basic Woodworking");
        var c = this.newCompetency("Lathing");
        var c2 = this.newCompetency("Whittling");
        var c3 = this.newCompetency("Hammering");
        var c4 = this.newCompetency("Sawing");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        f.addCompetency(c4.shortId());
        f.addCompetency(cx.shortId());
        var input = "[competency:<C> AND confidence:>0.6] AND [competency:<C2> AND confidence:>0.6] AND [competency:<C3> AND confidence:>0.6] AND [competency:<C4> AND confidence:>0.6]";
        input = input.replace("<C>", c.shortId());
        input = input.replace("<C2>", c2.shortId());
        input = input.replace("<C3>", c3.shortId());
        input = input.replace("<C4>", c4.shortId());
        var rr = this.newRollupRule(cx, input);
        c.save(null, this.failure, this.repo);
        c2.save(null, this.failure, this.repo);
        c3.save(null, this.failure, this.repo);
        c4.save(null, this.failure, this.repo);
        cx.save(null, this.failure, this.repo);
        rr.save(null, this.failure, this.repo);
        f.addRollupRule(rr.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c);
        var a2 = this.newAssertion(c2);
        var a3 = this.newAssertion(c3);
        var a4 = this.newAssertion(c4);
        a.save(null, this.failure, this.repo);
        a2.save(null, this.failure, this.repo);
        a3.save(null, this.failure, this.repo);
        a4.save(null, this.failure, this.repo);
        this.performTest(f, cx, function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.TRUE, p1.result);
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(c3.shortId());
        EvidenceProcessingTestBase.deleteById(c4.shortId());
        EvidenceProcessingTestBase.deleteById(cx.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(a2.shortId());
        EvidenceProcessingTestBase.deleteById(a3.shortId());
        EvidenceProcessingTestBase.deleteById(rr.shortId());
    };
    prototype.basicTest = function() {
        var input = "[competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/d885dcd8-f00b-4ccf-82d8-ee14d6c84ef0 AND confidence:>0.6] AND [competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/31971023-5d61-42c0-bc64-ae8e8b7f0d09 AND confidence:>0.6 ] AND [competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/625c9e61-2503-401a-8df7-c9f14133ce95 AND confidence:>0.6] AND [competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/0a2ea5e4-b5b4-461e-a19c-d17772da4d16 AND confidence:>0.6]";
        var ip = new InquiryPacket(null, null, null, null, null, null, null, null);
        var rrp = new RollupRuleProcessor(ip, null);
        var rri = new RollupRuleInterface(input, rrp);
        rri.logFunction = function(p1) {
            console.log(p1);
        };
        rri.success = function(p1) {
            if (ip.subPackets == null || ip.subPackets.length <= 0) 
                console.log("NO SUB PACKET GENERATED!!!");
             else {
                console.log("SUB PACKET WAS GENERATED!!!");
                var rip = ip.subPackets[0];
                console.log(" " + rip.type);
                var sp;
                for (var i = 0; i < rip.subPackets.length; i++) {
                    sp = rip.subPackets[i];
                    if (sp.type == InquiryPacket.IPType.ROLLUPRULE) 
                        console.log("    " + sp.type + " - " + sp.rule);
                     else {
                        console.log("   " + sp.type);
                        for (var j = 0; j < sp.subPackets.length; j++) {
                            console.log("       " + sp.subPackets[j].type + " - " + sp.subPackets[j].rule);
                        }
                    }
                }
            }
        };
        rri.go();
    };
}, {ask: {name: "Function1", arguments: [null, null]}, repo: "EcRepository", failure: {name: "Callback1", arguments: [null]}, logObject: {name: "Callback1", arguments: ["Object"]}, newId1: "EcIdentity"}, {});
var PredictiveAssertionProcessorTest = function() {
    EvidenceProcessingTestBase.call(this);
};
PredictiveAssertionProcessorTest = stjs.extend(PredictiveAssertionProcessorTest, EvidenceProcessingTestBase, [], function(constructor, prototype) {
    constructor.SUBJECT_PEM = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtKxQMxXdoogq+eNihcCcbgloNDk333Vt55kKf8Bjko+QqL4DLAnYB+TCS+7fQesaq69BIBDetIWudaS+pdAohzLz8PXJiMrBoNk23PrVwdhe6E6BXh1b33WnsbSwTvbwvo402cY9+RndnOCBRhIm7ehJKyt1x4erm3luXhyz4PISmwLJ+1FIP4rF5jNi6jyEPpyHuLB7jfr8WbOOkhlsTiRVc0KmfTycVyxQXZayGyIhABGZGFfewY9N2oL8btucebP06TDUX5fL1abNTnGUe6yDjfTKV7ndQ4RBBw1k0cIVJCandQ3P5hG4vOQSslpPMq5QXXI/XjyiBFD1VZWDEwIDAQAB-----END PUBLIC KEY-----";
    constructor.ASSERTION_DATE = "1505322211793";
    constructor.EXPIRATION_DATE = "1642527163582";
    prototype.buildNodeArray = function() {
        var na = new Array();
        na.push("COMP-A");
        na.push("COMP-B");
        na.push("COMP-C");
        na.push("COMP-D");
        na.push("COMP-E");
        na.push("COMP-F");
        na.push("COMP-G");
        na.push("COMP-H");
        na.push("COMP-I");
        na.push("COMP-J");
        na.push("COMP-K");
        return na;
    };
    prototype.buildEdgeArray = function() {
        var ea = new Array();
        var ce;
        ce = new CgEdge("COMP-A", "COMP-B", "requires");
        ea.push(ce);
        ce = new CgEdge("COMP-B", "COMP-C", "requires");
        ea.push(ce);
        ce = new CgEdge("COMP-C", "COMP-A", "requires");
        ea.push(ce);
        ce = new CgEdge("COMP-A", "COMP-D", "requires");
        ea.push(ce);
        ce = new CgEdge("COMP-I", "COMP-K", "enables");
        ea.push(ce);
        ce = new CgEdge("COMP-J", "COMP-K", "enables");
        ea.push(ce);
        ce = new CgEdge("COMP-E", "COMP-G", "narrows");
        ea.push(ce);
        ce = new CgEdge("COMP-F", "COMP-G", "narrows");
        ea.push(ce);
        return ea;
    };
    prototype.buildPositiveAssertionArray = function() {
        var paa = new Array();
        var sa;
        sa = new SimpleAssertion("pa-1", "COMP-A", 0.82);
        sa.setSubjectPem(PredictiveAssertionProcessorTest.SUBJECT_PEM);
        sa.setAssertionDate(parseInt(PredictiveAssertionProcessorTest.ASSERTION_DATE));
        sa.setExpirationDate(parseInt(PredictiveAssertionProcessorTest.EXPIRATION_DATE));
        sa.setNegative(false);
        paa.push(sa);
        sa = new SimpleAssertion("pa-2", "COMP-B", 0.82);
        sa.setSubjectPem(PredictiveAssertionProcessorTest.SUBJECT_PEM);
        sa.setAssertionDate(parseInt(PredictiveAssertionProcessorTest.ASSERTION_DATE));
        sa.setExpirationDate(parseInt(PredictiveAssertionProcessorTest.EXPIRATION_DATE));
        sa.setNegative(false);
        paa.push(sa);
        sa = new SimpleAssertion("pa-3", "COMP-G", 1.0);
        sa.setSubjectPem(PredictiveAssertionProcessorTest.SUBJECT_PEM);
        sa.setAssertionDate(parseInt(PredictiveAssertionProcessorTest.ASSERTION_DATE));
        sa.setExpirationDate(parseInt(PredictiveAssertionProcessorTest.EXPIRATION_DATE));
        sa.setNegative(false);
        paa.push(sa);
        sa = new SimpleAssertion("pa-4", "COMP-I", 1.0);
        sa.setSubjectPem(PredictiveAssertionProcessorTest.SUBJECT_PEM);
        sa.setAssertionDate(parseInt(PredictiveAssertionProcessorTest.ASSERTION_DATE));
        sa.setExpirationDate(parseInt(PredictiveAssertionProcessorTest.EXPIRATION_DATE));
        sa.setNegative(false);
        paa.push(sa);
        sa = new SimpleAssertion("pa-5", "COMP-K", 1.0);
        sa.setSubjectPem(PredictiveAssertionProcessorTest.SUBJECT_PEM);
        sa.setAssertionDate(parseInt(PredictiveAssertionProcessorTest.ASSERTION_DATE));
        sa.setExpirationDate(parseInt(PredictiveAssertionProcessorTest.EXPIRATION_DATE));
        sa.setNegative(false);
        paa.push(sa);
        return paa;
    };
    prototype.buildNegativeAssertionArray = function() {
        var naa = new Array();
        var sa;
        sa = new SimpleAssertion("na-1", "COMP-D", 0.82);
        sa.setSubjectPem(PredictiveAssertionProcessorTest.SUBJECT_PEM);
        sa.setAssertionDate(parseInt(PredictiveAssertionProcessorTest.ASSERTION_DATE));
        sa.setExpirationDate(parseInt(PredictiveAssertionProcessorTest.EXPIRATION_DATE));
        sa.setNegative(true);
        naa.push(sa);
        sa = new SimpleAssertion("na-1", "COMP-E", 1.0);
        sa.setSubjectPem(PredictiveAssertionProcessorTest.SUBJECT_PEM);
        sa.setAssertionDate(parseInt(PredictiveAssertionProcessorTest.ASSERTION_DATE));
        sa.setExpirationDate(parseInt(PredictiveAssertionProcessorTest.EXPIRATION_DATE));
        sa.setNegative(true);
        naa.push(sa);
        return naa;
    };
    prototype.generateTestCompetencyGraph = function() {
        var cg = new CompetencyGraph(true);
        cg.setNodes(this.buildNodeArray());
        cg.setEdges(this.buildEdgeArray());
        cg.setPositiveAssertions(this.buildPositiveAssertionArray());
        cg.setNegativeAssertions(this.buildNegativeAssertionArray());
        return cg;
    };
    prototype.runPredictiveAssertionProcessorTest = function() {
        var cg = this.generateTestCompetencyGraph();
        console.log("*******************************Input Competency Graph: ");
        console.log(cg.getJsonString());
        var pap = new PredictiveAssertionProcessor();
        var pnp = pap.predictAll(cg, PredictiveAssertionProcessorTest.SUBJECT_PEM, null, null, null);
        console.log("*******************************Prediction: ");
        console.log(pnp.getJsonString());
    };
}, {ask: {name: "Function1", arguments: [null, null]}, repo: "EcRepository", failure: {name: "Callback1", arguments: [null]}, logObject: {name: "Callback1", arguments: ["Object"]}, newId1: "EcIdentity"}, {});
var EvidenceProcessingTest = function() {
    EvidenceProcessingTestBase.call(this);
};
EvidenceProcessingTest = stjs.extend(EvidenceProcessingTest, EvidenceProcessingTestBase, [], function(constructor, prototype) {
    prototype.basicTrueTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        f.addCompetency(c.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c);
        this.performTest(f, c, function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.TRUE, p1.result);
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
    };
    prototype.basicFalseTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        f.addCompetency(c.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newFalseAssertion(c);
        this.performTest(f, c, function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.FALSE, p1.result);
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
    };
    prototype.basicIndeterminantTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        f.addCompetency(c.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c);
        var a2 = this.newFalseAssertion(c);
        this.performTest(f, c, function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.INDETERMINANT, p1.result);
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(a2.shortId());
    };
    prototype.basicUnknownTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        f.addCompetency(c.shortId());
        f.save(null, this.failure, this.repo);
        this.performTest(f, c, function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.UNKNOWN, p1.result);
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
    };
    prototype.basicEquivalenceTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c2);
        this.performTest(f, c, function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.TRUE, p1.result);
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicEquivalenceFalseTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newFalseAssertion(c2);
        this.performTest(f, c, function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.FALSE, p1.result);
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicEquivalenceIndeterminantTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c);
        var a2 = this.newFalseAssertion(c2);
        this.performTest(f, c, function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.INDETERMINANT, p1.result);
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(a2.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicEquivalenceUnknownTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        this.performTest(f, c, function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.UNKNOWN, p1.result);
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicEquivalenceEquivalenceTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        var c3 = this.newCompetency("Amass");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        var r2 = this.newRelation(c2, c3, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.addRelation(r2.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c3);
        this.performTest(f, c, function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.TRUE, p1.result);
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(c3.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
        EvidenceProcessingTestBase.deleteById(r2.shortId());
    };
    prototype.basicEquivalenceUnEquivalentTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        var c3 = this.newCompetency("Amass");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        f.addCompetency(c3.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c3);
        var isTest = function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.UNKNOWN, p1.result);
        };
        this.performTest(f, c, isTest);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(c3.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicRequiresSatisfiedTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.REQUIRES);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c2);
        var isTest = function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.UNKNOWN, p1.result);
        };
        this.performTest(f, c, isTest);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicNarrowsSatisfiedTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Multiply");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c2);
        var isTest = function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.TRUE, p1.result);
        };
        this.performTest(f, c, isTest);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicNarrowsUnsatisfiedTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Multiply");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c);
        var isTest = function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.UNKNOWN, p1.result);
        };
        this.performTest(f, c2, isTest);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicNarrowsPositiveNegativeTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Multiply");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c);
        var a2 = this.newFalseAssertion(c);
        var isTest = function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.FALSE, p1.result);
        };
        this.performTest(f, c2, isTest);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    prototype.basicRequiresFalseTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.REQUIRES);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newFalseAssertion(c2);
        var isTest = function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.FALSE, p1.result);
        };
        this.performTest(f, c, isTest);
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
}, {ask: {name: "Function1", arguments: [null, null]}, repo: "EcRepository", failure: {name: "Callback1", arguments: [null]}, logObject: {name: "Callback1", arguments: ["Object"]}, newId1: "EcIdentity"}, {});
var GraphTest = function() {
    EvidenceProcessingTestBase.call(this);
};
GraphTest = stjs.extend(GraphTest, EvidenceProcessingTestBase, [], function(constructor, prototype) {
    constructor.REPOSITORY_URL = "https://dev.cassproject.org/api/";
    constructor.FRAMREWORK_ID = "https://dev.cassproject.org/api/data/schema.cassproject.org.0.2.Framework/775965fc-6b50-4b78-b15e-cc60fbad66a0";
    constructor.COMPETENCY_ID = "https://dev.cassproject.org/api/data/schema.cassproject.org.0.2.Competency/1f2126b3-cb90-4ab2-a646-40da40384c93";
    constructor.CREATE_IMPLIED_EDGES = true;
    constructor.ADD_ASSERTIONS = true;
    prototype.buildAndConfigureGraphBuilder = function() {
        var repo = new EcRepository();
        repo.selectedServer = GraphTest.REPOSITORY_URL;
        EcRepository.alwaysTryUrl = true;
        var cgb = new CompetencyGraphBuilder();
        cgb.repositories.push(repo);
        cgb.includeAssertions = GraphTest.ADD_ASSERTIONS;
        cgb.frameworkId = GraphTest.FRAMREWORK_ID;
        cgb.rootCompetencyId = GraphTest.COMPETENCY_ID;
        cgb.success = function(cg) {
            console.log("CompetencyGraphBuilder success :)");
            console.log("Object: " + cg);
            console.log("JSON String: " + cg.getJsonString());
            Assert.assertSame(true, true);
        };
        cgb.failure = function(er) {
            console.log("CompetencyGraphBuilder failed :(");
            console.log("Object: " + er);
            console.log("JSON String: " + er.getJsonString());
            Assert.fail();
        };
        return cgb;
    };
    prototype.generateBasicGraphTest = function() {
        console.log("Start generateBasicGraphTest");
        var cgb = this.buildAndConfigureGraphBuilder();
        cgb.buildCompetencyGraph(GraphTest.CREATE_IMPLIED_EDGES);
    };
}, {ask: {name: "Function1", arguments: [null, null]}, repo: "EcRepository", failure: {name: "Callback1", arguments: [null]}, logObject: {name: "Callback1", arguments: ["Object"]}, newId1: "EcIdentity"}, {});
var CtdlProcessingTest = function() {};
CtdlProcessingTest = stjs.extend(CtdlProcessingTest, null, [], function(constructor, prototype) {
    constructor.CREDENTIAL_LOCATOR = "https://army.cass.eduworks.us/api/custom/data/ce-C57948C2-6636-4ED3-9B51-BC5A9EC56D88";
    constructor.RESOURCE_LOCATOR_URL = "https://army.cass.eduworks.us/api/data/";
    constructor.STRIP_ID = true;
    prototype.buildAndConfigureLocator = function() {
        EcRemote.async = false;
        var ccl = new CredentialCompetencyLocator();
        ccl.credentialLocator = CtdlProcessingTest.CREDENTIAL_LOCATOR;
        ccl.stripId = CtdlProcessingTest.STRIP_ID;
        ccl.success = function(ca) {
            console.log("CredentialCompetencyLocator success :)");
            console.log("Object: " + ca);
            console.log("CredentialCompetencyLocator log: ");
            for (var i = 0; i < ccl.logBuffer.length; i++) {
                console.log("   " + ccl.logBuffer[i]);
            }
            console.log("******************FINAL Competency List(" + ca.length + "): ");
            for (var j = 0; j < ca.length; j++) {
                console.log("   framework:" + ca[j].framework);
                console.log("   competency:" + ca[j].targetNode);
            }
            Assert.assertSame(true, true);
        };
        ccl.failure = function(er) {
            console.log("CompetencyGraphBuilder failed : " + er);
            console.log("CredentialCompetencyLocator log: ");
            for (var i = 0; i < ccl.logBuffer.length; i++) {
                console.log("   " + ccl.logBuffer[i]);
            }
            Assert.fail();
        };
        return ccl;
    };
    prototype.basicCtdlTest = function() {};
}, {}, {});
var EvidenceProcessingTestBase = function() {};
EvidenceProcessingTestBase = stjs.extend(EvidenceProcessingTestBase, null, [], function(constructor, prototype) {
    prototype.ask = null;
    prototype.repo = null;
    prototype.failure = null;
    prototype.logObject = null;
    prototype.newId1 = null;
    constructor.deleteById = function(id) {
        EcRepository.get(id, function(p1) {
            EcRepository._delete(p1, null, function(p1) {
                console.log(p1);
            });
        }, function(p1) {
            console.log(p1);
        });
    };
    prototype.setup = function() {
        EcRemote.async = false;
        this.failure = function(p1) {
            console.log(p1);
            Assert.fail();
        };
        this.logObject = function(p1) {
            console.log(p1);
        };
        this.ask = function(param1) {
            console.log(param1);
            return null;
        };
        this.repo = new EcRepository();
        this.repo.selectedServer = "http://localhost/api/";
        this.newId1 = new EcIdentity();
        this.newId1.ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        ;
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(this.newId1);
    };
    prototype.newAssertion = function(competencyToAssert) {
        var a = new EcAssertion();
        a.generateId(this.repo.selectedServer);
        a.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        a.setSubject(EcIdentityManager.ids[0].ppk.toPk());
        a.setAgent(EcIdentityManager.ids[0].ppk.toPk());
        a.setCompetency(competencyToAssert.shortId());
        a.setConfidence(1.0);
        a.setAssertionDate(stjs.trunc(new Date().getTime()));
        a.setExpirationDate(stjs.trunc((new Date().getTime())) + 1000 * 60 * 60);
        a.setDecayFunction("t");
        a.save(null, this.failure, this.repo);
        return a;
    };
    prototype.newFalseAssertion = function(competencyToAssert) {
        var a = new EcAssertion();
        a.generateId(this.repo.selectedServer);
        a.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        a.setSubject(EcIdentityManager.ids[0].ppk.toPk());
        a.setAgent(EcIdentityManager.ids[0].ppk.toPk());
        a.setCompetency(competencyToAssert.shortId());
        a.setConfidence(1.0);
        a.setNegative(true);
        a.setAssertionDate(stjs.trunc(new Date().getTime()));
        a.setExpirationDate(stjs.trunc((new Date().getTime())) + 1000 * 60 * 60);
        a.setDecayFunction("t");
        a.save(null, this.failure, this.repo);
        return a;
    };
    prototype.newCompetency = function(competencyName) {
        var competency = new EcCompetency();
        competency.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        competency.name = competencyName;
        competency.generateId(this.repo.selectedServer);
        competency.save(null, this.failure, this.repo);
        return competency;
    };
    prototype.newCredential = function(credentialName) {
        var credential = new Credential();
        credential.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        credential.name = credentialName;
        credential.generateId(this.repo.selectedServer);
        this.repo.saveTo(credential, null, this.failure);
        return credential;
    };
    prototype.newAchieveAction = function(credential) {
        var action = new AchieveAction();
        action.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        action.object = credential.shortId();
        action.agent = EcIdentityManager.ids[0].ppk.toPk().toPem();
        action.generateId(this.repo.selectedServer);
        this.repo.constructor.save(action, null, this.failure);
        return action;
    };
    prototype.newRelation = function(c, c2, relationType) {
        var r = new EcAlignment();
        r.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        r.generateId(this.repo.selectedServer);
        r.relationType = relationType;
        r.source = c.shortId();
        r.target = c2.shortId();
        r.save(null, this.failure, this.repo);
        return r;
    };
    prototype.newCreativeRelation = function(c, c2, alignmentType) {
        var r = new CreativeWork();
        r.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        r.generateId(this.repo.selectedServer);
        r.educationalAlignment = new AlignmentObject();
        r.url = c.shortId();
        r.educationalAlignment.targetUrl = c2.shortId();
        r.educationalAlignment.alignmentType = alignmentType;
        this.repo.constructor.save(r, null, this.failure);
        return r;
    };
    prototype.performTest = function(ep, context, target, isTest) {
        var subject = new Array();
        subject.push(EcIdentityManager.ids[0].ppk.toPk());
        var additionalSignatures = null;
        ep.has(subject, target, null, context, additionalSignatures, isTest, this.ask, this.failure);
    };
    prototype.getTestProcessor = function() {
        var ep = new PessimisticQuadnaryAssertionProcessor();
        ep.logFunction = this.logObject;
        ep.repositories.push(this.repo);
        return ep;
    };
    prototype.newFramework = function(frameworkName) {
        var framework = new EcFramework();
        framework.name = frameworkName;
        framework.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        framework.generateId(this.repo.selectedServer);
        framework.save(null, this.failure, this.repo);
        return framework;
    };
}, {ask: {name: "Function1", arguments: [null, null]}, repo: "EcRepository", failure: {name: "Callback1", arguments: [null]}, logObject: {name: "Callback1", arguments: ["Object"]}, newId1: "EcIdentity"}, {});
/**
 *  Created by fray on 5/30/17.
 */
var MilCredCoprocessorTest = function() {
    EvidenceProcessingTestBase.call(this);
};
MilCredCoprocessorTest = stjs.extend(MilCredCoprocessorTest, EvidenceProcessingTestBase, [], function(constructor, prototype) {
    prototype.basicTrueTest = function() {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        f.addCompetency(c.shortId());
        f.save(null, this.failure, this.repo);
        var cr = this.newCredential("Adding Credential");
        var w = this.newCreativeRelation(cr, c, "http://schema.cassproject.org/0.2/vocab/asserts");
        var a = this.newAchieveAction(cr);
        var processor = this.getTestProcessor();
        processor.coprocessors.push(new MilCredCoprocessor());
        this.performTest(processor, f, c, function(p1) {
            console.log(p1.result.name());
            console.log(p1);
            EvidenceProcessingTestBase.deleteById(f.shortId());
            EvidenceProcessingTestBase.deleteById(cr.shortId());
            EvidenceProcessingTestBase.deleteById(w.shortId());
            EvidenceProcessingTestBase.deleteById(c.shortId());
            EvidenceProcessingTestBase.deleteById(a.shortId());
            Assert.assertSame(InquiryPacket.ResultType.TRUE, p1.result);
        });
        // EvidenceProcessingTestBase.deleteById(f.shortId());
        // EvidenceProcessingTestBase.deleteById(cr.shortId());
        // EvidenceProcessingTestBase.deleteById(w.shortId());
        // EvidenceProcessingTestBase.deleteById(c.shortId());
        // EvidenceProcessingTestBase.deleteById(a.shortId());
    };
    prototype.basicUnknownTest = function() {
        Assert.assertTrue(true);
    };
}, {ask: {name: "Function1", arguments: [null, null]}, repo: "EcRepository", failure: {name: "Callback1", arguments: [null]}, logObject: {name: "Callback1", arguments: ["Object"]}, newId1: "EcIdentity"}, {});
var ImportTestBase = function() {};
ImportTestBase = stjs.extend(ImportTestBase, null, [], function(constructor, prototype) {
    prototype.ask = null;
    prototype.repo = null;
    prototype.failure = null;
    prototype.logString = null;
    prototype.logObject = null;
    prototype.newId1 = null;
    constructor.deleteById = function(id) {
        EcRepository.get(id, function(p1) {
            EcRepository._delete(p1, null, function(p1) {
                console.log(p1);
            });
        }, function(p1) {
            console.log(p1);
        });
    };
    prototype.setup = function() {
        EcRemote.async = false;
        this.failure = function(p1) {
            console.log(p1);
            Assert.fail();
        };
        this.logString = function(p1) {
            console.log(p1);
        };
        this.logObject = function(p1) {
            console.log(p1);
        };
        this.ask = function(param1) {
            console.log(param1);
            return null;
        };
        this.repo = new EcRepository();
        this.repo.selectedServer = "http://localhost/api/";
        this.newId1 = new EcIdentity();
        this.newId1.ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----");
        ;
        EcIdentityManager.ids = new Array();
        EcIdentityManager.addIdentity(this.newId1);
    };
    prototype.newAssertion = function(competencyToAssert) {
        var a = new EcAssertion();
        a.generateId(this.repo.selectedServer);
        a.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        a.setSubject(EcIdentityManager.ids[0].ppk.toPk());
        a.setAgent(EcIdentityManager.ids[0].ppk.toPk());
        a.setCompetency(competencyToAssert.shortId());
        a.setConfidence(1.0);
        a.setAssertionDate(stjs.trunc(new Date().getTime()));
        a.setExpirationDate(stjs.trunc((new Date().getTime())) + 1000 * 60 * 60);
        a.setDecayFunction("t");
        a.save(null, this.failure, this.repo);
        return a;
    };
    prototype.newFalseAssertion = function(competencyToAssert) {
        var a = new EcAssertion();
        a.generateId(this.repo.selectedServer);
        a.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        a.setSubject(EcIdentityManager.ids[0].ppk.toPk());
        a.setAgent(EcIdentityManager.ids[0].ppk.toPk());
        a.setCompetency(competencyToAssert.shortId());
        a.setConfidence(1.0);
        a.setNegative(true);
        a.setAssertionDate(stjs.trunc(new Date().getTime()));
        a.setExpirationDate(stjs.trunc((new Date().getTime())) + 1000 * 60 * 60);
        a.setDecayFunction("t");
        a.save(null, this.failure, this.repo);
        return a;
    };
    prototype.newCompetency = function(competencyName) {
        var competency = new EcCompetency();
        competency.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        competency.name = competencyName;
        competency.generateId(this.repo.selectedServer);
        competency.save(null, this.failure, this.repo);
        return competency;
    };
    prototype.newRollupRule = function(competency, rule) {
        var rr = new EcRollupRule();
        rr.competency = competency.shortId();
        rr.rule = rule;
        rr.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        rr.generateId(this.repo.selectedServer);
        rr.save(null, this.failure, this.repo);
        return rr;
    };
    prototype.newRelation = function(c, c2, relationType) {
        var r = new EcAlignment();
        r.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        r.generateId(this.repo.selectedServer);
        r.relationType = relationType;
        r.source = c.shortId();
        r.target = c2.shortId();
        r.save(null, this.failure, this.repo);
        return r;
    };
    prototype.newFramework = function(frameworkName) {
        var framework = new EcFramework();
        framework.name = frameworkName;
        framework.addOwner(EcIdentityManager.ids[0].ppk.toPk());
        framework.generateId(this.repo.selectedServer);
        framework.save(null, this.failure, this.repo);
        return framework;
    };
}, {ask: {name: "Function1", arguments: [null, null]}, repo: "EcRepository", failure: {name: "Callback1", arguments: [null]}, logString: {name: "Callback1", arguments: [null]}, logObject: {name: "Callback1", arguments: ["Object"]}, newId1: "EcIdentity"}, {});
var TabStructuredImportTest = function() {
    ImportTestBase.call(this);
};
TabStructuredImportTest = stjs.extend(TabStructuredImportTest, ImportTestBase, [], function(constructor, prototype) {
    prototype.basicTabStructuredImport = function() {
        var me = this;
        TabStructuredImport.importCompetencies("A\n\tA.1\n\t\tA.1.1\n\tA.2\n\t\tA.2.1\n\t\tA.2.2\n\t\t\tA.2.2.1\nB\n\tB.1\n\t\tB.1.1\n\tB.2\n\t\tB.2.1\n\t\tB.2.2\n\t\t\tB.2.2.1\nC\nD\n D.1\n D.2\n  D.2.1\n  D.2.2\n D.3\n  D.3.1\nE", this.repo.selectedServer, this.newId1, function(competencies, alignments) {
            var f = new EcFramework();
            f.setName("Tab Structured Import Test Framework");
            f.generateId(me.repo.selectedServer);
            f.competency = new Array();
            f.relation = new Array();
            var everything = new Array();
            for (var i = 0; i < competencies.length; i++) {
                f.competency.push(competencies[i].shortId());
                everything.push(competencies[i]);
            }
            for (var i = 0; i < alignments.length; i++) {
                f.relation.push(alignments[i].shortId());
                everything.push(alignments[i]);
            }
            everything.push(f);
            me.repo.multiput(everything, function(s) {
                for (var i = 0; i < everything.length; i++) 
                    me.repo.deleteRegistered(everything[i], null, this.failure);
            }, this.failure);
        }, this.failure, this.logObject, this.repo, false);
    };
}, {ask: {name: "Function1", arguments: [null, null]}, repo: "EcRepository", failure: {name: "Callback1", arguments: [null]}, logString: {name: "Callback1", arguments: [null]}, logObject: {name: "Callback1", arguments: ["Object"]}, newId1: "EcIdentity"}, {});
obj = new EcRandomTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.testLength();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcRsaTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.rsaOaepTest();
obj.rsaUtf8OaepTest();
obj.rsaOaepAsyncNativeTest();
obj.rsaUtf8OaepAsyncNativeTest();
obj.rsaOaepAsyncNativeTestWorker();
obj.rsaUtf8OaepAsyncNativeTestWorker();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcAesTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.aesTest();
obj.aesUtf8Test();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcAesAsyncTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.aesTest();
obj.aesCrossTest1();
obj.aesCrossTest1Utf8();
obj.aesCrossTest2Utf8();
obj.aesTestWorker();
obj.aesCrossTest1Worker();
obj.aesCrossTest1Utf8Worker();
obj.aesCrossTest2Utf8Worker();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcPpkTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.ppkPkKeyTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcTaskTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.createTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcRemoteLinkedDataTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.signableDataTest();
obj.signAndVerifyTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcContactTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.encryptContactTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcRepositoryTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.createPublicObjectTest();
obj.createPublicRegisteredObjectTest();
obj.createAndDeleteSingleOwnedObjectTest();
obj.createAndDeleteTwoOwnerObjectTest();
obj.searchForSomethingThatCantExist();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcEncryptedValueTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.encryptDecryptTest();
obj.encryptObjectUploadDownloadDecryptTest();
obj.encryptValueUploadDownloadDecryptTest();
obj.encryptValueWithReaderUploadSearchByPkWithSignatureTest();
obj.encryptedValueOneOwnerTest();
obj.encryptedValueTwoOwnerTest();
obj.encryptedValueOwnerReaderTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcVersioningTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.testSaveTwoVersionsBothExist();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcRekeyTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.basicInMemoryForwardingTest();
obj.basicRekeyRecordForwardingTest();
obj.basicRekeyRecordClientTest();
obj.basicRekeyRecordServerTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new OrganizationTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.basicOrganizationUpgradeTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcAlignmentTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.createAlignmentTest();
obj.createNoSourceAlignmentTest();
obj.createNoTargetAlignmentTest();
obj.createNoTypeAlignmentTest();
obj.viewAlignmentTest();
obj.updateAlignmentInfo();
obj.updateAlignmentRemoveSource();
obj.updateAlignmentRemoveTarget();
obj.updateAlignmentRemoveType();
obj.deleteAlignmentTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcCompetencyTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.createCompetencyTest();
obj.createNoNameCompetencyTest();
obj.viewCompetencyTest();
obj.competencyAddRemoveRelationshipTest();
obj.competencyAddRemoveLevelTest();
obj.updateCompetencyInfo();
obj.deleteCompetencyTest();
obj.deleteCompetencyWithRelationshipTest();
obj.deleteCompetencyWithLevelTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcLevelTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.createLevelTest();
obj.createLevelNoNameTest();
obj.createLevelNoCompetencyTest();
obj.viewLevelTest();
obj.updateLevelInfoTest();
obj.updateLevelNoNameTest();
obj.updateLevelNoCompetencyTest();
obj.deleteLevelTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcAssertionTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.assertionEncryptDecryptTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EcFrameworkTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.createFrameworkTest();
obj.createNoNameFrameworkTest();
obj.viewFrameworkTest();
obj.updateFrameworkInfoTest();
obj.updateFrameworkNoNameTest();
obj.updateFrameworkAddRemoveCompetencyTest();
obj.updateFrameworkRemoveNonCompetencyTest();
obj.updateFrameworkAddRemoveLevelTest();
obj.updateFrameworkRemoveNonLevelTest();
obj.updateFrameworkAddRemoveRelationTest();
obj.updateFrameworkRemoveNonRelationTest();
obj.deleteFramework();
EcRepository.repos = [];
EcRemote.async = true;
obj = new ProfileProcessorTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.capFrameworkGraphPerfTest();
obj.samanthaSmithProfileTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new FrameworkCollapserTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.capFrameworkCollapseTest();
obj.basicFrameworkCollapseTest();
obj.basicAssertionSearchTest();
obj.basicMultiGetTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new CollapserTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.basicCollapseTest();
obj.buildTest0();
obj.buildTest1();
obj.buildTest2();
obj.buildTest3();
obj.buildTest4();
obj.buildTest5();
obj.buildTest6();
obj.buildTest7();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EvidenceProcessingTestBase();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.newCredential();
EcRepository.repos = [];
EcRemote.async = true;
obj = new GraphEvidenceProcessingTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.constructor();
obj.basicTrueTest();
obj.basicFalseTest();
obj.basicIndeterminantTest();
obj.basicUnknownTest();
obj.basicEquivalenceTest();
obj.basicEquivalenceFalseTest();
obj.basicEquivalenceIndeterminantTest();
obj.basicEquivalenceUnknownTest();
obj.basicEquivalenceEquivalenceTest();
obj.basicEquivalenceUnEquivalentTest();
obj.basicRequiresSatisfiedTest();
obj.basicRequiresFalseTest();
obj.basicNarrowsTrueTest();
obj.basicNarrowsFalseTest();
obj.basicNarrowsNarrowsTrueTest();
obj.basicNarrowsNarrowsFalseTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new RollupRuleInterfaceTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.constructor();
obj.basicTrueTest();
obj.basicTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new PredictiveAssertionProcessorTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.constructor();
obj.buildNodeArray();
obj.buildEdgeArray();
obj.buildPositiveAssertionArray();
obj.buildNegativeAssertionArray();
obj.generateTestCompetencyGraph();
obj.runPredictiveAssertionProcessorTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EvidenceProcessingTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.constructor();
obj.basicTrueTest();
obj.basicFalseTest();
obj.basicIndeterminantTest();
obj.basicUnknownTest();
obj.basicEquivalenceTest();
obj.basicEquivalenceFalseTest();
obj.basicEquivalenceIndeterminantTest();
obj.basicEquivalenceUnknownTest();
obj.basicEquivalenceEquivalenceTest();
obj.basicEquivalenceUnEquivalentTest();
obj.basicRequiresSatisfiedTest();
obj.basicNarrowsSatisfiedTest();
obj.basicNarrowsUnsatisfiedTest();
obj.basicNarrowsPositiveNegativeTest();
obj.basicRequiresFalseTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new GraphTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.constructor();
obj.buildAndConfigureGraphBuilder();
obj.generateBasicGraphTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new CtdlProcessingTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.buildAndConfigureLocator();
obj.basicCtdlTest();
EcRepository.repos = [];
EcRemote.async = true;
obj = new EvidenceProcessingTestBase();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.newCredential();
EcRepository.repos = [];
EcRemote.async = true;
obj = new MilCredCoprocessorTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.constructor();
obj.basicTrueTest();
obj.basicUnknownTest();
obj.newCredential();
EcRepository.repos = [];
EcRemote.async = true;
obj = new ImportTestBase();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
EcRepository.repos = [];
EcRemote.async = true;
obj = new TabStructuredImportTest();
if (obj.setup) obj.setup();
if (obj.begin) obj.begin();
obj.constructor();
obj.basicTabStructuredImport();