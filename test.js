require(".");

var clog = console.log;
console.log = function (s) {
    let e = new Error();
    let frame = e.stack.split("\n")[2];
    let lineNumber = frame.split(":")[1];
    let functionName = frame.split(" ")[5];
    if (EcObject.isObject(s)) s = JSON.stringify(s, null, 2);
    clog(functionName + ":" + lineNumber + " " + s);
};
process.on("unhandledRejection", (reason, p) => {
    console.trace("Unhandled Rejection at: Promise", p, "reason:", reason);
    // application specific logging, throwing an error, or other logic here
});
var Assert = {
    assertTrue: function (val, val2) {
        if (val2 == null || val2 === undefined) {
            if (val == false) {
                console.log("PROBLEM: " + val + " == false");
                console.trace(val);
                process.exit(1);
            }
        } else if (val2 == false) {
            console.log("PROBLEM: " + val + " - " + val2 + " == false");
            console.trace(val);
            process.exit(1);
        }
    },
    assertFalse: function (val, val2) {
        if (val2 == null || val2 === undefined) {
            if (val == true) {
                console.log("PROBLEM: " + val + " == true");
                console.trace(val);
                process.exit(1);
            }
        } else if (val2 == true) {
            console.log("PROBLEM: " + val + " - " + val2 + " != true");
            console.trace(val);
            process.exit(1);
        }
    },
    assertEquals: function (val, val2, val3) {
        if (val2 == undefined && val3 == undefined) return;
        if (val3 != null && val3 !== undefined) {
            if (val2 != val3) {
                console.log("PROBLEM: " + val + " - " + val2 + " != " + val3);
                console.trace(val);
                process.exit(1);
            }
        } else if (val != val2) {
            console.log("PROBLEM: " + val + " != " + val2);
            console.trace(val);
            process.exit(1);
        }
    },
    assertSame: function (val, val2, val3) {
        if (val2 == undefined && val3 == undefined) return;
        if (val3 != null && val3 !== undefined) {
            if (val2 != val3) {
                console.log("PROBLEM: " + val + " - " + val2 + " != " + val3);
                console.trace(val);
                process.exit(1);
            }
        } else if (val != val2) {
            console.log("PROBLEM: " + val + " != " + val2);
            console.trace(val);
            process.exit(1);
        }
    },
    assertNotSame: function (val, val2, val3) {
        if (val2 == undefined && val3 == undefined) return;
        if (val3 != null && val3 !== undefined) {
            if (val2 == val3) {
                console.log("PROBLEM: " + val + " - " + val2 + " != " + val3);
                console.trace(val);
                process.exit(1);
            }
        } else if (val == val2) {
            console.log("PROBLEM: " + val + " != " + val2);
            console.trace(val);
            process.exit(1);
        }
    },
    assertFail: function (val) {
        console.log("PROBLEM: " + val);
        console.trace(val);
        process.exit(1);
    },
    fail: function (val) {
        console.log("PROBLEM: " + val);
        console.trace(val);
        process.exit(1);
    }
};

global.failure = function (val) {
    console.log("PROBLEM: " + val);
    console.trace();
    process.exit(1);
};

var repo = new EcRepository();
repo.selectedServer = "https://dev.cassproject.org/api/";
EcCrypto.testMode = true;

