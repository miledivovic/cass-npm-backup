var CompetencyGraph = function(includeAssertions) {
    this.nodes = new Array();
    this.edges = new Array();
    this.positiveAssertions = new Array();
    this.negativeAssertions = new Array();
    this.nodeMap = {};
    this.edgeMap = {};
    this.includeAssertions = includeAssertions;
};
CompetencyGraph = stjs.extend(CompetencyGraph, null, [], function(constructor, prototype) {
    constructor.NARROWS_RELATION_TEXT = "narrows";
    constructor.BROADENS_RELATION_TEXT = "broadens";
    constructor.REQUIRES_RELATION_TEXT = "requires";
    constructor.IS_REQUIRED_BY_RELATION_TEXT = "isRequiredBy";
    constructor.IS_EQUIVALENT_TO_RELATION_TEXT = "isEquivalentTo";
    constructor.EDGE_MAP_FIELD_DELIMETER = " -------||||||------- ";
    constructor.CleanGraph = function(nodes, edges) {
        this.nodes = nodes;
        this.edges = edges;
    };
    constructor.CleanGraph = stjs.extend(constructor.CleanGraph, null, [], function(constructor, prototype) {
        prototype.nodes = null;
        prototype.edges = null;
    }, {nodes: {name: "Array", arguments: [null]}, edges: {name: "Array", arguments: ["CgEdge"]}}, {});
    constructor.CleanGraphWithAssertions = function(nodes, edges, positiveAssertions, negativeAssertions) {
        this.nodes = nodes;
        this.edges = edges;
        this.positiveAssertions = positiveAssertions;
        this.negativeAssertions = negativeAssertions;
    };
    constructor.CleanGraphWithAssertions = stjs.extend(constructor.CleanGraphWithAssertions, null, [], function(constructor, prototype) {
        prototype.nodes = null;
        prototype.edges = null;
        prototype.positiveAssertions = null;
        prototype.negativeAssertions = null;
    }, {nodes: {name: "Array", arguments: [null]}, edges: {name: "Array", arguments: ["CgEdge"]}, positiveAssertions: {name: "Array", arguments: ["SimpleAssertion"]}, negativeAssertions: {name: "Array", arguments: ["SimpleAssertion"]}}, {});
    prototype.nodes = null;
    prototype.edges = null;
    prototype.positiveAssertions = null;
    prototype.negativeAssertions = null;
    prototype.nodeMap = null;
    prototype.edgeMap = null;
    prototype.includeAssertions = false;
    prototype.addNode = function(id) {
        if (!this.graphContainsNode(id)) {
            this.nodes.push(id);
            this.nodeMap[id] = id;
        }
    };
    prototype.getEdgeKey = function(source, target, relationType) {
        return source + CompetencyGraph.EDGE_MAP_FIELD_DELIMETER + target + CompetencyGraph.EDGE_MAP_FIELD_DELIMETER + relationType;
    };
    prototype.addEdge = function(source, target, relationType) {
        if (!this.graphContainsEdge(source, target, relationType)) {
            this.edges.push(new CgEdge(source, target, relationType));
            var edgeKey = this.getEdgeKey(source, target, relationType);
            this.edgeMap[edgeKey] = edgeKey;
        }
    };
    prototype.addPositiveAssertion = function(simpleAssertion) {
        if (simpleAssertion != null) 
            this.positiveAssertions.push(simpleAssertion);
    };
    prototype.addNegativeAssertion = function(simpleAssertion) {
        if (simpleAssertion != null) 
            this.negativeAssertions.push(simpleAssertion);
    };
    prototype.graphContainsNode = function(nodeId) {
        if (this.nodeMap[nodeId] == null) 
            return false;
        return true;
    };
    prototype.graphContainsEdge = function(source, target, relationType) {
        if (this.edgeMap[this.getEdgeKey(source, target, relationType)] == null) 
            return false;
        return true;
    };
    prototype.createImpliedRelationships = function() {
        var edgesToAdd = new Array();
        var e;
        for (var i = 0; i < this.edges.length; i++) {
            e = this.edges[i];
            if (e.getRelation().equalsIgnoreCase(CompetencyGraph.NARROWS_RELATION_TEXT)) {
                edgesToAdd.push(new CgEdge(e.getTarget(), e.getSource(), CompetencyGraph.BROADENS_RELATION_TEXT));
            } else if (e.getRelation().equalsIgnoreCase(CompetencyGraph.REQUIRES_RELATION_TEXT)) {
                edgesToAdd.push(new CgEdge(e.getTarget(), e.getSource(), CompetencyGraph.IS_REQUIRED_BY_RELATION_TEXT));
            } else if (e.getRelation().equalsIgnoreCase(CompetencyGraph.IS_EQUIVALENT_TO_RELATION_TEXT)) {
                edgesToAdd.push(new CgEdge(e.getTarget(), e.getSource(), CompetencyGraph.IS_EQUIVALENT_TO_RELATION_TEXT));
            }
        }
        var ne;
        for (var i = 0; i < edgesToAdd.length; i++) {
            ne = edgesToAdd[i];
            this.addEdge(ne.getSource(), ne.getTarget(), ne.getRelation());
        }
    };
    prototype.getJsonString = function() {
        if (this.includeAssertions) 
            return JSON.stringify(new CompetencyGraph.CleanGraphWithAssertions(this.nodes, this.edges, this.positiveAssertions, this.negativeAssertions));
         else 
            return JSON.stringify(new CompetencyGraph.CleanGraph(this.nodes, this.edges));
    };
    prototype.getNodes = function() {
        return this.nodes;
    };
    prototype.setNodes = function(nodes) {
        this.nodes = nodes;
    };
    prototype.getEdges = function() {
        return this.edges;
    };
    prototype.setEdges = function(edges) {
        this.edges = edges;
    };
    prototype.getPositiveAssertions = function() {
        return this.positiveAssertions;
    };
    prototype.setPositiveAssertions = function(positiveAssertions) {
        this.positiveAssertions = positiveAssertions;
    };
    prototype.getNegativeAssertions = function() {
        return this.negativeAssertions;
    };
    prototype.setNegativeAssertions = function(negativeAssertions) {
        this.negativeAssertions = negativeAssertions;
    };
}, {nodes: {name: "Array", arguments: [null]}, edges: {name: "Array", arguments: ["CgEdge"]}, positiveAssertions: {name: "Array", arguments: ["SimpleAssertion"]}, negativeAssertions: {name: "Array", arguments: ["SimpleAssertion"]}, nodeMap: {name: "Map", arguments: [null, null]}, edgeMap: {name: "Map", arguments: [null, null]}}, {});
