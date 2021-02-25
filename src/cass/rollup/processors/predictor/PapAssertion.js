var PapAssertion = function(confidence, competencyIndex, assertionDate, expirationDate, result) {
    this.confidence = confidence;
    this.assertionDate = assertionDate;
    this.expirationDate = expirationDate;
    this.result = result;
    this.competencyIndex = competencyIndex;
};
PapAssertion = stjs.extend(PapAssertion, null, [], function(constructor, prototype) {
    prototype.confidence = null;
    prototype.competencyIndex = null;
    prototype.assertionDate = null;
    prototype.expirationDate = null;
    prototype.result = false;
    prototype.getConfidence = function() {
        return this.confidence;
    };
    prototype.setConfidence = function(confidence) {
        this.confidence = confidence;
    };
    prototype.getCompetencyIndex = function() {
        return this.competencyIndex;
    };
    prototype.setCompetencyIndex = function(competencyIndex) {
        this.competencyIndex = competencyIndex;
    };
    prototype.getAssertionDate = function() {
        return this.assertionDate;
    };
    prototype.setAssertionDate = function(assertionDate) {
        this.assertionDate = assertionDate;
    };
    prototype.getExpirationDate = function() {
        return this.expirationDate;
    };
    prototype.setExpirationDate = function(expirationDate) {
        this.expirationDate = expirationDate;
    };
    prototype.getResult = function() {
        return this.result;
    };
    prototype.setResult = function(result) {
        this.result = result;
    };
}, {}, {});