class EcRandomTest {
    testLength = function () {
        Assert.assertTrue(
            generateUUID().length ==
            "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".length
        );
    };
}
class EcTaskTest {
    createTest = function () {
        var task = new EcAsyncTask(
            function (p1) {
                return "Hello " + p1;
            },
            null,
            null,
            null,
            null
        );
        setTimeout(function () {
            var val = "World";
            var ret = task.doTask(val);
            console.log(ret);
            Assert.assertTrue(ret == "Hello " + val);
        }, 200);
    };
}
class EcRemoteLinkedDataTest {
    signableDataTest = function () {
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var f = new EcRemoteLinkedData(General.context, "testType");
        f["name"] = "My_File.txt";
        f["mimeType"] = "text/plain";
        f["data"] = "BASE64ENCODEDDATA";
        f.generateId("http://localhost:9722/api");
        f["checksum"] = "ABC123";
        f.addOwner(ppk.toPk());
        f.signWith(ppk);
        var signableJson = f.toSignableJson();
        console.log("Signable JSON: " + signableJson);
        Assert.assertTrue("No Tabs.", signableJson.indexOf("\t") == -1);
        Assert.assertTrue(
            "@Context before @Type",
            signableJson.indexOf('"@context"') < signableJson.indexOf('"@type"')
        );
        Assert.assertTrue(
            "@Type before Checksum",
            signableJson.indexOf('"@type"') < signableJson.indexOf('"checksum"')
        );
        Assert.assertTrue(
            "Checksum before Data",
            signableJson.indexOf('"checksum"') < signableJson.indexOf('"data"')
        );
        Assert.assertTrue(
            "Data before MimeType",
            signableJson.indexOf('"data"') < signableJson.indexOf('"mimeType"')
        );
        Assert.assertTrue(
            "MimeType before Name",
            signableJson.indexOf('"mimeType"') < signableJson.indexOf('"name"')
        );
    };
    signAndVerifyTest = async () => {
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var ppk2 = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAl4oeWRsroJqAR8UXkmkhDHMcRaDM6a9wsFWNkokyugMevv5TtwHVrm9HMJqVlXn1U1AiVS1rEYB7Iavi2IE7e8WV6GkLrGTrce+YcqhrwF3g104ZEuIC2aFCcLrxvXbSqmmuddS3lRMEwqdWkYIS7MKRSKUBpbydl8wScYxjzUSMNzQrvgUpNc//N7GkpEFXYLjYmVWhYdUp578nw/K9StRqTfku8U+Ub86U0mHXowms4spV8IoOlV53OLpOL+8QwcQYZ+koWL4B0rhz6cvelvBAFygx94t8IzZtRiBniaTF+1nBjyj4+R8PdprxFNnM+S2IQBqUdBKJ3oDoKMqdAwIDAQABAoIBAC3BWmB1P7sCa3FAJVnjvELSDttHLhfxDQlxC4oPOu3HO2VXzVcYirhciRY31qqHZHd/Xp5xVD64mHUWPSw5+QfqJNVDwm6PGjgQq+sSx1YSAm1/+zokW8/yTOlUyOD4G6uwtSiGzdeJIorTk+PjbmtmZA+XIuQ0CzFmQLtgNFIpxRmDKLZrjEO5NSaeStZRgi+WVkgfOnvQvWtFK8/djeXfb4f3BnquCRKjm/cOjtdqBHcFq7Fzlyh0U64XXcJPPgBX3hLNK7mr0ZBCwUDOUs0Xna0a/2FHsjESPX7grZ9J1fbkXRwUrSJ04zbeijqROkjni7wokT+HiWtVcZ/HLOECgYEA0/CykuniBAE+Oqt+qj1OEQSnyiENJffnSzeOOjI17ygxcXYFxprEVjYL1ZVj28appGqs4tueNRoxl7jf4jpD6sDMM32scwmUcCA6K3yqk/F/WVj4MYdn7ETtACCZ9m08EUzksrWOaAb86jqm7k1+mM5xu6lbN3dSua1lKxsNFi0CgYEAtwrwuVupz+GmMna7DtW9S2q0ZwgSoUEcELqcXq2cwAPutrd4rh/xS1xsZZNGqnyT1b3/6vFT2zAyxUiL3o+bhDEEv5HcRJ2rugIhUq2dPAJMYf+kBAFONakir2wHwUUXIkaEHecwxsaI8rsTnXDW+anbJogZSLNcFOBydOaBLe8CgYBKDZknsibxxUlsEI4Ch8cmNR03iBLjCFq9sly0wuSLetzDyzw7Z8pgYSQDbd5lZWXS+B8OaTQ/U7auT7+SeU9P0CvJdgjybQ97mhcZKMclSEV5/5dBHxHVwUOaPsntC7/oP5jNRJjMilyGrxWywEsSs1eT/ZnMqJm0HPzzcdFBxQKBgQAMOkTefQsZAf/yOxA/63NbyGMIxvdHomvXij/L61kfUqPtvM/pAeVCnYf4OSBtXykZDDo+XaS2bb/WggQl9/3xlLy2d235f3brVB0ZwtNQIO8tVMCGK/gniYbxpQvXk1/6QC+vN7SAct7PKEQlLlaOExS6vDjELIcoNd4vhP54LQKBgQAOE7+S2AdjUEVXqWBPnlidZV08HMduy3yZ7mblCX0dA07/ozuM/WOfk92cgqcLddOmsbYdTuqTq1sB98v1QN1RwYe9Eiw0dmfbFlQcXT1YAZVfHNQOMO2xI4gJtkNGUqg1HQsYghOO2wkNHSMCNsoq9GWeIzCF2q6/7oH74jfoaQ==-----END RSA PRIVATE KEY-----"
        );
        var f = new EcRemoteLinkedData(General.context, "testType");
        f["name"] = "My_File.txt";
        f["mimeType"] = "text/plain";
        f["data"] = "BASE64ENCODEDDATA";
        f.generateId("http://localhost:9722/api");
        f["checksum"] = "ABC123";
        f.addOwner(ppk.toPk());
        await f.signWith(ppk);
        console.log("Signature: " + f.signature[0]);
        Assert.assertTrue("Signature Verification", (await f.verify()));
        f.removeOwner(ppk.toPk());
        Assert.assertTrue("Removed Owner Verification", !(await f.verify()));
        f.addOwner(ppk2.toPk());
        f.addOwner(ppk.toPk());
        await f.signWith(ppk);
        console.log("Signature: " + f.signature[0]);
        Assert.assertTrue(
            "Multi Owner Single Signature Verification",
            await f.verify()
        );
        f.signWith(ppk2);
        Assert.assertTrue(
            "Multi Owner Multi Signature Verification",
            await f.verify()
        );
        f.signature[0] = "z" + f.signature[0].substring(1);
        console.log("Tampered Signature: " + f.signature[0]);
        Assert.assertFalse("Tampered Signature Verification", await f.verify());
    };
}
class EcContactTest {
    encryptContactTest = function () {
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var contact = new EcContact();
        contact.pk = ppk.toPk();
        contact.displayName = "Test Person";
        contact.source = "http://sandbox.service.cassproject.org";
        var secret = EcAes.newIv(32);
        console.log("Secret: " + secret);
        console.log("Encrypting contact...");
        var encryptedContact = contact.toEncryptedContact(secret);
        console.log("Decrypting contact...");
        var decryptedContact = EcContact.fromEncryptedContact(
            encryptedContact,
            secret,
            contact.source
        );
        console.log("OK.");
        Assert.assertTrue(
            contact.pk.toPem().equals(decryptedContact.pk.toPem())
        );
        Assert.assertTrue(
            contact.displayName.equals(decryptedContact.displayName)
        );
    };
}
class EcRepositoryTest {
    static server = "http://localhost/api/";
    begin = function () { };
    createPublicObjectTest = async function () {
        var r = new EcRepository();
        r.selectedServer = EcRepositoryTest.server;
        var thing = new EcRemoteLinkedData(
            General.context,
            General.context + "/test"
        );
        thing.id = EcRepositoryTest.server;
        if (!thing.id.endsWith("/")) thing.id += "/";
        thing.id += "data/";
        thing.id += thing.type
            .replace("http://", "")
            .replace("https://", "")
            .replaceAll("/", ".");
        thing.id += "/";
        thing.id += "test-public-object";
        thing["name"] = "Test Public Object";
        console.log("-----Saving Public Object...-----");
        await EcRepository.save(
            thing,
            function (p1) {
                console.log("Saved.");
            },
            function (p1) {
                console.log("Failed to save.");
                console.log(p1);
                Assert.fail("Failed to save object.");
            }
        );
        console.log("-----Retrieving Public Object...-----");
        thing = await EcRepository.get(
            thing.shortId(),
            function (p1) {
                var retrieved = p1;
                if (retrieved.owner != null)
                    Assert.assertEquals(
                        "File is not Public, has an owner",
                        retrieved.owner.length,
                        0
                    );
                Assert.assertEquals(
                    "Name Does Not Match Saved Object Name",
                    thing["name"],
                    retrieved.name
                );
                Assert.assertEquals(
                    "ID Does Not Match Saved Object ID",
                    thing.id,
                    retrieved.id
                );
                console.log("Retrieved Unchanged.");
            },
            function (p1) {
                console.log("Failed to retrieve");
                console.log(p1);
                Assert.fail("Failed to retrieve public object after save.");
            }
        );
        console.log("thing: " + thing);
        var thing2 = new EcRemoteLinkedData(
            General.context,
            General.context + "/test"
        );
        thing2.copyFrom(thing);
        thing["name"] = "Changed Public Object Name";
        console.log("-----Updating Public Object...-----");
        await EcRepository.save(
            thing2,
            function (p1) {
                console.log("Updated.");
            },
            function (p1) {
                console.log("Failed to update.");
                console.log(p1);
                Assert.fail("Failed to update object.");
            }
        );
        console.log("-----Retrieving After update...-----");
        await EcRepository.get(
            thing2.shortId(),
            function (p1) {
                var retrieved = p1;
                if (retrieved.owner != null)
                    Assert.assertEquals(
                        "File is not Public, has an owner",
                        retrieved.owner.length,
                        0
                    );
                Assert.assertEquals(
                    "Name Does Not Match Saved Object Name",
                    thing2["name"],
                    retrieved.name
                );
                Assert.assertEquals(
                    "ID Does Not Match Saved Object ID",
                    thing2.id,
                    retrieved.id
                );
                console.log("Retrieved Unchanged.");
            },
            function (p1) {
                console.log("Failed to retrieve after update");
                console.log(p1);
                Assert.fail("Failed to retrieve public object after update.");
            }
        );
        console.log("-----Trying to Delete...-----");
        await EcRepository._delete(
            thing,
            function (p1) {
                console.log("Good, Can Delete Public Object.");
                console.log(p1);
            },
            function (p1) {
                Assert.fail(
                    "Could not delete public object. This is now allowed (10/26/2016)."
                );
            }
        );
    };
    createPublicRegisteredObjectTest = async function () {
        var r = new EcRepository();
        r.selectedServer = EcRepositoryTest.server;
        var thing = new EcRemoteLinkedData(
            General.context,
            General.context + "/test"
        );
        thing.id = "http://cnn.com";
        if (!thing.id.endsWith("/")) thing.id += "/";
        thing.id += "dunno/";
        thing.id += thing.type
            .replace("http://", "")
            .replace("https://", "")
            .replaceAll("/", ".");
        thing.id += "/";
        thing.id += "test-public-object";
        thing.id += "/";
        thing["name"] = "Test Public Registered Object";
        console.log("Saving Public Registered Object...");
        await r.saveTo(
            thing,
            function (p1) {
                console.log("Saved.");
            },
            function (p1) {
                console.log("Failed to save.");
                console.trace(p1);
                Assert.fail("Failed to save object.");
            }
        );
        console.log("Retrieving Public Registered Object...");
        await EcRepository.get(
            thing.shortId(),
            function (p1) {
                var retrieved = p1;
                if (retrieved.owner != null)
                    Assert.assertEquals(
                        "File is not Public, has an owner",
                        retrieved.owner.length,
                        0
                    );
                Assert.assertEquals(
                    "Name Does Not Match Registered Object Name",
                    thing["name"],
                    retrieved.name
                );
                Assert.assertEquals(
                    "ID Does Not Match Registered Object ID",
                    thing.id,
                    retrieved.id
                );
                console.log("Retrieved Unchanged.");
            },
            function (p1) {
                console.log("Failed to retrieve");
                console.trace(p1);
                Assert.fail(
                    "Failed to retrieve public Registered object after save."
                );
            }
        );
        var thing2 = new EcRemoteLinkedData(
            General.context,
            General.context + "/test"
        );
        thing2.copyFrom(thing);
        thing["name"] = "Changed Public Registered Object Name";
        console.log("Updating Public Registered Object...");
        await r.saveTo(
            thing2,
            function (p1) {
                console.log("Updated.");
            },
            function (p1) {
                console.log("Failed to update.");
                console.log(p1);
                Assert.fail("Failed to update object.");
            }
        );
        console.log("Retrieving After update...");
        await EcRepository.get(
            thing2.shortId(),
            function (p1) {
                var retrieved = p1;
                if (retrieved.owner != null)
                    Assert.assertEquals(
                        "File is not Public, has an owner",
                        retrieved.owner.length,
                        0
                    );
                Assert.assertEquals(
                    "Name Does Not Match Registered Object Name",
                    thing2["name"],
                    retrieved.name
                );
                Assert.assertEquals(
                    "ID Does Not Match Registered Object ID",
                    thing2.id,
                    retrieved.id
                );
                console.log("Retrieved Unchanged.");
            },
            function (p1) {
                console.log("Failed to retrieve after update");
                console.log(p1);
                Assert.fail(
                    "Failed to retrieve public Registered object after update."
                );
            }
        );
        console.log("Trying to Delete...");
        await r.deleteRegistered(
            thing,
            function (p1) {
                console.log("Good, Can Delete Public Registered Object.");
                console.log(p1);
            },
            function (p1) {
                Assert.fail(
                    "Could not delete public Registered object. This is now allowed (10/26/2016)."
                );
            }
        );
    };
    createAndDeleteSingleOwnedObjectTest = async function () {
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var thing = new EcRemoteLinkedData(
            General.context,
            General.context + "/test"
        );
        thing.generateId(EcRepositoryTest.server);
        thing["name"] = "Testing Owned Object";
        thing.addOwner(ppk.toPk());
        thing.signWith(ppk);
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId1);
        var r = new EcRepository();
        r.selectedServer = EcRepositoryTest.server;
        console.log("Saving...");
        await EcRepository.save(
            thing,
            function (p1) {
                console.log("Saved.");
            },
            function (p1) {
                console.log("Failed to save.");
                console.log(p1);
                Assert.fail("Failed to save object.");
            }
        );
        EcIdentityManager.default.ids = [];
        console.log("Retrieving...");
        await EcRepository.get(
            thing.shortId(),
            function (p1) {
                var retrieved = p1;
                Assert.assertTrue(
                    "Object is not Owned by the Identity that Created It",
                    retrieved.canEdit(newId1.ppk.toPk())
                );
                Assert.assertEquals(
                    "Name Does Not Match Saved Object Name",
                    thing["name"],
                    retrieved.name
                );
                Assert.assertEquals(
                    "ID Does Not Match Saved Object ID",
                    thing.id,
                    retrieved.id
                );
                console.log("Retrieved Unchanged");
            },
            function (p1) {
                console.log("Failed to retrieve.");
                console.log(p1);
                Assert.fail("Failed to retrieve object after save.");
            }
        );
        console.log("Searching...");
        await r.search(
            '@id:"' + thing.id + '"',
            null,
            function (p1) {
                console.log("Searched.");
                var found = false;
                for (var i = 0; i < p1.length; i++) {
                    if (p1[i].shortId().equals(thing.shortId())) found = true;
                }
                Assert.assertTrue("Unable to find object in search. ", found);
            },
            function (p1) {
                console.log("Failed to search.");
                console.log(p1);
                Assert.fail("Failed to search for object after save.");
            }
        );
        console.log("Trying to delete as public...");
        await EcRepository._delete(
            thing,
            function (p1) {
                Assert.fail("Deleted the Owned Object as public");
            },
            function (p1) {
                console.log(p1);
                console.log("Denied Access");
            }
        );
        console.log("After trying to delete...");
        EcIdentityManager.default.addIdentity(newId1);
        var thing2 = new EcRemoteLinkedData(
            General.context,
            General.context + "/test"
        );
        thing2.copyFrom(thing);
        thing["name"] = "Changed Object Name";
        console.log("Updating Owned Object...");
        await EcRepository.save(
            thing2,
            function (p1) {
                console.log("Updated.");
            },
            function (p1) {
                console.log("Failed to update.");
                console.log(p1);
                Assert.fail("Failed to update object.");
            }
        );
        console.log("Retrieving Owned Object...");
        await EcRepository.get(
            thing2.shortId(),
            function (p1) {
                var retrieved = p1;
                Assert.assertEquals(
                    "Name Does Not Match Saved Object Name",
                    thing2["name"],
                    retrieved.name
                );
                Assert.assertEquals(
                    "Id Does Not Match Saved Object Id",
                    thing2.id,
                    retrieved.id
                );
                console.log("Retrieved Unchanged.");
            },
            function (p1) {
                console.log("Failed to retrieve");
                console.log(p1);
                Assert.fail("Failed to retrieve public object after save.");
            }
        );
        console.log("Deleting...");
        await EcRepository._delete(
            thing,
            function (p1) {
                console.log("Deleted the Owned Object.");
            },
            function (p1) {
                console.log(p1);
                Assert.fail(
                    "Failed to Delete the Owned Object from Repository"
                );
            }
        );
    };
    createAndDeleteTwoOwnerObjectTest = async function () {
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var ppk2 = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEowIBAAKCAQEAg2cDnkHswuKCvjpFwiXuMoHf9C0qEFupDBalvVscxg7F6qWUSxpISYznkZ/dpXwtrR6w+C5fB+KmTNRUxTl9uT4O1Z4AhJ6b9l6WGQWYlRBZZqXmJwcWnCFcOPGfbVcKHuX7AlIaend7/HC7IudfSiLTcfo6EM7k2xiygrGagW89yEe+Q9DsnruU8UkkT9J7Hzi70RVnc6ovqasqFubECNbIoiFW52AJ2EZYRFCXAAfA2Wb9Tmv170RRjsjBS8TJ+C8WSbtCWOztMnUJlJmQtbiVRnfXRFI9igR4bzpQHmOS1khln9VBo4aiosUeaLNMjs2suEia+6HdLbhZfP26cQIDAQABAoIBAEFu+9tD4t2NJCQMKo6qirn1+IrELs0kh8KwSGpJw8NQuffF6lmXxeVyWCIpJJtygeBShzefB82KbNuXZHstzNCA+awgWQuxW+LMaRwesEOSd6Jo/Hn0yqqG5kCo+YXeMPj/9wXJ0sunUkN784RHCSmGvBpmy6FxFX+RBduVC2ZmPCxsv21HXjGAUled7mzZ/6u7g2Q7nAFd72QLKK3qaLflzfCnqTYqdsIwlR8Lp8F5+FcGQUM9SGv/mdAT9U05ovVuQSB7yToe4d+vV/u+6ixk0TM4RFm7ZWYyXqpuGCy5Logo6aZYWfKWZbKJuGmgwf1przZC3euu91kKR+ui81ECgYEA8QhPYGEG+ExaQ6vQzeLlddxriAQuvfBQR7W82/6UnaBtswolNQdRQ1KeOV8MJ57pYZeZidPq7Xc2tFcrH6FYVF2h+Sxe0jpKFf9CAzqammZjR3c7ddHeif45VeGUM0kdID1baAMvLIJg0e7Q2n/PuEY3FL+5GBlkxJdQnz6r2V0CgYEAi4/ql978ac63ex0Rz898lWMYY60nrJaYBPohpf+CMQ7c/lrretbX2ZoswheVKaho/yn3fpcPnUwh7rTuTLnMjxbl5D7LWfHIA9ZyNqwGZjL525p+pSjPsN3S1NNI8tH8UQ9lMuV/xr3R6vVdZT7UiWr09MUX4DYceKAuoP4/kCUCgYBQq0VVrmOUyokTSPfTUHMXpTPgC/ZQ35MezPZucp/uuXi9iVG2k8Jg08/cx7DbudXGMeTTOjfQTivi46GtLmTPp57ENFNv7M5K2mmPhxejQU1M59zgq+LdMFakJaFiIMA8wAxNnXM2ZFRfLpx75Hby550btqcOJ8GQAkybX3BIiQKBgQCIJGUpr6m1oaTVIV9txC75H4j8Oz7XmrRDLqpCX4TmTGSCb7kExK4dpMuCrzSgRZvfRlYblEr0G/+B99f62sjU0PaD+EmwvS5rp/cUpC095v5cHlLq1Gv+UfXIDTA9R2CGxqjmxIAoJKWxOZfZGziDsOWyHM4Ut1SAy2mRPVROTQKBgD5lboXnZMpRsamgZ5Jwg4bES6npFyPsrNaeJnp6QWz0Q1Ur/dw473VafpeKUZc4/uRRWTtuwooD4x2iCRZzRYAgImyZMeISMOIy8Yt6UZh9AScXsuhOSWiUKj/c1EGjMzMvV59ZzEddXohzMysZ0V/hjVW48HG7ZOcqIAk83Et+-----END RSA PRIVATE KEY-----"
        );
        var thing = new EcRemoteLinkedData(
            General.context,
            General.context + "/test"
        );
        thing.generateId(EcRepositoryTest.server);
        thing["name"] = "Testing Owned Object";
        thing.addOwner(ppk.toPk());
        thing.signWith(ppk);
        ppk2.toPk().toPem();
        var pk2 = EcPk.fromPem(ppk2.toPk().toPem());
        thing.addOwner(pk2);
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId1);
        console.log("Saving...");
        await EcRepository.save(
            thing,
            function (p1) {
                console.log("Saved.");
            },
            function (p1) {
                console.log("Failed to save.");
                console.log(p1);
                Assert.fail("Failed to save object.");
            }
        );
        EcIdentityManager.default.ids = [];
        console.log("Retrieving...");
        await EcRepository.get(
            thing.shortId(),
            function (p1) {
                var retrieved = p1;
                Assert.assertTrue(
                    "Object is not Owned by the Identity that Created It",
                    retrieved.canEdit(newId1.ppk.toPk())
                );
                Assert.assertEquals(
                    "Name Does Not Match Saved Object Name",
                    thing["name"],
                    retrieved.name
                );
                Assert.assertEquals(
                    "Name Does Not Match Saved Object Name",
                    thing.id,
                    retrieved.id
                );
                console.log("Retrieved Unchanged");
            },
            function (p1) {
                console.log("Failed to retrieve.");
                console.log(p1);
                Assert.fail("Failed to retrieve object after save.");
            }
        );
        var r = new EcRepository();
        r.selectedServer = EcRepositoryTest.server;
        console.log("Searching...");
        await r.search(
            '@id:"' + thing.id + '"',
            null,
            function (p1) {
                var found = false;
                for (var i = 0; i < p1.length; i++) {
                    if (p1[i].shortId().equals(thing.shortId())) found = true;
                }
                Assert.assertTrue("Unable to find object in search. ", found);
            },
            function (p1) {
                console.log("Failed to search.");
                console.log(p1);
                Assert.fail("Failed to search for object after save.");
            }
        );
        var newId2 = new EcIdentity();
        newId2.ppk = ppk2;
        EcIdentityManager.default.addIdentity(newId2);
        var thing2 = new EcRemoteLinkedData(
            General.context,
            General.context + "/test"
        );
        thing2.copyFrom(thing);
        thing["name"] = "Changed Object Name";
        console.log("Updating Owned Object as owner 2...");
        await EcRepository.save(
            thing2,
            function (p1) {
                console.log("Updated.");
            },
            function (p1) {
                console.log("Failed to update.");
                console.log(p1);
                Assert.fail("Failed to update object.");
            }
        );
        console.log("Retrieving Owned Object as owner 2...");
        await EcRepository.get(
            thing2.shortId(),
            function (p1) {
                var retrieved = p1;
                Assert.assertEquals(
                    "Name Does Not Match Saved Object Name",
                    thing2["name"],
                    retrieved.name
                );
                Assert.assertEquals(
                    "Id Does Not Match Saved Object Id",
                    thing2.id,
                    retrieved.id
                );
                console.log("Retrieved Unchanged.");
            },
            function (p1) {
                console.log("Failed to retrieve");
                console.log(p1);
                Assert.fail("Failed to retrieve public object after save.");
            }
        );
        console.log("Deleting...");
        await EcRepository._delete(
            thing,
            function (p1) {
                console.log("Deleted the Owned Object.");
            },
            function (p1) {
                console.trace(p1);
                Assert.fail(
                    "Failed to Delete the Owned Object from Repository"
                );
            }
        );
    };
    searchForSomethingThatCantExist = async function () {
        var r = new EcRepository();
        r.selectedServer = EcRepositoryTest.server;
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        console.log("Searching...");
        await r.search(
            '@type:"http://schema.eduworks.com/general/0.2/nonsense"',
            null,
            function (p1) {
                console.log(p1);
                Assert.assertTrue(true);
            },
            function (p1) {
                console.log("Failed to search.");
                console.log(p1);
                Assert.fail(
                    "Failed to search for object that doesn't have an existing type in the database."
                );
            }
        );
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId1);
        console.log("Searching...");
        await r.search(
            '@type:"http://schema.eduworks.com/general/0.2/nonsense"',
            null,
            function (p1) {
                console.log(p1);
                Assert.assertTrue(true);
            },
            function (p1) {
                console.log("Failed to search w/signature.");
                console.log(p1);
                Assert.fail(
                    "Failed to search for object that doesn't have an existing type in the database (using a signature)."
                );
            }
        );
    };
}
class EcEncryptedValueTest {
    static server = "http://localhost/api/";
    begin = async function () {
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var ppk2 = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAl4oeWRsroJqAR8UXkmkhDHMcRaDM6a9wsFWNkokyugMevv5TtwHVrm9HMJqVlXn1U1AiVS1rEYB7Iavi2IE7e8WV6GkLrGTrce+YcqhrwF3g104ZEuIC2aFCcLrxvXbSqmmuddS3lRMEwqdWkYIS7MKRSKUBpbydl8wScYxjzUSMNzQrvgUpNc//N7GkpEFXYLjYmVWhYdUp578nw/K9StRqTfku8U+Ub86U0mHXowms4spV8IoOlV53OLpOL+8QwcQYZ+koWL4B0rhz6cvelvBAFygx94t8IzZtRiBniaTF+1nBjyj4+R8PdprxFNnM+S2IQBqUdBKJ3oDoKMqdAwIDAQABAoIBAC3BWmB1P7sCa3FAJVnjvELSDttHLhfxDQlxC4oPOu3HO2VXzVcYirhciRY31qqHZHd/Xp5xVD64mHUWPSw5+QfqJNVDwm6PGjgQq+sSx1YSAm1/+zokW8/yTOlUyOD4G6uwtSiGzdeJIorTk+PjbmtmZA+XIuQ0CzFmQLtgNFIpxRmDKLZrjEO5NSaeStZRgi+WVkgfOnvQvWtFK8/djeXfb4f3BnquCRKjm/cOjtdqBHcFq7Fzlyh0U64XXcJPPgBX3hLNK7mr0ZBCwUDOUs0Xna0a/2FHsjESPX7grZ9J1fbkXRwUrSJ04zbeijqROkjni7wokT+HiWtVcZ/HLOECgYEA0/CykuniBAE+Oqt+qj1OEQSnyiENJffnSzeOOjI17ygxcXYFxprEVjYL1ZVj28appGqs4tueNRoxl7jf4jpD6sDMM32scwmUcCA6K3yqk/F/WVj4MYdn7ETtACCZ9m08EUzksrWOaAb86jqm7k1+mM5xu6lbN3dSua1lKxsNFi0CgYEAtwrwuVupz+GmMna7DtW9S2q0ZwgSoUEcELqcXq2cwAPutrd4rh/xS1xsZZNGqnyT1b3/6vFT2zAyxUiL3o+bhDEEv5HcRJ2rugIhUq2dPAJMYf+kBAFONakir2wHwUUXIkaEHecwxsaI8rsTnXDW+anbJogZSLNcFOBydOaBLe8CgYBKDZknsibxxUlsEI4Ch8cmNR03iBLjCFq9sly0wuSLetzDyzw7Z8pgYSQDbd5lZWXS+B8OaTQ/U7auT7+SeU9P0CvJdgjybQ97mhcZKMclSEV5/5dBHxHVwUOaPsntC7/oP5jNRJjMilyGrxWywEsSs1eT/ZnMqJm0HPzzcdFBxQKBgQAMOkTefQsZAf/yOxA/63NbyGMIxvdHomvXij/L61kfUqPtvM/pAeVCnYf4OSBtXykZDDo+XaS2bb/WggQl9/3xlLy2d235f3brVB0ZwtNQIO8tVMCGK/gniYbxpQvXk1/6QC+vN7SAct7PKEQlLlaOExS6vDjELIcoNd4vhP54LQKBgQAOE7+S2AdjUEVXqWBPnlidZV08HMduy3yZ7mblCX0dA07/ozuM/WOfk92cgqcLddOmsbYdTuqTq1sB98v1QN1RwYe9Eiw0dmfbFlQcXT1YAZVfHNQOMO2xI4gJtkNGUqg1HQsYghOO2wkNHSMCNsoq9GWeIzCF2q6/7oH74jfoaQ==-----END RSA PRIVATE KEY-----"
        );
        var r = new EcRepository();
        r.selectedServer = EcEncryptedValueTest.server;
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        var newId2 = new EcIdentity();
        newId2.ppk = ppk2;
        EcIdentityManager.default.addIdentity(newId1);
        EcIdentityManager.default.addIdentity(newId2);
        await r.search(
            '"' + ppk.toPk().toPem() + '"',
            function (ecRemoteLinkedData) {
                return EcRepository._delete(ecRemoteLinkedData, null, null);
            },
            function (p1) { },
            function (p1) {
                console.log("Could not find objects to delete");
            }
        );
        EcIdentityManager.default.clearIdentities();
    };
    encryptDecryptTest = async function () {
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var ppk2 = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAl4oeWRsroJqAR8UXkmkhDHMcRaDM6a9wsFWNkokyugMevv5TtwHVrm9HMJqVlXn1U1AiVS1rEYB7Iavi2IE7e8WV6GkLrGTrce+YcqhrwF3g104ZEuIC2aFCcLrxvXbSqmmuddS3lRMEwqdWkYIS7MKRSKUBpbydl8wScYxjzUSMNzQrvgUpNc//N7GkpEFXYLjYmVWhYdUp578nw/K9StRqTfku8U+Ub86U0mHXowms4spV8IoOlV53OLpOL+8QwcQYZ+koWL4B0rhz6cvelvBAFygx94t8IzZtRiBniaTF+1nBjyj4+R8PdprxFNnM+S2IQBqUdBKJ3oDoKMqdAwIDAQABAoIBAC3BWmB1P7sCa3FAJVnjvELSDttHLhfxDQlxC4oPOu3HO2VXzVcYirhciRY31qqHZHd/Xp5xVD64mHUWPSw5+QfqJNVDwm6PGjgQq+sSx1YSAm1/+zokW8/yTOlUyOD4G6uwtSiGzdeJIorTk+PjbmtmZA+XIuQ0CzFmQLtgNFIpxRmDKLZrjEO5NSaeStZRgi+WVkgfOnvQvWtFK8/djeXfb4f3BnquCRKjm/cOjtdqBHcFq7Fzlyh0U64XXcJPPgBX3hLNK7mr0ZBCwUDOUs0Xna0a/2FHsjESPX7grZ9J1fbkXRwUrSJ04zbeijqROkjni7wokT+HiWtVcZ/HLOECgYEA0/CykuniBAE+Oqt+qj1OEQSnyiENJffnSzeOOjI17ygxcXYFxprEVjYL1ZVj28appGqs4tueNRoxl7jf4jpD6sDMM32scwmUcCA6K3yqk/F/WVj4MYdn7ETtACCZ9m08EUzksrWOaAb86jqm7k1+mM5xu6lbN3dSua1lKxsNFi0CgYEAtwrwuVupz+GmMna7DtW9S2q0ZwgSoUEcELqcXq2cwAPutrd4rh/xS1xsZZNGqnyT1b3/6vFT2zAyxUiL3o+bhDEEv5HcRJ2rugIhUq2dPAJMYf+kBAFONakir2wHwUUXIkaEHecwxsaI8rsTnXDW+anbJogZSLNcFOBydOaBLe8CgYBKDZknsibxxUlsEI4Ch8cmNR03iBLjCFq9sly0wuSLetzDyzw7Z8pgYSQDbd5lZWXS+B8OaTQ/U7auT7+SeU9P0CvJdgjybQ97mhcZKMclSEV5/5dBHxHVwUOaPsntC7/oP5jNRJjMilyGrxWywEsSs1eT/ZnMqJm0HPzzcdFBxQKBgQAMOkTefQsZAf/yOxA/63NbyGMIxvdHomvXij/L61kfUqPtvM/pAeVCnYf4OSBtXykZDDo+XaS2bb/WggQl9/3xlLy2d235f3brVB0ZwtNQIO8tVMCGK/gniYbxpQvXk1/6QC+vN7SAct7PKEQlLlaOExS6vDjELIcoNd4vhP54LQKBgQAOE7+S2AdjUEVXqWBPnlidZV08HMduy3yZ7mblCX0dA07/ozuM/WOfk92cgqcLddOmsbYdTuqTq1sB98v1QN1RwYe9Eiw0dmfbFlQcXT1YAZVfHNQOMO2xI4gJtkNGUqg1HQsYghOO2wkNHSMCNsoq9GWeIzCF2q6/7oH74jfoaQ==-----END RSA PRIVATE KEY-----"
        );
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
        EcIdentityManager.default.addIdentity(newId1);
        var v = null;
        console.log("Encrypting: " + f.name);
        v = await EcEncryptedValue.encryptValueOld(
            f.name,
            f.id,
            ppk.toPk().toPem()
        );
        console.log("Encrypted object: " + v.toJson());
        Assert.assertTrue(
            "Owner exists in encrypted object.",
            v.hasOwner(ppk.toPk())
        );
        console.log("Decrypting to verify...");
        let decrypted = await v.decryptIntoString();
        Assert.assertTrue("Owner can decrypt object.", decrypted == f.name);
        var readers = [];
        readers.push(ppk2.toPk().toPem());
        var v2 = null;
        console.log("Encrypting: " + f.name);
        v2 = await EcEncryptedValue.encryptValue(
            f.name,
            f.id,
            f.owner,
            readers
        );
        console.log("Encrypted object: " + v2.toJson());
        var newId2 = new EcIdentity();
        newId2.ppk = ppk2;
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId2);
        Assert.assertTrue(
            "Reader Decryption:",
            await v2.decryptIntoString() == f.name
        );
    };
    encryptObjectUploadDownloadDecryptTest = async function () {
        console.log("Encrypted Object Upload Download then Decrypt Test.");
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var ppk2 = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAl4oeWRsroJqAR8UXkmkhDHMcRaDM6a9wsFWNkokyugMevv5TtwHVrm9HMJqVlXn1U1AiVS1rEYB7Iavi2IE7e8WV6GkLrGTrce+YcqhrwF3g104ZEuIC2aFCcLrxvXbSqmmuddS3lRMEwqdWkYIS7MKRSKUBpbydl8wScYxjzUSMNzQrvgUpNc//N7GkpEFXYLjYmVWhYdUp578nw/K9StRqTfku8U+Ub86U0mHXowms4spV8IoOlV53OLpOL+8QwcQYZ+koWL4B0rhz6cvelvBAFygx94t8IzZtRiBniaTF+1nBjyj4+R8PdprxFNnM+S2IQBqUdBKJ3oDoKMqdAwIDAQABAoIBAC3BWmB1P7sCa3FAJVnjvELSDttHLhfxDQlxC4oPOu3HO2VXzVcYirhciRY31qqHZHd/Xp5xVD64mHUWPSw5+QfqJNVDwm6PGjgQq+sSx1YSAm1/+zokW8/yTOlUyOD4G6uwtSiGzdeJIorTk+PjbmtmZA+XIuQ0CzFmQLtgNFIpxRmDKLZrjEO5NSaeStZRgi+WVkgfOnvQvWtFK8/djeXfb4f3BnquCRKjm/cOjtdqBHcFq7Fzlyh0U64XXcJPPgBX3hLNK7mr0ZBCwUDOUs0Xna0a/2FHsjESPX7grZ9J1fbkXRwUrSJ04zbeijqROkjni7wokT+HiWtVcZ/HLOECgYEA0/CykuniBAE+Oqt+qj1OEQSnyiENJffnSzeOOjI17ygxcXYFxprEVjYL1ZVj28appGqs4tueNRoxl7jf4jpD6sDMM32scwmUcCA6K3yqk/F/WVj4MYdn7ETtACCZ9m08EUzksrWOaAb86jqm7k1+mM5xu6lbN3dSua1lKxsNFi0CgYEAtwrwuVupz+GmMna7DtW9S2q0ZwgSoUEcELqcXq2cwAPutrd4rh/xS1xsZZNGqnyT1b3/6vFT2zAyxUiL3o+bhDEEv5HcRJ2rugIhUq2dPAJMYf+kBAFONakir2wHwUUXIkaEHecwxsaI8rsTnXDW+anbJogZSLNcFOBydOaBLe8CgYBKDZknsibxxUlsEI4Ch8cmNR03iBLjCFq9sly0wuSLetzDyzw7Z8pgYSQDbd5lZWXS+B8OaTQ/U7auT7+SeU9P0CvJdgjybQ97mhcZKMclSEV5/5dBHxHVwUOaPsntC7/oP5jNRJjMilyGrxWywEsSs1eT/ZnMqJm0HPzzcdFBxQKBgQAMOkTefQsZAf/yOxA/63NbyGMIxvdHomvXij/L61kfUqPtvM/pAeVCnYf4OSBtXykZDDo+XaS2bb/WggQl9/3xlLy2d235f3brVB0ZwtNQIO8tVMCGK/gniYbxpQvXk1/6QC+vN7SAct7PKEQlLlaOExS6vDjELIcoNd4vhP54LQKBgQAOE7+S2AdjUEVXqWBPnlidZV08HMduy3yZ7mblCX0dA07/ozuM/WOfk92cgqcLddOmsbYdTuqTq1sB98v1QN1RwYe9Eiw0dmfbFlQcXT1YAZVfHNQOMO2xI4gJtkNGUqg1HQsYghOO2wkNHSMCNsoq9GWeIzCF2q6/7oH74jfoaQ==-----END RSA PRIVATE KEY-----"
        );
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
        EcIdentityManager.default.addIdentity(newId1);
        var v = null;
        console.log("Encrypting: " + f.name);
        v = await EcEncryptedValue.toEncryptedValue(f, false);
        console.log("Encrypted object: " + v.toJson());
        Assert.assertTrue(
            "Owner exists in encrypted object.",
            v.hasOwner(ppk.toPk())
        );
        await EcRepository.save(
            v,
            function (p1) {
                console.log("Saved.");
            },
            function (p1) {
                console.log("Failed to save.");
                console.log(p1);
                Assert.fail("Failed to save object.");
            }
        );
        await EcRepository.get(
            v.shortId(),
            async function (p1) {
                console.log("Read.");
                var val = new EcEncryptedValue();
                val.copyFrom(p1);
                var decryptedObject = await val.decryptIntoObject();
                var file = new GeneralFile();
                file.copyFrom(decryptedObject);
                Assert.assertTrue(file.name == f.name);
            },
            function (p1) {
                console.trace(p1);
                Assert.fail("Failed to read object.");
            }
        );
        var r = new EcRepository();
        r.selectedServer = EcEncryptedValueTest.server;
        await EcRepository._delete(
            f,
            function (p1) { },
            function (p1) {
                Assert.fail("Failed to delete object. " + p1);
            }
        );
    };
    encryptValueUploadDownloadDecryptTest = async function () {
        console.log("Encrypted Value Upload Download then Decrypt Test.");
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var ppk2 = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAl4oeWRsroJqAR8UXkmkhDHMcRaDM6a9wsFWNkokyugMevv5TtwHVrm9HMJqVlXn1U1AiVS1rEYB7Iavi2IE7e8WV6GkLrGTrce+YcqhrwF3g104ZEuIC2aFCcLrxvXbSqmmuddS3lRMEwqdWkYIS7MKRSKUBpbydl8wScYxjzUSMNzQrvgUpNc//N7GkpEFXYLjYmVWhYdUp578nw/K9StRqTfku8U+Ub86U0mHXowms4spV8IoOlV53OLpOL+8QwcQYZ+koWL4B0rhz6cvelvBAFygx94t8IzZtRiBniaTF+1nBjyj4+R8PdprxFNnM+S2IQBqUdBKJ3oDoKMqdAwIDAQABAoIBAC3BWmB1P7sCa3FAJVnjvELSDttHLhfxDQlxC4oPOu3HO2VXzVcYirhciRY31qqHZHd/Xp5xVD64mHUWPSw5+QfqJNVDwm6PGjgQq+sSx1YSAm1/+zokW8/yTOlUyOD4G6uwtSiGzdeJIorTk+PjbmtmZA+XIuQ0CzFmQLtgNFIpxRmDKLZrjEO5NSaeStZRgi+WVkgfOnvQvWtFK8/djeXfb4f3BnquCRKjm/cOjtdqBHcFq7Fzlyh0U64XXcJPPgBX3hLNK7mr0ZBCwUDOUs0Xna0a/2FHsjESPX7grZ9J1fbkXRwUrSJ04zbeijqROkjni7wokT+HiWtVcZ/HLOECgYEA0/CykuniBAE+Oqt+qj1OEQSnyiENJffnSzeOOjI17ygxcXYFxprEVjYL1ZVj28appGqs4tueNRoxl7jf4jpD6sDMM32scwmUcCA6K3yqk/F/WVj4MYdn7ETtACCZ9m08EUzksrWOaAb86jqm7k1+mM5xu6lbN3dSua1lKxsNFi0CgYEAtwrwuVupz+GmMna7DtW9S2q0ZwgSoUEcELqcXq2cwAPutrd4rh/xS1xsZZNGqnyT1b3/6vFT2zAyxUiL3o+bhDEEv5HcRJ2rugIhUq2dPAJMYf+kBAFONakir2wHwUUXIkaEHecwxsaI8rsTnXDW+anbJogZSLNcFOBydOaBLe8CgYBKDZknsibxxUlsEI4Ch8cmNR03iBLjCFq9sly0wuSLetzDyzw7Z8pgYSQDbd5lZWXS+B8OaTQ/U7auT7+SeU9P0CvJdgjybQ97mhcZKMclSEV5/5dBHxHVwUOaPsntC7/oP5jNRJjMilyGrxWywEsSs1eT/ZnMqJm0HPzzcdFBxQKBgQAMOkTefQsZAf/yOxA/63NbyGMIxvdHomvXij/L61kfUqPtvM/pAeVCnYf4OSBtXykZDDo+XaS2bb/WggQl9/3xlLy2d235f3brVB0ZwtNQIO8tVMCGK/gniYbxpQvXk1/6QC+vN7SAct7PKEQlLlaOExS6vDjELIcoNd4vhP54LQKBgQAOE7+S2AdjUEVXqWBPnlidZV08HMduy3yZ7mblCX0dA07/ozuM/WOfk92cgqcLddOmsbYdTuqTq1sB98v1QN1RwYe9Eiw0dmfbFlQcXT1YAZVfHNQOMO2xI4gJtkNGUqg1HQsYghOO2wkNHSMCNsoq9GWeIzCF2q6/7oH74jfoaQ==-----END RSA PRIVATE KEY-----"
        );
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
        EcIdentityManager.default.addIdentity(newId1);
        f["encryptedName"] = await EcEncryptedValue.encryptValue(
            f.name,
            f.shortId(),
            f.owner,
            null
        );
        console.log(f.toJson());
        await EcRepository.save(
            f,
            function (p1) {
                console.log("Saved.");
            },
            function (p1) {
                console.log("Failed to save.");
                console.log(p1);
                Assert.fail("Failed to save object.");
            }
        );
        await EcRepository.get(
            f.shortId(),
            async function (p1) {
                console.log("Read.");
                var val = new GeneralFile();
                console.log(p1.toJson());
                val.copyFrom(p1);
                console.log(val.toJson());
                var val1 = new EcEncryptedValue();
                val1.copyFrom(val["encryptedName"]);
                console.log("Encrypted, downloaded = " + val1.toJson());
                var decryptIntoString = await val1.decryptIntoString();
                console.log("Decrypted = " + decryptIntoString);
                Assert.assertTrue(decryptIntoString == "My_File.txt");
            },
            function (p1) {
                console.error(p1);
                Assert.fail("Failed to read object.");
            }
        );
        var r = new EcRepository();
        r.selectedServer = EcEncryptedValueTest.server;
        await EcRepository._delete(
            f,
            function (p1) { },
            function (p1) {
                Assert.fail("Failed to delete object. " + p1);
            }
        );
    };
    encryptValueWithReaderUploadSearchByPkWithSignatureTest = async function () {
        console.log(
            "encryptValueWithReaderUploadSearchByPkWithSignatureTest Test."
        );
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var ppk2 = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAl4oeWRsroJqAR8UXkmkhDHMcRaDM6a9wsFWNkokyugMevv5TtwHVrm9HMJqVlXn1U1AiVS1rEYB7Iavi2IE7e8WV6GkLrGTrce+YcqhrwF3g104ZEuIC2aFCcLrxvXbSqmmuddS3lRMEwqdWkYIS7MKRSKUBpbydl8wScYxjzUSMNzQrvgUpNc//N7GkpEFXYLjYmVWhYdUp578nw/K9StRqTfku8U+Ub86U0mHXowms4spV8IoOlV53OLpOL+8QwcQYZ+koWL4B0rhz6cvelvBAFygx94t8IzZtRiBniaTF+1nBjyj4+R8PdprxFNnM+S2IQBqUdBKJ3oDoKMqdAwIDAQABAoIBAC3BWmB1P7sCa3FAJVnjvELSDttHLhfxDQlxC4oPOu3HO2VXzVcYirhciRY31qqHZHd/Xp5xVD64mHUWPSw5+QfqJNVDwm6PGjgQq+sSx1YSAm1/+zokW8/yTOlUyOD4G6uwtSiGzdeJIorTk+PjbmtmZA+XIuQ0CzFmQLtgNFIpxRmDKLZrjEO5NSaeStZRgi+WVkgfOnvQvWtFK8/djeXfb4f3BnquCRKjm/cOjtdqBHcFq7Fzlyh0U64XXcJPPgBX3hLNK7mr0ZBCwUDOUs0Xna0a/2FHsjESPX7grZ9J1fbkXRwUrSJ04zbeijqROkjni7wokT+HiWtVcZ/HLOECgYEA0/CykuniBAE+Oqt+qj1OEQSnyiENJffnSzeOOjI17ygxcXYFxprEVjYL1ZVj28appGqs4tueNRoxl7jf4jpD6sDMM32scwmUcCA6K3yqk/F/WVj4MYdn7ETtACCZ9m08EUzksrWOaAb86jqm7k1+mM5xu6lbN3dSua1lKxsNFi0CgYEAtwrwuVupz+GmMna7DtW9S2q0ZwgSoUEcELqcXq2cwAPutrd4rh/xS1xsZZNGqnyT1b3/6vFT2zAyxUiL3o+bhDEEv5HcRJ2rugIhUq2dPAJMYf+kBAFONakir2wHwUUXIkaEHecwxsaI8rsTnXDW+anbJogZSLNcFOBydOaBLe8CgYBKDZknsibxxUlsEI4Ch8cmNR03iBLjCFq9sly0wuSLetzDyzw7Z8pgYSQDbd5lZWXS+B8OaTQ/U7auT7+SeU9P0CvJdgjybQ97mhcZKMclSEV5/5dBHxHVwUOaPsntC7/oP5jNRJjMilyGrxWywEsSs1eT/ZnMqJm0HPzzcdFBxQKBgQAMOkTefQsZAf/yOxA/63NbyGMIxvdHomvXij/L61kfUqPtvM/pAeVCnYf4OSBtXykZDDo+XaS2bb/WggQl9/3xlLy2d235f3brVB0ZwtNQIO8tVMCGK/gniYbxpQvXk1/6QC+vN7SAct7PKEQlLlaOExS6vDjELIcoNd4vhP54LQKBgQAOE7+S2AdjUEVXqWBPnlidZV08HMduy3yZ7mblCX0dA07/ozuM/WOfk92cgqcLddOmsbYdTuqTq1sB98v1QN1RwYe9Eiw0dmfbFlQcXT1YAZVfHNQOMO2xI4gJtkNGUqg1HQsYghOO2wkNHSMCNsoq9GWeIzCF2q6/7oH74jfoaQ==-----END RSA PRIVATE KEY-----"
        );
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
        EcIdentityManager.default.addIdentity(newId1);
        var readers = [];
        readers.push(ppk2.toPk().toPem());
        f["encryptedName"] = await EcEncryptedValue.encryptValue(
            f.name,
            f.shortId(),
            f.owner,
            readers
        );
        console.log(f.toJson());
        await EcRepository.save(
            f,
            function (p1) {
                console.log("Saved.");
            },
            function (p1) {
                console.log("Failed to save.");
                console.log(p1);
                Assert.fail("Failed to save object.");
            }
        );
        var eachCallback = function (p1) { };
        var success = function (p1) {
            var found = false;
            for (var i = 0; i < p1.length; i++) {
                if (p1[i].shortId() == f.shortId()) found = true;
            }
            Assert.assertTrue(found);
        };
        var successInvert = function (p1) {
            var found = false;
            for (var i = 0; i < p1.length; i++) {
                if (p1[i].shortId() == f.shortId()) found = true;
            }
            Assert.assertTrue(!found);
        };
        var failure = function (p1) {
            Assert.fail(p1);
        };
        try {
            var o = {};
            o["size"] = 5000;
            console.log("ID Search, searching with signature 1.");
            await r.searchWithParams(
                '@id:"' + f.shortId() + '"',
                o,
                eachCallback,
                success,
                failure
            );
            console.log(
                "Owner Search, searching for signature 1 using signature 1 signatureSheet."
            );
            await r.searchWithParams(
                '\\*owner:"' + ppk.toPk().toPem() + '"',
                o,
                eachCallback,
                success,
                failure
            );
            console.log(
                "Owner Search minus whitespace, searching for signature 1 using signature 1 signatureSheet."
            );
            await r.searchWithParams(
                '\\*owner:"' +
                ppk
                    .toPk()
                    .toPem()
                    .replaceAll("\r", "")
                    .replaceAll("\n", "") +
                '"',
                o,
                eachCallback,
                success,
                failure
            );
            console.log(
                "Reader Search, searching for signature 2 using signature 1 signatureSheet."
            );
            await r.searchWithParams(
                '\\*reader:"' +
                ppk2.toPk().toPem() +
                '" OR \\*reader:"' +
                ppk2.toPk().toPem() +
                '"',
                o,
                eachCallback,
                success,
                failure
            );
            console.log(
                "Reader Search minus whitespace, searching for signature 2 using signature 1 signatureSheet."
            );
            await r.searchWithParams(
                '\\*reader:"' +
                ppk2
                    .toPk()
                    .toPem()
                    .replaceAll("\r", "")
                    .replaceAll("\n", "") +
                '" OR \\*reader:"' +
                ppk2
                    .toPk()
                    .toPem()
                    .replaceAll("\r", "")
                    .replaceAll("\n", "") +
                '"',
                o,
                eachCallback,
                success,
                failure
            );
            console.log(
                "_all Search, searching for signature 1 using signature 1 signatureSheet."
            );
            await r.searchWithParams(
                '"' + ppk.toPk().toPem() + '"',
                o,
                eachCallback,
                success,
                failure
            );
            console.log(
                "_all Search minus whitespace, searching for signature 1 using signature 1 signatureSheet."
            );
            await r.searchWithParams(
                '"' +
                ppk
                    .toPk()
                    .toPem()
                    .replaceAll("\r", "")
                    .replaceAll("\n", "") +
                '"',
                o,
                eachCallback,
                success,
                failure
            );
            EcIdentityManager.default.ids = [];
            EcIdentityManager.default.addIdentity(newId2);
            console.log("ID Search, searching with signature 2.");
            await r.searchWithParams(
                '@id:"' + f.shortId() + '"',
                o,
                eachCallback,
                success,
                failure
            );
            console.log(
                "_all Search, searching for signature 1 using signature 2 signatureSheet."
            );
            await r.searchWithParams(
                '"' + ppk.toPk().toPem() + '"',
                o,
                eachCallback,
                success,
                failure
            );
            EcIdentityManager.default.ids = [];
            EcIdentityManager.default.addIdentity(newId3);
            console.log("ID Search.");
            await r.searchWithParams(
                '@id:"' + f.shortId() + '"',
                o,
                eachCallback,
                successInvert,
                failure
            );
            console.log("_all Search, searching for signature 1.");
            await r.searchWithParams(
                '"' + ppk.toPk().toPem() + '"',
                o,
                eachCallback,
                successInvert,
                failure
            );
            console.log("Owner Search, searching for signature 1");
            await r.searchWithParams(
                '\\*owner:"' + ppk.toPk().toPem() + '"',
                o,
                eachCallback,
                successInvert,
                failure
            );
            console.log(
                "(SHOULD NOT FIND) Reader Search, searching for signature 2."
            );
            await r.searchWithParams(
                '\\*reader:"' +
                ppk2.toPk().toPem() +
                '" OR \\*reader:"' +
                ppk2.toPk().toPem() +
                '"',
                o,
                eachCallback,
                successInvert,
                failure
            );
            console.log("_all Search, searching for signature 1.");
            await r.searchWithParams(
                '"' + ppk.toPk().toPem() + '"',
                o,
                eachCallback,
                successInvert,
                failure
            );
            console.log(
                "(SHOULD NOT FIND) _all Search, searching for signature 2."
            );
            await r.searchWithParams(
                '"' + ppk2.toPk().toPem() + '"',
                o,
                eachCallback,
                successInvert,
                failure
            );
        } finally {
            EcIdentityManager.default.ids = [];
            EcIdentityManager.default.addIdentity(newId1);
            await EcRepository._delete(
                f,
                function (p1) { },
                function (p1) {
                    Assert.fail("Failed to delete object. " + p1);
                }
            );
        }
    };
    encryptedValueOneOwnerTest = async function () {
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var thing = new EcRemoteLinkedData(
            General.context,
            General.context + "/test"
        );
        thing.generateId(EcEncryptedValueTest.server);
        thing["value"] = "Private Object Value";
        thing.addOwner(ppk.toPk());
        thing.signWith(ppk);
        let encThing = await EcEncryptedValue.toEncryptedValue(thing, false);
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId1);
        console.log("Saving...");
        await EcRepository.save(
            encThing,
            function (p1) {
                console.log("Saved.");
            },
            function (p1) {
                console.log("Failed to save.");
                console.log(p1);
                Assert.fail("Failed to save object.");
            }
        );
        console.log("Retrieving...");
        let val = (await encThing.decryptIntoObject())["value"];
        await EcRepository.get(
            encThing.shortId(),
            async p1 => {
                var retrieved = new EcEncryptedValue();
                retrieved.copyFrom(p1);
                Assert.assertEquals(
                    "ID Does Not Match Saved Object",
                    encThing.id,
                    retrieved.id
                );
                Assert.assertTrue(
                    "Object is not Owned by the Identity that Created It",
                    retrieved.canEdit(newId1.ppk.toPk())
                );
                let val2 = (await retrieved.decryptIntoObject())["value"];
                Assert.assertEquals(
                    "Name Does Not Match Saved Object Name",
                    val,
                    val2
                );
                console.log("Retrieved Unchanged");
            },
            function (p1) {
                console.log("Failed to retrieve.");
                console.log(p1);
                Assert.fail("Failed to retrieve object after save.");
            }
        );
        var r = new EcRepository();
        r.selectedServer = EcEncryptedValueTest.server;
        console.log("Searching...");
        await r.searchWithParams(
            '\\*encryptedType:"' + thing.type + '"',
            { size: 10000 },
            null,
            function (p1) {
                var found = false;
                for (var i = 0; i < p1.length; i++) {
                    if (p1[i].shortId() == thing.shortId()) found = true;
                }
                Assert.assertTrue("Unable to find object in search. ", found);
            },
            function (p1) {
                console.log("Failed to search.");
                console.log(p1);
                Assert.fail("Failed to search for object after save.");
            }
        );
        EcIdentityManager.default.ids = [];
        console.log("Trying to retrieve as public...");
        await EcRepository.get(
            encThing.shortId(),
            function (p1) {
                console.log("Retrieved encrypted object as public");
                if (
                    p1 !== undefined &&
                    p1 !== null &&
                    p1.type != null &&
                    p1.type != ""
                )
                    Assert.fail("Retrieved encrypted object as public");
            },
            function (p1) {
                console.log("Access Denied");
            }
        );
        console.log("Searching public...");
        await r.search(
            '\\*encryptedType:"' + thing.type + '"',
            null,
            function (p1) {
                var found = false;
                for (var i = 0; i < p1.length; i++) {
                    if (p1[i].shortId() == thing.shortId()) found = true;
                }
                Assert.assertFalse("Found the encrypted Object", found);
            },
            function (p1) {
                console.log("Could not find object in search");
            }
        );
        console.log("Deleting as Public...");
        await EcRepository._delete(
            thing,
            function (p1) {
                Assert.fail(
                    "Deleted the Owned Object from Repository as public"
                );
            },
            function (p1) {
                console.log("Failed to Delete the Owned Object.");
                console.log(p1);
            }
        );
        thing["value"] = "Changed Value";
        var encThing2 = await EcEncryptedValue.toEncryptedValue(thing, false);
        console.log("Trying to Update as Public...");
        await EcRepository.save(
            encThing2,
            function (p1) {
                console.log("Saved as public.");
            },
            function (p1) {
                console.log("Failed to save as public.");
                console.log(p1);
            }
        );
        EcIdentityManager.default.addIdentity(newId1);
        console.log("Updating...");
        await EcRepository.save(
            encThing2,
            function (p1) {
                console.log("Updated.");
            },
            function (p1) {
                console.log("Failed to update.");
                console.log(p1);
                Assert.fail("Failed to update object.");
            }
        );
        console.log("Retrieving after update...");
        await EcRepository.get(
            encThing.shortId(),
            function (p1) {
                var retrieved = new EcEncryptedValue();
                retrieved.copyFrom(p1);
                Assert.assertEquals(
                    "ID Does Not Match Saved Object Name",
                    encThing2.id,
                    retrieved.id
                );
                Assert.assertTrue(
                    "Object is not Owned by the Identity that Created It",
                    retrieved.canEdit(newId1.ppk.toPk())
                );
                Assert.assertEquals(
                    "Name Does Not Match Saved Object Name",
                    encThing2.decryptIntoObject()["value"],
                    retrieved.decryptIntoObject()["value"]
                );
                console.log("Retrieved After update");
            },
            function (p1) {
                console.log("Failed to retrieve updates.");
                console.log(p1);
                Assert.fail("Failed to retrieve updated object");
            }
        );
        console.log("Deleting...");
        await EcRepository._delete(
            thing,
            function (p1) {
                console.log("Deleted the Owned Object.");
            },
            function (p1) {
                console.log(p1);
                Assert.fail(
                    "Failed to Delete the Owned Object from Repository"
                );
            }
        );
    };
    encryptedValueTwoOwnerTest = async function () {
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var ppk2 = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEowIBAAKCAQEAg2cDnkHswuKCvjpFwiXuMoHf9C0qEFupDBalvVscxg7F6qWUSxpISYznkZ/dpXwtrR6w+C5fB+KmTNRUxTl9uT4O1Z4AhJ6b9l6WGQWYlRBZZqXmJwcWnCFcOPGfbVcKHuX7AlIaend7/HC7IudfSiLTcfo6EM7k2xiygrGagW89yEe+Q9DsnruU8UkkT9J7Hzi70RVnc6ovqasqFubECNbIoiFW52AJ2EZYRFCXAAfA2Wb9Tmv170RRjsjBS8TJ+C8WSbtCWOztMnUJlJmQtbiVRnfXRFI9igR4bzpQHmOS1khln9VBo4aiosUeaLNMjs2suEia+6HdLbhZfP26cQIDAQABAoIBAEFu+9tD4t2NJCQMKo6qirn1+IrELs0kh8KwSGpJw8NQuffF6lmXxeVyWCIpJJtygeBShzefB82KbNuXZHstzNCA+awgWQuxW+LMaRwesEOSd6Jo/Hn0yqqG5kCo+YXeMPj/9wXJ0sunUkN784RHCSmGvBpmy6FxFX+RBduVC2ZmPCxsv21HXjGAUled7mzZ/6u7g2Q7nAFd72QLKK3qaLflzfCnqTYqdsIwlR8Lp8F5+FcGQUM9SGv/mdAT9U05ovVuQSB7yToe4d+vV/u+6ixk0TM4RFm7ZWYyXqpuGCy5Logo6aZYWfKWZbKJuGmgwf1przZC3euu91kKR+ui81ECgYEA8QhPYGEG+ExaQ6vQzeLlddxriAQuvfBQR7W82/6UnaBtswolNQdRQ1KeOV8MJ57pYZeZidPq7Xc2tFcrH6FYVF2h+Sxe0jpKFf9CAzqammZjR3c7ddHeif45VeGUM0kdID1baAMvLIJg0e7Q2n/PuEY3FL+5GBlkxJdQnz6r2V0CgYEAi4/ql978ac63ex0Rz898lWMYY60nrJaYBPohpf+CMQ7c/lrretbX2ZoswheVKaho/yn3fpcPnUwh7rTuTLnMjxbl5D7LWfHIA9ZyNqwGZjL525p+pSjPsN3S1NNI8tH8UQ9lMuV/xr3R6vVdZT7UiWr09MUX4DYceKAuoP4/kCUCgYBQq0VVrmOUyokTSPfTUHMXpTPgC/ZQ35MezPZucp/uuXi9iVG2k8Jg08/cx7DbudXGMeTTOjfQTivi46GtLmTPp57ENFNv7M5K2mmPhxejQU1M59zgq+LdMFakJaFiIMA8wAxNnXM2ZFRfLpx75Hby550btqcOJ8GQAkybX3BIiQKBgQCIJGUpr6m1oaTVIV9txC75H4j8Oz7XmrRDLqpCX4TmTGSCb7kExK4dpMuCrzSgRZvfRlYblEr0G/+B99f62sjU0PaD+EmwvS5rp/cUpC095v5cHlLq1Gv+UfXIDTA9R2CGxqjmxIAoJKWxOZfZGziDsOWyHM4Ut1SAy2mRPVROTQKBgD5lboXnZMpRsamgZ5Jwg4bES6npFyPsrNaeJnp6QWz0Q1Ur/dw473VafpeKUZc4/uRRWTtuwooD4x2iCRZzRYAgImyZMeISMOIy8Yt6UZh9AScXsuhOSWiUKj/c1EGjMzMvV59ZzEddXohzMysZ0V/hjVW48HG7ZOcqIAk83Et+-----END RSA PRIVATE KEY-----"
        );
        var thing = new EcRemoteLinkedData(
            General.context,
            General.context + "/test"
        );
        thing.generateId(EcEncryptedValueTest.server);
        thing["value"] = "Private Object Value";
        thing["name"] = "Private Object Name";
        thing.addOwner(ppk.toPk());
        thing.signWith(ppk);
        thing.addOwner(EcPk.fromPem(ppk2.toPk().toPem()));
        var encThing = await EcEncryptedValue.toEncryptedValue(thing, false);
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId1);
        console.log("Saving...");
        await EcRepository.save(
            encThing,
            function (p1) {
                console.log("Saved.");
            },
            function (p1) {
                console.log("Failed to save.");
                console.log(p1);
                Assert.fail("Failed to save object.");
            }
        );
        console.log("Retrieving as owner 1...");
        await EcRepository.get(
            encThing.shortId(),
            function (p1) {
                var retrieved = new EcEncryptedValue();
                retrieved.copyFrom(p1);
                Assert.assertTrue(
                    "Object is not Owned by the Identity that Created It",
                    retrieved.canEdit(newId1.ppk.toPk())
                );
                Assert.assertEquals(
                    "Value Does Not Match Saved Object Value",
                    encThing.decryptIntoObject()["name"],
                    retrieved.decryptIntoObject()["name"]
                );
                Assert.assertEquals(
                    "ID Does Not Match Saved Object Name",
                    encThing.id,
                    retrieved.id
                );
                Assert.assertTrue(
                    "Object does not have first owner",
                    retrieved.hasOwner(ppk.toPk())
                );
                Assert.assertTrue(
                    "Object does not have second owner",
                    retrieved.hasOwner(ppk2.toPk())
                );
                console.log("Retrieved Unchanged");
            },
            function (p1) {
                console.log("Failed to retrieve as owner 1.");
                console.log(p1);
                Assert.fail("Failed to retrieve object as owner 1 after save.");
            }
        );
        var r = new EcRepository();
        r.selectedServer = EcEncryptedValueTest.server;
        console.log("Searching as owner 1...");
        await r.searchWithParams(
            '\\*encryptedType:"' + thing.type + '"',
            { size: 10000 },
            null,
            function (p1) {
                console.log(JSON.stringify(p1, null, 2));
                var found = false;
                for (var i = 0; i < p1.length; i++) {
                    if (p1[i].shortId() == thing.shortId()) found = true;
                }
                Assert.assertTrue(
                    "Unable to find object in search as owner 1. ",
                    found
                );
            },
            function (p1) {
                console.log("Failed to search.");
                console.log(p1);
                Assert.fail("Failed to search for object as owner 1.");
            }
        );
        var newId2 = new EcIdentity();
        newId2.ppk = ppk2;
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId2);
        console.log("Retrieving as owner 2...");
        await EcRepository.get(
            encThing.shortId(),
            function (p1) {
                var retrieved = new EcEncryptedValue();
                retrieved.copyFrom(p1);
                Assert.assertTrue(
                    "Object is not Owned by the Identity that Created It",
                    retrieved.canEdit(newId1.ppk.toPk())
                );
                Assert.assertEquals(
                    "Name Does Not Match Saved Object Name",
                    encThing.decryptIntoObject()["name"],
                    retrieved.decryptIntoObject()["name"]
                );
                Assert.assertEquals(
                    "ID Does Not Match Saved Object Name",
                    encThing.id,
                    retrieved.id
                );
                Assert.assertTrue(
                    "Object does not have first owner",
                    retrieved.hasOwner(ppk.toPk())
                );
                Assert.assertTrue(
                    "Object does not have second owner",
                    retrieved.hasOwner(ppk2.toPk())
                );
                console.log("Retrieved Unchanged");
            },
            function (p1) {
                console.log("Failed to retrieve as owner 2.");
                console.log(p1);
                Assert.fail("Failed to retrieve object as owner 2");
            }
        );
        console.log("Searching as owner 2...");
        await r.searchWithParams(
            '\\*encryptedType:"' + thing.type + '"',
            { size: 10000 },
            null,
            function (p1) {
                var found = false;
                for (var i = 0; i < p1.length; i++) {
                    if (p1[i].shortId() == thing.shortId()) found = true;
                }
                Assert.assertTrue(
                    "Unable to find object in search as owner 2. ",
                    found
                );
            },
            function (p1) {
                console.log("Failed to search.");
                console.log(p1);
                Assert.fail("Failed to search for object as owner 2.");
            }
        );
        EcIdentityManager.default.ids = [];
        console.log("Trying to retrieve as public...");
        await EcRepository.get(
            encThing.shortId(),
            function (p1) {
                console.log("Retrieved encrypted object as public");
                if (p1.type != null && !p1.type.equals(""))
                    Assert.fail("Retrieved encrypted object as public");
            },
            function (p1) {
                console.log("Access Denied");
            }
        );
        console.log("Searching public...");
        await r.search(
            '\\*encryptedType:"' + thing.type + '"',
            null,
            function (p1) {
                var found = false;
                for (var i = 0; i < p1.length; i++) {
                    if (p1[i].shortId().equals(thing.shortId())) found = true;
                }
                Assert.assertFalse("Found the encrypted Object", found);
            },
            function (p1) {
                console.log("Could not find object in search");
            }
        );
        console.log("Deleting as Public...");
        await EcRepository._delete(
            thing,
            function (p1) {
                Assert.fail(
                    "Deleted the Owned Object from Repository as public"
                );
            },
            function (p1) {
                console.log("Failed to Delete the Owned Object.");
                console.log(p1);
            }
        );
        EcIdentityManager.default.addIdentity(newId2);
        thing["value"] = "Changed Object Value";
        var encThing2 = await EcEncryptedValue.toEncryptedValue(thing, false);
        console.log("Updating as owner 2...");
        await EcRepository.save(
            encThing,
            function (p1) {
                console.log("Updated as owner 2.");
            },
            function (p1) {
                console.log("Failed to Update as owner2.");
                console.log(p1);
                Assert.fail("Failed to Update object as owner2.");
            }
        );
        console.log("Retrieving after update...");
        await EcRepository.get(
            encThing.shortId(),
            function (p1) {
                var retrieved = new EcEncryptedValue();
                retrieved.copyFrom(p1);
                Assert.assertTrue(
                    "Object is not Owned by the Identity that Created It",
                    retrieved.canEdit(newId1.ppk.toPk())
                );
                Assert.assertEquals(
                    "Name Does Not Match Saved Object Name",
                    encThing.decryptIntoObject()["value"],
                    retrieved.decryptIntoObject()["value"]
                );
                Assert.assertEquals(
                    "ID Does Not Match Saved Object Name",
                    encThing.id,
                    retrieved.id
                );
                Assert.assertTrue(
                    "Object does not have first owner",
                    retrieved.hasOwner(ppk.toPk())
                );
                Assert.assertTrue(
                    "Object does not have second owner",
                    retrieved.hasOwner(ppk2.toPk())
                );
                console.log("Retrieved Unchanged");
            },
            function (p1) {
                console.log("Failed to retrieve as owner 2 after update.");
                console.log(p1);
                Assert.fail("Failed to retrieve object as owner 2");
            }
        );
        console.log("Deleting as owner 2...");
        await EcRepository._delete(
            thing,
            function (p1) {
                console.log("Deleted the Owned Object as owner 2.");
            },
            function (p1) {
                console.log(p1);
                Assert.fail(
                    "Failed to Delete the Owned Object from Repository as owner 2"
                );
            }
        );
    };
    encryptedValueOwnerReaderTest = async function () {
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var ppk2 = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEowIBAAKCAQEAg2cDnkHswuKCvjpFwiXuMoHf9C0qEFupDBalvVscxg7F6qWUSxpISYznkZ/dpXwtrR6w+C5fB+KmTNRUxTl9uT4O1Z4AhJ6b9l6WGQWYlRBZZqXmJwcWnCFcOPGfbVcKHuX7AlIaend7/HC7IudfSiLTcfo6EM7k2xiygrGagW89yEe+Q9DsnruU8UkkT9J7Hzi70RVnc6ovqasqFubECNbIoiFW52AJ2EZYRFCXAAfA2Wb9Tmv170RRjsjBS8TJ+C8WSbtCWOztMnUJlJmQtbiVRnfXRFI9igR4bzpQHmOS1khln9VBo4aiosUeaLNMjs2suEia+6HdLbhZfP26cQIDAQABAoIBAEFu+9tD4t2NJCQMKo6qirn1+IrELs0kh8KwSGpJw8NQuffF6lmXxeVyWCIpJJtygeBShzefB82KbNuXZHstzNCA+awgWQuxW+LMaRwesEOSd6Jo/Hn0yqqG5kCo+YXeMPj/9wXJ0sunUkN784RHCSmGvBpmy6FxFX+RBduVC2ZmPCxsv21HXjGAUled7mzZ/6u7g2Q7nAFd72QLKK3qaLflzfCnqTYqdsIwlR8Lp8F5+FcGQUM9SGv/mdAT9U05ovVuQSB7yToe4d+vV/u+6ixk0TM4RFm7ZWYyXqpuGCy5Logo6aZYWfKWZbKJuGmgwf1przZC3euu91kKR+ui81ECgYEA8QhPYGEG+ExaQ6vQzeLlddxriAQuvfBQR7W82/6UnaBtswolNQdRQ1KeOV8MJ57pYZeZidPq7Xc2tFcrH6FYVF2h+Sxe0jpKFf9CAzqammZjR3c7ddHeif45VeGUM0kdID1baAMvLIJg0e7Q2n/PuEY3FL+5GBlkxJdQnz6r2V0CgYEAi4/ql978ac63ex0Rz898lWMYY60nrJaYBPohpf+CMQ7c/lrretbX2ZoswheVKaho/yn3fpcPnUwh7rTuTLnMjxbl5D7LWfHIA9ZyNqwGZjL525p+pSjPsN3S1NNI8tH8UQ9lMuV/xr3R6vVdZT7UiWr09MUX4DYceKAuoP4/kCUCgYBQq0VVrmOUyokTSPfTUHMXpTPgC/ZQ35MezPZucp/uuXi9iVG2k8Jg08/cx7DbudXGMeTTOjfQTivi46GtLmTPp57ENFNv7M5K2mmPhxejQU1M59zgq+LdMFakJaFiIMA8wAxNnXM2ZFRfLpx75Hby550btqcOJ8GQAkybX3BIiQKBgQCIJGUpr6m1oaTVIV9txC75H4j8Oz7XmrRDLqpCX4TmTGSCb7kExK4dpMuCrzSgRZvfRlYblEr0G/+B99f62sjU0PaD+EmwvS5rp/cUpC095v5cHlLq1Gv+UfXIDTA9R2CGxqjmxIAoJKWxOZfZGziDsOWyHM4Ut1SAy2mRPVROTQKBgD5lboXnZMpRsamgZ5Jwg4bES6npFyPsrNaeJnp6QWz0Q1Ur/dw473VafpeKUZc4/uRRWTtuwooD4x2iCRZzRYAgImyZMeISMOIy8Yt6UZh9AScXsuhOSWiUKj/c1EGjMzMvV59ZzEddXohzMysZ0V/hjVW48HG7ZOcqIAk83Et+-----END RSA PRIVATE KEY-----"
        );
        var thing = new EcRemoteLinkedData(
            General.context,
            General.context + "/test"
        );
        thing.generateId(EcEncryptedValueTest.server);
        thing["value"] = "Private Object Value";
        thing.addOwner(ppk.toPk());
        thing.signWith(ppk);
        var encThing = await EcEncryptedValue.toEncryptedValue(thing, false);
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId1);
        console.log("Saving...");
        await EcRepository.save(
            encThing,
            function (p1) {
                console.log("Saved.");
            },
            function (p1) {
                console.log("Failed to save.");
                console.log(p1);
                Assert.fail("Failed to save object.");
            }
        );
        console.log("Retrieving as owner ...");
        await EcRepository.get(
            encThing.shortId(),
            function (p1) {
                var retrieved = new EcEncryptedValue();
                retrieved.copyFrom(p1);
                Assert.assertTrue(
                    "Object is not Owned by the Identity that Created It",
                    retrieved.canEdit(newId1.ppk.toPk())
                );
                Assert.assertEquals(
                    "Value Does Not Match Saved Object Value",
                    encThing.decryptIntoObject()["value"],
                    retrieved.decryptIntoObject()["value"]
                );
                Assert.assertEquals(
                    "ID Does Not Match Saved Object Name",
                    encThing.id,
                    retrieved.id
                );
                Assert.assertTrue(
                    "Object does not have first owner",
                    retrieved.hasOwner(ppk.toPk())
                );
                console.log("Retrieved Unchanged");
            },
            function (p1) {
                console.log("Failed to retrieve as owner 1.");
                console.log(p1);
                Assert.fail("Failed to retrieve object as owner 1 after save.");
            }
        );
        var r = new EcRepository();
        r.selectedServer = EcEncryptedValueTest.server;
        console.log("Searching as owner ...");
        await r.searchWithParams(
            '\\*encryptedType:"' + thing.type + '"',
            { size: 10000 },
            null,
            function (p1) {
                var found = false;
                for (var i = 0; i < p1.length; i++) {
                    if (p1[i].shortId().equals(thing.shortId())) found = true;
                }
                Assert.assertTrue(
                    "Unable to find object in search as owner. ",
                    found
                );
            },
            function (p1) {
                console.log("Failed to search.");
                console.log(p1);
                Assert.fail("Failed to search for object after save.");
            }
        );
        var newId2 = new EcIdentity();
        newId2.ppk = ppk2;
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId2);
        console.log("Trying to retrieve as other user...");
        await EcRepository.get(
            encThing.shortId(),
            function (p1) {
                console.log("Retrieved encrypted object as other user");
                if (p1.type != null && !p1.type.equals(""))
                    Assert.fail("Retrieved encrypted object as other user");
            },
            function (p1) {
                console.log("Access Denied");
            }
        );
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId1);
        var encThingWithReader = await EcEncryptedValue.toEncryptedValue(
            thing,
            false
        );
        encThingWithReader.addReader(EcPk.fromPem(ppk2.toPk().toPem()));
        console.log("Adding reader...");
        await EcRepository.save(
            encThingWithReader,
            function (p1) {
                console.log("Reader Added.");
            },
            function (p1) {
                console.log("Failed to add reader.");
                console.log(p1);
                Assert.fail("Failed to add reader to object.");
            }
        );
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId2);
        console.log("Retrieving as reader...");
        let encThingValue = (await encThingWithReader.decryptIntoObject())[
            "value"
        ];
        await EcRepository.get(
            encThingWithReader.shortId(),
            async function (p1) {
                if (p1.type == null || p1.type.equals(""))
                    Assert.fail("Unable to retreive object as reader");
                let retrieved = new EcEncryptedValue();
                retrieved.copyFrom(p1);
                EcIdentityManager.default.addIdentity(newId2);
                Assert.assertTrue(
                    "Object is not Owned by the Identity that Created It",
                    retrieved.canEdit(newId1.ppk.toPk())
                );
                let retValue = (await retrieved.decryptIntoObject())["value"];
                Assert.assertEquals(
                    "Value Does Not Match Saved Object Value",
                    encThingValue,
                    retValue
                );
                Assert.assertEquals(
                    "ID Does Not Match Saved Object Id",
                    encThingWithReader.id,
                    retrieved.id
                );
                Assert.assertTrue(
                    "Object does not have first owner",
                    retrieved.hasOwner(ppk.toPk())
                );
                console.log("Retrieved as Reader");
            },
            function (p1) {
                console.log("Failed to retrieve as reader");
                console.trace(p1);
                Assert.fail("Failed to retrieve object as reader.");
            }
        );
        console.log("Searching as reader...");
        await r.searchWithParams(
            '\\*encryptedType:"' + thing.type + '"',
            { size: 10000 },
            null,
            p1 => {
                var found = false;
                console.log("?.");
                for (var i = 0; i < p1.length; i++) {
                    if (p1[i].shortId().equals(thing.shortId())) found = true;
                }
                console.log("Found." + found);
                Assert.assertTrue(
                    "Unable to find object in search as reader ",
                    found
                );
            },
            p1 => {
                console.log("Failed to search.");
                console.log(p1);
                Assert.fail("Failed to search for object after save.");
            }
        );
        EcIdentityManager.default.ids = [];
        console.log("Trying to retrieve as public...");
        await EcRepository.get(
            encThingWithReader.shortId(),
            function (p1) {
                console.log("Retrieved encrypted object as public");
                if (p1.type != null && !p1.type.equals(""))
                    Assert.fail("Retrieved encrypted object as public");
            },
            function (p1) {
                console.log("Access Denied");
            }
        );
        console.log("Searching public...");
        await r.search(
            '\\*encryptedType:"' + thing.type + '"',
            null,
            function (p1) {
                var found = false;
                for (var i = 0; i < p1.length; i++) {
                    if (p1[i].shortId().equals(thing.shortId())) found = true;
                }
                Assert.assertFalse("Found the encrypted Object", found);
            },
            function (p1) {
                console.log("Could not find object in search");
            }
        );
        console.log("Deleting as Public...");
        await EcRepository._delete(
            encThingWithReader,
            function (p1) {
                Assert.fail(
                    "Deleted the Owned Object from Repository as public"
                );
            },
            function (p1) {
                console.log("Failed to Delete Owned Object as public.");
                console.log(p1);
            }
        );
        EcIdentityManager.default.addIdentity(newId2);
        console.log("Deleting as reader...");
        await EcRepository._delete(
            encThingWithReader,
            function (p1) {
                Assert.fail(
                    "Deleted the Owned Object from Repository as reader"
                );
            },
            function (p1) {
                console.log("Failed to Delete the Object as reader.");
                console.log(p1);
            }
        );
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId1);
        var encThingNoReader = new EcEncryptedValue();
        encThingNoReader.copyFrom(encThingWithReader);
        await encThingNoReader.removeReader(EcPk.fromPem(ppk2.toPk().toPem()));
        console.log("removing reader...");
        await EcRepository.save(
            encThingNoReader,
            function (p1) {
                console.log("Updated without reader.");
            },
            function (p1) {
                console.log("Failed to remove reader.");
                console.log(p1);
                Assert.fail("Failed to remove reader from object.");
            }
        );
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId2);
        console.log("Trying to retrieve as other user...");
        await EcRepository.get(
            encThing.shortId(),
            function (p1) {
                console.log("Retrieved encrypted object as other user");
                if (p1.type != null && !p1.type.equals(""))
                    Assert.fail("Retrieved encrypted object as other user");
            },
            function (p1) {
                console.log("Access Denied");
            }
        );
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId1);
        console.log("Deleting...");
        await EcRepository._delete(
            encThingNoReader,
            function (p1) {
                console.log("Deleted the Owned Object as owner.");
            },
            function (p1) {
                console.log(p1);
                Assert.fail(
                    "Failed to Delete the Owned Object from Repository as owner"
                );
            }
        );
    };
}
class EcVersioningTest {
    static server = "http://localhost/api/";
    begin = function () { };
    testSaveTwoVersionsBothExist = async function () {
        var r = new EcRepository();
        r.selectedServer = EcVersioningTest.server;
        var ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        var newId1 = new EcIdentity();
        newId1.ppk = ppk;
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(newId1);
        var t = new schema.Thing();
        t.name = "Foo";
        t.generateId(r.selectedServer);
        t.addOwner(ppk.toPk());
        await EcRepository.save(
            t,
            function (p1) {
                console.log("First save OK.");
            },
            function (p1) {
                console.trace(p1);
                Assert.fail("Couldn't save the object.");
            }
        );
        t.name = "Foo2";
        var oldVersion = t.id;
        await EcRepository.save(
            t,
            function (p1) {
                console.log("Second save OK.");
            },
            function (p1) {
                console.trace(p1);
                Assert.fail("Couldn't save the object.");
            }
        );
        var newVersion = t.id;
        await EcRepository.get(
            oldVersion,
            function (p1) {
                var t = new schema.Thing();
                t.copyFrom(p1);
                Assert.assertEquals(t.name, "Foo");
                Assert.assertEquals(t.id, oldVersion);
            },
            function (p1) {
                console.trace(p1);
                Assert.fail("Couldn't retrieve the old version.");
            }
        );
        await EcRepository.get(
            newVersion,
            function (p1) {
                var t = new schema.Thing();
                t.copyFrom(p1);
                Assert.assertEquals(t.name, "Foo2");
                Assert.assertEquals(t.id, newVersion);
            },
            function (p1) {
                console.trace(p1);
                Assert.fail("Couldn't retrieve the old version.");
            }
        );
        await EcRepository._delete(
            t,
            async p1 => {
                console.log("Deleted the thing.");
                await EcRepository.get(
                    t.shortId(),
                    function (p1) {
                        console.log(p1);
                        Assert.fail(
                            "Could find the thing that was supposed to be gone."
                        );
                    },
                    function (p1) {
                        console.log(
                            "Couldn't find the deleted 'latest' -- good."
                        );
                    }
                );
                await r.search(
                    '"' + t.shortId() + '"',
                    null,
                    function (p1) {
                        console.log(p1);
                        if (p1.length != 0)
                            Assert.fail(
                                "Could find the thing that was supposed to be gone."
                            );
                    },
                    function (p1) {
                        console.log(
                            "Couldn't find the deleted 'latest' -- good."
                        );
                    }
                );
                console.log("Deleted the thing done.");
            },
            function (p1) {
                console.trace(p1);
                Assert.fail("Couldn't delete it.");
            }
        );
        await EcRepository.get(
            oldVersion,
            function (p1) {
                var t = new schema.Thing();
                t.copyFrom(p1);
                Assert.assertEquals(t.name, "Foo");
                Assert.assertEquals(t.id, oldVersion);
                console.log("Getting old version - OK.");
            },
            function (p1) {
                console.trace(p1);
                Assert.fail("Couldn't retrieve the old version.");
            }
        );
        await EcRepository.get(
            newVersion,
            function (p1) {
                var t = new schema.Thing();
                t.copyFrom(p1);
                Assert.assertEquals(t.name, "Foo2");
                Assert.assertEquals(t.id, newVersion);
                console.log("Getting new version - OK.");
            },
            function (p1) {
                console.trace(p1);
                Assert.fail("Couldn't retrieve the new version.");
            }
        );
    };
}
class EcRekeyTest {
    static server = "http://localhost/api/";
    begin = function () {
        EcRekeyTest.oldKey = EcPpk.generateKey().toPem();
        EcRekeyTest.newerKey = EcPpk.generateKey().toPem();
        EcRekeyTest.newestKey = EcPpk.generateKey().toPem();
    };
    static oldKey = null;
    static newerKey = null;
    static newestKey = null;
    basicInMemoryForwardingTest = function () {
        EcRemoteLinkedData.forwardingTable = {};
        var rld = new EcRemoteLinkedData("https://cass.test", "TestObject");
        rld.addOwner(EcPpk.fromPem(EcRekeyTest.oldKey).toPk());
        var oldestData = rld.toJson();
        EcRemoteLinkedData.forwardKey(
            EcPpk.fromPem(EcRekeyTest.oldKey).toPk().toPem(),
            EcPpk.fromPem(EcRekeyTest.newerKey).toPk().toPem()
        );
        rld.copyFrom(JSON.parse(rld.toJson()));
        Assert.assertEquals(
            rld.owner[0],
            EcPpk.fromPem(EcRekeyTest.newerKey).toPk().toPem()
        );
        EcRemoteLinkedData.forwardKey(
            EcPpk.fromPem(EcRekeyTest.newerKey).toPk().toPem(),
            EcPpk.fromPem(EcRekeyTest.newestKey).toPk().toPem()
        );
        rld.copyFrom(JSON.parse(rld.toJson()));
        Assert.assertEquals(
            rld.owner[0],
            EcPpk.fromPem(EcRekeyTest.newestKey).toPk().toPem()
        );
        rld.copyFrom(JSON.parse(oldestData));
        Assert.assertEquals(
            rld.owner[0],
            EcPpk.fromPem(EcRekeyTest.newestKey).toPk().toPem()
        );
    };
    basicRekeyRecordForwardingTest = async function () {
        EcIdentityManager.default.ids[0] = new EcIdentity();
        EcIdentityManager.default.ids[0].ppk = EcPpk.fromPem(EcRekeyTest.newerKey);
        EcRemoteLinkedData.forwardingTable = {};
        var err = await EcRekeyRequest.generateRekeyRequest(
            EcRekeyTest.server,
            EcPpk.fromPem(EcRekeyTest.oldKey),
            EcPpk.fromPem(EcRekeyTest.newerKey)
        );
        console.log(err.toJson());
        await EcRepository.save(
            err,
            async s => {
                EcIdentityManager.default.clearIdentities();
                var repo = new EcRepository();
                await repo.init(
                    EcRekeyTest.server,
                    () => {
                        var rld = new EcRemoteLinkedData(
                            "https://cass.test",
                            "TestObject"
                        );
                        rld.addOwner(EcPpk.fromPem(EcRekeyTest.oldKey).toPk());
                        rld.copyFrom(JSON.parse(rld.toJson()));
                        Assert.assertEquals(
                            rld.owner[0],
                            EcPpk.fromPem(EcRekeyTest.newerKey).toPk().toPem()
                        );
                    },
                    function (s) {
                        Assert.fail("Could not init server. " + s);
                    }
                );
            },
            function (s) {
                Assert.fail("Could not save EcRekeyRequest to server. " + s);
            }
        );
    };
    basicRekeyRecordClientTest = async function () {
        EcIdentityManager.default.ids[0] = new EcIdentity();
        EcIdentityManager.default.ids[0].ppk = EcPpk.fromPem(EcRekeyTest.newerKey);
        EcRemoteLinkedData.forwardingTable = {};
        var err = await EcRekeyRequest.generateRekeyRequest(
            EcRekeyTest.server,
            EcPpk.fromPem(EcRekeyTest.oldKey),
            EcPpk.fromPem(EcRekeyTest.newerKey)
        );
        await EcRepository.save(
            err,
            async function (s) {
                EcIdentityManager.default.clearIdentities();
                var repo = new EcRepository();
                await repo.init(
                    EcRekeyTest.server,
                    async function () {
                        EcIdentityManager.default.ids[0] = new EcIdentity();
                        EcIdentityManager.default.ids[0].ppk = EcPpk.fromPem(
                            EcRekeyTest.oldKey
                        );
                        var rld = new EcRemoteLinkedData(
                            "https://cass.test",
                            "TestObject"
                        );
                        rld.generateId(EcRekeyTest.server);
                        rld.addOwner(EcPpk.fromPem(EcRekeyTest.oldKey).toPk());
                        await EcRepository.save(
                            rld,
                            async function (s) {
                                EcIdentityManager.default.clearIdentities();
                                var rld2 = await EcRepository.get(
                                    rld.shortId()
                                );
                                Assert.assertEquals(
                                    rld2.owner[0],
                                    EcPpk.fromPem(EcRekeyTest.newerKey)
                                        .toPk()
                                        .toPem()
                                );
                            },
                            function (s) {
                                Assert.fail(
                                    "Could not save record that needs to be forwarded. " +
                                    s
                                );
                            }
                        );
                    },
                    function (s) {
                        Assert.fail("Could not init server. " + s);
                    }
                );
            },
            function (s) {
                Assert.fail("Could not save EcRekeyRequest to server. " + s);
            }
        );
    };
    basicRekeyRecordServerTest = async function () {
        EcIdentityManager.default.ids[0] = new EcIdentity();
        EcIdentityManager.default.ids[0].ppk = EcPpk.fromPem(EcRekeyTest.newerKey);
        EcRemoteLinkedData.forwardingTable = {};
        var err = await EcRekeyRequest.generateRekeyRequest(
            EcRekeyTest.server,
            EcPpk.fromPem(EcRekeyTest.oldKey),
            EcPpk.fromPem(EcRekeyTest.newerKey)
        );
        err.signWith(EcPpk.fromPem(EcRekeyTest.newerKey));
        Assert.assertTrue(await err.verify());
        await EcRepository.save(
            err,
            async s => {
                EcIdentityManager.default.clearIdentities();
                var repo = new EcRepository();
                await repo.init(
                    EcRekeyTest.server,
                    async () => {
                        EcIdentityManager.default.ids[0] = new EcIdentity();
                        EcIdentityManager.default.ids[0].ppk = EcPpk.fromPem(
                            EcRekeyTest.oldKey
                        );
                        var rld = new EcRemoteLinkedData(
                            "https://cass.test",
                            "TestObject"
                        );
                        rld.generateId(EcRekeyTest.server);
                        console.log("Init'd.");
                        rld.addOwner(EcPpk.fromPem(EcRekeyTest.oldKey).toPk());
                        EcEncryptedValue.encryptOnSave(rld.id, true);
                        await EcRepository.save(
                            rld,
                            async s => {
                                EcIdentityManager.default.clearIdentities();
                                EcIdentityManager.default.ids[0] = new EcIdentity();
                                EcIdentityManager.default.ids[0].ppk = EcPpk.fromPem(
                                    EcRekeyTest.oldKey
                                );
                                console.log("Test 0.");
                                var rld2 = await EcRepository.get(
                                    rld.shortId()
                                );
                                console.log(JSON.stringify(rld2, null, 2));
                                console.log("Test 1.");
                                Assert.assertEquals(
                                    "Could retreive object, shouldn't be able to.",
                                    rld2,
                                    null
                                );
                                EcIdentityManager.default.clearIdentities();
                                EcIdentityManager.default.ids[0] = new EcIdentity();
                                EcIdentityManager.default.ids[0].ppk = EcPpk.fromPem(
                                    EcRekeyTest.newerKey
                                );
                                rld2 = await EcRepository.get(rld.shortId());
                                console.log("Test 2.");
                                Assert.assertEquals(
                                    "Could retreive object, shouldn't be able to.",
                                    rld2,
                                    null
                                );
                                if (rld2 != null)
                                    Assert.assertEquals(
                                        "Should not be able to decrypt object, can(?)",
                                        await EcEncryptedValue.fromEncryptedValue(
                                            rld2
                                        ),
                                        null
                                    );
                                EcIdentityManager.default.ids[1] = new EcIdentity();
                                EcIdentityManager.default.ids[1].ppk = EcPpk.fromPem(
                                    EcRekeyTest.oldKey
                                );
                                console.log("Test 3.");
                                rld2 = await EcRepository.get(rld.shortId());
                                Assert.assertTrue(
                                    "Should be able to decrypt object, can't",
                                    (rld2 = await EcEncryptedValue.fromEncryptedValue(
                                        rld2
                                    )) != null
                                );
                                Assert.assertEquals(
                                    rld2.owner[0],
                                    EcPpk.fromPem(EcRekeyTest.newerKey)
                                        .toPk()
                                        .toPem()
                                );
                            },
                            function (s) {
                                Assert.fail(
                                    "Could not save record that needs to be forwarded. " +
                                    s
                                );
                            }
                        );
                    },
                    function (s) {
                        Assert.fail("Could not init server. " + s);
                    }
                );
            },
            function (s) {
                Assert.fail("Could not save EcRekeyRequest to server. " + s);
            }
        );
    };
}
class OrganizationTest {
    static CASS_SERVER = "";
    static PPK_PEM = "";
    static ORG_ID = "";
    static newId1 = new EcIdentity();
    static repo = new EcRepository();
    setup = function () { };
    basicOrganizationUpgradeTest = async function () {
        Assert.assertTrue(true);
    };
}
class EcAlignmentTest {
    static server = "http://localhost/api/";
    static ppk = null;
    static newId1 = new EcIdentity();
    static repo = new EcRepository();
    static sourceComp = null;
    static targetComp = null;
    static relation = null;
    setup = async function () {
        console.log("setup");
        EcAlignmentTest.repo.selectedServer = EcAlignmentTest.server;
        EcAlignmentTest.ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        EcAlignmentTest.newId1.ppk = EcAlignmentTest.ppk;
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(EcAlignmentTest.newId1);
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
        await EcAlignmentTest.sourceComp.save(
            null,
            function (p1) {
                Assert.fail("Failed to create Source Competency");
            },
            null
        );
        await EcAlignmentTest.targetComp.save(
            null,
            function (p1) {
                Assert.fail("Failed to create Target Competency");
            },
            null
        );
        await EcAlignmentTest.relation.save(
            null,
            function (p1) {
                Assert.fail("Failed to create Relation");
            },
            null
        );
    };
    breakdown = async function () {
        await EcAlignmentTest.relation._delete(null, function (p1) {
            Assert.fail("failed to delete relation");
        });
        await EcAlignmentTest.sourceComp._delete(
            null,
            function (p1) {
                Assert.fail("failed to delete source competency");
            },
            null
        );
        await EcAlignmentTest.targetComp._delete(
            null,
            function (p1) {
                Assert.fail("failed to delete target competency");
            },
            null
        );
    };
    createAlignmentTest = async function () {
        var paramObj = {};
        paramObj["size"] = 10000;
        await EcAlignmentTest.repo.searchWithParams(
            new Relation().getSearchStringByType(),
            paramObj,
            null,
            function (p1) {
                for (var i = 0; i < p1.length; i++) {
                    var d = p1[i];
                    if (d.id == EcAlignmentTest.relation.id) {
                        return;
                    }
                }
                Assert.fail("Unable to find relation after save");
            },
            function (p1) {
                Assert.fail("Failed to Search for relation after save");
            }
        );
    };
    createNoSourceAlignmentTest = async function () {
        var noSource = new EcAlignment();
        noSource.generateId(EcAlignmentTest.server);
        noSource.target = EcAlignmentTest.targetComp.shortId();
        noSource.relationType = "requires";
        noSource.addOwner(EcAlignmentTest.ppk.toPk());
        await noSource.save(
            function (p1) {
                Assert.fail(
                    "Relation Saved without source competency, shouldn't happen"
                );
            },
            function (e) { },
            null
        );
    };
    createNoTargetAlignmentTest = async function () {
        var noSource = new EcAlignment();
        noSource.generateId(EcAlignmentTest.server);
        noSource.source = EcAlignmentTest.sourceComp.shortId();
        noSource.relationType = "requires";
        noSource.addOwner(EcAlignmentTest.ppk.toPk());
        await noSource.save(
            function (p1) {
                Assert.fail(
                    "Relation Saved without target competency, shouldn't happen"
                );
            },
            function (e) { },
            null
        );
    };
    createNoTypeAlignmentTest = async function () {
        var noSource = new EcAlignment();
        noSource.generateId(EcAlignmentTest.server);
        noSource.source = EcAlignmentTest.sourceComp.shortId();
        noSource.target = EcAlignmentTest.targetComp.shortId();
        noSource.addOwner(EcAlignmentTest.ppk.toPk());
        await noSource.save(
            function (p1) {
                Assert.fail(
                    "Relation Saved without relationType field, shouldn't happen"
                );
            },
            function (e) { },
            null
        );
    };
    viewAlignmentTest = async function () {
        await EcRepository.get(
            EcAlignmentTest.relation.id,
            function (p1) {
                var r = new EcAlignment();
                r.copyFrom(p1);
                Assert.assertEquals(EcAlignmentTest.relation.id, r.id);
                Assert.assertEquals(
                    "Name not equal to saved name",
                    EcAlignmentTest.relation.name,
                    r.name
                );
                Assert.assertEquals(
                    "Title not equal to saved Title",
                    EcAlignmentTest.relation.description,
                    r.description
                );
                Assert.assertEquals(
                    "Source does not match source competency short Id",
                    EcAlignmentTest.relation.source,
                    EcAlignmentTest.sourceComp.shortId()
                );
                Assert.assertEquals(
                    "Target does not match target competency short Id",
                    EcAlignmentTest.relation.target,
                    EcAlignmentTest.targetComp.shortId()
                );
                Assert.assertEquals(
                    "validFrom does not match saved validFrom",
                    EcAlignmentTest.relation.validFrom,
                    r.validFrom
                );
                Assert.assertEquals(
                    "validThrough does not match saved validThrough",
                    EcAlignmentTest.relation.validThrough,
                    r.validThrough
                );
            },
            function (p1) {
                console.trace(p1);
                Assert.fail("Failed to Get relation: " + p1);
            }
        );
    };
    updateAlignmentInfo = async function () {
        EcAlignmentTest.relation.name = "changed relation name";
        EcAlignmentTest.relation.description = "changed description";
        EcAlignmentTest.relation.relationType = "required By";
        EcAlignmentTest.relation.validFrom = new Date().toDateString();
        var end = new Date();
        end.setFullYear(2017);
        EcAlignmentTest.relation.validThrough = end.toDateString();
        console.log("Updating Relation");
        await EcAlignmentTest.relation.save(
            function (p1) {
                console.log("Updated Relation successfully");
            },
            function (p1) {
                Assert.fail("Failed to save updated relation");
            },
            null
        );
        console.log("Getting Relation after update");
        await EcRepository.get(
            EcAlignmentTest.relation.id,
            function (p1) {
                var r = new EcAlignment();
                r.copyFrom(p1);
                Assert.assertEquals(EcAlignmentTest.relation.id, r.id);
                Assert.assertEquals(
                    "Name not equal to saved name",
                    EcAlignmentTest.relation.name,
                    r.name
                );
                Assert.assertEquals(
                    "Title not equal to saved Title",
                    EcAlignmentTest.relation.description,
                    r.description
                );
                Assert.assertEquals(
                    "validFrom does not match saved validFrom",
                    EcAlignmentTest.relation.validFrom,
                    r.validFrom
                );
                Assert.assertEquals(
                    "validThrough does not match saved validThrough",
                    EcAlignmentTest.relation.validThrough,
                    r.validThrough
                );
            },
            function (p1) {
                Assert.fail("Failed to Get relation after update");
            }
        );
    };
    updateAlignmentRemoveSource = async function () {
        EcAlignmentTest.relation.source = null;
        EcAlignmentTest.relation.target = EcAlignmentTest.targetComp.shortId();
        await EcAlignmentTest.relation.save(
            function (p1) {
                Assert.fail(
                    "Saved Relation without source, shouldn't be allowed"
                );
            },
            function (e) { },
            null
        );
    };
    updateAlignmentRemoveTarget = async function () {
        EcAlignmentTest.relation.source = EcAlignmentTest.sourceComp.shortId();
        EcAlignmentTest.relation.target = null;
        await EcAlignmentTest.relation.save(
            function (p1) {
                Assert.fail(
                    "Saved Relation without target, shouldn't be allowed"
                );
            },
            function (e) { },
            null
        );
    };
    updateAlignmentRemoveType = async function () {
        EcAlignmentTest.relation.source = EcAlignmentTest.sourceComp.shortId();
        EcAlignmentTest.relation.target = EcAlignmentTest.targetComp.shortId();
        EcAlignmentTest.relation.relationType = null;
        await EcAlignmentTest.relation.save(
            function (p1) {
                Assert.fail(
                    "Saved Relation without relation Type, shouldn't be allowed"
                );
            },
            function (e) { },
            null
        );
    };
    deleteAlignmentTest = async function () {
        var toDelete = new EcAlignment();
        toDelete.generateId(EcAlignmentTest.server);
        toDelete.name = "Relation To Delete";
        toDelete.source = EcAlignmentTest.sourceComp.shortId();
        toDelete.target = EcAlignmentTest.targetComp.shortId();
        toDelete.addOwner(EcAlignmentTest.ppk.toPk());
        console.log("saving relation to delete...");
        await EcRepository.save(toDelete, null, function (p1) {
            Assert.fail("Failed to save relation for delete");
        });
        console.log("deleting relation...");
        await toDelete._delete(
            function (p1) { },
            function (p1) {
                Assert.fail("Failed to delete relation");
            }
        );
        console.log("searching for deleted relation...");
        await EcAlignmentTest.repo.search(
            '@type:"' + toDelete.myType + '"',
            null,
            function (p1) {
                for (var i = 0; i < p1.length; i++) {
                    var d = p1[i];
                    if (d.id == toDelete.id) {
                        Assert.fail("Shouldnt find relation after delete");
                    }
                }
            },
            function (p1) {
                Assert.fail("Failed to Search for relation after delete");
            }
        );
    };
}
class EcCompetencyTest {
    static server = "http://localhost/api/";
    static ppk = null;
    static newId1 = new EcIdentity();
    static repo = new EcRepository();
    static comp = null;
    setup = async function () {
        console.log("setup");
        EcCompetencyTest.repo.selectedServer = EcCompetencyTest.server;
        EcCompetencyTest.ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        EcCompetencyTest.newId1.ppk = EcCompetencyTest.ppk;
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(EcCompetencyTest.newId1);
        EcCompetencyTest.comp = new EcCompetency();
        EcCompetencyTest.comp.generateId(EcCompetencyTest.server);
        EcCompetencyTest.comp.name = "Test Competency Name";
        EcCompetencyTest.comp.description = "Test Competency Description";
        EcCompetencyTest.comp.addOwner(EcCompetencyTest.ppk.toPk());
        await EcCompetencyTest.comp.save(
            function (s) {
                console.log("Saved " + EcCompetencyTest.comp.id);
            },
            function (p1) {
                Assert.fail("Unable to save Competency");
            },
            null
        );
    };
    breakdown = async function () {
        await EcCompetencyTest.comp._delete(
            null,
            function (p1) {
                Assert.fail("Unable to delete Competency");
            },
            null
        );
    };
    createCompetencyTest = async function () {
        var paramObj = {};
        paramObj["size"] = 5000;
        await EcCompetencyTest.repo.searchWithParams(
            new EcCompetency().getSearchStringByType(),
            paramObj,
            null,
            function (p1) {
                for (var i = 0; i < p1.length; i++) {
                    var d = p1[i];
                    if (d.id == EcCompetencyTest.comp.id) {
                        return;
                    }
                }
                Assert.fail("Unable to search for competency after save");
            },
            function (p1) {
                Assert.fail("Failed to Search for Competency");
            }
        );
    };
    createNoNameCompetencyTest = async function () {
        var noName = new EcCompetency();
        noName.generateId(EcCompetencyTest.server);
        noName.addOwner(EcCompetencyTest.ppk.toPk());
        await noName.save(
            function (p1) {
                Assert.fail(
                    "Saved Competency with missing name, shouldn't happen"
                );
            },
            function (e) { },
            null
        );
    };
    viewCompetencyTest = async function () {
        await EcRepository.get(
            EcCompetencyTest.comp.id,
            function (p1) {
                var c = new EcCompetency();
                c.copyFrom(p1);
                Assert.assertEquals(
                    "Name not equal to saved name",
                    c.name,
                    EcCompetencyTest.comp.name
                );
                Assert.assertEquals(
                    "Description not equal to saved description",
                    c.description,
                    EcCompetencyTest.comp.description
                );
            },
            function (p1) {
                Assert.fail("Failed to Get Competency");
            }
        );
    };
    competencyAddRemoveRelationshipTest = async function () {
        var comp2 = new EcCompetency();
        comp2.name = "Relation Target Competency";
        comp2.addOwner(EcCompetencyTest.ppk.toPk());
        comp2.generateId(EcCompetencyTest.server);
        await comp2.save(
            function (p1) { },
            function (p1) {
                Assert.fail("failed to save target competency");
            },
            null
        );
        console.log("Creating Relationship..");
        var rel = await EcCompetencyTest.comp.addAlignment(
            comp2,
            "requires",
            EcCompetencyTest.ppk,
            EcCompetencyTest.server,
            function (p1) {
                console.log("Relationship Created");
            },
            function (p1) {
                Assert.fail("Failed to create relationship");
            },
            null
        );
        console.log("finding relationships...");
        await EcCompetencyTest.comp.relationships(
            EcCompetencyTest.repo,
            function (p1) {
                Assert.assertEquals(rel.id, p1.id);
                Assert.assertEquals(
                    "Relationship source does not match competency",
                    EcCompetencyTest.comp.shortId(),
                    p1.source
                );
            },
            function (p1) {
                Assert.fail("failed to find relationships");
            },
            function (p1) {
                if (p1.length == 0)
                    Assert.fail(
                        "Relationship does not exist in the repository: " + p1
                    );
            }
        );
        console.log("deleting relationship...");
        await EcRepository._delete(
            rel,
            async p1 => {
                console.log("finding relationships after delete...");
                await EcCompetencyTest.comp.relationships(
                    EcCompetencyTest.repo,
                    function (p1) {
                        Assert.fail(
                            "No Relationships should be found. " + p1.shortId()
                        );
                    },
                    function (p1) {
                        Assert.fail("failed to search for relationships");
                    },
                    function (p1) {
                        if (p1.length > 0)
                            Assert.fail(
                                "Return a relationship after deleting it"
                            );
                    }
                );
            },
            function (p1) {
                Assert.fail("failed to delete relationship");
            }
        );
        await comp2._delete(
            null,
            function (p1) {
                Assert.fail("failed to delete target competency");
            },
            null
        );
    };
    competencyAddRemoveLevelTest = async function () {
        console.log("Creating Level...");
        var lev = await EcCompetencyTest.comp.addLevel(
            "Level Test",
            "Description of level Test",
            EcCompetencyTest.ppk,
            EcCompetencyTest.server,
            function (p1) {
                console.log("Level Created");
            },
            function (p1) {
                Assert.fail("Failed to Create Level");
            },
            null
        );
        console.log("Finding level...");
        await EcCompetencyTest.comp.levels(
            EcCompetencyTest.repo,
            function (p1) {
                Assert.assertEquals(lev.id, p1.id);
                Assert.assertEquals(
                    "Level Competency does not match competency ID",
                    EcCompetencyTest.comp.shortId(),
                    lev.competency
                );
            },
            function (p1) {
                Assert.fail("Failed to Retrieve Level");
            },
            function (p1) {
                if (p1.length != 1)
                    Assert.fail("Unable to find competency: " + p1);
            }
        );
        console.log("deleting level...");
        await EcRepository._delete(
            lev,
            function (p1) {
                console.log("deleted level");
            },
            function (p1) {
                Assert.fail("failed to delete level");
            }
        );
        console.log("finding relationships after delete...");
        await EcCompetencyTest.comp.levels(
            EcCompetencyTest.repo,
            function (p1) {
                Assert.fail("No levels should be found");
            },
            function (p1) {
                Assert.fail("failed to search for levels");
            },
            function (p1) {
                if (p1.length > 0)
                    Assert.fail("Returned a level after deleting it");
            }
        );
    };
    updateCompetencyInfo = async function () {
        EcCompetencyTest.comp.name = "Changed Name";
        EcCompetencyTest.comp.description = "Changed Description";
        EcCompetencyTest.comp.scope = "a scope is added!";
        console.log("Updating Competency...");
        await EcCompetencyTest.comp.save(
            function (p1) {
                console.log("Competency Updated");
            },
            function (p1) {
                Assert.fail("Failed to Update the Competency");
            },
            null
        );
        console.log("Retrieving Competency after update...");
        await EcRepository.get(
            EcCompetencyTest.comp.id,
            function (p1) {
                var c = new EcCompetency();
                c.copyFrom(p1);
                Assert.assertEquals(EcCompetencyTest.comp.id, c.id);
                Assert.assertEquals(EcCompetencyTest.comp.name, c.name);
                Assert.assertEquals(
                    EcCompetencyTest.comp.description,
                    c.description
                );
                Assert.assertEquals(EcCompetencyTest.comp.scope, c.scope);
            },
            function (p1) {
                Assert.fail("Failed to Retrieve Competency after Update");
            }
        );
    };
    deleteCompetencyTest = async function () {
        var toDelete = new EcCompetency();
        toDelete.generateId(EcCompetencyTest.server);
        toDelete.name = "Competency To Delete";
        toDelete.addOwner(EcCompetencyTest.ppk.toPk());
        console.log("saving competency to delete...");
        await toDelete.save(
            null,
            function (p1) {
                Assert.fail("Failed to save competency for delete");
            },
            null
        );
        console.log("deleting competency...");
        await toDelete._delete(
            function (p1) { },
            function (p1) {
                Assert.fail("Failed to delete Competency");
            },
            null
        );
        console.log("searching for deleted competency...");
        await EcCompetencyTest.repo.search(
            '@type:"' + toDelete.myType + '"',
            null,
            function (p1) {
                for (var i = 0; i < p1.length; i++) {
                    var d = p1[i];
                    if (d.id == toDelete.id) {
                        Assert.fail("Shouldnt find competency after delete");
                    }
                }
            },
            function (p1) {
                Assert.fail("Failed to Search for Competency");
            }
        );
    };
    deleteCompetencyWithRelationshipTest = async function () {
        var toDelete = new EcCompetency();
        toDelete.generateId(EcCompetencyTest.server);
        toDelete.name = "Competency To Delete";
        toDelete.addOwner(EcCompetencyTest.ppk.toPk());
        console.log("saving competency to delete...");
        await toDelete.save(
            null,
            function (p1) {
                Assert.fail("Failed to save competency for delete");
            },
            null
        );
        var comp2 = new EcCompetency();
        comp2.generateId(EcCompetencyTest.server);
        comp2.name = "target Comeptency";
        comp2.addOwner(EcCompetencyTest.ppk.toPk());
        console.log("Saving Target Competency...");
        await comp2.save(
            null,
            function (p1) {
                console.log("Saved Target Competency");
            },
            null
        );
        console.log("Creating Relationship...");
        var rel = await toDelete.addAlignment(
            comp2,
            "requires",
            EcCompetencyTest.ppk,
            EcCompetencyTest.server,
            function (p1) {
                console.log("Created Relationship");
            },
            function (p1) {
                Assert.fail("Failed to Create Relationship");
            },
            null
        );
        console.log("Deleting Competency with Relationship...");
        await toDelete._delete(
            async p1 => {
                console.log("Deleted Competency with Relationship");
                await toDelete.relationships(
                    EcCompetencyTest.repo,
                    function (p1) {
                        Assert.fail("No Relationships should be found " + p1);
                    },
                    function (p1) {
                        Assert.fail("failed to search for relationships");
                    },
                    function (p1) {
                        if (p1.length > 0)
                            Assert.fail(
                                "Returned a relationship after deleting the competency"
                            );
                    }
                );
            },
            function (p1) {
                Assert.fail("Failed to delete relationship Competency");
            },
            EcCompetencyTest.repo
        );
        await comp2._delete(
            function (p1) { },
            function (p1) {
                Assert.fail("Failed to delete target Competency");
            },
            null
        );
    };
    deleteCompetencyWithLevelTest = async function () {
        var toDelete = new EcCompetency();
        toDelete.generateId(EcCompetencyTest.server);
        toDelete.name = "Competency To Delete";
        toDelete.addOwner(EcCompetencyTest.ppk.toPk());
        console.log("saving competency to delete...");
        await toDelete.save(
            null,
            function (p1) {
                Assert.fail("Failed to save competency for delete");
            },
            null
        );
        console.log("Creating Relationship...");
        var level = await toDelete.addLevel(
            "level to be deleted",
            "level description",
            EcCompetencyTest.ppk,
            EcCompetencyTest.server,
            function (p1) {
                console.log("Created Level");
            },
            function (p1) {
                Assert.fail("Failed to Create Level");
            },
            null
        );
        console.log("Deleting Competency with Level...");
        await toDelete._delete(
            async p1 => {
                console.log("Deleted Competency with Level");
                await toDelete.levels(
                    EcCompetencyTest.repo,
                    function (p1) {
                        Assert.fail("No Relationships should be found");
                    },
                    function (p1) {
                        Assert.fail("failed to search for relationships");
                    },
                    function (p1) {
                        if (p1.length > 0)
                            Assert.fail(
                                "Returned a relationship after deleting the competency"
                            );
                    }
                );
            },
            function (p1) {
                Assert.fail("Failed to delete Level Competency");
            },
            EcCompetencyTest.repo
        );
    };
}
class EcLevelTest {
    static server = "http://localhost/api/";
    static ppk = null;
    static newId1 = new EcIdentity();
    static repo = new EcRepository();
    static level = null;
    static comp = null;
    setup = async function () {
        console.log("setup");
        EcLevelTest.repo.selectedServer = EcLevelTest.server;
        EcLevelTest.ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        EcLevelTest.newId1.ppk = EcLevelTest.ppk;
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(EcLevelTest.newId1);
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
        await EcLevelTest.comp.save(
            null,
            function (p1) {
                Assert.fail("Failed to Save Level Competency");
            },
            null
        );
        EcLevelTest.level.competency = EcLevelTest.comp.shortId();
        await EcLevelTest.level.save(
            null,
            function (p1) {
                Assert.fail("Unable to save Level");
            },
            null
        );
    };
    breakdown = async function () {
        await EcLevelTest.level._delete(null, function (p1) {
            Assert.fail("Unable to delete Level");
        });
        await EcLevelTest.comp._delete(
            null,
            function (p1) {
                Assert.fail("Unable to delete Level Competency");
            },
            null
        );
    };
    createLevelTest = async function () {
        await EcLevelTest.repo.search(
            new EcLevel().getSearchStringByType() +
            ' AND name:"Test Level Name"',
            null,
            function (p1) {
                for (var i = 0; i < p1.length; i++) {
                    var d = p1[i];
                    if (d.id == EcLevelTest.level.id) {
                        return;
                    }
                }
                Assert.fail("Unable to search for level after save");
            },
            function (p1) {
                Assert.fail("Failed to Search for level");
            }
        );
    };
    createLevelNoNameTest = async function () {
        var noName = new EcLevel();
        noName.generateId(EcLevelTest.server);
        noName.competency = EcLevelTest.comp.shortId();
        await noName.save(
            function (p1) {
                Assert.fail("Level saved without name, should not happen");
            },
            function () { },
            null
        );
    };
    createLevelNoCompetencyTest = async function () {
        var noComp = new EcLevel();
        noComp.generateId(EcLevelTest.server);
        noComp.name = "Test Level Name";
        await noComp.save(
            function (p1) {
                Assert.fail(
                    "Level saved without competency, should not happen"
                );
            },
            function () { },
            null
        );
    };
    viewLevelTest = async function () {
        await EcRepository.get(
            EcLevelTest.level.id,
            function (p1) {
                var l = new EcLevel();
                l.copyFrom(p1);
                Assert.assertEquals(EcLevelTest.level.id, l.id);
                Assert.assertEquals(
                    "Name not equal to saved name",
                    EcLevelTest.level.name,
                    l.name
                );
                Assert.assertEquals(
                    "Description not equal to saved description",
                    EcLevelTest.level.description,
                    l.description
                );
                Assert.assertEquals(
                    "Title not equal to saved Title",
                    EcLevelTest.level.title,
                    l.title
                );
                Assert.assertEquals(
                    "Performance not equal to saved Performance",
                    EcLevelTest.level.performance,
                    l.performance
                );
            },
            function (p1) {
                Assert.fail("Failed to Get Competency");
            }
        );
    };
    updateLevelInfoTest = async function () {
        EcLevelTest.level.name = "Changed Name";
        EcLevelTest.level.description = "Changed Description";
        EcLevelTest.level.title = "Changed Title";
        EcLevelTest.level.performance = "Changed performance";
        console.log("Updating Level...");
        await EcLevelTest.level.save(
            function (p1) {
                console.log("Level Updated");
            },
            function (p1) {
                Assert.fail("Failed to Update the Level");
            },
            null
        );
        console.log("Retrieving Level after update...");
        await EcRepository.get(
            EcLevelTest.level.id,
            function (p1) {
                var l = new EcLevel();
                l.copyFrom(p1);
                Assert.assertEquals(EcLevelTest.level.id, l.id);
                Assert.assertEquals(
                    "Name not equal to updated name",
                    EcLevelTest.level.name,
                    l.name
                );
                Assert.assertEquals(
                    "Description not equal to updated description",
                    EcLevelTest.level.description,
                    l.description
                );
                Assert.assertEquals(
                    "Title not equal to updated Title",
                    EcLevelTest.level.title,
                    l.title
                );
                Assert.assertEquals(
                    "Performance not equal to updated Performance",
                    EcLevelTest.level.performance,
                    l.performance
                );
            },
            function (p1) {
                Assert.fail("Failed to Retrieve Competency after Update");
            }
        );
    };
    updateLevelNoNameTest = async function () {
        EcLevelTest.level.name = "";
        EcLevelTest.level.competency = EcLevelTest.comp.shortId();
        console.log("Updating Level without name...");
        await EcLevelTest.level.save(
            function (p1) {
                Assert.fail("Updated Level without name, shouldn't happen");
            },
            function (p1) {
                console.log("Failed to update Level");
            },
            null
        );
    };
    updateLevelNoCompetencyTest = async function () {
        EcLevelTest.level.name = "updated name";
        EcLevelTest.level.competency = "";
        console.log("Updating Level without competency...");
        await EcLevelTest.level.save(
            function (p1) {
                Assert.fail(
                    "Updated Level without competency, shouldn't happen"
                );
            },
            function (p1) {
                console.log("Failed to update Level");
            },
            null
        );
    };
    deleteLevelTest = async function () {
        var toDelete = new EcLevel();
        toDelete.generateId(EcLevelTest.server);
        toDelete.name = "Competency To Delete";
        toDelete.addOwner(EcLevelTest.ppk.toPk());
        toDelete.competency = EcLevelTest.comp.shortId();
        console.log("saving level to delete...");
        await toDelete.save(
            null,
            function (p1) {
                Assert.fail("Failed to save level for delete");
            },
            null
        );
        console.log("deleting level...");
        await toDelete._delete(null, function (p1) {
            Assert.fail("Failed to delete Level");
        });
        console.log("searching for deleted level...");
        await EcLevelTest.repo.search(
            '@type:"' + toDelete.myType + '"',
            null,
            function (p1) {
                for (var i = 0; i < p1.length; i++) {
                    var d = p1[i];
                    if (d.id == toDelete.id) {
                        Assert.fail("Shouldnt find level after delete");
                    }
                }
            },
            function (p1) {
                Assert.fail("Failed to Search for level after delete");
            }
        );
    };
}
class EcAssertionTest {
    static server = "http://localhost/api/";
    static ppk1 = null;
    static ppk2 = null;
    static ppk3 = null;
    static newId1 = new EcIdentity();
    static newId2 = new EcIdentity();
    static newId3 = new EcIdentity();
    static repo = new EcRepository();
    static comp = null;
    static assn = null;
    setup = async function () {
        console.log("setup");
        EcAssertionTest.repo.selectedServer = EcAssertionTest.server;
        EcAssertionTest.ppk1 = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        EcAssertionTest.newId1.ppk = EcAssertionTest.ppk1;
        EcAssertionTest.ppk2 = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEowIBAAKCAQEAtjVO4W6FVf1SyCKEzwd2dKnT43dWRFes6SJeKVI+/GalNR1bxhc7UWOBZ3T2xuIo83tRot0ybFpTHMD7JAptkfP4C9YtidVyRBznQLwqExS6+0Qc39L+lefpHbi6QD24MKPZa5+FylcQJ7Olu30NIXDQd7ZOZrXkV/C4KAHVKg+CrhDPGfLp3IuQh3+ZAhRKIvP3I2MP0rUpNU5ChdjQJyro3AzBuuf92K6QBG8sfn2al0qJiNqREhusHE+SDhk+IbvISr38nmEMgwZrN1z/UrXf0ycK6hIpgTQH0SVWMxYTt4G3MLLALGTUzAM1LcmOaDwt8xAdJyS/4Y/BicsuVQIDAQABAoIBAFFV9JNPKbgb8AMk3ZIpK6iiUtK8Z8b0OFyNmejqLPGwxFi0dU40+qa3O4G6RZq8RDmEOAnyodqaa3Vvc+w/t2+qr3RhNEzN+kcLe/N6y3FfFKSrYBRN9JVoQ7ifyIx6wKj9y0VunWOYf76pQ/cwuFbQLE70E4Vn9rmG3D4Hq2ctabiIxl00h1CQ0t7EyOsneOmiMkBFjSguzJDRD8q3eFD39rpRdP913G0HsqhHEh3/nvK2rXnGHki3VEVp2TupPUyWu2RyK1liAJe8zqt0ghosu5DutBkbxdVL4e3AqmZy4yBc6sKGhg4pfyBbLumO5keZa63ynESbiDGdNw4WtKECgYEA7D197RuirwlCtWIhWKVQCzKLdKEsqzsIDQ/QtERSNJjAPGEcsNWlFUV6yPTRjtHpmN9gWTmWzaXBE9zVUMDIdWDxdyr5O11rXV0ZIjJ3GepTd9fpelOzxJhmA96LHVXS2OeyThY6T/gpl6tKLTPD2KUKVAgXUWcSnrZuHeVv8C0CgYEAxXLadIXn0AXe7zk3t2Ff78njEEPSdzLcRzG35k6NoBgUTr2rJKe8oYMS4L6NWFMfZWla1YSNCC/vINJLdbJGvSI8ttTMAs8IM2PegrW2QLS596TDqMsVbo1PfyawlmGjybvZf7zIm0lDW1qUTWgQMdealdEwn4ONmlQdpt5L58kCgYEAvjGnn2yfZmKDRXrStAar0cgIxIY6a0UkbzerZGaY9GWCZ1ob+jaXKO/+MaoAyQYxFnXIoS0fP0PSlYY2a0Q6X14EKVf8vhGxLcKVSJXuk3u3ZYX8IBMhaQb1IupZf+2nyh+HyxxUKCv4eHZcStYhN9tv3EWDWHMuZ38iWolsvKUCgYBMIgsl3vQRfBIH//IB3aQWW6wX+27N02iocv1L6oIlduNtsSiqi5rqVBYVXqQ1qGd0vPjvV5rhy0nTSAMcsM8h4m+yt76qXpX06s9DazmJHaaPXJKtJRFwfUBn8M0qTx/Oi4ZEANEBP3Cfav/AER4dedr7ZZvwBdO17DU6wIBYMQKBgCpQSniwFgW54C4OGUUBnSil/mKBo7mC8DJdOaXqLp5yjNqGGxVH78FAnkYpLpO+mbF2GUFWs8GvXY08Bt/hN2DdqIxViUqGcppr7LHxMRdEj7vGxL+ek5VdUvC8eIzeOtNBzypBBo1lSQD49c3Fg9Dc5DYa+oZSWqGOo1+InUbC-----END RSA PRIVATE KEY-----"
        );
        EcAssertionTest.newId2.ppk = EcAssertionTest.ppk2;
        EcAssertionTest.ppk3 = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpQIBAAKCAQEAlDSpGeoXBxlIKLglcMKDtTLbiY/KZfndBfP1OQbRZTYpR2/IXAG3t5IJqHa2UzQjwNzFVPXACtLC3v/lNCorwbecol9Y3soYOrtHb6UjR8PifqnCRUqb1/wQMJ+HS3iqIa1R1R341fdPdtD/HASgcNp8kpgiSrh/wQOrsc4BD8zysu4mWA331rTLhuwTGgEovc+ua64DIHEgTqVcQy36cw8FUKtkQDSX6pZyAUKfF0aTibfxHJCLKTasITkne/FUKrp2watJ+hnUih8LsXSQzeVkOdkK1RhZjFYzqigwdWhYKy36ArEJz3bdSA/Y03wKqzUfn/bMvPTR1ACRkRc83QIDAQABAoIBAQCDbtAoczlIylr8AZLylQ5Iu3mGXUaZeSVSCjAHCszYfVfOSovdTIio+5IlHGJFF5A9kYxO9EIDVzYKndWelWeIvFTkiro9mewy6bNIh6LqGgXbXqEy4h+jQ574AAH0JGZ8x0AzSAlNd625KU+UgWXnr1uaheCjc0uY2LCDVrYKU9Bca5+mTzQzUrmrVG0U8xS1C3uVYKAGbnjHup3PEW0wXA3FPeq6YKw3BSxO3EggMPLiLTElWTVEsnZY0zBU5eXMS/e7iJvc5QgmrT4N7+rDY00ZUlcgoU51WyQmAIOrtEHqQHBAF68s3lHxHrix1y9+spaA8PYWKdxePto1gWEBAoGBAOiLXWum4v7AGNX5iLvr1rsL6h7WO6V/VqZ4JGnzDu/Ww7i1ODaAa6HX8rrNsnWFJgQH3Mkc1q81m5rnyH7q7TpEC9rC6trZhhCDfIGsxWo3+6lc6zxUVoiAyLADLfh/ND49kLivHklQIwhwfUxDVTb7SFwMJPS4fad49Ms76UbpAoGBAKMnjDx2ia4gjQghiN3aDaHYhCBn5sQ1q8xxQGcDD3Kfot9djoXpdLb2wrW9KalAaCZGROyl3DREDdJ8vKAS6LW2Hfom2bO11szjsNwkjDoyw2y4owfkRAXfN5BDIRQAPxsY+y/qtPiBPccsI68g6FhUi4VeJ8rOqHyZb/PpKTXVAoGALx/2+ZbjT17caZhc9kAvzs32TvN5OOuaQrf8ISBpeX8bQLYwwxK5PR4HCYYf0SL/djelrXfTpcQGWZj5D4dKNdGOWXHAqEMGoRgURi8d/o2DyWmUHjC1LIp0oP6z9TTKAIb3agXK7G55+v7Y1Xibrz2zBzxKzPEKPcMMUJc+iekCgYEAlwsFyPP0gj+gUOa6zqgP9sV7jISkHwGRCrPN64/pvTQMlL0INPDsHHZVy+pTp1z5DnX/WRYzxi86nKLd/VOEHLV9CxjscnLlaMlh8mvjZf2Y7g4A4E1yq/z6c5OyC9IumeeGo9WltGnxx3IVlwvgDeY3REDmldq8IJ3sBuLURAECgYEA4cA5aTnJ8EWhDSW12QVxUdgaPN6YYfpCHV42UgLbz7Zc3yT3K7aTLVJRxBPenk9Hbc3y81y1INmgRDfzkpgNgTHkfqME6AVMeCD9N6YSz+Gz4NEsfZ9W11uXoCPCywKC1iw8x2YOaq7ilAH6NQLgZO1/Om693Z4tUwn0OEZ/tcY=-----END RSA PRIVATE KEY-----"
        );
        EcAssertionTest.newId3.ppk = EcAssertionTest.ppk3;
        EcAssertionTest.comp = new EcCompetency();
        EcAssertionTest.comp.name = "Just a Competency";
        EcAssertionTest.comp.generateId(EcAssertionTest.server);
        EcAssertionTest.comp.addOwner(EcAssertionTest.ppk1.toPk());
        await EcAssertionTest.comp.save(
            null,
            function (p1) {
                Assert.fail("Failed to Save Competency");
            },
            null
        );
    };
    breakdown = async function () {
        await EcAssertionTest.comp._delete(
            null,
            function (p1) {
                Assert.fail("Unable to delete Competency");
            },
            null
        );
    };
    assertionEncryptDecryptTest = async function () {
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(EcAssertionTest.newId1);
        var assn = new EcAssertion();
        var agent = EcAssertionTest.ppk1.toPk();
        var subject = EcAssertionTest.ppk2.toPk();
        var thirdParty = EcAssertionTest.ppk3.toPk();
        var assertionDate = Date.now();
        var expirationDate = Date.now() + 1000 * 60 * 60 * 24 * 30;
        assn.generateId(EcAssertionTest.server);
        assn.addOwner(agent);
        await assn.setSubject(subject);
        await assn.setAgent(agent);
        await assn.setCompetency(EcAssertionTest.comp.id);
        await assn.setConfidence(0.85);
        await assn.setAssertionDate(assertionDate);
        await assn.setExpirationDate(expirationDate);
        await assn.setDecayFunction("t");
        await assn.setNegative(false);
        var evidences = [];
        evidences.push("I saw them do it.");
        await assn.setEvidence(evidences);
        console.log("Setup of assertion");
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(EcAssertionTest.newId2);
        Assert.assertEquals(
            "Subject not readable by subject.",
            subject.toPem(),
            (await assn.getSubject()).toPem()
        );
        Assert.assertEquals(
            "Agent not readable by subject.",
            agent.toPem(),
            (await assn.getAgent()).toPem()
        );
        Assert.assertEquals(
            "Assertion Date not readable by subject.",
            assertionDate,
            await assn.getAssertionDate()
        );
        Assert.assertEquals(
            "Expiration Date not readable by subject.",
            expirationDate,
            await assn.getExpirationDate()
        );
        Assert.assertEquals(
            "Evidence not readable by subject.",
            evidences[0],
            await assn.getEvidence(0)
        );
        Assert.assertEquals(
            "Negative not readable by subject.",
            false,
            await assn.getNegative()
        );
        Assert.assertEquals(
            "Decay Function not readable by subject.",
            "t",
            await assn.getDecayFunction()
        );
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(EcAssertionTest.newId1);
        await assn.addReader(thirdParty);
        console.log("Added Third Party to assertion");
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(EcAssertionTest.newId3);
        Assert.assertEquals(
            "Subject not readable by third party.",
            subject.toPem(),
            (await assn.getSubject()).toPem()
        );
        Assert.assertEquals(
            "Agent not readable by third party.",
            agent.toPem(),
            (await assn.getAgent()).toPem()
        );
        Assert.assertEquals(
            "Assertion Date not readable by third party.",
            assertionDate,
            await assn.getAssertionDate()
        );
        Assert.assertEquals(
            "Expiration Date not readable by third party.",
            expirationDate,
            await assn.getExpirationDate()
        );
        Assert.assertEquals(
            "Evidence not readable by third party.",
            evidences[0],
            await assn.getEvidence(0)
        );
        Assert.assertEquals(
            "Negative not readable by third party.",
            false,
            await assn.getNegative()
        );
        Assert.assertEquals(
            "Decay Function not readable by third party.",
            "t",
            await assn.getDecayFunction()
        );
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(EcAssertionTest.newId1);
        await assn.removeReader(thirdParty);
        console.log("Removed Third Party to assertion");
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(EcAssertionTest.newId3);
        Assert.assertEquals(
            "Subject readable by third party.",
            null,
            await assn.getSubject()
        );
        Assert.assertEquals(
            "Agent readable by third party.",
            null,
            await assn.getAgent()
        );
        Assert.assertEquals(
            "Assertion Date readable by third party.",
            null,
            await assn.getAssertionDate()
        );
        Assert.assertEquals(
            "Expiration Date readable by third party.",
            null,
            await assn.getExpirationDate()
        );
        Assert.assertEquals(
            "Evidence readable by third party.",
            null,
            await assn.getEvidence(0)
        );
        Assert.assertEquals(
            "Negative readable by third party.",
            false,
            await assn.getNegative()
        );
        Assert.assertEquals(
            "Decay Function readable by third party.",
            null,
            await assn.getDecayFunction()
        );
    };
}
class EcFrameworkTest {
    static server = "http://localhost/api/";
    static ppk = null;
    static newId1 = new EcIdentity();
    static repo = new EcRepository();
    static frameworkId = null;
    static framework = null;
    static comp = null;
    static comp2 = null;
    static level = null;
    static rel = null;
    setup = async function () {
        console.log("setup");
        EcFrameworkTest.frameworkId =
            EcFrameworkTest.server +
            "data/" +
            EcFramework.myType
                .replace("http://", "")
                .replace("https://", "")
                .replaceAll("/", ".") +
            "/testFramework/1";
        EcFrameworkTest.ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        EcFrameworkTest.newId1.ppk = EcFrameworkTest.ppk;
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(EcFrameworkTest.newId1);
        EcFrameworkTest.repo.selectedServer = EcFrameworkTest.server;
        EcFrameworkTest.framework = new EcFramework();
        EcFrameworkTest.framework.generateId(EcFrameworkTest.server);
        EcFrameworkTest.framework.description = "Testing framework description";
        EcFrameworkTest.framework.name = "Framework Name";
        EcFrameworkTest.frameworkId = EcFrameworkTest.framework.id;
        EcFrameworkTest.framework.addOwner(EcFrameworkTest.ppk.toPk());
        console.log("Saving Framework...");
        await EcFrameworkTest.framework.save(
            function (p1) {
                EcFrameworkTest.frameworkId = EcFrameworkTest.framework.id;
                console.log("Framework Saved.");
            },
            function (p1) {
                Assert.fail("Failed to Save Framework");
            },
            null
        );
        EcFrameworkTest.framework = await EcFramework.get(EcFrameworkTest.framework.shortId());
        EcFrameworkTest.comp = new EcCompetency();
        EcFrameworkTest.comp.generateId(EcFrameworkTest.server);
        EcFrameworkTest.comp.setName("Test Competency");
        EcFrameworkTest.comp.addOwner(EcFrameworkTest.ppk.toPk());
        console.log("Saving Competency");
        await EcRepository.save(
            EcFrameworkTest.comp,
            function (p1) { },
            function (p1) {
                Assert.fail("Unable to Save Competency");
            }
        );
        EcFrameworkTest.level = new EcLevel();
        EcFrameworkTest.level.generateId(EcFrameworkTest.server);
        EcFrameworkTest.level.setName("Test Level");
        EcFrameworkTest.level.addOwner(EcFrameworkTest.ppk.toPk());
        console.log("Saving Level");
        await EcRepository.save(
            EcFrameworkTest.level,
            function (p1) { },
            function (p1) {
                Assert.fail("Unable to Save Level");
            }
        );
        EcFrameworkTest.comp2 = new EcCompetency();
        EcFrameworkTest.comp2.generateId(EcFrameworkTest.server);
        EcFrameworkTest.comp2.setName("Test Competency 2");
        EcFrameworkTest.comp2.addOwner(EcFrameworkTest.ppk.toPk());
        console.log("Saving 2nd Competency");
        await EcRepository.save(
            EcFrameworkTest.comp2,
            function (p1) { },
            function (p1) {
                Assert.fail("Unable to Save 2nd Competency");
            }
        );
        EcFrameworkTest.rel = new EcAlignment();
        EcFrameworkTest.rel.generateId(EcFrameworkTest.server);
        EcFrameworkTest.rel.source = EcFrameworkTest.comp.id;
        EcFrameworkTest.rel.target = EcFrameworkTest.comp2.id;
        EcFrameworkTest.rel.name = "Test Relation";
        EcFrameworkTest.rel.relationType = "requires";
        EcFrameworkTest.rel.addOwner(EcFrameworkTest.ppk.toPk());
        console.log("Saving Relation");
        await EcRepository.save(
            EcFrameworkTest.rel,
            function (p1) { },
            function (p1) {
                Assert.fail("Unable to Save Relation");
            }
        );
    };
    afterTest = async function () {
        await EcFrameworkTest.framework._delete(null, function (p1) {
            Assert.fail("Failed to Delete Framework");
        });
        await EcFrameworkTest.comp._delete(
            null,
            function (p1) {
                Assert.fail("Failed to Delete Competency");
            },
            null
        );
        await EcFrameworkTest.comp2._delete(
            null,
            function (p1) {
                Assert.fail("Failed to Delete 2nd Competency");
            },
            null
        );
        await EcRepository._delete(EcFrameworkTest.rel, null, function (p1) {
            Assert.fail("Failed to Delete Relation");
        });
        await EcRepository._delete(EcFrameworkTest.level, null, function (p1) {
            Assert.fail("Failed to Delete Level");
        });
    };
    createFrameworkTest = async function () {
        var paramObj = {};
        paramObj["size"] = 1000;
        await EcFrameworkTest.repo.searchWithParams(
            new EcFramework().getSearchStringByType(),
            paramObj,
            null,
            function (p1) {
                for (var i = 0; i < p1.length; i++) {
                    var d = p1[i];
                    if (d.id == EcFrameworkTest.framework.id) {
                        return;
                    }
                }
                Assert.fail("Unable to search for framework after save");
            },
            function (p1) {
                Assert.fail("Failed to Search for Framework");
            }
        );
    };
    createNoNameFrameworkTest = async function () {
        var noName = new EcFramework();
        noName.generateId(EcFrameworkTest.server);
        await noName.save(
            function (p1) {
                Assert.fail(
                    "No Name Framework saved, should not be able to save a framework without a name"
                );
            },
            function (p1) {
                console.log("Failed to save a Framework without a name");
            },
            null
        );
    };
    viewFrameworkTest = async function () {
        await EcRepository.get(
            EcFrameworkTest.framework.id,
            function (p1) {
                var f = p1;
                Assert.assertEquals(
                    "Name does not match saved name",
                    EcFrameworkTest.framework.name,
                    f.name
                );
                Assert.assertEquals(
                    "Description does not match saved description",
                    EcFrameworkTest.framework.description,
                    f.description
                );
            },
            function (p1) {
                Assert.fail("Unable to Retreive Framework");
            }
        );
    };
    updateFrameworkInfoTest = async function () {
        var editedFramework = new EcFramework();
        editedFramework.copyFrom(EcFrameworkTest.framework);
        editedFramework.name = "Updated Name";
        editedFramework.description = "Updated Description";
        console.log("Updating Framework...");
        await editedFramework.save(
            function (p1) {
                console.log("Framework Updated.");
            },
            function (p1) {
                Assert.fail("Failed to update Framework");
            },
            null
        );
        await EcRepository.get(
            editedFramework.id,
            function (p1) {
                var f = p1;
                Assert.assertEquals(
                    "Name does not match updated name",
                    editedFramework.name,
                    f.name
                );
                Assert.assertEquals(
                    "Description does not match updated description",
                    editedFramework.description,
                    f.description
                );
            },
            function (p1) {
                Assert.fail("Unable to Retreive Framework after update");
            }
        );
    };
    updateFrameworkNoNameTest = async function () {
        var editedFramework = new EcFramework();
        editedFramework.copyFrom(EcFrameworkTest.framework);
        editedFramework.name = "";
        editedFramework.description = "Updated Description";
        console.log("Updating Framework...");
        await editedFramework.save(
            function (p1) {
                Assert.fail(
                    "Saved Framework with no name, this shouldnt be allowed"
                );
            },
            function (p1) {
                console.log("Failed to update framework with no name");
            },
            null
        );
        await EcRepository.get(
            editedFramework.id,
            function (p1) {
                var f = p1;
                Assert.assertNotSame(
                    "Name should not be empty",
                    editedFramework.name,
                    f.name
                );
            },
            function (p1) {
                Assert.fail("Unable to Retreive Framework after update");
            }
        );
    };
    updateFrameworkAddRemoveCompetencyTest = async function () {
        var editedFramework = new EcFramework();
        editedFramework.copyFrom(EcFrameworkTest.framework);
        editedFramework.addCompetency(EcFrameworkTest.comp.id);
        console.log("Adding Competency to Framework...");
        await editedFramework.save(
            function (p1) {
                console.log("Framework Updated.");
            },
            function (p1) {
                Assert.fail("Failed to add competency to Framework");
            },
            null
        );
        await EcRepository.get(
            editedFramework.id,
            function (p1) {
                var f = p1;
                if (f.competency.indexOf(EcFrameworkTest.comp.shortId()) != -1)
                    return;
                Assert.fail("Unable to find competency in framework");
            },
            function (p1) {
                Assert.fail("Unable to Retreive Framework after update");
            }
        );
        var frameworkCompRemoved = new EcFramework();
        frameworkCompRemoved.copyFrom(editedFramework);
        frameworkCompRemoved.removeCompetency(
            EcFrameworkTest.comp.id,
            null,
            null
        );
        console.log("Updating Framework...");
        await frameworkCompRemoved.save(
            function (p1) {
                console.log("Framework Updated.");
            },
            function (p1) {
                Assert.fail("Failed to Remove Competency from Framework");
            },
            null
        );
        await EcRepository.get(
            frameworkCompRemoved.id,
            function (p1) {
                var f = p1;
                if (f.competency.indexOf(EcFrameworkTest.comp.id) == -1) return;
                Assert.fail("Competency not removed from framework");
            },
            function (p1) {
                Assert.fail("Unable to Retreive Framework after update");
            }
        );
    };
    updateFrameworkRemoveNonCompetencyTest = async function () {
        var frameworkCompRemoved = new EcFramework();
        frameworkCompRemoved.copyFrom(EcFrameworkTest.framework);
        var compSize =
            EcFrameworkTest.framework.competency == null
                ? 0
                : frameworkCompRemoved.competency.length;
        frameworkCompRemoved.removeCompetency(
            EcFrameworkTest.comp.id,
            null,
            null
        );
        console.log("Updating Framework...");
        await frameworkCompRemoved.save(
            function (p1) {
                console.log("Framework Updated.");
            },
            function (p1) {
                Assert.fail("Failed to Remove Competency from Framework");
            },
            null
        );
        await EcRepository.get(
            frameworkCompRemoved.id,
            function (p1) {
                var f = p1;
                if (f.competency == null && compSize == 0 || f.competency.length == compSize)
                    return;
                Assert.fail("Competency array size did not remain unchanged");
            },
            function (p1) {
                Assert.fail("Unable to Retreive Framework after update");
            }
        );
    };
    updateFrameworkAddRemoveLevelTest = async function () {
        var editedFramework = new EcFramework();
        editedFramework.copyFrom(EcFrameworkTest.framework);
        editedFramework.addLevel(EcFrameworkTest.level.id);
        console.log("Adding Level to Framework...");
        await editedFramework.save(
            function (p1) {
                console.log("Framework Updated.");
            },
            function (p1) {
                Assert.fail("Failed to add level to Framework");
            },
            null
        );
        await EcRepository.get(
            editedFramework.id,
            function (p1) {
                var f = p1;
                if (f.level.indexOf(EcFrameworkTest.level.shortId()) != -1)
                    return;
                Assert.fail("Unable to find level in framework");
            },
            function (p1) {
                Assert.fail("Unable to Retreive Framework after update");
            }
        );
        var frameworkLevelRemoved = new EcFramework();
        frameworkLevelRemoved.copyFrom(editedFramework);
        frameworkLevelRemoved.removeLevel(EcFrameworkTest.level.id);
        console.log("Updating Framework...");
        await frameworkLevelRemoved.save(
            function (p1) {
                console.log("Framework Updated.");
            },
            function (p1) {
                Assert.fail("Failed to Remove Level from Framework");
            },
            null
        );
        await EcRepository.get(
            frameworkLevelRemoved.id,
            function (p1) {
                var f = p1;
                if (f.level.indexOf(EcFrameworkTest.level.id) == -1) return;
                Assert.fail("Level not removed from framework");
            },
            function (p1) {
                Assert.fail("Unable to Retreive Framework after update");
            }
        );
    };
    updateFrameworkRemoveNonLevelTest = async function () {
        var frameworkCompRemoved = new EcFramework();
        frameworkCompRemoved.copyFrom(EcFrameworkTest.framework);
        var levelSize =
            EcFrameworkTest.framework.level == null
                ? 0
                : frameworkCompRemoved.level.length;
        frameworkCompRemoved.removeLevel(EcFrameworkTest.level.id);
        console.log("Updating Framework...");
        await frameworkCompRemoved.save(
            function (p1) {
                console.log("Framework Updated.");
            },
            function (p1) {
                Assert.fail("Failed to Remove Competency from Framework");
            },
            null
        );
        await EcRepository.get(
            frameworkCompRemoved.id,
            function (p1) {
                var f = p1;
                if (
                    f.level == null && levelSize == 0 ||
                    f.level.length == levelSize
                )
                    return;
                Assert.fail("Level array size did not remain unchanged");
            },
            function (p1) {
                Assert.fail("Unable to Retreive Framework after update");
            }
        );
    };
    updateFrameworkAddRemoveRelationTest = async function () {
        var editedFramework = new EcFramework();
        editedFramework.copyFrom(EcFrameworkTest.framework);
        editedFramework.addRelation(EcFrameworkTest.rel.id);
        console.log("Adding Level to Framework...");
        await editedFramework.save(
            function (p1) {
                console.log("Framework Updated.");
            },
            function (p1) {
                Assert.fail("Failed to add relation to Framework");
            },
            null
        );
        await EcRepository.get(
            editedFramework.id,
            function (p1) {
                var f = p1;
                if (f.relation.indexOf(EcFrameworkTest.rel.shortId()) != -1)
                    return;
                Assert.fail("Unable to find relation in framework");
            },
            function (p1) {
                Assert.fail("Unable to Retreive Framework after update");
            }
        );
        var frameworkRelationRemoved = new EcFramework();
        frameworkRelationRemoved.copyFrom(editedFramework);
        frameworkRelationRemoved.removeRelation(EcFrameworkTest.rel.id);
        console.log("Updating Framework...");
        await frameworkRelationRemoved.save(
            function (p1) {
                console.log("Framework Updated.");
            },
            function (p1) {
                Assert.fail("Failed to Remove relation from Framework");
            },
            null
        );
        await EcRepository.get(
            frameworkRelationRemoved.id,
            function (p1) {
                var f = p1;
                if (f.relation.indexOf(EcFrameworkTest.rel.id) == -1) return;
                Assert.fail("relation not removed from framework");
            },
            function (p1) {
                Assert.fail("Unable to Retreive Framework after update");
            }
        );
    };
    updateFrameworkRemoveNonRelationTest = async function () {
        var frameworkCompRemoved = new EcFramework();
        frameworkCompRemoved.copyFrom(EcFrameworkTest.framework);
        var relSize =
            EcFrameworkTest.framework.relation == null
                ? 0
                : frameworkCompRemoved.relation.length;
        frameworkCompRemoved.removeRelation(EcFrameworkTest.rel.id);
        console.log("Updating Framework...");
        await frameworkCompRemoved.save(
            function (p1) {
                console.log("Framework Updated.");
            },
            function (p1) {
                Assert.fail("Failed to Remove Competency from Framework");
            },
            null
        );
        await EcRepository.get(
            frameworkCompRemoved.id,
            function (p1) {
                var f = p1;
                if (
                    f.relation == null && relSize == 0 ||
                    f.relation.length == relSize
                )
                    return;
                Assert.fail("Level array size did not remain unchanged");
            },
            function (p1) {
                Assert.fail("Unable to Retreive Framework after update");
            }
        );
    };
    deleteFramework = async function () {
        var toDelete = new EcFramework();
        toDelete.generateId(EcFrameworkTest.server);
        toDelete.name = "Framework to Delete";
        toDelete.addOwner(EcFrameworkTest.ppk.toPk());
        console.log("Saving Framework to Delete");
        await toDelete.save(
            function (p1) {
                console.log("Framework Saved.");
            },
            function (p1) {
                Assert.fail("Failed to Save Framework");
            },
            null
        );
        console.log("Deleting Framework...");
        await toDelete._delete(
            function (p1) {
                console.log("Successfully deleted Framework");
            },
            function (p1) {
                Assert.fail("Unable to Delete Framework");
            }
        );
        await EcRepository.get(
            toDelete.shortId(),
            function (p1) {
                if (
                    p1.context != "" && p1.context != null ||
                    p1.type != "" && p1.type != null
                )
                    Assert.fail(
                        "Shouldn't be able to Retreive Framework after delete"
                    );
            },
            function () { }
        );
    };
}
class ProfileProcessorTest {
    static SANDBOX_SERVER = "https://sandbox.cassproject.org/api/";
    static JILL_DABOSS_PPK_PEM = "xxx";
    static SAMANTHA_SMITH_PPK_PEM = "xxx";
    static SAMANTHA_SMITH_PK_PEM = "xxx";
    static SELECTED_SERVER = ProfileProcessorTest.SANDBOX_SERVER;
    static TEST_END_USER_PPK_PEM = ProfileProcessorTest.JILL_DABOSS_PPK_PEM;
    static CAP_DBS_FWK_ID =
        "https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Framework/fd992893-1d5a-432f-ba24-d88d20d44f50";
    static CAP_PL_FWK_ID =
        "https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Framework/6c297f8e-8e94-47e7-b298-1104b2652361";
    static FWK_GRPH_PERF_TEST_ID = ProfileProcessorTest.CAP_PL_FWK_ID;
    capFrameworkGraphPerfTest = function () {
        Assert.assertSame(true, true);
    };
    samanthaSmithProfileTest = function () {
        Assert.assertSame(true, true);
    };
}
class FrameworkCollapserTest {
    static SANDBOX_SERVER = "https://sandbox.cassproject.org/api/";
    static JILL_DABOSS_PPK_PEM = "xxx";
    static SELECTED_SERVER = FrameworkCollapserTest.SANDBOX_SERVER;
    static TEST_END_USER_PPK_PEM = FrameworkCollapserTest.JILL_DABOSS_PPK_PEM;
    static CAP_DBS_FWK_ID =
        "https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Framework/fd992893-1d5a-432f-ba24-d88d20d44f50";
    static CAP_PL_FWK_ID =
        "https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Framework/6c297f8e-8e94-47e7-b298-1104b2652361";
    static FWK_GRPH_PERF_TEST_ID = FrameworkCollapserTest.CAP_PL_FWK_ID;
    FRAMEWORK_ID =
        "https://sandbox.service.cassproject.org/data/schema.cassproject.org.0.3.Framework/ef23be65-b99e-44c6-93e6-1fdeacf1bbe2";
    repo = null;
    urlArray = null;
    capFrameworkCollapseTest = function () {
        Assert.assertSame(true, true);
    };
    basicFrameworkCollapseTest = async function () {
        console.log("start basicFrameworkCollapseTest:");
        try {
            this.repo = new EcRepository();
            this.repo.selectedServer = "https://sandbox.cassproject.org/api/";
            var fct = this;
            var framework = await EcFramework.get(this.FRAMEWORK_ID);
            Assert.assertTrue(framework != null);
            console.log("Framework: " + framework.name);
            var fc = new FrameworkCollapser();
            await fc.collapseFramework(
                this.repo,
                framework,
                true,
                function (fwId, npg) {
                    console.log(
                        "--================ FRAMEWORK COLLAPSED GRAPH ================--"
                    );
                    console.log(npg.toStringGraphAll());
                },
                function (err) {
                    console.log("collapseFramework Failure: " + err);
                }
            );
        } catch (e) {
            console.log("Exception: " + e.toString());
        }
        console.log("end basicFrameworkCollapseTest");
    };
    basicAssertionSearchTest = async function () {
        console.log("start basicCollapseTest:");
        try {
            this.repo = new EcRepository();
            this.repo.selectedServer = "https://sandbox.cassproject.org/api/";
            await EcAssertion.search(
                this.repo,
                null,
                function (eca) {
                    console.log("Success: " + eca.length);
                },
                function (err) {
                    console.log("Failure: " + err);
                },
                null
            );
        } catch (e) {
            console.log("Exception: " + e.toString());
        }
        Assert.assertSame(true, true);
        console.log("end basicCollapseTest TEST");
    };
    basicMultiGetTest = async function () {
        console.log("start basicMultiGetTest:");
        try {
            this.repo = new EcRepository();
            this.repo.selectedServer = "https://sandbox.cassproject.org/api/";
            this.urlArray = [];
            this.urlArray.push(
                "https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Competency/5f1e58d5-1073-4381-b6e6-e4943d35606a"
            );
            this.urlArray.push(
                "https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Competency/23d8e2cb-2af7-4e3a-bdb8-392d18f625d8"
            );
            this.urlArray.push(
                "https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Relation/c275ee4d-f831-46a6-bd52-3e9a5892bf98"
            );
            this.urlArray.push(
                "https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Relation/67b68aa4-1156-443d-8c92-2636ca1eb129"
            );
            this.urlArray.push(
                "https://sandbox.cassproject.org/api/custom/data/schema.cassproject.org.0.3.Relation/9bc16b74-dd96-4ba7-b0a4-038e6edb4f50"
            );
            var fct = this;
            await this.repo.multiget(
                this.urlArray,
                function (rlda) {
                    var rld;
                    for (var i = 0; i < rlda.length; i++) {
                        rld = rlda[i];
                        if ("competency".equals(rld.type.toLowerCase())) {
                            console.log(
                                "rlda[" +
                                i +
                                "]: " +
                                rld.type +
                                " - " +
                                rld.shortId() +
                                " - " +
                                rld.name
                            );
                        } else {
                            console.log(
                                "rlda[" +
                                i +
                                "]: " +
                                rld.type +
                                " - " +
                                rld.shortId() +
                                " - " +
                                rld.source +
                                " " +
                                rld.relationType +
                                " " +
                                rld.target
                            );
                        }
                    }
                },
                function (err) {
                    console.trace(err);
                    throw err;
                }
            );
        } catch (e) {
            console.trace(e);
            throw err;
        }
        Assert.assertSame(true, true);
        console.log("end basicMultiGetTest TEST");
    };
}
class CollapserTest {
    basicCollapseTest = function () {
        console.log("start basicCollapseTest:");
        try {
            var graph1 = this.buildTest2();
            console.log("--================ INPUT GRAPH ================--");
            console.log(graph1.toStringGraphByNode());
            var cgc = new CyclicGraphCollapser();
            var npg = cgc.collapseGraph(graph1);
            if (npg == null) console.log("COLLAPSED GRAPH IS NULL!!!");
            else {
                console.log(
                    "--================ COLLAPSED GRAPH ================--"
                );
                console.log(npg.toStringGraphAll());
            }
        } catch (e) {
            console.log("Exception: " + e.toString());
        }
        Assert.assertSame(true, true);
        console.log("end basicCollapseTest");
    };
    buildTest0 = function () {
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
    buildTest1 = function () {
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
    buildTest2 = function () {
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
        graph.addRelation(
            nodeA,
            nodeB,
            RelationType.RELATION_TYPE.IS_EQUIVALENT_TO
        );
        graph.addRelation(nodeB, nodeC, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(
            nodeC,
            nodeD,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeD,
            nodeF,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(nodeF, nodeB, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(
            nodeD,
            nodeE,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(nodeE, nodeG, RelationType.RELATION_TYPE.REQUIRES);
        graph.createImpliedRelations();
        return graph;
    };
    buildTest3 = function () {
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
        graph.addRelation(
            nodeC,
            nodeD,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeD,
            nodeI,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeI,
            nodeB,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeD,
            nodeE,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeE,
            nodeF,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeF,
            nodeG,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeG,
            nodeH,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeH,
            nodeE,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.createImpliedRelations();
        return graph;
    };
    buildTest4 = function () {
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
        graph.addRelation(
            nodeD,
            nodeE,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(nodeA, nodeB, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(nodeB, nodeC, RelationType.RELATION_TYPE.NARROWS);
        graph.addRelation(
            nodeF,
            nodeG,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeG,
            nodeH,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeI,
            nodeB,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeE,
            nodeF,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeC,
            nodeD,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeD,
            nodeI,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeH,
            nodeE,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(nodeG, nodeB, RelationType.RELATION_TYPE.NARROWS);
        graph.createImpliedRelations();
        return graph;
    };
    buildTest5 = function () {
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
        graph.addRelation(
            nodeC,
            nodeD,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeD,
            nodeI,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(nodeI, nodeB, RelationType.RELATION_TYPE.BROADENS);
        graph.addRelation(nodeD, nodeE, RelationType.RELATION_TYPE.BROADENS);
        graph.addRelation(nodeE, nodeF, RelationType.RELATION_TYPE.BROADENS);
        graph.addRelation(nodeF, nodeG, RelationType.RELATION_TYPE.BROADENS);
        graph.addRelation(nodeG, nodeH, RelationType.RELATION_TYPE.REQUIRES);
        graph.addRelation(nodeH, nodeE, RelationType.RELATION_TYPE.NARROWS);
        graph.createImpliedRelations();
        return graph;
    };
    buildTest6 = function () {
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
        graph.addRelation(
            nodeC,
            nodeD,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeD,
            nodeI,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeI,
            nodeB,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(nodeD, nodeE, RelationType.RELATION_TYPE.REQUIRES);
        graph.addRelation(nodeE, nodeF, RelationType.RELATION_TYPE.BROADENS);
        graph.addRelation(nodeF, nodeG, RelationType.RELATION_TYPE.BROADENS);
        graph.addRelation(nodeG, nodeH, RelationType.RELATION_TYPE.REQUIRES);
        graph.addRelation(nodeH, nodeE, RelationType.RELATION_TYPE.REQUIRES);
        graph.createImpliedRelations();
        return graph;
    };
    buildTest7 = function () {
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
        graph.addRelation(
            nodeC,
            nodeD,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(
            nodeD,
            nodeB,
            RelationType.RELATION_TYPE.IS_REQUIRED_BY
        );
        graph.addRelation(nodeB, nodeF, RelationType.RELATION_TYPE.BROADENS);
        graph.addRelation(nodeF, nodeE, RelationType.RELATION_TYPE.REQUIRES);
        graph.addRelation(nodeE, nodeB, RelationType.RELATION_TYPE.REQUIRES);
        graph.createImpliedRelations();
        return graph;
    };
}
class RollupRuleInterfaceTest extends EvidenceProcessingTestBase {
    input =
        "[competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/d885dcd8-f00b-4ccf-82d8-ee14d6c84ef0 AND confidence:>0.6] AND [competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/31971023-5d61-42c0-bc64-ae8e8b7f0d09 AND confidence:>0.6 ] AND [competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/625c9e61-2503-401a-8df7-c9f14133ce95 AND confidence:>0.6] AND [competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/0a2ea5e4-b5b4-461e-a19c-d17772da4d16 AND confidence:>0.6]";
    basicTrueTest = function () {
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
        var input =
            "[competency:<C> AND confidence:>0.6] AND [competency:<C2> AND confidence:>0.6] AND [competency:<C3> AND confidence:>0.6] AND [competency:<C4> AND confidence:>0.6]";
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
        this.performTest(f, cx, function (p1) {
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
    basicTest = function () {
        var input =
            "[competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/d885dcd8-f00b-4ccf-82d8-ee14d6c84ef0 AND confidence:>0.6] AND [competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/31971023-5d61-42c0-bc64-ae8e8b7f0d09 AND confidence:>0.6 ] AND [competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/625c9e61-2503-401a-8df7-c9f14133ce95 AND confidence:>0.6] AND [competency:http://skyrepo.eduworks.com/service/data/schema.eduworks.com.cass.0.1.competency/0a2ea5e4-b5b4-461e-a19c-d17772da4d16 AND confidence:>0.6]";
        var ip = new InquiryPacket(
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        );
        var rrp = new RollupRuleProcessor(ip, null);
        var rri = new RollupRuleInterface(input, rrp);
        rri.logFunction = function (p1) {
            console.log(p1);
        };
        rri.success = function (p1) {
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
                            console.log(
                                "       " +
                                sp.subPackets[j].type +
                                " - " +
                                sp.subPackets[j].rule
                            );
                        }
                    }
                }
            }
        };
        rri.go();
    };
}
class PredictiveAssertionProcessorTest extends EvidenceProcessingTestBase {
    static SUBJECT_PEM =
        "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtKxQMxXdoogq+eNihcCcbgloNDk333Vt55kKf8Bjko+QqL4DLAnYB+TCS+7fQesaq69BIBDetIWudaS+pdAohzLz8PXJiMrBoNk23PrVwdhe6E6BXh1b33WnsbSwTvbwvo402cY9+RndnOCBRhIm7ehJKyt1x4erm3luXhyz4PISmwLJ+1FIP4rF5jNi6jyEPpyHuLB7jfr8WbOOkhlsTiRVc0KmfTycVyxQXZayGyIhABGZGFfewY9N2oL8btucebP06TDUX5fL1abNTnGUe6yDjfTKV7ndQ4RBBw1k0cIVJCandQ3P5hG4vOQSslpPMq5QXXI/XjyiBFD1VZWDEwIDAQAB-----END PUBLIC KEY-----";
    static ASSERTION_DATE = "1505322211793";
    static EXPIRATION_DATE = "1642527163582";
    buildNodeArray = function () {
        var na = [];
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
    buildEdgeArray = function () {
        var ea = [];
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
    buildPositiveAssertionArray = function () {
        var paa = [];
        var sa;
        sa = new SimpleAssertion("pa-1", "COMP-A", 0.82);
        sa.setSubjectPem(PredictiveAssertionProcessorTest.SUBJECT_PEM);
        sa.setAssertionDate(
            parseInt(PredictiveAssertionProcessorTest.ASSERTION_DATE)
        );
        sa.setExpirationDate(
            parseInt(PredictiveAssertionProcessorTest.EXPIRATION_DATE)
        );
        sa.setNegative(false);
        paa.push(sa);
        sa = new SimpleAssertion("pa-2", "COMP-B", 0.82);
        sa.setSubjectPem(PredictiveAssertionProcessorTest.SUBJECT_PEM);
        sa.setAssertionDate(
            parseInt(PredictiveAssertionProcessorTest.ASSERTION_DATE)
        );
        sa.setExpirationDate(
            parseInt(PredictiveAssertionProcessorTest.EXPIRATION_DATE)
        );
        sa.setNegative(false);
        paa.push(sa);
        sa = new SimpleAssertion("pa-3", "COMP-G", 1.0);
        sa.setSubjectPem(PredictiveAssertionProcessorTest.SUBJECT_PEM);
        sa.setAssertionDate(
            parseInt(PredictiveAssertionProcessorTest.ASSERTION_DATE)
        );
        sa.setExpirationDate(
            parseInt(PredictiveAssertionProcessorTest.EXPIRATION_DATE)
        );
        sa.setNegative(false);
        paa.push(sa);
        sa = new SimpleAssertion("pa-4", "COMP-I", 1.0);
        sa.setSubjectPem(PredictiveAssertionProcessorTest.SUBJECT_PEM);
        sa.setAssertionDate(
            parseInt(PredictiveAssertionProcessorTest.ASSERTION_DATE)
        );
        sa.setExpirationDate(
            parseInt(PredictiveAssertionProcessorTest.EXPIRATION_DATE)
        );
        sa.setNegative(false);
        paa.push(sa);
        sa = new SimpleAssertion("pa-5", "COMP-K", 1.0);
        sa.setSubjectPem(PredictiveAssertionProcessorTest.SUBJECT_PEM);
        sa.setAssertionDate(
            parseInt(PredictiveAssertionProcessorTest.ASSERTION_DATE)
        );
        sa.setExpirationDate(
            parseInt(PredictiveAssertionProcessorTest.EXPIRATION_DATE)
        );
        sa.setNegative(false);
        paa.push(sa);
        return paa;
    };
    buildNegativeAssertionArray = function () {
        var naa = [];
        var sa;
        sa = new SimpleAssertion("na-1", "COMP-D", 0.82);
        sa.setSubjectPem(PredictiveAssertionProcessorTest.SUBJECT_PEM);
        sa.setAssertionDate(
            parseInt(PredictiveAssertionProcessorTest.ASSERTION_DATE)
        );
        sa.setExpirationDate(
            parseInt(PredictiveAssertionProcessorTest.EXPIRATION_DATE)
        );
        sa.setNegative(true);
        naa.push(sa);
        sa = new SimpleAssertion("na-1", "COMP-E", 1.0);
        sa.setSubjectPem(PredictiveAssertionProcessorTest.SUBJECT_PEM);
        sa.setAssertionDate(
            parseInt(PredictiveAssertionProcessorTest.ASSERTION_DATE)
        );
        sa.setExpirationDate(
            parseInt(PredictiveAssertionProcessorTest.EXPIRATION_DATE)
        );
        sa.setNegative(true);
        naa.push(sa);
        return naa;
    };
    generateTestCompetencyGraph = function () {
        var cg = new CompetencyGraph(true);
        cg.setNodes(this.buildNodeArray());
        cg.setEdges(this.buildEdgeArray());
        cg.setPositiveAssertions(this.buildPositiveAssertionArray());
        cg.setNegativeAssertions(this.buildNegativeAssertionArray());
        return cg;
    };
    runPredictiveAssertionProcessorTest = function () {
        var cg = this.generateTestCompetencyGraph();
        console.log("*******************************Input Competency Graph: ");
        console.log(cg.getJsonString());
        var pap = new PredictiveAssertionProcessor();
        var pnp = pap.predictAll(
            cg,
            PredictiveAssertionProcessorTest.SUBJECT_PEM,
            null,
            null,
            null
        );
        console.log("*******************************Prediction: ");
        console.log(pnp.getJsonString());
    };
}
class EvidenceProcessingTest extends EvidenceProcessingTestBase {
    basicTrueTest = function () {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        f.addCompetency(c.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c);
        this.performTest(f, c, function (p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.TRUE, p1.result);
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
    };
    basicFalseTest = function () {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        f.addCompetency(c.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newFalseAssertion(c);
        this.performTest(f, c, function (p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.FALSE, p1.result);
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
    };
    basicIndeterminantTest = function () {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        f.addCompetency(c.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c);
        var a2 = this.newFalseAssertion(c);
        this.performTest(f, c, function (p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(
                InquiryPacket.ResultType.INDETERMINANT,
                p1.result
            );
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(a2.shortId());
    };
    basicUnknownTest = function () {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        f.addCompetency(c.shortId());
        f.save(null, this.failure, this.repo);
        this.performTest(f, c, function (p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.UNKNOWN, p1.result);
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
    };
    basicEquivalenceTest = function () {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c2);
        this.performTest(f, c, function (p1) {
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
    basicEquivalenceFalseTest = function () {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newFalseAssertion(c2);
        this.performTest(f, c, function (p1) {
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
    basicEquivalenceIndeterminantTest = function () {
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
        this.performTest(f, c, function (p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(
                InquiryPacket.ResultType.INDETERMINANT,
                p1.result
            );
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(a.shortId());
        EvidenceProcessingTestBase.deleteById(a2.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    basicEquivalenceUnknownTest = function () {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.IS_EQUIVALENT_TO);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        this.performTest(f, c, function (p1) {
            console.log(p1.result.name());
            console.log(p1);
            Assert.assertSame(InquiryPacket.ResultType.UNKNOWN, p1.result);
        });
        EvidenceProcessingTestBase.deleteById(f.shortId());
        EvidenceProcessingTestBase.deleteById(c.shortId());
        EvidenceProcessingTestBase.deleteById(c2.shortId());
        EvidenceProcessingTestBase.deleteById(r.shortId());
    };
    basicEquivalenceEquivalenceTest = function () {
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
        this.performTest(f, c, function (p1) {
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
    basicEquivalenceUnEquivalentTest = function () {
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
        var isTest = function (p1) {
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
    basicRequiresSatisfiedTest = function () {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.REQUIRES);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c2);
        var isTest = function (p1) {
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
    basicNarrowsSatisfiedTest = function () {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Multiply");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c2);
        var isTest = function (p1) {
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
    basicNarrowsUnsatisfiedTest = function () {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Multiply");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.NARROWS);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newAssertion(c);
        var isTest = function (p1) {
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
    basicNarrowsPositiveNegativeTest = function () {
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
        var isTest = function (p1) {
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
    basicRequiresFalseTest = function () {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        var c2 = this.newCompetency("Sum");
        f.addCompetency(c.shortId());
        f.addCompetency(c2.shortId());
        var r = this.newRelation(c, c2, EcAlignment.REQUIRES);
        f.addRelation(r.shortId());
        f.save(null, this.failure, this.repo);
        var a = this.newFalseAssertion(c2);
        var isTest = function (p1) {
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
}
class GraphTest extends EvidenceProcessingTestBase {
    static REPOSITORY_URL = "https://dev.cassproject.org/api/";
    static FRAMREWORK_ID =
        "https://dev.cassproject.org/api/data/schema.cassproject.org.0.2.Framework/775965fc-6b50-4b78-b15e-cc60fbad66a0";
    static COMPETENCY_ID =
        "https://dev.cassproject.org/api/data/schema.cassproject.org.0.2.Competency/1f2126b3-cb90-4ab2-a646-40da40384c93";
    static CREATE_IMPLIED_EDGES = true;
    static ADD_ASSERTIONS = true;
    buildAndConfigureGraphBuilder = function () {
        var repo = new EcRepository();
        repo.selectedServer = GraphTest.REPOSITORY_URL;
        EcRepository.alwaysTryUrl = true;
        var cgb = new CompetencyGraphBuilder();
        cgb.repositories.push(repo);
        cgb.includeAssertions = GraphTest.ADD_ASSERTIONS;
        cgb.frameworkId = GraphTest.FRAMREWORK_ID;
        cgb.rootCompetencyId = GraphTest.COMPETENCY_ID;
        cgb.success = function (cg) {
            console.log("CompetencyGraphBuilder success :)");
            console.log("Object: " + cg);
            console.log("JSON String: " + cg.getJsonString());
            Assert.assertSame(true, true);
        };
        cgb.failure = function (er) {
            console.log("CompetencyGraphBuilder failed :(");
            console.log("Object: " + er);
            console.log("JSON String: " + er.getJsonString());
            Assert.fail();
        };
        return cgb;
    };
    generateBasicGraphTest = function () {
        console.log("Start generateBasicGraphTest");
        var cgb = this.buildAndConfigureGraphBuilder();
        cgb.buildCompetencyGraph(GraphTest.CREATE_IMPLIED_EDGES);
    };
}
class CtdlProcessingTest {
    static CREDENTIAL_LOCATOR =
        "https://army.cass.eduworks.us/api/custom/data/ce-C57948C2-6636-4ED3-9B51-BC5A9EC56D88";
    static RESOURCE_LOCATOR_URL = "https://army.cass.eduworks.us/api/data/";
    static STRIP_ID = true;
    buildAndConfigureLocator = function () {
        EcRemote.async = false;
        var ccl = new CredentialCompetencyLocator();
        ccl.credentialLocator = CtdlProcessingTest.CREDENTIAL_LOCATOR;
        ccl.stripId = CtdlProcessingTest.STRIP_ID;
        ccl.success = function (ca) {
            console.log("CredentialCompetencyLocator success :)");
            console.log("Object: " + ca);
            console.log("CredentialCompetencyLocator log: ");
            for (var i = 0; i < ccl.logBuffer.length; i++) {
                console.log("   " + ccl.logBuffer[i]);
            }
            console.log(
                "******************FINAL Competency List(" + ca.length + "): "
            );
            for (var j = 0; j < ca.length; j++) {
                console.log("   framework:" + ca[j].framework);
                console.log("   competency:" + ca[j].targetNode);
            }
            Assert.assertSame(true, true);
        };
        ccl.failure = function (er) {
            console.log("CompetencyGraphBuilder failed : " + er);
            console.log("CredentialCompetencyLocator log: ");
            for (var i = 0; i < ccl.logBuffer.length; i++) {
                console.log("   " + ccl.logBuffer[i]);
            }
            Assert.fail();
        };
        return ccl;
    };
    basicCtdlTest = function () { };
}
/**
 *  Created by fray on 5/30/17.
 */
class MilCredCoprocessorTest extends EvidenceProcessingTestBase {
    basicTrueTest = function () {
        var f = this.newFramework("Billy's Framework");
        var c = this.newCompetency("Add");
        f.addCompetency(c.shortId());
        f.save(null, this.failure, this.repo);
        var cr = this.newCredential("Adding Credential");
        var w = this.newCreativeRelation(
            cr,
            c,
            "http://schema.cassproject.org/0.2/vocab/asserts"
        );
        var a = this.newAchieveAction(cr);
        var processor = this.getTestProcessor();
        processor.coprocessors.push(new MilCredCoprocessor());
        this.performTest(processor, f, c, function (p1) {
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
    basicUnknownTest = function () {
        Assert.assertTrue(true);
    };
}
class ImportTestBase {
    ask = null;
    repo = null;
    failure = null;
    logString = null;
    logObject = null;
    newId1 = null;
    static deleteById = function (id) {
        EcRepository.get(
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
    setup = function () {
        this.failure = function (p1) {
            console.log(p1);
            Assert.fail();
        };
        this.logString = function (p1) {
            console.log(p1);
        };
        this.logObject = function (p1) {
            console.log(p1);
        };
        this.ask = function (param1) {
            console.log(param1);
            return null;
        };
        this.repo = new EcRepository();
        this.repo.selectedServer = "http://localhost/api/";
        this.newId1 = new EcIdentity();
        this.newId1.ppk = EcPpk.fromPem(
            "-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEAz4BiFucFE9bNcKfGD+e6aPRHl402YM4Z6nrurDRNlnwsWpsCoZasPLkjC314pVtHAI2duZo+esGKDloBsiLxASRJo3R2XiXVh2Y8U1RcHA5mWL4tMG5UY2d0libpNEHbHPNBmooVYpA2yhxN/vGibIk8x69uZWxJcFOxOg6zWG8EjF8UMgGnRCVSMTY3THhTlfZ0cGUzvrfb7OvHUgdCe285XkmYkj/V9P/m7hbWoOyJAJSTOm4/s6fIKpl72lblfN7bKaxTCsJp6/rQdmUeo+PIaa2lDOfo7dWbuTMcqkZ93kispNfYYhsEGUGlCsrrVWhlve8MenO4GdLsFP+HRwIDAQABAoIBAGaQpOuBIYde44lNxJ7UAdYi+Mg2aqyK81Btl0/TQo6hriLTAAfzPAt/z4y8ZkgFyCDD3zSAw2VWCPFzF+d/UfUohKWgyWlb9iHJLQRbbHQJwhkXV6raviesWXpmnVrROocizkie/FcNxac9OmhL8+cGJt7lHgJP9jTpiW6TGZ8ZzM8KBH2l80x9AWdvCjsICuPIZRjc706HtkKZzTROtq6Z/F4Gm0uWRnwAZrHTRpnh8qjtdBLYFrdDcUoFtzOM6UVRmocTfsNe4ntPpvwY2aGTWY7EmTj1kteMJ+fCQFIS+KjyMWQHsN8yQNfD5/j2uv6/BdSkO8uorGSJT6DwmTECgYEA8ydoQ4i58+A1udqA+fujM0Zn46++NTehFe75nqIt8rfQgoduBam3lE5IWj2U2tLQeWxQyr1ZJkLbITtrAI3PgfMnuFAii+cncwFo805Fss/nbKx8K49vBuCEAq3MRhLjWy3ZvIgUHj67jWvl50dbNqc7TUguxhS4BxGr/cPPkP0CgYEA2nbJPGzSKhHTETL37NWIUAdU9q/6NVRISRRXeRqZYwE1VPzs2sIUxA8zEDBHX7OtvCKzvZy1Lg5Unx1nh4nCEVkbW/8npLlRG2jOcZJF6NRfhzwLz3WMIrP6j9SmjJaB+1mnrTjfsg36tDEPDjjJLjJHCx9z/qRJh1v4bh4aPpMCgYACG31T2IOEEZVlnvcvM3ceoqWT25oSbAEBZ6jSLyWmzOEJwJK7idUFfAg0gAQiQWF9K+snVqzHIB02FIXA43nA7pKRjmA+RiqZXJHEShFgk1y2HGiXGA8mSBvcyhTTJqbBy4vvjl5eRLzrZNwBPSUVPC3PZajCHrvZk9WhxWivIQKBgQCzCu1MH2dy4R7ZlqsIJ8zKweeJMZpfQI7pjclO0FTrhh7+Yzd+5db9A/P2jYrBTVHSwaILgTYf49DIguHJfEZXz26TzB7iapqlWxTukVHISt1ryPNo+E58VoLAhChnSiaHJ+g7GESE+d4A9cAACNwgh0YgQIvhIyW70M1e+j7KDwKBgQDQSBLFDFmvvTP3sIRAr1+0OZWd1eRcwdhs0U9GwootoCoUP/1Y64pqukT6B9oIB/No9Nyn8kUX3/ZDtCslaGKEUGMJXQ4hc5J+lq0tSi9ZWBdhqOuMPEfUF3IxW+9yeILP4ppUBn1m5MVOWg5CvuuEeCmy4bhMaUErUlHZ78t5cA==-----END RSA PRIVATE KEY-----"
        );
        EcIdentityManager.default.ids = [];
        EcIdentityManager.default.addIdentity(this.newId1);
    };
    newAssertion = function (competencyToAssert) {
        var a = new EcAssertion();
        a.generateId(this.repo.selectedServer);
        a.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
        a.setSubject(EcIdentityManager.default.ids[0].ppk.toPk());
        a.setAgent(EcIdentityManager.default.ids[0].ppk.toPk());
        a.setCompetency(competencyToAssert.shortId());
        a.setConfidence(1.0);
        a.setAssertionDate(new Date().getTime());
        a.setExpirationDate(new Date().getTime() + 1000 * 60 * 60);
        a.setDecayFunction("t");
        a.save(null, this.failure, this.repo);
        return a;
    };
    newFalseAssertion = function (competencyToAssert) {
        var a = new EcAssertion();
        a.generateId(this.repo.selectedServer);
        a.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
        a.setSubject(EcIdentityManager.default.ids[0].ppk.toPk());
        a.setAgent(EcIdentityManager.default.ids[0].ppk.toPk());
        a.setCompetency(competencyToAssert.shortId());
        a.setConfidence(1.0);
        a.setNegative(true);
        a.setAssertionDate(new Date().getTime());
        a.setExpirationDate(new Date().getTime() + 1000 * 60 * 60);
        a.setDecayFunction("t");
        a.save(null, this.failure, this.repo);
        return a;
    };
    newCompetency = function (competencyName) {
        var competency = new EcCompetency();
        competency.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
        competency.name = competencyName;
        competency.generateId(this.repo.selectedServer);
        competency.save(null, this.failure, this.repo);
        return competency;
    };
    newRollupRule = function (competency, rule) {
        var rr = new EcRollupRule();
        rr.competency = competency.shortId();
        rr.rule = rule;
        rr.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
        rr.generateId(this.repo.selectedServer);
        rr.save(null, this.failure, this.repo);
        return rr;
    };
    newRelation = function (c, c2, relationType) {
        var r = new EcAlignment();
        r.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
        r.generateId(this.repo.selectedServer);
        r.relationType = relationType;
        r.source = c.shortId();
        r.target = c2.shortId();
        r.save(null, this.failure, this.repo);
        return r;
    };
    newFramework = function (frameworkName) {
        var framework = new EcFramework();
        framework.name = frameworkName;
        framework.addOwner(EcIdentityManager.default.ids[0].ppk.toPk());
        framework.generateId(this.repo.selectedServer);
        framework.save(null, this.failure, this.repo);
        return framework;
    };
}
class TabStructuredImportTest extends ImportTestBase {
    basicTabStructuredImport = async () => {
        var me = this;
        await TabStructuredImport.importCompetencies(
            "A\n\tA.1\n\t\tA.1.1\n\tA.2\n\t\tA.2.1\n\t\tA.2.2\n\t\t\tA.2.2.1\nB\n\tB.1\n\t\tB.1.1\n\tB.2\n\t\tB.2.1\n\t\tB.2.2\n\t\t\tB.2.2.1\nC\nD\n D.1\n D.2\n  D.2.1\n  D.2.2\n D.3\n  D.3.1\nE",
            this.repo.selectedServer,
            this.newId1,
            async (competencies, alignments) => {
                var f = new EcFramework();
                f.setName("Tab Structured Import Test Framework");
                f.generateId(me.repo.selectedServer);
                f.competency = [];
                f.relation = [];
                var everything = [];
                for (var i = 0; i < competencies.length; i++) {
                    f.competency.push(competencies[i].shortId());
                    everything.push(competencies[i]);
                }
                for (var i = 0; i < alignments.length; i++) {
                    f.relation.push(alignments[i].shortId());
                    everything.push(alignments[i]);
                }
                everything.push(f);
                await me.repo.multiput(
                    everything,
                    async s => {
                        for (var i = 0; i < everything.length; i++)
                            await me.repo.deleteRegistered(
                                everything[i],
                                null,
                                this.failure
                            );
                    },
                    this.failure
                );
            },
            this.failure,
            this.logObject,
            this.repo,
            false
        );
    };
}
async function fun() {
    try {
        obj = new EcRandomTest();
        if (obj.setup) obj.setup();
        if (obj.begin) obj.begin();
        obj.testLength();
        EcRepository.repos = [];
        obj = new EcTaskTest();
        if (obj.setup) obj.setup();
        if (obj.begin) obj.begin();
        obj.createTest();
        EcRepository.repos = [];
        obj = new EcRemoteLinkedDataTest();
        if (obj.setup) obj.setup();
        if (obj.begin) obj.begin();
        obj.signableDataTest();
        await obj.signAndVerifyTest();
        EcRepository.repos = [];
        obj = new EcContactTest();
        if (obj.setup) obj.setup();
        if (obj.begin) obj.begin();
        obj.encryptContactTest();
        EcRepository.repos = [];
        obj = new EcRepositoryTest();
        if (obj.setup) obj.setup();
        if (obj.begin) obj.begin();
        await obj.createPublicObjectTest();
        await obj.createPublicRegisteredObjectTest();
        await obj.createAndDeleteSingleOwnedObjectTest();
        await obj.createAndDeleteTwoOwnerObjectTest();
        await obj.searchForSomethingThatCantExist();
        EcRepository.repos = [];
        obj = new EcEncryptedValueTest();
        if (obj.setup) obj.setup();
        if (obj.begin) await obj.begin();
        await obj.encryptDecryptTest();
        await obj.encryptObjectUploadDownloadDecryptTest();
        await obj.encryptValueUploadDownloadDecryptTest();
        await obj.encryptValueWithReaderUploadSearchByPkWithSignatureTest();
        await obj.encryptedValueOneOwnerTest();
        await obj.encryptedValueTwoOwnerTest();
        await obj.encryptedValueOwnerReaderTest();
        EcRepository.repos = [];
        obj = new EcVersioningTest();
        if (obj.setup) obj.setup();
        if (obj.begin) obj.begin();
        await obj.testSaveTwoVersionsBothExist();
        // TODO: Figure out why rekey records are not respected by the server.
        // EcRepository.repos = [];
        // obj = new EcRekeyTest();
        // if (obj.setup) obj.setup();
        // if (obj.begin) obj.begin();
        // await obj.basicInMemoryForwardingTest();
        // await obj.basicRekeyRecordForwardingTest();
        // await obj.basicRekeyRecordClientTest();
        // await obj.basicRekeyRecordServerTest();
        EcRepository.repos = [];
        obj = new OrganizationTest();
        if (obj.setup) obj.setup();
        if (obj.begin) obj.begin();
        await obj.basicOrganizationUpgradeTest();
        EcRepository.repos = [];
        obj = new EcAlignmentTest();
        if (obj.setup) await obj.setup();
        if (obj.begin) await obj.begin();
        await obj.createAlignmentTest();
        await obj.createNoSourceAlignmentTest();
        await obj.createNoTargetAlignmentTest();
        await obj.createNoTypeAlignmentTest();
        await obj.viewAlignmentTest();
        await obj.updateAlignmentInfo();
        await obj.updateAlignmentRemoveSource();
        await obj.updateAlignmentRemoveTarget();
        await obj.updateAlignmentRemoveType();
        await obj.deleteAlignmentTest();
        EcRepository.repos = [];
        obj = new EcCompetencyTest();
        if (obj.setup) await obj.setup();
        if (obj.begin) await obj.begin();
        await obj.createCompetencyTest();
        await obj.createNoNameCompetencyTest();
        await obj.viewCompetencyTest();
        await obj.competencyAddRemoveRelationshipTest();
        await obj.competencyAddRemoveLevelTest();
        await obj.updateCompetencyInfo();
        await obj.deleteCompetencyTest();
        await obj.deleteCompetencyWithRelationshipTest();
        await obj.deleteCompetencyWithLevelTest();
        EcRepository.repos = [];
        obj = new EcLevelTest();
        if (obj.setup) await obj.setup();
        if (obj.begin) await obj.begin();
        await obj.createLevelTest();
        await obj.createLevelNoNameTest();
        await obj.createLevelNoCompetencyTest();
        await obj.viewLevelTest();
        await obj.updateLevelInfoTest();
        await obj.updateLevelNoNameTest();
        await obj.updateLevelNoCompetencyTest();
        await obj.deleteLevelTest();
        EcRepository.repos = [];
        obj = new EcAssertionTest();
        if (obj.setup) await obj.setup();
        if (obj.begin) await obj.begin();
        await obj.assertionEncryptDecryptTest();
        EcRepository.repos = [];
        obj = new EcFrameworkTest();
        if (obj.setup) await obj.setup();
        if (obj.begin) await obj.begin();
        await obj.createFrameworkTest();
        await obj.createNoNameFrameworkTest();
        await obj.viewFrameworkTest();
        await obj.updateFrameworkInfoTest();
        await obj.updateFrameworkNoNameTest();
        await obj.updateFrameworkAddRemoveCompetencyTest();
        await obj.updateFrameworkRemoveNonCompetencyTest();
        await obj.updateFrameworkAddRemoveLevelTest();
        await obj.updateFrameworkRemoveNonLevelTest();
        await obj.updateFrameworkAddRemoveRelationTest();
        await obj.updateFrameworkRemoveNonRelationTest();
        await obj.deleteFramework();
        EcRepository.repos = [];
        obj = new ProfileProcessorTest();
        if (obj.setup) await obj.setup();
        if (obj.begin) await obj.begin();
        await obj.capFrameworkGraphPerfTest();
        await obj.samanthaSmithProfileTest();
        EcRepository.repos = [];
        obj = new FrameworkCollapserTest();
        if (obj.setup) await obj.setup();
        if (obj.begin) await obj.begin();
        // await obj.capFrameworkCollapseTest();
        // await obj.basicFrameworkCollapseTest();
        await obj.basicAssertionSearchTest();
        await obj.basicMultiGetTest();
        // EcRepository.repos = [];
        // EcRemote.async = true;
        // obj = new CollapserTest();
        // if (obj.setup) obj.setup();
        // if (obj.begin) obj.begin();
        // obj.basicCollapseTest();
        // obj.buildTest0();
        // obj.buildTest1();
        // obj.buildTest2();
        // obj.buildTest3();
        // obj.buildTest4();
        // obj.buildTest5();
        // obj.buildTest6();
        // obj.buildTest7();
        // EcRepository.repos = [];
        // EcRemote.async = true;
        // obj = new EvidenceProcessingTestBase();
        // if (obj.setup) obj.setup();
        // if (obj.begin) obj.begin();
        // obj.newCredential();
        EcRepository.repos = [];
        obj = new GraphEvidenceProcessingTest();
        if (obj.setup) await obj.setup();
        if (obj.begin) await obj.begin();
        await obj.basicTrueTest();
        await obj.basicFalseTest();
        await obj.basicIndeterminantTest();
        await obj.basicUnknownTest();
        await obj.basicEquivalenceTest();
        await obj.basicEquivalenceFalseTest();
        await obj.basicEquivalenceIndeterminantTest();
        await obj.basicEquivalenceUnknownTest();
        await obj.basicEquivalenceEquivalenceTest();
        await obj.basicEquivalenceUnEquivalentTest();
        await obj.basicRequiresSatisfiedTest();
        await obj.basicRequiresFalseTest();
        await obj.basicNarrowsTrueTest();
        await obj.basicNarrowsFalseTest();
        await obj.basicNarrowsNarrowsTrueTest();
        await obj.basicNarrowsNarrowsFalseTest();
        // EcRepository.repos = [];
        // EcRemote.async = true;
        // obj = new RollupRuleInterfaceTest();
        // if (obj.setup) obj.setup();
        // if (obj.begin) obj.begin();
        // obj.constructor();
        // obj.basicTrueTest();
        // obj.basicTest();
        // EcRepository.repos = [];
        // EcRemote.async = true;
        // obj = new PredictiveAssertionProcessorTest();
        // if (obj.setup) obj.setup();
        // if (obj.begin) obj.begin();
        // obj.constructor();
        // obj.buildNodeArray();
        // obj.buildEdgeArray();
        // obj.buildPositiveAssertionArray();
        // obj.buildNegativeAssertionArray();
        // obj.generateTestCompetencyGraph();
        // obj.runPredictiveAssertionProcessorTest();
        // EcRepository.repos = [];
        // EcRemote.async = true;
        // obj = new EvidenceProcessingTest();
        // if (obj.setup) obj.setup();
        // if (obj.begin) obj.begin();
        // obj.constructor();
        // obj.basicTrueTest();
        // obj.basicFalseTest();
        // obj.basicIndeterminantTest();
        // obj.basicUnknownTest();
        // obj.basicEquivalenceTest();
        // obj.basicEquivalenceFalseTest();
        // obj.basicEquivalenceIndeterminantTest();
        // obj.basicEquivalenceUnknownTest();
        // obj.basicEquivalenceEquivalenceTest();
        // obj.basicEquivalenceUnEquivalentTest();
        // obj.basicRequiresSatisfiedTest();
        // obj.basicNarrowsSatisfiedTest();
        // obj.basicNarrowsUnsatisfiedTest();
        // obj.basicNarrowsPositiveNegativeTest();
        // obj.basicRequiresFalseTest();
        // EcRepository.repos = [];
        // EcRemote.async = true;
        // obj = new GraphTest();
        // if (obj.setup) obj.setup();
        // if (obj.begin) obj.begin();
        // obj.constructor();
        // obj.buildAndConfigureGraphBuilder();
        // obj.generateBasicGraphTest();
        // EcRepository.repos = [];
        // EcRemote.async = true;
        // obj = new CtdlProcessingTest();
        // if (obj.setup) obj.setup();
        // if (obj.begin) obj.begin();
        // obj.buildAndConfigureLocator();
        // obj.basicCtdlTest();
        // EcRepository.repos = [];
        // EcRemote.async = true;
        // obj = new EvidenceProcessingTestBase();
        // if (obj.setup) obj.setup();
        // if (obj.begin) obj.begin();
        // obj.newCredential();
        // EcRepository.repos = [];
        // EcRemote.async = true;
        // obj = new MilCredCoprocessorTest();
        // if (obj.setup) obj.setup();
        // if (obj.begin) obj.begin();
        // obj.constructor();
        // obj.basicTrueTest();
        // obj.basicUnknownTest();
        // obj.newCredential();
        EcRepository.repos = [];
        obj = new ImportTestBase();
        if (obj.setup) obj.setup();
        if (obj.begin) obj.begin();
        EcRepository.repos = [];
        console.log("TabStructuredImportTest");
        obj = new TabStructuredImportTest();
        if (obj.setup) obj.setup();
        if (obj.begin) obj.begin();
        await obj.basicTabStructuredImport();
    } catch (e) {
        console.trace(e);
    }
    console.log("All tests run.");
    process.exit(0);
}
fun();
