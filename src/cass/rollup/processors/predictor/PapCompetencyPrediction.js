var PapCompetencyPrediction = function() {};
PapCompetencyPrediction = stjs.extend(PapCompetencyPrediction, null, [], function(constructor, prototype) {
    prototype.competencyId = null;
    prototype.confidence = 0.0;
    prototype.conflictLevel = 0.0;
    prototype.conflictClass = null;
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
    prototype.getConflictLevel = function() {
        return this.conflictLevel;
    };
    prototype.setConflictLevel = function(conflictLevel) {
        this.conflictLevel = conflictLevel;
    };
    prototype.getConflictClass = function() {
        return this.conflictClass;
    };
    prototype.setConflictClass = function(conflictClass) {
        this.conflictClass = conflictClass;
    };
}, {}, {});
