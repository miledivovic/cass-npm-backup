/**
 *  The sequence that assertions should be built as such: 1. Generate the ID. 2.
 *  Add the owner. 3. Set the subject. 4. Set the agent. Further functions may be
 *  called afterwards in any order. WARNING: The modifications of ownership and
 *  readership do not "just work".
 * 
 *  @author fritz.ray@eduworks.com
 */
module.exports = class EcAssertion extends Assertion{
    equals(obj) {
        return this.isId((obj).id);
    };
    static get(id, success, failure) {
        EcRepository.getAs(id, new EcAssertion(), success, failure);
    };
    static getBlocking(id) {
        return EcRepository.getBlockingAs(id, new EcAssertion());
    };
    static search(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcAssertion();
        }, success, failure, paramObj);
    };
    getSubject() {
        if (this.subject == null) 
            return null;
        var v = new EcEncryptedValue();
        v.copyFrom(this.subject);
        var codebook = Assertion.getCodebook(this);
        var decryptedString;
        if (codebook != null) 
            decryptedString = v.decryptIntoStringUsingSecret(codebook.subject);
         else {
            decryptedString = v.decryptIntoString();
        }
        if (decryptedString == null) 
            return null;
        return EcPk.fromPem(decryptedString);
    };
    /**
     *  Sets the subject of an assertion. Makes a few assumptions: Owners of the
     *  object should be able to see and change the encrypted value. Owners and
     *  readers of the object should be persisted.
     * 
     *  @param pk
     */
    setSubject(pk) {
        var owners = new Array();
        var readers = null;
        if (this.reader == null) 
            readers = new Array();
         else 
            readers = JSON.parse(JSON.stringify(this.reader));
        if (this.subject != null) {
            if (this.subject.owner != null) 
                owners.concat(this.subject.owner);
            if (this.subject.reader != null) 
                readers.concat(this.subject.reader);
        }
        if (this.owner != null) 
            owners = owners.concat(this.owner);
        readers.push(pk.toPem());
        this.subject = EcEncryptedValue.encryptValue(pk.toPem(), this.id, owners, readers);
    };
    setSubjectAsync(pk, success, failure) {
        var me = this;
        var owners = new Array();
        var readers = null;
        if (this.reader == null) 
            readers = new Array();
         else 
            readers = JSON.parse(JSON.stringify(this.reader));
        if (this.subject != null) {
            if (this.subject.owner != null) 
                owners.concat(this.subject.owner);
            if (this.subject.reader != null) 
                readers.concat(this.subject.reader);
        }
        if (this.owner != null) 
            owners = owners.concat(this.owner);
        readers.push(pk.toPem());
        EcEncryptedValue.encryptValueAsync(pk.toPem(), this.id, owners, readers, function(subject) {
            me.subject = subject;
            success();
        }, failure);
    };
    getSubjectAsync(success, failure) {
        if (this.subject == null) {
            success(null);
            return;
        }
        var v = new EcEncryptedValue();
        v.copyFrom(this.subject);
        var decrypted = function(decryptedString) {
            if (decryptedString == null) 
                failure("Could not decrypt subject.");
             else 
                success(EcPk.fromPem(decryptedString));
        };
        var codebook = Assertion.getCodebook(this);
        if (codebook != null) 
            v.decryptIntoStringUsingSecretAsync(codebook.subject, decrypted, failure);
         else 
            v.decryptIntoStringAsync(decrypted, failure);
    };
    getAgent() {
        if (this.agent == null) 
            return null;
        var v = new EcEncryptedValue();
        v.copyFrom(this.agent);
        var codebook = Assertion.getCodebook(this);
        var decryptedString;
        if (codebook != null) 
            decryptedString = v.decryptIntoStringUsingSecret(codebook.agent);
         else {
            decryptedString = v.decryptIntoString();
        }
        if (decryptedString == null) 
            return null;
        return EcPk.fromPem(decryptedString);
    };
    setAgent(pk) {
        this.agent = EcEncryptedValue.encryptValue(pk.toPem(), this.id, this.subject.owner, this.subject.reader);
    };
    setAgentAsync(pk, success, failure) {
        var me = this;
        EcEncryptedValue.encryptValueAsync(pk.toPem(), this.id, this.subject.owner, this.subject.reader, function(agent) {
            me.agent = agent;
            success();
        }, failure);
    };
    getAgentAsync(success, failure) {
        if (this.agent == null) {
            success(null);
            return;
        }
        var v = new EcEncryptedValue();
        v.copyFrom(this.agent);
        var decrypted = function(decryptedString) {
            if (decryptedString == null) 
                failure("Could not decrypt agent.");
             else 
                success(EcPk.fromPem(decryptedString));
        };
        var codebook = Assertion.getCodebook(this);
        if (codebook != null) 
            v.decryptIntoStringUsingSecretAsync(codebook.agent, decrypted, failure);
         else 
            v.decryptIntoStringAsync(decrypted, failure);
    };
    getSubjectName() {
        if (this.subject == null) 
            return "Nobody";
        var subjectPk = this.getSubject();
        var name = EcAssertion.getNameByPkBlocking(subjectPk);
        if (name != null) 
            return name;
        return "Unknown Subject";
    };
    getSubjectNameAsync(success, failure) {
        if (this.subject == null) {
            success("Nobody");
            return;
        }
        this.getSubjectAsync(EcAssertion.getNameByPk(success, failure, "Unknown Subject"), failure);
    };
    getAgentName() {
        if (this.agent == null) 
            return "Nobody";
        var agentPk = this.getAgent();
        var name = EcAssertion.getNameByPkBlocking(agentPk);
        if (name != null) 
            return name;
        return "Unknown Agent";
    };
    getAgentNameAsync(success, failure) {
        if (this.subject == null) {
            success("Nobody");
            return;
        }
        this.getAgentAsync(EcAssertion.getNameByPk(success, failure, "Unknown Agent"), failure);
    };
    static getNameByPk(success, failure, dflt) {
        return function(pk) {
            var repoHelper = new EcAsyncHelper();
            repoHelper.each(EcRepository.repos, function(ecRepository, callback0) {
                var url = ecRepository.selectedServer;
                if (url == null) {
                    callback0();
                    return;
                }
                if (url.endsWith("/") == false) 
                    url += "/";
                url += "data/" + pk.fingerprint();
                EcRepository.get(url, function(personOrOrganization) {
                    var e = new EcEncryptedValue();
                    if (personOrOrganization.isAny(e.getTypes())) {
                        e.copyFrom(personOrOrganization);
                        e.decryptIntoObjectAsync(function(decryptedPersonOrOrganization) {
                            var name = Thing.getDisplayStringFrom((decryptedPersonOrOrganization)["name"]);
                            if (name != null && repoHelper.counter != -1) {
                                success(name);
                                repoHelper.stop();
                            } else {
                                callback0();
                                return;
                            }
                        }, function(s) {
                            callback0();
                        });
                    } else {
                        var name = Thing.getDisplayStringFrom((personOrOrganization)["name"]);
                        if (name != null && repoHelper.counter != -1) {
                            success(name);
                            repoHelper.stop();
                        } else {
                            callback0();
                            return;
                        }
                    }
                }, function(s) {
                    callback0();
                });
            }, function(strings) {
                var identity = EcIdentityManager.getIdentity(pk);
                if (identity != null && identity.displayName != null) {
                    success(identity.displayName + " (You)");
                    return;
                }
                var contact = EcIdentityManager.getContact(pk);
                if (contact != null && contact.displayName != null) {
                    success(contact.displayName);
                    return;
                }
                success(dflt);
            });
        };
    };
    static getNameByPkBlocking(agentPk) {
        for (var i = 0; i < EcRepository.repos.length; i++) {
            var url = EcRepository.repos[i].selectedServer;
            if (url == null) 
                continue;
            if (url.endsWith("/") == false) 
                url += "/";
            url += "data/" + agentPk.fingerprint();
            var personOrOrganization = EcRepository.getBlocking(url);
            if (personOrOrganization == null) 
                continue;
            var e = new EcEncryptedValue();
            if (personOrOrganization.isAny(e.getTypes())) {
                e.copyFrom(personOrOrganization);
                var decryptedPersonOrOrganization = e.decryptIntoObject();
                if (decryptedPersonOrOrganization != null) 
                    personOrOrganization = decryptedPersonOrOrganization;
            }
            var name = Thing.getDisplayStringFrom((personOrOrganization)["name"]);
            if (name != null) 
                return name;
        }
        var identity = EcIdentityManager.getIdentity(agentPk);
        if (identity != null && identity.displayName != null) 
            return identity.displayName + " (You)";
        var contact = EcIdentityManager.getContact(agentPk);
        if (contact != null && contact.displayName != null) 
            return contact.displayName;
        return null;
    };
    getAssertionDate() {
        if (this.assertionDate == null) 
            return null;
        var v = new EcEncryptedValue();
        v.copyFrom(this.assertionDate);
        var codebook = Assertion.getCodebook(this);
        var decryptedString;
        if (codebook != null) 
            decryptedString = v.decryptIntoStringUsingSecret(codebook.assertionDate);
         else {
            decryptedString = v.decryptIntoString();
        }
        if (decryptedString == null) 
            return null;
        return Long.parseLong(decryptedString);
    };
    setAssertionDate(assertionDateMs) {
        this.assertionDate = EcEncryptedValue.encryptValue(assertionDateMs.toString(), this.id, this.subject.owner, this.subject.reader);
    };
    setAssertionDateAsync(assertionDateMs, success, failure) {
        var me = this;
        EcEncryptedValue.encryptValueAsync(assertionDateMs.toString(), this.id, this.subject.owner, this.subject.reader, function(assertionDate) {
            me.assertionDate = assertionDate;
            success();
        }, failure);
    };
    getAssertionDateAsync(success, failure) {
        if (this.assertionDate == null) {
            success(null);
            return;
        }
        var v = new EcEncryptedValue();
        v.copyFrom(this.assertionDate);
        var decrypted = function(decryptedString) {
            if (decryptedString == null) 
                failure("Could not decrypt assertion date.");
             else 
                success(Long.parseLong(decryptedString));
        };
        var codebook = Assertion.getCodebook(this);
        if (codebook != null) 
            v.decryptIntoStringUsingSecretAsync(codebook.assertionDate, decrypted, failure);
         else 
            v.decryptIntoStringAsync(decrypted, failure);
    };
    getExpirationDate() {
        if (this.expirationDate == null) 
            return null;
        var v = new EcEncryptedValue();
        var codebook = Assertion.getCodebook(this);
        var decryptedString;
        v.copyFrom(this.expirationDate);
        if (codebook != null) 
            decryptedString = v.decryptIntoStringUsingSecret(codebook.expirationDate);
         else {
            decryptedString = v.decryptIntoString();
        }
        if (decryptedString == null) 
            return null;
        return Long.parseLong(decryptedString);
    };
    setExpirationDate(expirationDateMs) {
        this.expirationDate = EcEncryptedValue.encryptValue(expirationDateMs.toString(), this.id, this.subject.owner, this.subject.reader);
    };
    setExpirationDateAsync(expirationDateMs, success, failure) {
        var me = this;
        EcEncryptedValue.encryptValueAsync(expirationDateMs.toString(), this.id, this.subject.owner, this.subject.reader, function(expirationDate) {
            me.expirationDate = expirationDate;
            success();
        }, failure);
    };
    getExpirationDateAsync(success, failure) {
        if (this.expirationDate == null) {
            success(null);
            return;
        }
        var v = new EcEncryptedValue();
        v.copyFrom(this.expirationDate);
        var decrypted = function(decryptedString) {
            if (decryptedString == null) 
                failure("Could not decrypt expiration date.");
             else 
                success(Long.parseLong(decryptedString));
        };
        var codebook = Assertion.getCodebook(this);
        if (codebook != null) 
            v.decryptIntoStringUsingSecretAsync(codebook.expirationDate, decrypted, failure);
         else 
            v.decryptIntoStringAsync(decrypted, failure);
    };
    getEvidenceCount() {
        if (this.evidence == null) 
            return 0;
        return this.evidence.length;
    };
    getEvidence(index) {
        if (this.evidence == null) 
            return null;
        var v = new EcEncryptedValue();
        v.copyFrom(this.evidence[index]);
        var codebook = Assertion.getCodebook(this);
        var decryptedString;
        if (codebook != null) 
            decryptedString = v.decryptIntoStringUsingSecret(codebook.evidence[index]);
         else {
            decryptedString = v.decryptIntoString();
        }
        return decryptedString;
    };
    getEvidencesAsync(success, failure) {
        var results = new Array();
        if (this.evidence != null) 
            new EcAsyncHelper().each(this.evidence, function(e, callback0) {
                e.decryptIntoStringAsync(function(str) {
                    results.push(str);
                    callback0();
                }, callback0);
            }, function(strings) {
                success(results);
            });
         else 
            success(results);
    };
    getEvidenceAsync(index, success, failure) {
        if (this.evidence[index] == null) {
            success(null);
            return;
        }
        var v = new EcEncryptedValue();
        v.copyFrom(this.evidence[index]);
        var decrypted = function(decryptedString) {
            if (decryptedString == null) 
                failure("Could not decrypt evidence.");
             else 
                success(decryptedString);
        };
        var codebook = Assertion.getCodebook(this);
        if (codebook != null) 
            v.decryptIntoStringUsingSecretAsync(codebook.evidence[index], decrypted, failure);
         else 
            v.decryptIntoStringAsync(decrypted, failure);
    };
    getDecayFunction() {
        if (this.decayFunction == null) 
            return null;
        var v = new EcEncryptedValue();
        v.copyFrom(this.decayFunction);
        var codebook = Assertion.getCodebook(this);
        var decryptedString;
        if (codebook != null) 
            decryptedString = v.decryptIntoStringUsingSecret(codebook.decayFunction);
         else {
            decryptedString = v.decryptIntoString();
        }
        if (decryptedString == null) 
            return null;
        return decryptedString;
    };
    setDecayFunction(decayFunctionText) {
        this.decayFunction = EcEncryptedValue.encryptValue(decayFunctionText.toString(), this.id, this.subject.owner, this.subject.reader);
    };
    setDecayFunctionAsync(decayFunctionText, success, failure) {
        var me = this;
        EcEncryptedValue.encryptValueAsync(decayFunctionText, this.id, this.subject.owner, this.subject.reader, function(decayFunction) {
            me.decayFunction = decayFunction;
            success();
        }, failure);
    };
    getDecayFunctionAsync(success, failure) {
        if (this.decayFunction == null) {
            success(null);
            return;
        }
        var v = new EcEncryptedValue();
        v.copyFrom(this.decayFunction);
        var decrypted = function(decryptedString) {
            if (decryptedString == null) 
                failure("Could not decrypt decay function.");
             else 
                success(decryptedString);
        };
        var codebook = Assertion.getCodebook(this);
        if (codebook != null) 
            v.decryptIntoStringUsingSecretAsync(codebook.decayFunction, decrypted, failure);
         else 
            v.decryptIntoStringAsync(decrypted, failure);
    };
    getNegative() {
        if (this.negative == null) 
            return false;
        var v = new EcEncryptedValue();
        v.copyFrom(this.negative);
        var codebook = Assertion.getCodebook(this);
        var decryptedString;
        if (codebook != null) 
            decryptedString = v.decryptIntoStringUsingSecret(codebook.negative);
         else {
            decryptedString = v.decryptIntoString();
        }
        if (decryptedString != null) 
            decryptedString.toLowerCase();
        return "true".equals(decryptedString);
    };
    setNegative(negativeB) {
        this.negative = EcEncryptedValue.encryptValue(negativeB.toString(), this.id, this.subject.owner, this.subject.reader);
    };
    setNegativeAsync(negativeB, success, failure) {
        var me = this;
        EcEncryptedValue.encryptValueAsync(negativeB.toString(), this.id, this.subject.owner, this.subject.reader, function(negative) {
            me.negative = negative;
            success();
        }, failure);
    };
    getNegativeAsync(success, failure) {
        if (this.negative == null) {
            success(null);
            return;
        }
        var v = new EcEncryptedValue();
        v.copyFrom(this.negative);
        var decrypted = function(decryptedString) {
            if (decryptedString == null) 
                if (decryptedString == null) {
                    failure("Could not decrypt negative.");
                    return;
                }
            if (decryptedString != null) 
                decryptedString.toLowerCase();
            success("true".equals(decryptedString));
        };
        var codebook = Assertion.getCodebook(this);
        if (codebook != null) 
            v.decryptIntoStringUsingSecretAsync(codebook.negative, decrypted, failure);
         else 
            v.decryptIntoStringAsync(decrypted, failure);
    };
    setCompetency(competencyUrl) {
        this.competency = competencyUrl;
    };
    setLevel(levelUrl) {
        this.level = levelUrl;
    };
    setConfidence(confidenceZeroToOne) {
        this.confidence = confidenceZeroToOne;
    };
    setEvidence(evidences) {
        var encryptedValues = new Array();
        for (var i = 0; i < evidences.length; i++) 
            encryptedValues.push(EcEncryptedValue.encryptValue(evidences[i], this.id, this.subject.owner, this.subject.reader));
        this.evidence = encryptedValues;
    };
    setEvidenceAsync(evidences, success, failure) {
        var me = this;
        var encryptedValues = new Array();
        new EcAsyncHelper().each(evidences, function(s, callback0) {
            EcEncryptedValue.encryptValueAsync(s, me.id, me.subject.owner, me.subject.reader, function(ecEncryptedValue) {
                encryptedValues.push(ecEncryptedValue);
                callback0();
            }, callback0);
        }, function(strings) {
            me.evidence = encryptedValues;
            success();
        });
    };
    save(success, failure, repo) {
        if (this.competency == null || this.competency == "") {
            var msg = "Failing to save: Competency cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        if (this.subject == null) {
            var msg = "Failing to save: Subject cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        if (this.agent == null) {
            var msg = "Failing to save: Agent cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        if (this.assertionDate == null) {
            var msg = "Failing to save: Assertion Date cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        if (repo == null) 
            EcRepository.save(this, success, failure);
         else 
            repo.saveTo(this, success, failure);
    };
    addReader(newReader) {
        if (this.agent != null) {
            this.agent.addReader(newReader);
        }
        if (this.assertionDate != null) {
            this.assertionDate.addReader(newReader);
        }
        if (this.decayFunction != null) {
            this.decayFunction.addReader(newReader);
        }
        if (this.evidence != null) 
            for (var i = 0; i < this.evidence.length; i++) {
                this.evidence[i].addReader(newReader);
            }
        if (this.expirationDate != null) {
            this.expirationDate.addReader(newReader);
        }
        if (this.negative != null) {
            this.negative.addReader(newReader);
        }
        if (this.subject != null) {
            this.subject.addReader(newReader);
        }
        EcRemoteLinkedData.addReader.call(this, newReader);
    };
    removeReader(newReader) {
        if (this.agent != null) {
            this.agent.removeReader(newReader);
        }
        if (this.assertionDate != null) {
            this.assertionDate.removeReader(newReader);
        }
        if (this.decayFunction != null) {
            this.decayFunction.removeReader(newReader);
        }
        if (this.evidence != null) 
            for (var i = 0; i < this.evidence.length; i++) {
                this.evidence[i].removeReader(newReader);
            }
        if (this.expirationDate != null) {
            this.expirationDate.removeReader(newReader);
        }
        if (this.negative != null) {
            this.negative.removeReader(newReader);
        }
        if (this.subject != null) {
            this.subject.removeReader(newReader);
        }
        EcRemoteLinkedData.removeReader.call(this, newReader);
    };
    addReaderAsync(newReader, success, failure) {
        var ary = new Array();
        if (this.agent != null) {
            ary.push(this.agent);
        }
        if (this.assertionDate != null) {
            ary.push(this.assertionDate);
        }
        if (this.decayFunction != null) {
            ary.push(this.decayFunction);
        }
        if (this.evidence != null) 
            for (var i = 0; i < this.evidence.length; i++) {
                ary.push(this.evidence[i]);
            }
        if (this.expirationDate != null) {
            ary.push(this.expirationDate);
        }
        if (this.negative != null) {
            ary.push(this.negative);
        }
        if (this.subject != null) {
            ary.push(this.subject);
        }
        EcRemoteLinkedData.addReader.call(this, newReader);
        var eah = new EcAsyncHelper();
        eah.each(ary, function(ecEncryptedValue, callback0) {
            ecEncryptedValue.addReaderAsync(newReader, callback0, function(s) {
                if (!eah.isStopped()) {
                    eah.stop();
                    failure("Failed to add reader to an assertion.");
                }
            });
        }, function(strings) {
            success();
        });
    };
    removeReaderAsync(oldReader, success, failure) {
        var ary = new Array();
        if (this.agent != null) {
            ary.push(this.agent);
        }
        if (this.assertionDate != null) {
            ary.push(this.assertionDate);
        }
        if (this.decayFunction != null) {
            ary.push(this.decayFunction);
        }
        if (this.evidence != null) 
            for (var i = 0; i < this.evidence.length; i++) {
                ary.push(this.evidence[i]);
            }
        if (this.expirationDate != null) {
            ary.push(this.expirationDate);
        }
        if (this.negative != null) {
            ary.push(this.negative);
        }
        if (this.subject != null) {
            ary.push(this.subject);
        }
        EcRemoteLinkedData.removeReader.call(this, oldReader);
        var eah = new EcAsyncHelper();
        eah.each(ary, function(ecEncryptedValue, callback0) {
            ecEncryptedValue.removeReaderAsync(oldReader, callback0, function(s) {
                if (!eah.isStopped()) {
                    eah.stop();
                    failure("Failed to remove reader to an assertion.");
                }
            });
        }, function(strings) {
            success();
        });
    };
    getSearchStringByTypeAndCompetency(competency) {
        return "(" + this.getSearchStringByType() + " AND competency:\"" + competency.shortId() + "\")";
    };
};
