var PapNetworkPrediction = function(predictionDate, subjectPem, competencyList, competencyNetwork) {
    this.predictionDate = predictionDate;
    this.subjectPem = subjectPem;
    this.predictions = new Array();
    var currentCompetency;
    var pcp;
    for (var i = 0; i < competencyList.length; i++) {
        currentCompetency = competencyList[i];
        pcp = new PapCompetencyPrediction();
        pcp.setCompetencyId(currentCompetency);
        pcp.setConfidence(competencyNetwork.getPrediction(i));
        pcp.setConflictLevel(competencyNetwork.getConflictLevel(i));
        pcp.setConflictClass(competencyNetwork.getConflictClass(i));
        this.predictions.push(pcp);
    }
};
PapNetworkPrediction = stjs.extend(PapNetworkPrediction, null, [], function(constructor, prototype) {
    prototype.predictionDate = null;
    prototype.subjectPem = null;
    prototype.predictions = null;
    prototype.getPredictionDate = function() {
        return this.predictionDate;
    };
    prototype.setPredictionDate = function(predictionDate) {
        this.predictionDate = predictionDate;
    };
    prototype.getSubjectPem = function() {
        return this.subjectPem;
    };
    prototype.setSubjectPem = function(subjectPem) {
        this.subjectPem = subjectPem;
    };
    prototype.getPredictions = function() {
        return this.predictions;
    };
    prototype.setPredictions = function(predictions) {
        this.predictions = predictions;
    };
    prototype.getJsonString = function() {
        return JSON.stringify(this);
    };
}, {predictions: {name: "Array", arguments: ["PapCompetencyPrediction"]}}, {});
