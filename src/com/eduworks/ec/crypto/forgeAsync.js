if (global.forge === undefined)
    if (typeof __webpack_require__ === 'function') {
        var forge = require("forge");
    }
    else {
        var forge = require("node-forge");
    }
else
    var forge = global.forge;
var registerPromiseWorker = require('promise-worker/register');

registerPromiseWorker(function (e) {
    var data = e;
    try {
        switch (data.cmd) { 
            case 'encryptRsaOaep':
                return forge.util.encode64(forge.pki.publicKeyFromPem(data.pk)
                    .encrypt(data.text, "RSA-OAEP"));
            case 'decryptRsaOaep':
                return forge.pki.privateKeyFromPem(data.ppk).decrypt(
                    forge.util.decode64(data.text), "RSA-OAEP");
            case 'signRsaOaep':
                var s = forge.sha1.create();
                s.update(data.text, "utf8");
                return forge.util.encode64(forge.pki.privateKeyFromPem(data.ppk).sign(s));
            case 'signSha256RsaOaep':
                var s = forge.sha256.create();
                s.update(data.text, "utf8");
                return forge.util.encode64(forge.pki.privateKeyFromPem(data.ppk).sign(s));
            case 'verifyRsaOaep':
                var s = forge.sha1.create();
                s.update(data.text, "utf8");
                return forge.pki.publicKeyFromPem(data.pk).verify(s.digest().bytes(), forge.util.decode64(data.signature));
            case 'verifyRsaOaepSha256':
                var s = forge.sha256.create();
                s.update(data.text, "utf8");
                return forge.pki.publicKeyFromPem(data.pk).verify(s.digest().bytes(), forge.util.decode64(data.signature));
            case 'encryptAesCtr':
                var c = forge.cipher.createCipher("AES-CTR", forge.util.decode64(data.secret));
                c.start({
                    iv: forge.util.decode64(data.iv)
                });
                c.update(forge.util.createBuffer(data.text));
                c.finish();
                var encrypted = c.output;
                return forge.util.encode64(encrypted.bytes());
            case 'decryptAesCtr':
                var c = forge.cipher.createDecipher("AES-CTR", forge.util.decode64(data.secret));
                c.start({
                    iv: forge.util.decode64(data.iv)
                });
                c.update(forge.util.createBuffer(forge.util.decode64(data.text)));
                c.finish();
                var decrypted = c.output;
                return decrypted.data;
            case 'stop':
                self.close(); // Terminates the worker.
                break;
            default:
                return ('Unknown command: ' + data.msg);
        };
    } catch (ex) {
        return {
            error: ex.message
        };
    }
});

self.addEventListener('message', function (e) {
}, false);
