var PredictiveAssertionProcessor = function() {};
PredictiveAssertionProcessor = stjs.extend(PredictiveAssertionProcessor, null, [], function(constructor, prototype) {
    constructor.LOG_ENABLED = false;
    constructor.ABRUBT_EXP_RETENTION = 0.0;
    constructor.DEFAULT_RETENTION = 1.0;
    constructor.STEP_SIZE_NUMERATOR = 1.0;
    constructor.INITIAL_VALUE = 0.0;
    constructor.INIT_PARENT_IDX_DEP_PARM = -1;
    constructor.INIT_CHILD_IDX_DEP_PARM = -1;
    constructor.INIT_WEIGHT_DEP_PARM = 0.0;
    constructor.INIT_LEAK_DEP_PARM = 0.0;
    constructor.INIT_REVERSE_DEP_PARM = false;
    constructor.DEFAULT_PROB_LEARN_UNMET_REQS = 0.0;
    constructor.DEFAULT_PROB_INSUFF = 0.0;
    constructor.DEFAULT_DISCOUNT = 1.0;
    prototype.competencyIndex = null;
    prototype.values = null;
    prototype.dependencies = null;
    prototype.assertions = null;
    prototype.dependencyDefs = null;
    prototype.settings = null;
    prototype.inputGraph = null;
    prototype.subjectPem = null;
    prototype.predictionDate = null;
    prototype.competencyNetwork = null;
    prototype.stepSize = 0.0;
    prototype.priorityQueueThreshold = 0.0;
    prototype.competencePrediction = null;
    prototype.log = function(s) {
        if (PredictiveAssertionProcessor.LOG_ENABLED) {
            console.log(s);
        }
    };
    prototype.verifyDependencyDefs = function() {
        if (this.dependencyDefs == null) {
            this.dependencyDefs = new PapDependencyDefinitions();
            this.dependencyDefs.initDefaultDefinitions();
        }
    };
    prototype.processInputParameters = function(inputGraph, subjectPem, predictionDate, dependencyDefs, settings) {
        this.dependencyDefs = dependencyDefs;
        this.verifyDependencyDefs();
        this.settings = settings;
        if (this.settings == null) 
            this.settings = new PapSettings();
        this.inputGraph = inputGraph;
        this.subjectPem = subjectPem;
        if (this.subjectPem != null) 
            this.subjectPem = this.subjectPem.trim();
        this.predictionDate = predictionDate;
        if (this.predictionDate == null) 
            this.predictionDate = stjs.trunc((new Date()).getTime());
        this.stepSize = PredictiveAssertionProcessor.STEP_SIZE_NUMERATOR / this.settings.getIterations();
        this.priorityQueueThreshold = this.settings.getPriorityQueueThreshold() / this.settings.getIterations();
    };
    prototype.initDependenciesMap = function() {
        this.dependencies = {};
        var type;
        for (var i = 0; i < PapDependency.getDependencyTypes().length; i++) {
            type = PapDependency.getDependencyTypes()[i];
            var dependencySubMap = {};
            this.dependencies[type] = dependencySubMap;
        }
    };
    prototype.initAssertionsMap = function() {
        this.assertions = {};
        for (var i = 0; i < this.inputGraph.getNodes().length; i++) {
            this.assertions[String.valueOf(i)] = new Array();
        }
    };
    prototype.buildValuesCompetencyIndexAndDependencies = function() {
        this.competencyIndex = {};
        this.values = new Array();
        for (var i = 0; i < this.inputGraph.getNodes().length; i++) {
            this.values.push(PredictiveAssertionProcessor.INITIAL_VALUE);
            this.competencyIndex[this.inputGraph.getNodes()[i]] = i;
            var type;
            for (var j = 0; j < PapDependency.getDependencyTypes().length; j++) {
                type = PapDependency.getDependencyTypes()[j];
                this.dependencies[type][String.valueOf(i)] = new Array();
            }
        }
    };
    prototype.initDataStructures = function() {
        this.initDependenciesMap();
        this.initAssertionsMap();
        this.buildValuesCompetencyIndexAndDependencies();
    };
    prototype.getDefaultPapDependencyParms = function() {
        var depParms = new PapDependencyParms();
        depParms.setType(PapDependency.NULL_TYPE);
        depParms.setParentIndex(PredictiveAssertionProcessor.INIT_PARENT_IDX_DEP_PARM);
        depParms.setChildIndex(PredictiveAssertionProcessor.INIT_CHILD_IDX_DEP_PARM);
        depParms.setWeight(PredictiveAssertionProcessor.INIT_WEIGHT_DEP_PARM);
        depParms.setLeak(PredictiveAssertionProcessor.INIT_LEAK_DEP_PARM);
        depParms.setReverse(PredictiveAssertionProcessor.INIT_REVERSE_DEP_PARM);
        return depParms;
    };
    prototype.getDependencyParmsForEdge = function(edge) {
        var depType = edge.getRelation();
        var depClass = this.dependencyDefs.getDependencyDefinitionMap()[depType].getDepClass();
        var depParms = this.getDefaultPapDependencyParms();
        switch (depClass.toLowerCase()) {
            case "isrequiredby":
                depParms.setChildIndex(this.competencyIndex[edge.getSource()]);
                depParms.setParentIndex(this.competencyIndex[edge.getTarget()]);
                depParms.setType(PapDependency.NECESSARY_TYPE);
                depParms.setWeight(this.dependencyDefs.getWeightForType(depType));
                depParms.setLeak(this.dependencyDefs.getLeakForType(depType));
                depParms.setReverse(this.dependencyDefs.getReverseForType(depType));
                break;
            case "issufficientfor":
                depParms.setChildIndex(this.competencyIndex[edge.getSource()]);
                depParms.setParentIndex(this.competencyIndex[edge.getTarget()]);
                depParms.setType(PapDependency.SUFFICIENT_TYPE);
                depParms.setWeight(this.dependencyDefs.getWeightForType(depType));
                depParms.setLeak(this.dependencyDefs.getLeakForType(depType));
                depParms.setReverse(this.dependencyDefs.getReverseForType(depType));
                break;
            case "isequivalentto":
                depParms.setParentIndex(this.competencyIndex[edge.getSource()]);
                depParms.setChildIndex(this.competencyIndex[edge.getTarget()]);
                depParms.setType(PapDependency.EQUIVALENCE_TYPE);
                depParms.setWeight(this.dependencyDefs.getWeightForType(depType));
                break;
            case "broadens":
                depParms.setParentIndex(this.competencyIndex[edge.getSource()]);
                depParms.setChildIndex(this.competencyIndex[edge.getTarget()]);
                depParms.setType(PapDependency.BROADENS_TYPE);
                depParms.setWeight(this.dependencyDefs.getWeightForType(depType));
                depParms.setReverse(this.dependencyDefs.getReverseForType(depType));
                break;
        }
        return depParms;
    };
    prototype.dependencyExists = function(type, index, dependency) {
        var dependencyArray = this.dependencies[type][index];
        if (dependencyArray == null) {
            return true;
        }
        var currentDep;
        for (var i = 0; i < dependencyArray.length; i++) {
            currentDep = dependencyArray[i];
            if (currentDep.equals(dependency)) 
                return true;
        }
        return false;
    };
    prototype.processEdges = function() {
        for (var i = 0; i < this.inputGraph.getEdges().length; i++) {
            var edge = this.inputGraph.getEdges()[i];
            var depParms = this.getDependencyParmsForEdge(edge);
            var newDep;
            if (PapDependency.EQUIVALENCE_TYPE.equals(depParms.getType())) {
                depParms.setDependencyFirst(true);
                newDep = new PapDependency(depParms);
                if (!this.dependencyExists(depParms.getType(), String.valueOf(depParms.getParentIndex()), newDep)) {
                    this.dependencies[depParms.getType()][String.valueOf(depParms.getParentIndex())].push(newDep);
                }
                depParms.swapParentChildIndexes();
                newDep = new PapDependency(depParms);
                if (!this.dependencyExists(depParms.getType(), String.valueOf(depParms.getParentIndex()), newDep)) {
                    this.dependencies[depParms.getType()][String.valueOf(depParms.getParentIndex())].push(newDep);
                }
            } else if (edge.getRelation() != null && edge.getRelation().trim().length > 0) {
                depParms.setDependencyFirst(!depParms.getReverse());
                newDep = new PapDependency(depParms);
                if (!this.dependencyExists(depParms.getType(), String.valueOf(depParms.getParentIndex()), newDep)) {
                    this.dependencies[depParms.getType()][String.valueOf(depParms.getParentIndex())].push(newDep);
                }
            }
        }
    };
    prototype.addAssertions = function(assertionList) {
        var sa;
        var pa;
        for (var i = 0; i < assertionList.length; i++) {
            sa = assertionList[i];
            if (sa.getAssertionDate() <= this.predictionDate && ((!this.settings.getAbruptExpiration()) || this.predictionDate <= sa.getExpirationDate())) {
                var index = this.competencyIndex[sa.getCompetencyId()];
                pa = new PapAssertion(sa.getConfidence(), index, sa.getAssertionDate(), sa.getExpirationDate(), !sa.isNegative());
                this.assertions[String.valueOf(index)].push(pa);
            }
        }
    };
    prototype.processAssertions = function() {
        if (this.subjectPem == null || this.subjectPem.length <= 0) {
            this.addAssertions(this.inputGraph.getNegativeAssertions());
            this.addAssertions(this.inputGraph.getPositiveAssertions());
        } else {
            var sa;
            var matchingAssertionList = new Array();
            for (var i = 0; i < this.inputGraph.getNegativeAssertions().length; i++) {
                sa = this.inputGraph.getNegativeAssertions()[i];
                if (this.subjectPem.equals(sa.getSubjectPem())) 
                    matchingAssertionList.push(sa);
            }
            this.addAssertions(matchingAssertionList);
            matchingAssertionList = new Array();
            for (var i = 0; i < this.inputGraph.getPositiveAssertions().length; i++) {
                sa = this.inputGraph.getPositiveAssertions()[i];
                if (this.subjectPem.equals(sa.getSubjectPem())) 
                    matchingAssertionList.push(sa);
            }
            this.addAssertions(matchingAssertionList);
        }
    };
    prototype.getTimeFactor = function(assertionDate, expirationDate) {
        var range = expirationDate - assertionDate;
        var timeUntilPrediction = this.predictionDate - assertionDate;
        var rate = (timeUntilPrediction) / range;
        return rate;
    };
    prototype.getRetention = function(assertionDate, expirationDate) {
        if (this.settings.getAbruptExpiration() && this.predictionDate > (expirationDate)) 
            return PredictiveAssertionProcessor.ABRUBT_EXP_RETENTION;
         else {
            if (this.settings.getGradualForgetting()) {
                var factor = this.getTimeFactor(assertionDate, expirationDate);
                return Math.exp(-factor);
            } else 
                return PredictiveAssertionProcessor.DEFAULT_RETENTION;
        }
    };
    prototype.addAssertionsToUpdateQueue = function(updateQueue) {
        var assertionList;
        var assertion;
        var val;
        for (var i = 0; i < this.inputGraph.getNodes().length; i++) {
            assertionList = this.assertions[String.valueOf(i)];
            for (var j = 0; j < assertionList.length; j++) {
                assertion = assertionList[j];
                val = this.stepSize * assertion.getConfidence() * this.settings.getEvidenceWeight() * this.getRetention(assertion.getAssertionDate(), assertion.getExpirationDate());
                if (val > this.priorityQueueThreshold) {
                    updateQueue.push(new PapUpdate(assertion.getCompetencyIndex(), val, assertion.getResult()));
                }
            }
        }
    };
    prototype.processNecessaryNetworkDependencies = function(update, updateQueue) {
        var updateDependencies = this.competencyNetwork.getDependencies()[PapDependency.NECESSARY_TYPE][String.valueOf(update.getIndex())];
        if (updateDependencies != null) {
            var probabilityLearnUnmetRequirements = PredictiveAssertionProcessor.DEFAULT_PROB_LEARN_UNMET_REQS;
            if (updateDependencies.length > 0) {
                probabilityLearnUnmetRequirements = updateDependencies[0].getLeak();
            }
            var totalRes = (1 - probabilityLearnUnmetRequirements);
            var dep;
            for (var i = 0; i < updateDependencies.length; i++) {
                dep = updateDependencies[i];
                totalRes *= (1 - dep.getWeight() * this.competencyNetwork.getActivations()[dep.getChildIndex()]);
            }
            var gradient;
            for (var i = 0; i < updateDependencies.length; i++) {
                dep = updateDependencies[i];
                if (!update.hasVisited(dep.getChildIndex())) {
                    gradient = update.getChange() * totalRes / (1 - dep.getWeight() * this.competencyNetwork.getActivations()[dep.getChildIndex()]) * dep.getWeight() * this.settings.getDiscount();
                    if (gradient > this.priorityQueueThreshold) {
                        updateQueue.push(update.updateChild(dep.getChildIndex(), gradient));
                    }
                }
            }
        }
    };
    prototype.processSufficientNetworkDependencies = function(update, updateQueue) {
        var updateDependencies = this.competencyNetwork.getDependencies()[PapDependency.SUFFICIENT_TYPE][String.valueOf(update.getIndex())];
        if (updateDependencies != null) {
            var probabilityInsufficient = PredictiveAssertionProcessor.DEFAULT_PROB_INSUFF;
            if (updateDependencies.length > 0) {
                probabilityInsufficient = updateDependencies[0].getLeak();
            }
            var totalRes = (1 - probabilityInsufficient);
            var dep;
            for (var i = 0; i < updateDependencies.length; i++) {
                dep = updateDependencies[i];
                totalRes *= (1.0 - (1.0 - this.competencyNetwork.getActivations()[dep.getChildIndex()]) * dep.getWeight());
            }
            var gradient;
            for (var i = 0; i < updateDependencies.length; i++) {
                dep = updateDependencies[i];
                if (!update.hasVisited(dep.getChildIndex())) {
                    gradient = update.getChange() * (1.0 - totalRes / (1.0 - dep.getWeight() * (1.0 - this.competencyNetwork.getActivations()[dep.getChildIndex()]))) * this.settings.getDiscount();
                    if (gradient > this.priorityQueueThreshold) {
                        updateQueue.push(update.updateChild(dep.getChildIndex(), gradient));
                    }
                }
            }
        }
    };
    prototype.processEquivalenceNetworkDependencies = function(update, updateQueue) {
        var updateDependencies = this.competencyNetwork.getDependencies()[PapDependency.EQUIVALENCE_TYPE][String.valueOf(update.getIndex())];
        if (updateDependencies != null) {
            var dep;
            var gradient;
            for (var i = 0; i < updateDependencies.length; i++) {
                dep = updateDependencies[i];
                if (!update.hasVisited(dep.getChildIndex())) {
                    gradient = update.getChange() * dep.getWeight() * this.settings.getDiscount();
                    if (Math.abs(gradient) > this.priorityQueueThreshold) {
                        updateQueue.push(update.updateChild(dep.getChildIndex(), gradient));
                    }
                }
            }
        }
    };
    prototype.processBroadensNetworkDependencies = function(update, updateQueue) {
        var updateDependencies = this.competencyNetwork.getDependencies()[PapDependency.BROADENS_TYPE][String.valueOf(update.getIndex())];
        if (updateDependencies != null) {
            var dep;
            var gradient;
            for (var i = 0; i < updateDependencies.length; i++) {
                dep = updateDependencies[i];
                if (!update.hasVisited(dep.getChildIndex())) {
                    gradient = update.getChange() * this.settings.getDiscount() * dep.getWeight();
                    if (gradient > this.priorityQueueThreshold) {
                        updateQueue.push(update.updateChild(dep.getChildIndex(), gradient));
                    }
                }
            }
        }
    };
    prototype.predictCompetence = function() {
        this.competencyNetwork = new PapCompetencyNetwork(this.dependencies, this.inputGraph.getNodes().length, this.settings);
        var updateQueue;
        var currentUpdate;
        for (var iteration = 0; iteration < this.settings.getIterations(); iteration++) {
            updateQueue = new Array();
            this.addAssertionsToUpdateQueue(updateQueue);
             while (updateQueue.length > 0){
                currentUpdate = updateQueue.pop();
                this.competencyNetwork.update(currentUpdate.getIndex(), currentUpdate.getChange(), currentUpdate.getPositive());
                this.processNecessaryNetworkDependencies(currentUpdate, updateQueue);
                this.processSufficientNetworkDependencies(currentUpdate, updateQueue);
                this.processEquivalenceNetworkDependencies(currentUpdate, updateQueue);
                this.processBroadensNetworkDependencies(currentUpdate, updateQueue);
            }
        }
    };
    prototype.buildCompetencePrediction = function() {
        this.competencePrediction = new PapNetworkPrediction(this.predictionDate, this.subjectPem, this.inputGraph.getNodes(), this.competencyNetwork);
    };
    prototype.predictAll = function(inputGraph, subjectPem, predictionDate, dependencyDefs, settings) {
        this.processInputParameters(inputGraph, subjectPem, predictionDate, dependencyDefs, settings);
        this.initDataStructures();
        this.processEdges();
        this.processAssertions();
        this.predictCompetence();
        this.buildCompetencePrediction();
        return this.competencePrediction;
    };
}, {competencyIndex: {name: "Map", arguments: [null, null]}, values: {name: "Array", arguments: [null]}, dependencies: {name: "Map", arguments: [null, {name: "Map", arguments: [null, {name: "Array", arguments: ["PapDependency"]}]}]}, assertions: {name: "Map", arguments: [null, {name: "Array", arguments: ["PapAssertion"]}]}, dependencyDefs: "PapDependencyDefinitions", settings: "PapSettings", inputGraph: "CompetencyGraph", competencyNetwork: "PapCompetencyNetwork", competencePrediction: "PapNetworkPrediction"}, {});
