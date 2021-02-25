var SimpleAssertion = function(id, competencyId, confidence) {
    this.id = id;
    this.competencyId = competencyId;
    this.confidence = confidence;
};
SimpleAssertion = stjs.extend(SimpleAssertion, null, [], function(constructor, prototype) {
    prototype.id = null;
    prototype.subjectPem = null;
    prototype.competencyId = null;
    prototype.confidence = null;
    prototype.assertionDate = null;
    prototype.expirationDate = null;
    prototype.negative = null;
    prototype.getId = function() {
        return this.id;
    };
    prototype.setId = function(id) {
        this.id = id;
    };
    prototype.getSubjectPem = function() {
        return this.subjectPem;
    };
    prototype.setSubjectPem = function(subjectPem) {
        this.subjectPem = subjectPem;
    };
    prototype.getCompetencyId = function() {
        return this.competencyId;
    };
    prototype.setCompetencyId = function(competencyId) {
        this.competencyId = competencyId;
    };
    prototype.getConfidence = function() {
        return this.confidence;
    };
    prototype.setConfidence = function(confidence) {
        this.confidence = confidence;
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
    prototype.isNegative = function() {
        return this.negative;
    };
    prototype.setNegative = function(negative) {
        this.negative = negative;
    };
}, {}, {});
