var CombinatorAssertionProcessor = function() {
    AssertionProcessor.call(this);
};
CombinatorAssertionProcessor = stjs.extend(CombinatorAssertionProcessor, AssertionProcessor, [], function(constructor, prototype) {
    constructor.relationLookup = null;
    prototype.processFoundAssertion = function(a, ip, success, failure) {
        var eah = new EcAsyncHelper();
        var me = this;
        eah.each(ip.subject, function(p1, p2) {
            me.checkSubject(a, p1, ip, p2, function(p1) {
                failure(p1);
            });
        }, function(p1) {
            success();
        });
    };
    prototype.checkSubject = function(a, currentSubject, ip, success, failure) {
        var me = this;
        a.getSubjectAsync(function(sub) {
            if (sub.equals(currentSubject)) {
                me.log(ip, "Matching Assertion found.");
                a.getAssertionDateAsync(function(assertionDate) {
                    if (assertionDate != null) 
                        if (assertionDate > stjs.trunc(new Date().getTime())) {
                            me.log(ip, "Assertion is made for a future date.");
                            success();
                            return;
                        }
                    a.getExpirationDateAsync(function(expirationDate) {
                        if (expirationDate != null) 
                            if (expirationDate <= stjs.trunc(new Date().getTime())) {
                                me.log(ip, "Assertion is expired. Skipping.");
                                success();
                                return;
                            }
                        me.logFoundAssertion(a, ip);
                        a.getNegativeAsync(function(p1) {
                            if (p1 != null && p1) {
                                me.log(ip, "Found valid negative assertion");
                                ip.negative.push(a);
                            } else {
                                me.log(ip, "Found valid positive assertion");
                                ip.positive.push(a);
                            }
                            success();
                        }, function(p1) {
                            me.log(ip, "Found valid positive assertion");
                            ip.positive.push(a);
                            success();
                        });
                    }, failure);
                }, failure);
            } else 
                failure("Incorrect subject.");
        }, failure);
    };
    prototype.processFindAssertionsSuccess = function(data, ip) {
        if (data.length == 0) 
            this.log(ip, "No results found.");
         else 
            this.log(ip, "Total number of assertions found: " + data.length);
        ip.numberOfQueriesRunning--;
        this.checkStepSecondPass(ip);
    };
    prototype.findSubjectAssertionsForCompetency = function(ip) {
        if (this.assertions == null) 
            return true;
        ip.hasCheckedAssertionsForCompetency = true;
        if (!InquiryPacket.IPType.COMPETENCY.equals(ip.type) && !InquiryPacket.IPType.ROLLUPRULE.equals(ip.type)) {
            this.log(ip, "No assertions for combinator types");
            return false;
        }
        var me = this;
        if (InquiryPacket.IPType.COMPETENCY.equals(ip.type)) {
            for (var h = 0; h < ip.competency.length; h++) {
                ip.numberOfQueriesRunning++;
                var competency = ip.competency[h];
                var assertionsForThisCompetency = (this.assertions)[competency.shortId()];
                if (assertionsForThisCompetency == null) 
                    assertionsForThisCompetency = new Array();
                var eah = new EcAsyncHelper();
                eah.each(assertionsForThisCompetency, function(p1, p2) {
                    me.processFoundAssertion(p1, ip, p2, function(p1) {
                        p2();
                    });
                }, function(p1) {
                    me.processFindAssertionsSuccess(p1, ip);
                });
            }
            return true;
        } else 
            for (var i = 0; i < this.repositories.length; i++) {
                var currentRepository = this.repositories[i];
                if (InquiryPacket.IPType.ROLLUPRULE.equals(ip.type)) {
                    ip.numberOfQueriesRunning++;
                    this.log(ip, "Searching: " + currentRepository.selectedServer);
                    currentRepository.search(this.buildAssertionSearchQuery(ip, null), function(p1) {}, function(p1) {
                        var eah = new EcAsyncHelper();
                        eah.each(p1, function(p1, p2) {
                            var a = new EcAssertion();
                            a.copyFrom(p1);
                            me.processFoundAssertion(a, ip, p2, function(p1) {
                                p2();
                            });
                        }, function(p1) {
                            me.processFindAssertionsSuccess(p1, ip);
                        });
                    }, function(p1) {
                        me.processEventFailure(p1, ip);
                    });
                }
            }
        return true;
    };
    prototype.findCompetencyRelationships = function(ip) {
        ip.hasCheckedRelationshipsForCompetency = true;
        if (!InquiryPacket.IPType.COMPETENCY.equals(ip.type)) {
            this.log(ip, "No relationships for combinator types");
            this.checkStep(ip);
            return;
        }
        var ep = this;
        var relationLookup = this.constructor.relationLookup;
        if (relationLookup == null) {
            relationLookup = new Object();
            if (ep.context != null && ep.context.relation != null) 
                for (var i = 0; i < ep.context.relation.length; i++) {
                    var a = EcAlignment.getBlocking(ep.context.relation[i]);
                    if (a == null) 
                        continue;
                    if ((relationLookup)[a.source] == null) 
                        (relationLookup)[a.source] = new Array();
                    ((relationLookup)[a.source]).push(a);
                    if ((relationLookup)[a.target] == null) 
                        (relationLookup)[a.target] = new Array();
                    ((relationLookup)[a.target]).push(a);
                }
            if (this.profileMode) 
                this.constructor.relationLookup = relationLookup;
        }
        for (var i = 0; i < ip.competency.length; i++) {
            this.log(ip, "Finding relationships for competency: " + ip.competency[i]);
            this.findCompetencyRelationship(ip, ep, ip.competency[i], relationLookup);
        }
    };
    prototype.findCompetencyRelationship = function(ip, ep, c, relationLookup) {
        var rpg = new RelationshipPacketGenerator(ip, ep, this.processedEquivalencies);
        rpg.failure = ip.failure;
        rpg.logFunction = this.logFunction;
        rpg.relationLookup = relationLookup;
        rpg.success = function() {
            ep.processRelationshipPacketsGenerated(ip, c);
        };
        this.log(ip, "Executing relationship packet generator");
        ip.numberOfQueriesRunning++;
        rpg.go();
    };
    prototype.processFindRollupRuleSuccess = function(rr, ip) {
        var ep = this;
        if (!ip.hasId(rr.competency)) {
            ep.processRollupRuleInterpretSkipped(ip);
            return;
        }
        this.log(ip, "Found rollup rule: " + rr.rule);
        var rrp = new RollupRuleProcessor(ip, this);
        rrp.positive = ip.positive;
        rrp.negative = ip.negative;
        var rri = new RollupRuleInterface(rr.rule, rrp);
        rri.logFunction = this.logFunction;
        rri.success = function(p1) {
            ep.processRollupRuleInterpretSuccess(p1, ip);
        };
        rri.failure = ip.failure;
        this.log(ip, "Executing rollup rule interpreter");
        rri.go();
    };
}, {relationLookup: "Object", repositories: {name: "Array", arguments: ["EcRepository"]}, logFunction: {name: "Callback1", arguments: ["Object"]}, assertions: "Object", coprocessors: {name: "Array", arguments: ["AssertionCoprocessor"]}, processedEquivalencies: {name: "Map", arguments: [null, null]}, context: "EcFramework"}, {});
