var PapCompetencyNetwork = function(dependencies, numberNodes, settings) {
    this.numberNodes = numberNodes;
    this.dependencies = dependencies;
    this.activations = new Array();
    this.alphas = new Array();
    this.betas = new Array();
    this.updated = new Array();
    for (var i = 0; i < numberNodes; i++) {
        var beta_prior = settings.getBetaPrecision();
        var beta_mean = settings.getBetaMean();
        this.alphas.push(beta_mean * beta_prior);
        this.betas.push((1.0 - beta_mean) * beta_prior);
        this.activations.push(beta_mean);
        this.updated.push(false);
    }
};
PapCompetencyNetwork = stjs.extend(PapCompetencyNetwork, null, [], function(constructor, prototype) {
    constructor.LOW_CONFLICT_CLASS = "low";
    constructor.MEDIUM_CONFLICT_CLASS = "medium";
    constructor.HIGH_CONFLICT_CLASS = "high";
    constructor.EMPTY_PREDICTION = 0.0;
    constructor.EMPTY_CONFLICT_LEVEL = 0.0;
    constructor.MEDIUM_CONFLICT_CLASS_QUALIFIER = 1.05;
    constructor.HIGH_CONFLICT_CLASS_QUALIFIER = 1.5;
    prototype.dependencies = null;
    prototype.activations = null;
    prototype.alphas = null;
    prototype.betas = null;
    prototype.updated = null;
    prototype.numberNodes = 0;
    prototype.update = function(nodeIndex, change, positive) {
        var a = this.alphas[nodeIndex];
        var b = this.betas[nodeIndex];
        if (positive) 
            this.alphas[nodeIndex] = a + change;
         else 
            this.betas[nodeIndex] = b + change;
        this.activations[nodeIndex] = (a + (positive ? change : 0)) / (a + b + change);
        this.updated[nodeIndex] = true;
    };
    prototype.getPrediction = function(index) {
        if (this.updated[index]) {
            return this.activations[index];
        } else 
            return PapCompetencyNetwork.EMPTY_PREDICTION;
    };
    prototype.getConflictLevel = function(index) {
        if (this.updated[index]) {
            var a = this.alphas[index];
            var b = this.betas[index];
            var act = this.activations[index];
            var stdev = Math.sqrt((a * b) / (a + b + 1)) / (a + b);
            return Math.min(act, 1.0 - act) / stdev;
        } else 
            return PapCompetencyNetwork.EMPTY_CONFLICT_LEVEL;
    };
    prototype.getConflictClass = function(index) {
        var level = this.getConflictLevel(index);
        var res = PapCompetencyNetwork.LOW_CONFLICT_CLASS;
        if (level >= PapCompetencyNetwork.MEDIUM_CONFLICT_CLASS_QUALIFIER) 
            res = PapCompetencyNetwork.MEDIUM_CONFLICT_CLASS;
        if (level >= PapCompetencyNetwork.HIGH_CONFLICT_CLASS_QUALIFIER) 
            res = PapCompetencyNetwork.HIGH_CONFLICT_CLASS;
        return res;
    };
    prototype.getDependencies = function() {
        return this.dependencies;
    };
    prototype.setDependencies = function(dependencies) {
        this.dependencies = dependencies;
    };
    prototype.getActivations = function() {
        return this.activations;
    };
    prototype.setActivations = function(activations) {
        this.activations = activations;
    };
    prototype.getAlphas = function() {
        return this.alphas;
    };
    prototype.setAlphas = function(alphas) {
        this.alphas = alphas;
    };
    prototype.getBetas = function() {
        return this.betas;
    };
    prototype.setBetas = function(betas) {
        this.betas = betas;
    };
    prototype.getUpdated = function() {
        return this.updated;
    };
    prototype.setUpdated = function(updated) {
        this.updated = updated;
    };
    prototype.getNumberNodes = function() {
        return this.numberNodes;
    };
    prototype.setNumberNodes = function(numberNodes) {
        this.numberNodes = numberNodes;
    };
}, {dependencies: {name: "Map", arguments: [null, {name: "Map", arguments: [null, {name: "Array", arguments: ["PapDependency"]}]}]}, activations: {name: "Array", arguments: [null]}, alphas: {name: "Array", arguments: [null]}, betas: {name: "Array", arguments: [null]}, updated: {name: "Array", arguments: [null]}}, {});
