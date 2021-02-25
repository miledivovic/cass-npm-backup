/**
 *  Represents an encrypted piece of data. Provides helper functions for
 *  encryption/decryption of JSON-LD objects, and provides some searchability of
 *  the data within.
 * 
 *  @author fritz.ray@eduworks.com
 *  @module com.eduworks.ec
 *  @class EcEncryptedValue
 *  @extends EbacEncryptedValue
 */
var EcEncryptedValue = function() {
    EbacEncryptedValue.call(this);
};
EcEncryptedValue = stjs.extend(EcEncryptedValue, EbacEncryptedValue, [], function(constructor, prototype) {
    constructor.encryptOnSaveMap = null;
    constructor.revive = function(partiallyRehydratedObject) {
        if (partiallyRehydratedObject == null) 
            return null;
        var v = new EcEncryptedValue();
        v.copyFrom(partiallyRehydratedObject);
        return v;
    };
    /**
     *  Converts a piece of (likely) encrypted remote linked data to an unencrypted object.
     *  @param d Data to decrypt
     *  @return Decrypted data
     *  @memberOf EcEncryptedValue
     *  @static
     *  @method fromEncryptedValue
     */
    constructor.fromEncryptedValue = function(d) {
        if (!d.isAny(new EcEncryptedValue().getTypes())) 
            return d;
        var eev = new EcEncryptedValue();
        eev.copyFrom(d);
        EcEncryptedValue.encryptOnSave(d.id, true);
        EcEncryptedValue.encryptOnSave(d.shortId(), true);
        return eev.decryptIntoObject();
    };
    /**
     *  Converts a piece of (likely) encrypted remote linked data to an unencrypted object.
     *  @param {EcRemoteLinkedData} d Data to decrypt
     *  @param {Callback1<EcRemoteLinkedData>} success
     *  @param {Callback1<String>} failure
     *  @param d Data to decrypt
     *  @return Decrypted data
     *  @memberOf EcEncryptedValue
     *  @static
     *  @method fromEncryptedValue
     */
    constructor.fromEncryptedValueAsync = function(d, success, failure) {
        if (!d.isAny(new EcEncryptedValue().getTypes())) 
            success(d);
         else {
            var eev = new EcEncryptedValue();
            eev.copyFrom(d);
            EcEncryptedValue.encryptOnSave(d.id, true);
            EcEncryptedValue.encryptOnSave(d.shortId(), true);
            eev.decryptIntoObjectAsync(success, failure);
        }
    };
    /**
     *  Gets the fully qualified type name, as JSON-LD allows the "namespace" of
     *  the type to be defined in @context.
     * 
     *  @return {string} Fully qualified type name.
     *  @method getEncryptedFullType
     */
    prototype.getEncryptedFullType = function() {
        if (this.encryptedContext == null) 
            return this.encryptedType;
        if (this.encryptedType.indexOf("http") != -1) 
            return this.encryptedType;
        var computedType = this.encryptedContext;
        if (EcObject.isObject(this.encryptedContext)) {
            var typeParts = this.encryptedType.split(":");
            if (typeParts.length == 2) {
                computedType = (this.encryptedContext)[typeParts[0]];
                if (!computedType.endsWith("/")) 
                    computedType += "/";
                computedType += typeParts[1];
                return computedType;
            } else if ((this.encryptedContext)["@vocab"] != null) 
                computedType = (this.encryptedContext)["@vocab"];
        }
        if (!computedType.endsWith("/")) 
            computedType += "/";
        computedType += this.encryptedType;
        return computedType;
    };
    prototype.getEncryptedDottedType = function() {
        return this.getEncryptedFullType().replace("http://", "").replace("https://", "").replaceAll("/", ".");
    };
    /**
     *  Converts a piece of remote linked data to an encrypted value
     * 
     *  @param {EcRemoteLinkedData} d Data to encrypt
     *  @param {Boolean}            hideType Flag to hide the type of the encrypted value
     *                              when encrypting
     *  @return {EcEncryptedValue} Encrypted value
     *  @memberOf EcEncryptedValue
     *  @method toEncryptedValue
     *  @static
     */
    constructor.toEncryptedValue = function(d, hideType) {
        d.updateTimestamp();
        var v = new EcEncryptedValue();
        if (hideType == null || !hideType) {
            v.encryptedType = d.type;
            v.encryptedContext = d.context;
        }
        var newIv = EcAes.newIv(16);
        var newSecret = EcAes.newIv(16);
        var conceptName = (d)["skos:prefLabel"];
        var conceptSchemeName = (d)["dcterms:title"];
        v.payload = EcAesCtr.encrypt(d.toJson(), newSecret, newIv);
        v.owner = d.owner;
        v.reader = d.reader;
        v.id = d.id;
        if ((d)["name"] != null) {
            v.name = (d)["name"];
        }
        if (d.owner != null) {
            for (var i = 0; i < d.owner.length; i++) {
                var eSecret = new EbacEncryptedSecret();
                eSecret.iv = newIv;
                eSecret.secret = newSecret;
                if (v.secret == null) {
                    v.secret = new Array();
                }
                v.secret.push(EcRsaOaep.encrypt(EcPk.fromPem(d.owner[i]), eSecret.toEncryptableJson()));
            }
        }
        if (d.reader != null) {
            for (var i = 0; i < d.reader.length; i++) {
                var eSecret = new EbacEncryptedSecret();
                eSecret.iv = newIv;
                eSecret.secret = newSecret;
                if (v.secret == null) {
                    v.secret = new Array();
                }
                v.secret.push(EcRsaOaep.encrypt(EcPk.fromPem(d.reader[i]), eSecret.toEncryptableJson()));
            }
        }
        if (conceptName != null) {
            (v)["skos:prefLabel"] = conceptName;
        }
        if (conceptSchemeName != null) {
            (v)["dcterms:title"] = conceptSchemeName;
        }
        return v;
    };
    /**
     *  Converts a piece of remote linked data to an encrypted value,
     *  asynchronously
     * 
     *  @param {EcRemoteLinkedData}          d Data to encrypt
     *  @param {boolean}                     hideType Flag to hide the type of the encrypted value
     *                                       when encrypting
     *  @param {Callback1<EcEncryptedValue>} success Callback triggered with
     *                                       successfully encrypted, returns the encrypted value
     *  @param {Callback1<String>}           failure Callback triggered on error during
     *                                       encryption
     *  @memberOf EcEncryptedValue
     *  @method toEncryptedValueAsync
     *  @static
     */
    constructor.toEncryptedValueAsync = function(d, hideType, success, failure) {
        d.updateTimestamp();
        var v = new EcEncryptedValue();
        if (hideType == null || !hideType) {
            v.encryptedType = d.type;
        }
        var newIv = EcAes.newIv(16);
        var newSecret = EcAes.newIv(16);
        EcAesCtrAsync.encrypt(d.toJson(), newSecret, newIv, function(encryptedText) {
            v.payload = encryptedText;
            v.owner = d.owner;
            v.reader = d.reader;
            v.id = d.id;
            if ((d)["name"] != null) {
                v.name = (d)["name"];
            }
            if (d.owner != null) {
                new EcAsyncHelper().each(d.owner, function(pk, arg1) {
                    EcEncryptedValue.insertSecret(pk, arg1, newIv, newSecret, v, failure);
                }, function(arg0) {
                    if (d.reader != null) {
                        new EcAsyncHelper().each(d.reader, function(pk, arg1) {
                            EcEncryptedValue.insertSecret(pk, arg1, newIv, newSecret, v, failure);
                        }, function(arg0) {
                            success(v);
                        });
                    } else 
                        success(v);
                });
            }
        }, failure);
    };
    constructor.insertSecret = function(pk, success, newIv, newSecret, v, failure) {
        var eSecret = new EbacEncryptedSecret();
        eSecret.iv = newIv;
        eSecret.secret = newSecret;
        if (v.secret == null) {
            v.secret = new Array();
        }
        EcRsaOaepAsync.encrypt(EcPk.fromPem(pk), eSecret.toEncryptableJson(), function(encryptedSecret) {
            v.secret.push(encryptedSecret);
            success();
        }, failure);
    };
    /**
     *  Encrypts a text value with the key provided
     * 
     *  @param {String} text Text to encrypt
     *  @param {String} id ID of the encrypted value
     *  @param {EcPk}   owner Key to Encrypt
     *  @return {EcEncryptedValue} Encrypted value
     *  @memberOf EcEncryptedValue
     *  @method encryptValueOld
     *  @static
     *  @deprecated
     */
    constructor.encryptValueOld = function(text, id, owner) {
        var v = new EcEncryptedValue();
        var newIv = EcAes.newIv(16);
        var newSecret = EcAes.newIv(16);
        v.payload = EcAesCtr.encrypt(text, newSecret, newIv);
        v.addOwner(owner);
        for (var i = 0; i < v.owner.length; i++) {
            var eSecret = new EbacEncryptedSecret();
            eSecret.id = forge.util.encode64(forge.pkcs5.pbkdf2(id, "", 1, 8));
            eSecret.iv = newIv;
            eSecret.secret = newSecret;
            if (v.secret == null) {
                v.secret = new Array();
            }
            v.secret.push(EcRsaOaep.encrypt(EcPk.fromPem(v.owner[i]), eSecret.toEncryptableJson()));
        }
        return v;
    };
    /**
     *  Encrypts a text value with the owners and readers provided
     * 
     *  @param {String}   text Text to encrypt
     *  @param {String}   id ID of the value to encrypt
     *  @param {String[]} owners Owner keys to encrypt value with
     *  @param {String[]} readers Reader keys to encrypt value with
     *  @return {EcEncryptedValue} Encrypted value
     *  @memberOf EcEncryptedValue
     *  @method encryptValue
     *  @static
     */
    constructor.encryptValue = function(text, id, owners, readers) {
        var v = new EcEncryptedValue();
        var newIv = EcAes.newIv(16);
        var newSecret = EcAes.newIv(16);
        v.payload = EcAesCtr.encrypt(text, newSecret, newIv);
        if (owners != null) {
            for (var i = 0; i < owners.length; i++) {
                v.addOwner(EcPk.fromPem(owners[i]));
            }
        }
        if (owners != null) 
            if (v.owner != null) {
                for (var i = 0; i < v.owner.length; i++) {
                    var eSecret = new EbacEncryptedSecret();
                    eSecret.id = forge.util.encode64(forge.pkcs5.pbkdf2(id, "", 1, 8));
                    eSecret.iv = newIv;
                    eSecret.secret = newSecret;
                    if (v.secret == null) {
                        v.secret = new Array();
                    }
                    v.secret.push(EcRsaOaep.encrypt(EcPk.fromPem(v.owner[i]), eSecret.toEncryptableJson()));
                }
            }
        if (readers != null) 
            if (v.reader != null) {
                for (var i = 0; i < v.reader.length; i++) {
                    var eSecret = new EbacEncryptedSecret();
                    eSecret.id = forge.util.encode64(forge.pkcs5.pbkdf2(id, "", 1, 8));
                    eSecret.iv = newIv;
                    eSecret.secret = newSecret;
                    if (v.secret == null) {
                        v.secret = new Array();
                    }
                    v.secret.push(EcRsaOaep.encrypt(EcPk.fromPem(v.reader[i]), eSecret.toEncryptableJson()));
                }
            }
        if (readers != null) {
            for (var i = 0; i < readers.length; i++) {
                v.addReader(EcPk.fromPem(readers[i]));
            }
        }
        return v;
    };
    /**
     *  Encrypts a text value with the owners and readers provided
     * 
     *  @param {String}   text Text to encrypt
     *  @param {String}   id ID of the value to encrypt
     *  @param {String[]} owners Owner keys to encrypt value with
     *  @param {String[]} readers Reader keys to encrypt value with
     *  @return {EcEncryptedValue} Encrypted value
     *  @memberOf EcEncryptedValue
     *  @method encryptValue
     *  @static
     */
    constructor.encryptValueAsync = function(text, id, owners, readers, success, failure) {
        var v = new EcEncryptedValue();
        var newIv = EcAes.newIv(16);
        var newSecret = EcAes.newIv(16);
        v.payload = EcAesCtr.encrypt(text, newSecret, newIv);
        if (owners != null) {
            for (var i = 0; i < owners.length; i++) {
                v.addOwner(EcPk.fromPem(owners[i]));
            }
        }
        if (readers != null) {
            for (var i = 0; i < readers.length; i++) {
                v.addReaderBasic(EcPk.fromPem(readers[i]));
            }
        }
        var pks = new Array();
        if (owners != null) 
            if (v.owner != null) 
                pks = pks.concat(v.owner);
        if (readers != null) 
            if (v.reader != null) 
                pks = pks.concat(v.reader);
        new EcAsyncHelper().each(pks, function(pk, callback0) {
            var eSecret = new EbacEncryptedSecret();
            eSecret.id = forge.util.encode64(forge.pkcs5.pbkdf2(id, "", 1, 8));
            eSecret.iv = newIv;
            eSecret.secret = newSecret;
            if (v.secret == null) {
                v.secret = new Array();
            }
            EcRsaOaepAsync.encrypt(EcPk.fromPem(pk), eSecret.toEncryptableJson(), function(s) {
                v.secret.push(s);
                callback0();
            }, callback0);
        }, function(pks) {
            success(v);
        });
    };
    /**
     *  Encrypt a value with a specific IV and secret
     * 
     *  @param {String}   iv Initialization Vector for encryption
     *  @param {String}   secret Encryption secret
     *  @param {String}   text Text to encrypt
     *  @param {String}   id ID of value to encrypt
     *  @param {String[]} owners Owners keys to encrypt with
     *  @param {String[]} readers Reader Keys to encrypt with
     *  @return {EcEncryptedValue}
     *  @memberOf EcEncryptedValue
     *  @method encryptValueUsingIvAndSecret
     *  @static
     */
    constructor.encryptValueUsingIvAndSecret = function(iv, secret, text, id, owners, readers) {
        var v = new EcEncryptedValue();
        v.payload = EcAesCtr.encrypt(text, secret, iv);
        if (owners != null) {
            for (var i = 0; i < owners.length; i++) {
                v.addOwner(EcPk.fromPem(owners[i]));
            }
        }
        if (owners != null) {
            for (var i = 0; i < v.owner.length; i++) {
                var eSecret = new EbacEncryptedSecret();
                eSecret.id = forge.util.encode64(forge.pkcs5.pbkdf2(id, "", 1, 8));
                eSecret.iv = iv;
                eSecret.secret = secret;
                if (v.secret == null) {
                    v.secret = new Array();
                }
                v.secret.push(EcRsaOaep.encrypt(EcPk.fromPem(v.owner[i]), eSecret.toEncryptableJson()));
            }
        }
        if (readers != null) {
            for (var i = 0; i < readers.length; i++) {
                v.addReader(EcPk.fromPem(readers[i]));
            }
        }
        return v;
    };
    /**
     *  Setter and getter function for encryptOnSave of an identifier,
     *  encryptOnSave is used by the static save functions of a class to
     *  determine whether or not to encrypt something when it is saved. This
     *  value is usually set when an object is decrypted using one of the decrypt
     *  functions above.
     * 
     *  @param {String}  id ID of the data to get/set encryptOnSave for
     *  @param {boolean} [val] If passed in, sets the value, if null this
     *                   function gets the encryptOnSave value
     *  @return {boolean} if val is null/ignored returns value in the map, if val
     *  is passed in returns val
     *  @memberOf EcEncryptedValue
     *  @method encryptOnSave
     *  @static
     */
    constructor.encryptOnSave = function(id, val) {
        if (EcEncryptedValue.encryptOnSaveMap == null) {
            EcEncryptedValue.encryptOnSaveMap = {};
        }
        if (val == null) {
            if (EcEncryptedValue.encryptOnSaveMap[id] != null) {
                return EcEncryptedValue.encryptOnSaveMap[id];
            } else {
                return false;
            }
        } else {
            EcEncryptedValue.encryptOnSaveMap[id] = val;
            return val;
        }
    };
    /**
     *  Decrypts this encrypted value into an object
     * 
     *  @return The Decrypted Object
     *  @memberOf EcEncryptedValue
     *  @method decryptIntoObject
     */
    prototype.decryptIntoObject = function() {
        var decryptRaw = this.decryptIntoString();
        if (decryptRaw == null) {
            return null;
        }
        if (!EcLinkedData.isProbablyJson(decryptRaw)) {
            return null;
        }
        var decrypted = new EcRemoteLinkedData("", "");
        decrypted.copyFrom(JSON.parse(decryptRaw));
        EcEncryptedValue.encryptOnSave(decrypted.id, true);
        decrypted.id = this.id;
        return decrypted.deAtify();
    };
    /**
     *  Asynchronously decrypts this encrypted value into an object
     * 
     *  @param {Callback1<EcRemoteLinkedDat>} success Callback triggered on
     *                                        successful encryption, returns the decrypted object
     *  @param {Callback1<String>}            failure Callback triggered if error during
     *                                        encryption
     *  @memberOf EcEncryptedValue
     *  @method decryptIntoObjectAsync
     */
    prototype.decryptIntoObjectAsync = function(success, failure) {
        var id = this.id;
        this.decryptIntoStringAsync(function(decryptRaw) {
            if (decryptRaw == null) {
                failure("Could not decrypt data.");
            }
            if (!EcLinkedData.isProbablyJson(decryptRaw)) {
                failure("Could not decrypt data.");
            }
            var decrypted = new EcRemoteLinkedData("", "");
            decrypted.copyFrom(JSON.parse(decryptRaw));
            EcEncryptedValue.encryptOnSave(decrypted.id, true);
            decrypted.id = id;
            success(decrypted.deAtify());
        }, failure);
    };
    /**
     *  Asynchronously decrypts this encrypted value into an object with a IV and
     *  secret provided
     * 
     *  @param {String}                        iv Initialization Vector for decryption
     *  @param {String}                        secret Secret for decryption
     *  @param {Callback1<EcRemoteLinkedData>} success Callback triggered after
     *                                         successful decryption
     *  @param {Callback1<String>}             failure Callback triggered if error during
     *                                         decryption
     *  @memberOf EcEncryptedValue
     *  @method decryptIntoObjectUsingIvAndSecretAsync
     */
    prototype.decryptIntoObjectUsingIvAndSecretAsync = function(iv, secret, success, failure) {
        this.decryptIntoStringUsingIvAndSecretAsync(iv, secret, function(decryptRaw) {
            if (decryptRaw == null) {
                failure("Could not decrypt data.");
            }
            if (!EcLinkedData.isProbablyJson(decryptRaw)) {
                failure("Could not decrypt data.");
            }
            var decrypted = new EcRemoteLinkedData("", "");
            decrypted.copyFrom(JSON.parse(decryptRaw));
            EcEncryptedValue.encryptOnSave(decrypted.id, true);
            success(decrypted.deAtify());
        }, failure);
    };
    /**
     *  Decrypts an encrypted value into a string
     * 
     *  @return {String} Decrypted string value
     *  @memberOf EcEncryptedValue
     *  @method decryptIntoString
     */
    prototype.decryptIntoString = function() {
        var decryptSecret = this.decryptSecret();
        if (decryptSecret != null) {
            return EcAesCtr.decrypt(this.payload, decryptSecret.secret, decryptSecret.iv);
        }
        return null;
    };
    /**
     *  Decrypts an encrypted value into a string using an alternative secret.
     * 
     *  @return {String} Decrypted string value
     *  @memberOf EcEncryptedValue
     *  @method decryptIntoString
     */
    prototype.decryptIntoStringUsingSecret = function(decryptSecret) {
        if (decryptSecret != null) {
            return EcAesCtr.decrypt(this.payload, decryptSecret.secret, decryptSecret.iv);
        }
        return null;
    };
    /**
     *  Asynchronously decrypts an encrypted value into a string
     * 
     *  @param {Callback1<String>} success Callback triggered after successfully
     *                             decrypted, returns decrypted string
     *  @param {Callback1<String>} failure Callback triggered if error during
     *                             decryption
     *  @memberOf EcEncryptedValue
     *  @method decryptIntoStringAsync
     */
    prototype.decryptIntoStringAsync = function(success, failure) {
        var me = this;
        this.decryptSecretAsync(function(decryptSecret) {
            if (decryptSecret != null) {
                if (me.context == Ebac.context_0_2 || me.context == Ebac.context_0_3) {
                    if (base64.decode(decryptSecret.iv).byteLength == 32) 
                        decryptSecret.iv = base64.encode(base64.decode(decryptSecret.iv).slice(0, 16));
                }
                EcAesCtrAsync.decrypt(me.payload, decryptSecret.secret, decryptSecret.iv, success, failure);
            }
        }, failure);
    };
    /**
     *  Asynchronously decrypts an encrypted value into a string
     * 
     *  @param {Callback1<String>} success Callback triggered after successfully
     *                             decrypted, returns decrypted string
     *  @param {Callback1<String>} failure Callback triggered if error during
     *                             decryption
     *  @memberOf EcEncryptedValue
     *  @method decryptIntoStringAsync
     */
    prototype.decryptIntoStringUsingSecretAsync = function(decryptSecret, success, failure) {
        var me = this;
        if (decryptSecret != null) {
            if (me.context == Ebac.context_0_2 || me.context == Ebac.context_0_3) {
                if (base64.decode(decryptSecret.iv).byteLength == 32) 
                    decryptSecret.iv = base64.encode(base64.decode(decryptSecret.iv).slice(0, 16));
            }
            EcAesCtrAsync.decrypt(me.payload, decryptSecret.secret, decryptSecret.iv, success, failure);
        }
    };
    /**
     *  Asynchronously decrypts an encrypted value into a string with an IV and
     *  secrete provided
     * 
     *  @param {String}            iv Initialization Vector for decryption
     *  @param {String}            secret Secret for decryption
     *  @param {Callback1<String>} success Callback triggered on successful
     *                             decryption
     *  @param {Callback1<String>} failure Callback triggered if error during
     *                             decryption
     *  @memberOf EcEncryptedValue
     *  @method decryptIntoStringUsingIvAndSecretAsync
     */
    prototype.decryptIntoStringUsingIvAndSecretAsync = function(iv, secret, success, failure) {
        if (this.context == Ebac.context_0_2 || this.context == Ebac.context_0_3) {
            if (base64.decode(iv).byteLength == 32) 
                iv = base64.encode(base64.decode(iv).slice(0, 16));
        }
        EcAesCtrAsync.decrypt(this.payload, secret, iv, success, failure);
    };
    /**
     *  Attempts to decrypt the secret by using all Identities in the Identity
     *  Manager
     * 
     *  @return {EbacEncryptedSecret} Secret after decrypted
     *  @memberOf EcEncryptedValue
     *  @method decryptSecret
     */
    prototype.decryptSecret = function() {
        var candidateIndex = 0;
        if (this.owner != null) {
            for (var i = 0; i < this.owner.length; i++) {
                var decryptionKey = EcIdentityManager.getPpk(EcPk.fromPem(this.owner[i]));
                if (decryptionKey == null) {
                    candidateIndex++;
                    continue;
                }
                var decrypted = this.decryptSecretByKey(decryptionKey, candidateIndex);
                if (decrypted != null) {
                    return decrypted;
                }
            }
        }
        if (this.reader != null) {
            for (var i = 0; i < this.reader.length; i++) {
                var decryptionKey = EcIdentityManager.getPpk(EcPk.fromPem(this.reader[i]));
                if (decryptionKey == null) {
                    candidateIndex++;
                    continue;
                }
                var decrypted = this.decryptSecretByKey(decryptionKey, candidateIndex);
                if (decrypted != null) {
                    return decrypted;
                }
            }
        }
        for (var i = 0; i < EcIdentityManager.ids.length; i++) {
            var decryptionKey = EcIdentityManager.ids[i].ppk;
            var decrypted = this.decryptSecretByKey(decryptionKey, -1);
            if (decrypted != null) {
                return decrypted;
            }
        }
        return null;
    };
    /**
     *  Attempts to decrypt secret with a specific key
     * 
     *  @param {EcPpk} decryptionKey Key to attempt secret decryption
     *  @return {EbacEncryptedSecret} Decrypted Secret
     *  @memberOf EcEncryptedValue
     *  @method decryptSecretByKey
     */
    prototype.decryptSecretByKey = function(decryptionKey, tryThisIndexFirst) {
        var encryptedSecret = null;
        if (this.secret != null) {
            if (tryThisIndexFirst >= 0) 
                try {
                    encryptedSecret = this.tryDecryptSecretByKeyAndIndex(decryptionKey, tryThisIndexFirst);
                    if (encryptedSecret != null) 
                        return encryptedSecret;
                }catch (ex) {}
            for (var j = 0; j < this.secret.length; j++) {
                if (tryThisIndexFirst < 0 || j != tryThisIndexFirst) 
                    try {
                        encryptedSecret = this.tryDecryptSecretByKeyAndIndex(decryptionKey, j);
                    }catch (ex) {}
                if (encryptedSecret != null) 
                    return encryptedSecret;
            }
        }
        return null;
    };
    /**
     *  Asynchronously attempts to decrypt secret using all identities in
     *  Identity Manager
     * 
     *  @param {Callback1<EbacEncryptedSecret>} success Callback triggered after
     *                                          successfully decrypting secret, returns the decrypted secret
     *  @param {Callback1<String>}              failure Callback triggered if error decrypting
     *                                          secret
     *  @memberOf EcEncryptedValue
     *  @method decryptSecretAsync
     */
    prototype.decryptSecretAsync = function(success, failure) {
        var ppks = new Array();
        var estimatedIndices = new Array();
        if (this.owner != null) {
            for (var i = 0; i < this.owner.length; i++) {
                var decryptionKey = EcIdentityManager.getPpk(EcPk.fromPem(this.owner[i]));
                if (decryptionKey != null) {
                    if (!decryptionKey.inArray(ppks)) {
                        ppks.push(decryptionKey);
                        estimatedIndices.push(i);
                    }
                }
            }
        }
        if (this.reader != null) {
            for (var i = 0; i < this.reader.length; i++) {
                var decryptionKey = EcIdentityManager.getPpk(EcPk.fromPem(this.reader[i]));
                if (decryptionKey != null) {
                    if (!decryptionKey.inArray(ppks)) {
                        ppks.push(decryptionKey);
                        estimatedIndices.push(i + this.owner.length);
                    }
                }
            }
        }
        var me = this;
        var helper = new EcAsyncHelper();
        helper.each(ppks, function(decryptionKey, countdown) {
            var estimatedIndex = -1;
            for (var i = 0; i < ppks.length; i++) 
                if (ppks[i].equals(decryptionKey)) 
                    estimatedIndex = estimatedIndices[i];
            me.decryptSecretByKeyAsync(decryptionKey, estimatedIndex, function(p1) {
                if (helper.counter == -1) {
                    countdown();
                    return;
                }
                helper.stop();
                success(p1);
                countdown();
            }, function(arg0) {
                countdown();
            });
        }, function(arg0) {
            failure("Could not decrypt secret.");
        });
    };
    prototype.tryDecryptSecretByKeyAndIndex = function(decryptionKey, j) {
        var decryptedSecret = null;
        decryptedSecret = EcRsaOaep.decrypt(decryptionKey, this.secret[j]);
        if (EcLinkedData.isProbablyJson(decryptedSecret)) {
            var encryptedSecret = EbacEncryptedSecret.fromEncryptableJson(JSON.parse(decryptedSecret));
            return encryptedSecret;
        }
        return null;
    };
    /**
     *  Asynchronously attempts to decrypt secret with a specific key
     * 
     *  @param {EcPpk}                          decryptionKey Key to attempt secret decryption
     *  @param {Callback1<EbacEncryptedSecret>} success Callback triggered after
     *                                          successful decryption of secret, returns decrypted secret
     *  @param {Callback1<String>}              failure Callback triggered if error during
     *                                          secret decryption
     *  @memberOf EcEncryptedValue
     *  @method decryptSecretByKeyAsync
     */
    prototype.decryptSecretByKeyAsync = function(decryptionKey, estimatedIndex, success, failure) {
        var encryptedSecret = null;
        var me = this;
        if (this.secret != null) {
            if (estimatedIndex < 0 || estimatedIndex >= this.secret.length) {
                this.decryptSecretsByKeyAsync(decryptionKey, success, failure);
            } else {
                EcRsaOaepAsync.decrypt(decryptionKey, this.secret[estimatedIndex], function(decryptedSecret) {
                    if (!EcLinkedData.isProbablyJson(decryptedSecret)) {
                        me.decryptSecretsByKeyAsync(decryptionKey, success, failure);
                    } else {
                        success(EbacEncryptedSecret.fromEncryptableJson(JSON.parse(decryptedSecret)));
                    }
                }, function(arg0) {
                    me.decryptSecretsByKeyAsync(decryptionKey, success, failure);
                });
            }
        } else 
            failure("Secret field is empty.");
    };
    prototype.decryptSecretsByKeyAsync = function(decryptionKey, success, failure) {
        var helper = new EcAsyncHelper();
        helper.each(this.secret, function(decryptionSecret, decrement) {
            EcRsaOaepAsync.decrypt(decryptionKey, decryptionSecret, function(decryptedSecret) {
                if (helper.counter == -1) {
                    return;
                }
                if (!EcLinkedData.isProbablyJson(decryptedSecret)) {
                    decrement();
                } else {
                    helper.stop();
                    success(EbacEncryptedSecret.fromEncryptableJson(JSON.parse(decryptedSecret)));
                }
            }, function(arg0) {
                decrement();
            });
        }, function(arg0) {
            failure("Could not find decryption key.");
        });
    };
    /**
     *  Checks if this encrypted value is an encrypted version of a specific
     *  type, only works if the type wasn't hidden during encryption
     * 
     *  @param {String} type Type to compare if an encrypted type
     *  @return {boolean} True if encrypted version of type, false if not or
     *  can't tell
     *  @memberOf EcEncryptedValue
     *  @method isAnEncrypted
     */
    prototype.isAnEncrypted = function(type) {
        if (this.encryptedType == null) {
            return false;
        }
        var typeSplit = (type.split("/"));
        return this.encryptedType == type || this.encryptedType == typeSplit[typeSplit.length - 1];
    };
    /**
     *  Adds a reader to the object, if the reader does not exist.
     * 
     *  @param {EcPk} newReader PK of the new reader.
     *  @memberOf EcEncryptedValue
     *  @method addReader
     */
    prototype.addReader = function(newReader) {
        this.addReaderBasic(newReader);
        var payloadSecret = this.decryptSecret();
        if (payloadSecret == null) {
            console.error("Cannot add a Reader if you don't know the secret");
            return;
        }
        EcArray.setAdd(this.secret, EcRsaOaep.encrypt(newReader, payloadSecret.toEncryptableJson()));
    };
    /**
     *  Adds a reader to the object, if the reader does not exist.
     * 
     *  @param {EcPk} newReader PK of the new reader.
     *  @memberOf EcEncryptedValue
     *  @method addReader
     */
    prototype.addReaderBasic = function(newReader) {
        var pem = newReader.toPem();
        if (this.reader == null) {
            this.reader = new Array();
        }
        if (EcArray.has(this.reader, pem)) 
            return;
        if (this.owner != null) 
            if (EcArray.has(this.owner, pem)) 
                return;
        EcArray.setAdd(this.reader, pem);
    };
    /**
     *  Removes a reader from the object, if the reader does exist.
     * 
     *  @param {EcPk} oldReader PK of the old reader.
     *  @memberOf EcEncryptedValue
     *  @method removeReader
     */
    prototype.removeReader = function(oldReader) {
        var payloadSecret = this.decryptSecret();
        var pem = oldReader.toPem();
        if (this.reader != null) {
            EcArray.setRemove(this.reader, pem);
        }
        if (payloadSecret == null) {
            console.error("Cannot remove a Reader if you don't know the secret");
            return;
        }
        this.secret = new Array();
        if (this.owner != null) 
            for (var i = 0; i < this.owner.length; i++) 
                EcArray.setAdd(this.secret, EcRsaOaep.encrypt(EcPk.fromPem(this.owner[i]), payloadSecret.toEncryptableJson()));
        if (this.reader != null) 
            for (var i = 0; i < this.reader.length; i++) 
                EcArray.setAdd(this.secret, EcRsaOaep.encrypt(EcPk.fromPem(this.reader[i]), payloadSecret.toEncryptableJson()));
    };
    /**
     *  Adds a reader to the object, if the reader does not exist.
     * 
     *  @param {EcPk}              newReader PK of the new reader.
     *  @param {Callback0}         success   Callback triggered after successful encryption
     *  @param {Callback1<String>} failure Callback triggered if error during secret decryption
     *  @memberOf EcEncryptedValue
     *  @method addReaderAsync
     */
    prototype.addReaderAsync = function(newReader, success, failure) {
        var me = this;
        this.decryptSecretAsync(function(payloadSecret) {
            EcRsaOaepAsync.encrypt(newReader, payloadSecret.toEncryptableJson(), function(s) {
                var pem = newReader.toPem();
                if (me.reader == null) {
                    me.reader = new Array();
                }
                for (var i = 0; i < me.reader.length; i++) {
                    if (me.reader[i] == pem) {
                        success();
                        return;
                    }
                }
                EcArray.setAdd(me.reader, pem);
                EcArray.setAdd(me.secret, s);
                success();
            }, failure);
        }, failure);
    };
    /**
     *  Removes a reader from the object, if the reader does exist.
     * 
     *  @param {EcPk}              oldReader PK of the old reader.
     *  @param {Callback0}         success   Callback triggered after successful encryption
     *  @param {Callback1<String>} failure Callback triggered if error during secret decryption
     *  @memberOf EcEncryptedValue
     *  @method removeReaderAsync
     */
    prototype.removeReaderAsync = function(oldReader, success, failure) {
        var me = this;
        this.decryptSecretAsync(function(payloadSecret) {
            var pem = oldReader.toPem();
            if (me.reader != null) {
                EcArray.setRemove(me.reader, pem);
            }
            var ary = new Array();
            if (me.owner != null) 
                for (var i = 0; i < me.owner.length; i++) 
                    EcArray.setAdd(ary, EcPk.fromPem(me.owner[i]));
            if (me.reader != null) 
                for (var i = 0; i < me.reader.length; i++) 
                    EcArray.setAdd(ary, EcPk.fromPem(me.reader[i]));
            me.secret = new Array();
            var eah = new EcAsyncHelper();
            eah.each(ary, function(ecPk, callback0) {
                EcRsaOaepAsync.encrypt(oldReader, payloadSecret.toEncryptableJson(), function(secret) {
                    EcArray.setRemove(me.secret, secret);
                    callback0();
                }, failure);
            }, function(strings) {
                success();
            });
        }, failure);
    };
}, {encryptOnSaveMap: {name: "Map", arguments: [null, null]}, secret: {name: "Array", arguments: [null]}, owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
