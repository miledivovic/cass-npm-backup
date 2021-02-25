var FrameworkCollapser = function() {};
FrameworkCollapser = stjs.extend(FrameworkCollapser, null, [], function(constructor, prototype) {
    prototype.repo = null;
    prototype.framework = null;
    prototype.createImpliedRelations = false;
    prototype.competencyArray = null;
    prototype.competencyNodeMap = null;
    prototype.relationArray = null;
    prototype.frameworkNodeGraph = null;
    prototype.collapsedFrameworkNodePacketGraph = null;
    prototype.successCallback = null;
    prototype.failureCallback = null;
    prototype.addCompetenciesToFrameworkNodeGraph = function() {
        var cmp;
        var n;
        this.competencyNodeMap = {};
        for (var i = 0; i < this.competencyArray.length; i++) {
            cmp = this.competencyArray[i];
            n = new Node(cmp.shortId());
            n.setName(cmp.getName());
            n.setDescription(cmp.getDescription());
            this.frameworkNodeGraph.addNode(n);
            this.competencyNodeMap[cmp.shortId()] = n;
        }
    };
    prototype.getRelationType = function(rs) {
        if ("requires".equalsIgnoreCase(rs)) 
            return RelationType.RELATION_TYPE.REQUIRES;
         else if ("narrows".equalsIgnoreCase(rs)) 
            return RelationType.RELATION_TYPE.NARROWS;
         else if ("isEquivalentTo".equalsIgnoreCase(rs)) 
            return RelationType.RELATION_TYPE.IS_EQUIVALENT_TO;
         else 
            return null;
    };
    prototype.addRelationshipsToFrameworkNodeGraph = function() {
        var rel;
        var type;
        var sourceNode = null;
        var targetNode = null;
        for (var i = 0; i < this.relationArray.length; i++) {
            rel = this.relationArray[i];
            type = this.getRelationType(rel.relationType);
            if (type == null) 
                continue;
            if (rel.source == null || rel.source == "" || rel.target == null || rel.target == "") 
                continue;
            sourceNode = this.competencyNodeMap[rel.source];
            targetNode = this.competencyNodeMap[rel.target];
            if (sourceNode == null || targetNode == null) 
                continue;
            this.frameworkNodeGraph.addRelation(sourceNode, targetNode, type);
        }
    };
    prototype.generateFrameworkNodeGraph = function() {
        this.frameworkNodeGraph = new NodeGraph();
        this.addCompetenciesToFrameworkNodeGraph();
        this.addRelationshipsToFrameworkNodeGraph();
        if (this.createImpliedRelations) 
            this.frameworkNodeGraph.createImpliedRelations();
    };
    prototype.collapseFrameworkNodeGraph = function() {
        var cgc = new CyclicGraphCollapser();
        this.collapsedFrameworkNodePacketGraph = cgc.collapseGraph(this.frameworkNodeGraph);
    };
    prototype.continueFrameworkCollapse = function() {
        try {
            this.generateFrameworkNodeGraph();
            try {
                this.collapseFrameworkNodeGraph();
                this.successCallback(this.framework.shortId(), this.collapsedFrameworkNodePacketGraph);
            }catch (e2) {
                this.failureCallback("Framework collapse failed: " + e2.toString());
            }
        }catch (e) {
            this.failureCallback("Framework node graph generation failed: " + e.toString());
        }
    };
    prototype.fetchFrameworkAlignments = function(framework) {
        var me = this;
        if (framework.relation != null) 
            this.repo.multiget(framework.relation, function(ecaa) {
                for (var i = 0; i < ecaa.length; i++) {
                    ecaa[i] = EcAlignment.getBlocking(ecaa[i].shortId());
                }
                me.relationArray = ecaa;
                me.continueFrameworkCollapse();
            }, me.failureCallback);
         else 
            me.continueFrameworkCollapse();
    };
    prototype.collapseFramework = function(repo, framework, createImpliedRelations, success, failure) {
        if (framework == null) 
            failure("Framework is null or undefined");
         else if (framework.competency == null || framework.competency.length < 1) 
            failure("Framework has no competencies");
         else if (repo == null) 
            failure("Repo is null or undefined");
         else {
            this.repo = repo;
            this.framework = framework;
            this.createImpliedRelations = createImpliedRelations;
            this.successCallback = success;
            this.failureCallback = failure;
            var me = this;
            var fwkParam = framework;
            if (framework.competency != null) 
                repo.multiget(framework.competency, function(ecca) {
                    for (var i = 0; i < ecca.length; i++) {
                        ecca[i] = EcCompetency.getBlocking(ecca[i].shortId());
                    }
                    me.competencyArray = ecca;
                    me.fetchFrameworkAlignments(fwkParam);
                }, me.failureCallback);
             else 
                me.fetchFrameworkAlignments(fwkParam);
        }
    };
}, {repo: "EcRepository", framework: "EcFramework", competencyArray: {name: "Array", arguments: ["EcCompetency"]}, competencyNodeMap: {name: "Map", arguments: [null, "Node"]}, relationArray: {name: "Array", arguments: ["EcAlignment"]}, frameworkNodeGraph: "NodeGraph", collapsedFrameworkNodePacketGraph: "NodePacketGraph", successCallback: {name: "Callback2", arguments: [null, "NodePacketGraph"]}, failureCallback: {name: "Callback1", arguments: [null]}}, {});
