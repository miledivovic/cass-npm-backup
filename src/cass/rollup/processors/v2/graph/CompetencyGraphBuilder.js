var CompetencyGraphBuilder = function() {
    this.repositories = new Array();
    this.subjects = new Array();
};
CompetencyGraphBuilder = stjs.extend(CompetencyGraphBuilder, null, [], function(constructor, prototype) {
    constructor.SIZE_OF_ASSERTION_QUERY = 5000;
    prototype.success = null;
    prototype.failure = null;
    prototype.includeAssertions = true;
    prototype.frameworkId = null;
    prototype.rootCompetencyId = null;
    prototype.repositories = null;
    prototype.subjects = null;
    prototype.createImpliedEdges = true;
    prototype.competencyGraph = null;
    prototype.frameworkRelationMap = null;
    prototype.frameworkRelationList = null;
    prototype.assertionList = null;
    prototype.assertionMap = null;
    prototype.relationshipsToProcess = 0;
    prototype.relationshipsProcessed = 0;
    prototype.repositoriesToQuery = 0;
    prototype.repostioriesQueried = 0;
    prototype.assertionsToFillIn = 0;
    prototype.assertionsFilledIn = 0;
    prototype.getRelationsForCompetency = function(competencyId) {
        var competencyRelations = this.frameworkRelationMap[competencyId];
        if (competencyRelations == null) {
            competencyRelations = new Array();
            this.frameworkRelationMap[competencyId] = competencyRelations;
        }
        return competencyRelations;
    };
    prototype.addRelationToCompetencyMap = function(competencyId, relation) {
        var competencyRelations;
        competencyRelations = this.getRelationsForCompetency(competencyId);
        competencyRelations.push(relation);
        this.frameworkRelationMap[competencyId] = competencyRelations;
    };
    prototype.buildFrameworkRelationsMap = function() {
        var relation;
        for (var i = 0; i < this.frameworkRelationList.length; i++) {
            relation = this.frameworkRelationList[i];
            this.addRelationToCompetencyMap(relation.source, relation);
            this.addRelationToCompetencyMap(relation.target, relation);
        }
    };
    prototype.addCompetencyTreeToGraph = function(competencyId) {
        this.competencyGraph.addNode(competencyId);
        var competencyRelations = this.frameworkRelationMap[competencyId];
        if (competencyRelations != null && competencyRelations.length > 0) {
            var relation;
            for (var i = 0; i < competencyRelations.length; i++) {
                relation = competencyRelations[i];
                if (!this.competencyGraph.graphContainsEdge(relation.source, relation.target, relation.relationType)) {
                    this.competencyGraph.addEdge(relation.source, relation.target, relation.relationType);
                }
                if (!this.competencyGraph.graphContainsNode(relation.target)) {
                    this.addCompetencyTreeToGraph(relation.target);
                }
                if (!this.competencyGraph.graphContainsNode(relation.source)) {
                    this.addCompetencyTreeToGraph(relation.source);
                }
            }
        }
    };
    prototype.returnGraph = function() {
        this.success(this.competencyGraph);
    };
    prototype.addAssertionsToGraph = function() {
        var sa;
        var a;
        for (var i = 0; i < this.assertionList.length; i++) {
            a = this.assertionList[i];
            sa = this.assertionMap[a.id];
            if (sa != null) {
                if (sa.isNegative()) 
                    this.competencyGraph.addNegativeAssertion(sa);
                 else 
                    this.competencyGraph.addPositiveAssertion(sa);
            }
        }
    };
    prototype.checkAssertionDetailsFetched = function() {
        if (this.assertionsFilledIn >= this.assertionsToFillIn) {
            this.addAssertionsToGraph();
            this.returnGraph();
        }
    };
    prototype.fetchAssertionDetailsNegativeStatus = function(a, sa) {
        var cgb = this;
        a.getNegativeAsync(function(negative) {
            if (negative != null && negative) 
                sa.setNegative(true);
             else 
                sa.setNegative(false);
            cgb.assertionMap[sa.getId()] = sa;
            cgb.assertionsFilledIn++;
            cgb.checkAssertionDetailsFetched();
        }, function(s) {
            sa.setNegative(false);
            cgb.assertionMap[sa.getId()] = sa;
            cgb.assertionsFilledIn++;
            cgb.checkAssertionDetailsFetched();
        });
    };
    prototype.fetchAssertionDetailsExpirationDate = function(a, sa) {
        var cgb = this;
        a.getExpirationDateAsync(function(expirationDate) {
            if (expirationDate == null || expirationDate <= stjs.trunc(new Date().getTime())) {
                cgb.assertionsFilledIn++;
                cgb.checkAssertionDetailsFetched();
            } else {
                sa.setExpirationDate(expirationDate);
                cgb.fetchAssertionDetailsNegativeStatus(a, sa);
            }
        }, function(s) {
            cgb.failure(new ExceptionReturn("Failed fetchAssertionDetailsExpirationDate: " + s));
        });
    };
    prototype.fetchAssertionDetailsAssertionDate = function(a, sa) {
        var cgb = this;
        a.getAssertionDateAsync(function(assertionDate) {
            if (assertionDate == null || assertionDate > stjs.trunc(new Date().getTime())) {
                cgb.assertionsFilledIn++;
                cgb.checkAssertionDetailsFetched();
            } else {
                sa.setAssertionDate(assertionDate);
                cgb.fetchAssertionDetailsExpirationDate(a, sa);
            }
        }, function(s) {
            cgb.failure(new ExceptionReturn("Failed fetchAssertionDetailsAssertionDate: " + s));
        });
    };
    prototype.isASubject = function(pk) {
        if (this.subjects == null || this.subjects.length == 0) 
            return true;
        var sub;
        for (var i = 0; i < this.subjects.length; i++) {
            sub = this.subjects[i];
            if (sub.toPem().trim() == pk.toPem().trim()) 
                return true;
        }
        return false;
    };
    prototype.fetchAssertionDetailsSubject = function(a, sa) {
        var cgb = this;
        a.getSubjectAsync(function(sub) {
            if (sub == null || !cgb.isASubject(sub)) {
                cgb.assertionsFilledIn++;
                cgb.checkAssertionDetailsFetched();
            } else {
                sa.setSubjectPem(sub.toPem());
                cgb.fetchAssertionDetailsAssertionDate(a, sa);
            }
        }, function(s) {
            cgb.failure(new ExceptionReturn("Failed fetchAssertionDetailsSubject: " + s));
        });
    };
    prototype.fillInAssertions = function() {
        this.assertionsToFillIn = this.assertionList.length;
        this.assertionsFilledIn = 0;
        if (this.assertionsToFillIn == 0) 
            this.returnGraph();
        var a;
        var sa;
        for (var i = 0; i < this.assertionList.length; i++) {
            a = this.assertionList[i];
            sa = new SimpleAssertion(a.id, a.competency, a.confidence);
            this.fetchAssertionDetailsSubject(a, sa);
        }
    };
    prototype.checkNumberOfReposQueried = function() {
        if (this.repostioriesQueried >= this.repositoriesToQuery) {
            this.fillInAssertions();
        }
    };
    prototype.addAssertionsToList = function(repoAssertions) {
        for (var i = 0; i < repoAssertions.length; i++) {
            this.assertionList.push(repoAssertions[i]);
        }
        this.repostioriesQueried++;
    };
    prototype.buildAssertionSearchQuery = function() {
        var query = "(";
        for (var i = 0; i < this.competencyGraph.getNodes().length; i++) {
            if (i != 0) 
                query += " OR ";
            query += "competency:\"" + this.competencyGraph.getNodes()[i] + "\"";
        }
        query += ")";
        if (this.subjects != null) {
            for (var i = 0; i < this.subjects.length; i++) {
                query += " AND (\\*reader:\"" + this.subjects[i].toPem() + "\")";
            }
        }
        return query;
    };
    prototype.processCompetencyAssertions = function() {
        this.repositoriesToQuery = this.repositories.length;
        this.repostioriesQueried = 0;
        var currentRepository;
        var params = new Object();
        (params)["size"] = CompetencyGraphBuilder.SIZE_OF_ASSERTION_QUERY;
        var searchQuery = this.buildAssertionSearchQuery();
        var cgb = this;
        for (var i = 0; i < this.repositories.length; i++) {
            currentRepository = this.repositories[i];
            EcAssertion.search(currentRepository, searchQuery, function(assertions) {
                cgb.addAssertionsToList(assertions);
                cgb.checkNumberOfReposQueried();
            }, function(s) {
                cgb.failure(new ExceptionReturn("Error fetching assertions: " + s));
            }, params);
        }
    };
    prototype.assembleGraphComponents = function() {
        try {
            this.buildFrameworkRelationsMap();
            this.addCompetencyTreeToGraph(this.rootCompetencyId);
            if (this.createImpliedEdges) 
                this.competencyGraph.createImpliedRelationships();
            if (this.includeAssertions) 
                this.processCompetencyAssertions();
             else 
                this.returnGraph();
        }catch (e) {
            this.failure(new ExceptionReturn("Exception buildAndReturnCompetencyGraph: " + e.toString()));
        }
    };
    prototype.checkNumberOfRelationsProcessed = function() {
        if (this.relationshipsProcessed >= this.relationshipsToProcess) {
            this.assembleGraphComponents();
        }
    };
    prototype.addRelationshipToList = function(a) {
        this.frameworkRelationList.push(a);
        this.relationshipsProcessed++;
    };
    prototype.fetchFrameworkRelations = function(f) {
        this.relationshipsToProcess = f.relation.length;
        this.relationshipsProcessed = 0;
        var cgb = this;
        if (this.relationshipsToProcess == 0) {
            this.competencyGraph.addNode(this.rootCompetencyId);
            this.success(this.competencyGraph);
        } else {
            for (var i = 0; i < this.relationshipsToProcess; i++) {
                EcAlignment.get(f.relation[i], function(a) {
                    cgb.addRelationshipToList(a);
                    cgb.checkNumberOfRelationsProcessed();
                }, function(s) {
                    cgb.failure(new ExceptionReturn("Error fetching relationship: " + s));
                });
            }
        }
    };
    prototype.fetchFrameworkAndGo = function() {
        var cgb = this;
        EcFramework.get(this.frameworkId, function(f) {
            cgb.fetchFrameworkRelations(f);
        }, function(s) {
            cgb.failure(new ExceptionReturn("Error fetching framework(" + cgb.frameworkId + "): " + s));
        });
    };
    prototype.validateInput = function() {
        if (this.includeAssertions && (this.repositories == null || this.repositories.length == 0)) {
            this.failure(new ExceptionReturn("Assertion repository information not provided."));
        } else if (this.success == null) {
            this.failure(new ExceptionReturn("Success callback required."));
        } else if (this.frameworkId == null) {
            this.failure(new ExceptionReturn("Framework ID required."));
        } else if (this.rootCompetencyId == null) {
            this.failure(new ExceptionReturn("Root Competency ID required."));
        }
    };
    prototype.initBuilder = function(createImpliedEdges) {
        this.createImpliedEdges = createImpliedEdges;
        this.competencyGraph = new CompetencyGraph(this.includeAssertions);
        this.assertionMap = {};
        this.frameworkRelationMap = {};
        this.frameworkRelationList = new Array();
        this.assertionList = new Array();
    };
    prototype.buildCompetencyGraph = function(createImpliedEdges) {
        this.validateInput();
        this.initBuilder(createImpliedEdges);
        this.fetchFrameworkAndGo();
    };
}, {success: {name: "Callback1", arguments: ["CompetencyGraph"]}, failure: {name: "Callback1", arguments: ["ExceptionReturn"]}, repositories: {name: "Array", arguments: ["EcRepository"]}, subjects: {name: "Array", arguments: ["EcPk"]}, competencyGraph: "CompetencyGraph", frameworkRelationMap: {name: "Map", arguments: [null, {name: "Array", arguments: ["EcAlignment"]}]}, frameworkRelationList: {name: "Array", arguments: ["EcAlignment"]}, assertionList: {name: "Array", arguments: ["EcAssertion"]}, assertionMap: {name: "Map", arguments: [null, "SimpleAssertion"]}}, {});
