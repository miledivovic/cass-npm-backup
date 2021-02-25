var PapSettings = function() {
    this.iterations = PapSettings.DEFAULT_ITERATIONS;
    this.abruptExpiration = PapSettings.DEFAULT_ABRUPT_EXP;
    this.gradualForgetting = PapSettings.DEFAULT_GRAD_FORGETTING;
    this.evidenceWeight = PapSettings.DEFAULT_EVIDENCE_WEIGHT;
    this.discount = PapSettings.DEFAULT_DISCOUNT;
    this.priorityQueueThreshold = PapSettings.DEFAULT_PRIORITY_QUEUE_THRESHOLD;
    this.betaPrecision = PapSettings.DEFAULT_BETA_PRECISION;
    this.betaMean = PapSettings.DEFAULT_BETA_MEAN;
};
PapSettings = stjs.extend(PapSettings, null, [], function(constructor, prototype) {
    constructor.DEFAULT_ITERATIONS = 200;
    constructor.DEFAULT_ABRUPT_EXP = false;
    constructor.DEFAULT_GRAD_FORGETTING = true;
    constructor.DEFAULT_EVIDENCE_WEIGHT = 1.0;
    constructor.DEFAULT_DISCOUNT = 1.0;
    constructor.DEFAULT_PRIORITY_QUEUE_THRESHOLD = 0.01;
    constructor.DEFAULT_BETA_PRECISION = 0.1;
    constructor.DEFAULT_BETA_MEAN = 0.2;
    prototype.iterations = null;
    prototype.abruptExpiration = false;
    prototype.gradualForgetting = false;
    prototype.evidenceWeight = null;
    prototype.discount = null;
    prototype.priorityQueueThreshold = null;
    prototype.betaPrecision = null;
    prototype.betaMean = null;
    prototype.getIterations = function() {
        return this.iterations;
    };
    prototype.setIterations = function(iterations) {
        this.iterations = iterations;
    };
    prototype.getAbruptExpiration = function() {
        return this.abruptExpiration;
    };
    prototype.setAbruptExpiration = function(abruptExpiration) {
        this.abruptExpiration = abruptExpiration;
    };
    prototype.getGradualForgetting = function() {
        return this.gradualForgetting;
    };
    prototype.setGradualForgetting = function(gradualForgetting) {
        this.gradualForgetting = gradualForgetting;
    };
    prototype.getEvidenceWeight = function() {
        return this.evidenceWeight;
    };
    prototype.setEvidenceWeight = function(evidenceWeight) {
        this.evidenceWeight = evidenceWeight;
    };
    prototype.getDiscount = function() {
        return this.discount;
    };
    prototype.setDiscount = function(discount) {
        this.discount = discount;
    };
    prototype.getPriorityQueueThreshold = function() {
        return this.priorityQueueThreshold;
    };
    prototype.setPriorityQueueThreshold = function(priorityQueueThreshold) {
        this.priorityQueueThreshold = priorityQueueThreshold;
    };
    prototype.getBetaPrecision = function() {
        return this.betaPrecision;
    };
    prototype.setBetaPrecision = function(betaPrecision) {
        this.betaPrecision = betaPrecision;
    };
    prototype.getBetaMean = function() {
        return this.betaMean;
    };
    prototype.setBetaMean = function(betaMean) {
        this.betaMean = betaMean;
    };
}, {}, {});
