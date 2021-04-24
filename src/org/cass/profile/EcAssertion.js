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
        return EcRepository.getAs(id, new EcAssertion(), success, failure);
    };
    static search(repo, query, success, failure, paramObj) {
        return EcRepository.searchAs(repo, query, function() {
            return new EcAssertion();
        }, success, failure, paramObj);
    };
    async getSubject() {
        if (this.subject == null) 
            return null;
        var v = new EcEncryptedValue();
        v.copyFrom(this.subject);
        var codebook = Assertion.getCodebook(this);
        var decryptedString;
        if (codebook != null) 
            decryptedString = await v.decryptIntoStringUsingSecret(codebook.subject).catch((error)=>null);
         else {
            decryptedString = await v.decryptIntoString().catch((error)=>null);
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
    async setSubject(pk) {
        var owners = [];
        var readers = null;
        if (this.reader == null) 
            readers = [];
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
        this.subject = await EcEncryptedValue.encryptValue(pk.toPem(), this.id, owners, readers);
    };
    //@deprecated
    setSubjectAsync(pk, success, failure) {
        var me = this;
        var owners = [];
        var readers = null;
        if (this.reader == null) 
            readers = [];
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
        return EcEncryptedValue.encryptValueAsync(pk.toPem(), this.id, owners, readers, function(subject) {
            me.subject = subject;
            success();
        }, failure);
    };
    //@deprecated
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
            return v.decryptIntoStringUsingSecretAsync(codebook.subject, decrypted, failure);
         else 
            return v.decryptIntoStringAsync(decrypted, failure);
    };
    async getAgent() {
        if (this.agent == null) 
            return null;
        var v = new EcEncryptedValue();
        v.copyFrom(this.agent);
        var codebook = Assertion.getCodebook(this);
        var decryptedString;
        if (codebook != null) 
            decryptedString = await v.decryptIntoStringUsingSecret(codebook.agent).catch((error)=>null);
         else {
            decryptedString = await v.decryptIntoString().catch((error)=>null);
        }
        if (decryptedString == null) 
            return null;
        return EcPk.fromPem(decryptedString);
    };
    async setAgent(pk) {
        this.agent = await EcEncryptedValue.encryptValue(pk.toPem(), this.id, this.subject.owner, this.subject.reader);
    };
    //@deprecated
    setAgentAsync(pk, success, failure) {
        var me = this;
        return EcEncryptedValue.encryptValueAsync(pk.toPem(), this.id, this.subject.owner, this.subject.reader, function(agent) {
            me.agent = agent;
            success();
        }, failure);
    };
    //@deprecated
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
            return v.decryptIntoStringUsingSecretAsync(codebook.agent, decrypted, failure);
         else 
            return v.decryptIntoStringAsync(decrypted, failure);
    };
    async getSubjectName() {
        if (this.subject == null) 
            return "Nobody";
        var subjectPk = await this.getSubject();
        var name = await EcAssertion.getNameByPkBlocking(subjectPk);
        if (name != null) 
            return name;
        return "Unknown Subject";
    };
    //@deprecated
    getSubjectNameAsync(success, failure) {
        if (this.subject == null) {
            success("Nobody");
            return;
        }
        return cassPromisify(this.getSubject().then((pk)=>getNameByPk(pk,"Unknown Agent")),success,failure);
    };
    async getAgentName() {
        if (this.agent == null) 
            return "Nobody";
        var agentPk = await this.getAgent();
        var name = await EcAssertion.getNameByPk("Unknown Agent")(agentPk);
        if (name != null) 
            return name;
        return "Unknown Agent";
    };
    //@deprecated
    getAgentNameAsync(success, failure) {
        if (this.subject == null) {
            success("Nobody");
            return;
        }
        return cassPromisify(this.getAgent().then((pk)=>getNameByPk(pk,"Unknown Agent")),success,failure);
    };
    static async getNameByPk(pk,dflt) {
        let p = await EcPerson.getByPk(pk);
        if(p === undefined || p== null)
        return dflt;
        return p.getName();
    };
    async getAssertionDate() {
        if (this.assertionDate == null) 
            return null;
        var v = new EcEncryptedValue();
        v.copyFrom(this.assertionDate);
        var codebook = Assertion.getCodebook(this);
        var decryptedString;
        if (codebook != null) 
            decryptedString = await v.decryptIntoStringUsingSecret(codebook.assertionDate).catch((error)=>null);
         else {
            decryptedString = await v.decryptIntoString().catch((error)=>null);
        }
        if (decryptedString == null) 
            return null;
        return parseInt(decryptedString);
    };
    async setAssertionDate(assertionDateMs) {
        this.assertionDate = await EcEncryptedValue.encryptValue(assertionDateMs.toString(), this.id, this.subject.owner, this.subject.reader);
    };
    //@deprecated
    setAssertionDateAsync(assertionDateMs, success, failure) {
        var me = this;
        return EcEncryptedValue.encryptValueAsync(assertionDateMs.toString(), this.id, this.subject.owner, this.subject.reader, function(assertionDate) {
            me.assertionDate = assertionDate;
            success();
        }, failure);
    };
    //@deprecated
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
            return v.decryptIntoStringUsingSecretAsync(codebook.assertionDate, decrypted, failure);
         else 
            return v.decryptIntoStringAsync(decrypted, failure);
    };
    async getExpirationDate() {
        if (this.expirationDate == null) 
            return null;
        var v = new EcEncryptedValue();
        var codebook = Assertion.getCodebook(this);
        var decryptedString;
        v.copyFrom(this.expirationDate);
        if (codebook != null) 
            decryptedString = await v.decryptIntoStringUsingSecret(codebook.expirationDate).catch((error)=>null);
         else {
            decryptedString = await v.decryptIntoString().catch((error)=>null);
        }
        if (decryptedString == null) 
            return null;
        return parseInt(decryptedString);
    };
    async setExpirationDate(expirationDateMs) {
        this.expirationDate = await EcEncryptedValue.encryptValue(expirationDateMs.toString(), this.id, this.subject.owner, this.subject.reader);
    };
    //@deprecated
    setExpirationDateAsync(expirationDateMs, success, failure) {
        var me = this;
        return EcEncryptedValue.encryptValueAsync(expirationDateMs.toString(), this.id, this.subject.owner, this.subject.reader, function(expirationDate) {
            me.expirationDate = expirationDate;
            success();
        }, failure);
    };
    //@deprecated
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
            return v.decryptIntoStringUsingSecretAsync(codebook.expirationDate, decrypted, failure);
         else 
            return v.decryptIntoStringAsync(decrypted, failure);
    };
    getEvidenceCount() {
        if (this.evidence == null) 
            return 0;
        return this.evidence.length;
    };
    async getEvidence(index) {
        if (this.evidence == null) 
            return null;
        var v = new EcEncryptedValue();
        v.copyFrom(this.evidence[index]);
        var codebook = Assertion.getCodebook(this);
        var decryptedString;
        if (codebook != null) 
            decryptedString = await v.decryptIntoStringUsingSecret(codebook.evidence[index]).catch((error)=>null);
         else {
            decryptedString = await v.decryptIntoString().catch((error)=>null);
        }
        return decryptedString;
    };
    //@deprecated
    getEvidencesAsync(success, failure) {
        var evidences = this.evidence;
        if (evidences === undefined || evidences == null)
        evidences = [];
        return cassPromisify(Promise.all(evidences.map((evidence) => evidence.decryptIntoString())),success,failure);
    };
    //@deprecated
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
            return v.decryptIntoStringUsingSecretAsync(codebook.evidence[index], decrypted, failure);
         else 
            return v.decryptIntoStringAsync(decrypted, failure);
    };
    async getDecayFunction() {
        if (this.decayFunction == null) 
            return null;
        var v = new EcEncryptedValue();
        v.copyFrom(this.decayFunction);
        var codebook = Assertion.getCodebook(this);
        var decryptedString;
        if (codebook != null) 
            decryptedString = await v.decryptIntoStringUsingSecret(codebook.decayFunction).catch((error)=>null);
         else {
            decryptedString = await v.decryptIntoString().catch((error)=>null);
        }
        if (decryptedString == null) 
            return null;
        return decryptedString;
    };
    async setDecayFunction(decayFunctionText) {
        this.decayFunction = await EcEncryptedValue.encryptValue(decayFunctionText.toString(), this.id, this.subject.owner, this.subject.reader);
    };
    //@deprecated
    setDecayFunctionAsync(decayFunctionText, success, failure) {
        var me = this;
        return EcEncryptedValue.encryptValueAsync(decayFunctionText, this.id, this.subject.owner, this.subject.reader, function(decayFunction) {
            me.decayFunction = decayFunction;
            success();
        }, failure);
    };
    //@deprecated
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
            return v.decryptIntoStringUsingSecretAsync(codebook.decayFunction, decrypted, failure);
         else 
            return v.decryptIntoStringAsync(decrypted, failure);
    };
    async getNegative() {
        if (this.negative == null) 
            return false;
        var v = new EcEncryptedValue();
        v.copyFrom(this.negative);
        var codebook = Assertion.getCodebook(this);
        var decryptedString;
        if (codebook != null) 
            decryptedString = await v.decryptIntoStringUsingSecret(codebook.negative).catch((error)=>null);
         else {
            decryptedString = await v.decryptIntoString().catch((error)=>null);
        }
        if (decryptedString != null) 
            decryptedString.toLowerCase();
        return "true".equals(decryptedString);
    };
    async setNegative(negativeB) {
        this.negative = await EcEncryptedValue.encryptValue(negativeB.toString(), this.id, this.subject.owner, this.subject.reader);
    };
    //@deprecated
    setNegativeAsync(negativeB, success, failure) {
        var me = this;
        return EcEncryptedValue.encryptValueAsync(negativeB.toString(), this.id, this.subject.owner, this.subject.reader, function(negative) {
            me.negative = negative;
            success();
        }, failure);
    };
    //@deprecated
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
            return v.decryptIntoStringUsingSecretAsync(codebook.negative, decrypted, failure);
         else 
            return v.decryptIntoStringAsync(decrypted, failure);
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
    async setEvidence(evidences) {
        var encryptedValues = [];
        for (var i = 0; i < evidences.length; i++) 
            encryptedValues.push(await EcEncryptedValue.encryptValue(evidences[i], this.id, this.subject.owner, this.subject.reader));
        this.evidence = encryptedValues;
    };
    setEvidenceAsync(evidences, success, failure) {
        return cassPromisify(
            Promise.all(
                evidences.map(
                    (evidence) => EcEncryptedValue.encryptValue(s, me.id, me.subject.owner, me.subject.reader)
                ).then(
                    (evidences)=>{this.evidence = evidences;}
                )
            ),success,failure);
    };
    save(success, failure, repo) {
        if (this.competency == null || this.competency == "") {
            var msg = "Failing to save: Competency cannot be missing";
            if (failure !== undefined && failure != null) 
                failure(msg);
             else 
                throw new Error(msg);
            return;
        }
        if (this.subject == null) {
            var msg = "Failing to save: Subject cannot be missing";
            if (failure !== undefined && failure != null) 
                failure(msg);
             else 
                throw new Error(msg);
            return;
        }
        if (this.agent == null) {
            var msg = "Failing to save: Agent cannot be missing";
            if (failure !== undefined && failure != null) 
                failure(msg);
             else 
                throw new Error(msg);
            return;
        }
        if (this.assertionDate == null) {
            var msg = "Failing to save: Assertion Date cannot be missing";
            if (failure !== undefined && failure != null) 
                failure(msg);
             else 
                throw new Error(msg);
            return;
        }
        if (repo == null) 
            return EcRepository.save(this, success, failure);
         else 
            return repo.saveTo(this, success, failure);
    };
    async addReader(newReader) {
        if (this.agent != null) {
            await this.agent.addReader(newReader);
        }
        if (this.assertionDate != null) {
            await this.assertionDate.addReader(newReader);
        }
        if (this.decayFunction != null) {
            await this.decayFunction.addReader(newReader);
        }
        if (this.evidence != null) 
            for (var i = 0; i < this.evidence.length; i++) {
                await this.evidence[i].addReader(newReader);
            }
        if (this.expirationDate != null) {
            await this.expirationDate.addReader(newReader);
        }
        if (this.negative != null) {
            await this.negative.addReader(newReader);
        }
        if (this.subject != null) {
            await this.subject.addReader(newReader);
        }
        await super.addReader(newReader);
    };
    async removeReader(newReader) {
        if (this.agent != null) {
            await this.agent.removeReader(newReader);
        }
        if (this.assertionDate != null) {
            await this.assertionDate.removeReader(newReader);
        }
        if (this.decayFunction != null) {
            await this.decayFunction.removeReader(newReader);
        }
        if (this.evidence != null) 
            for (var i = 0; i < this.evidence.length; i++) {
                await this.evidence[i].removeReader(newReader);
            }
        if (this.expirationDate != null) {
            await this.expirationDate.removeReader(newReader);
        }
        if (this.negative != null) {
            await this.negative.removeReader(newReader);
        }
        if (this.subject != null) {
            await this.subject.removeReader(newReader);
        }
        await super.removeReader(newReader);
    };
    addReaderAsync(newReader, success, failure) {
        return cassPromisify(addReader(newReader),success,failure);
    };
    removeReaderAsync(oldReader, success, failure) {
        return cassPromisify(removeReader(newReader),success,failure);
    };
    getSearchStringByTypeAndCompetency(competency) {
        return "(" + this.getSearchStringByType() + " AND competency:\"" + competency.shortId() + "\")";
    };
};
