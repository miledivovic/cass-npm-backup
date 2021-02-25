/**
 *  Processor used in Assertion Processing. Can estimate or determine competence
 *  of individuals.
 * 
 *  @author fritz.ray@eduworks.com
 *  @author tom.buskirk@eduworks.com
 *  @class AssertionProcessor
 *  @module org.cassproject
 */
var AssertionProcessor = function() {
    this.repositories = new Array();
    this.coprocessors = new Array();
    this.step = AssertionProcessor.DEF_STEP;
    this.profileMode = false;
};
AssertionProcessor = stjs.extend(AssertionProcessor, null, [], function(constructor, prototype) {
    constructor.DEF_STEP = false;
    prototype.repositories = null;
    prototype.step = false;
    prototype.profileMode = false;
    prototype.logFunction = null;
    prototype.assertions = null;
    prototype.coprocessors = null;
    prototype.processedEquivalencies = null;
    prototype.context = null;
    prototype.assertionsCollected = false;
    prototype.log = function(ip, string) {
        if (this.logFunction != null) {
            var id = "";
            if (ip.competency != null && ip.competency.length > 0) 
                id = ip.competency[0].shortId() + ":";
            this.logFunction(new Date().getTime() % 100000 + ": " + string);
        }
        ip.log += "\n" + string;
    };
    /**
     *  Asynchronously processes and provides an answer to the question: Does an
     *  individual hold a competency?
     * 
     *  @param {EcPk[]}                  subject Public keys that identify the subject.
     *  @param {EcCompetency}            competency The Competency being inquired about.
     *  @param {EcLevel}                 level The Level of the Competency at which the question
     *                                   is being asked.
     *  @param {EcFramework}             context The Framework in which to scope the inquiry.
     *  @param {EbacSignature[]}         additionalSignatures Additional signatures
     *                                   provided by an authority, used to request additional access on a one-time
     *                                   basis.
     *  @param {function(InquiryPacket)} success The method that is invoked when
     *                                   a decision has been reached.
     *  @param {string                   function(string)} ask The method that is invoked when the
     *                                   assertion processor detects that it needs information. (Usernames,
     *                                   passwords, etc)
     *  @param {function(string)}        failure The method that is invoked when the
     *                                   assertion processor has failed.
     *  @method has
     */
    prototype.has = function(subject, competency, level, context, additionalSignatures, success, ask, failure) {
        var ip = new InquiryPacket(subject, competency, level, context, success, failure, null, InquiryPacket.IPType.COMPETENCY);
        ip.root = true;
        this.processedEquivalencies = {};
        this.assertions = null;
        this.context = context;
        this.log(ip, "Created new inquiry.");
        var me = this;
        this.continueProcessingFirstPass(ip);
    };
    prototype.collectAssertionsForSecondPass = function(ip, success) {
        this.assertionsCollected = true;
        var listOfActivatedCompetencies = new Array();
        this.collectCompetencies(ip, listOfActivatedCompetencies, new Array());
        var me = this;
        listOfActivatedCompetencies.sort(function(a, b) {
            return b.compareTo(a);
        });
        var eah = new EcAsyncHelper();
        eah.each(this.repositories, function(currentRepository, callback0) {
            var searchQuery = me.buildAssertionsSearchQuery(ip, listOfActivatedCompetencies);
            me.log(ip, "Querying repositories for subject assertions on " + listOfActivatedCompetencies.length + " competencies: " + searchQuery);
            var params = new Object();
            (params)["size"] = 5000;
            EcAssertion.search(currentRepository, searchQuery, function(p1) {
                me.log(ip, p1.length + " assertions found.");
                me.assertions = new Object();
                for (var i = 0; i < p1.length; i++) {
                    var a = p1[i];
                    var competency = EcRemoteLinkedData.trimVersionFromUrl(a.competency);
                    if ((me.assertions)[competency] == null) 
                        (me.assertions)[competency] = new Array();
                    var as = (me.assertions)[competency];
                    as.push(a);
                }
                callback0();
            }, function(p1) {
                callback0();
            }, params);
        }, function(strings) {
            var eah2 = new EcAsyncHelper();
            eah2.each(me.coprocessors, function(ac, callback00) {
                ac.assertionProcessor = me;
                ac.collectAssertions(ip, listOfActivatedCompetencies, function(assertions) {
                    for (var i = 0; i < assertions.length; i++) {
                        var a = assertions[i];
                        var competency = EcRemoteLinkedData.trimVersionFromUrl(a.competency);
                        if ((me.assertions)[competency] == null) 
                            (me.assertions)[competency] = new Array();
                        var as = (me.assertions)[competency];
                        as.push(a);
                    }
                    callback00();
                });
            }, function(strings) {
                var eah3 = new EcAsyncHelper();
                eah3.each(me.coprocessors, function(ac, callback000) {
                    ac.assertionProcessor = me;
                    ac.mutateAssertions(ip, listOfActivatedCompetencies, callback000);
                }, function(strings) {
                    success(ip);
                });
            });
        });
    };
    prototype.isIn = function(ip, alreadyDone) {
        for (var i = 0; i < alreadyDone.length; i++) 
            if (ip == alreadyDone[i]) 
                return true;
        return false;
    };
    prototype.continueProcessingSecondPass = function(ip) {
        if (!ip.hasCheckedAssertionsForCompetency) 
            if (this.findSubjectAssertionsForCompetency(ip)) 
                if (EcRemote.async) 
                    return true;
        if (this.processChildPacketsSecondPass(ip.equivalentPackets)) 
            if (EcRemote.async) 
                return true;
        if (this.processChildPacketsSecondPass(ip.subPackets)) 
            if (EcRemote.async) 
                return true;
        if (ip.result == null) {
            this.determineResult(ip);
            this.log(ip, "Determined Result:" + ip.result);
            this.log(ip, "Success:" + ip.success);
            if (ip.result != null && ip.success != null) {
                this.log(ip, "Running success:" + ip.result);
                ip.success(ip);
            }
            if (EcRemote.async) 
                return true;
        }
        return false;
    };
    prototype.continueProcessingFirstPass = function(ip) {
        if (!ip.finished) {
            if (!ip.hasCheckedRelationshipsForCompetency) {
                this.findCompetencyRelationships(ip);
                if (EcRemote.async) 
                    return true;
            }
            if (!ip.hasCheckedRollupRulesForCompetency) {
                this.findRollupRulesForCompetency(ip);
                if (EcRemote.async) 
                    return true;
            }
            if (this.processChildPackets(ip.equivalentPackets)) 
                return true;
            if (this.processChildPackets(ip.subPackets)) 
                return true;
            ip.finished = true;
            if (!this.assertionsCollected) 
                if (ip.root) {
                    var me = this;
                    this.collectAssertionsForSecondPass(ip, function(p1) {
                        me.continueProcessingSecondPass(ip);
                    });
                    if (EcRemote.async) 
                        return true;
                } else 
                    ip.success(ip);
        }
        if (ip.finished) 
            if (this.assertions != null) 
                return this.continueProcessingSecondPass(ip);
        return false;
    };
    prototype.determineResult = function(ip) {};
    prototype.findCompetencyRelationships = function(ip) {};
    prototype.findSubjectAssertionsForCompetency = function(ip) {};
    prototype.processChildPackets = function(childPackets) {
        if (childPackets != null) 
            for (var i = 0; i < childPackets.length; i++) 
                if (this.continueProcessingFirstPass(childPackets[i])) 
                    return true;
        return false;
    };
    prototype.checkStep = function(ip) {
        this.log(ip, "Checkstep First Pass: " + ip.numberOfQueriesRunning);
        if (ip.numberOfQueriesRunning == 0) 
            if (!this.step && EcRemote.async) 
                this.continueProcessingFirstPass(ip);
    };
    prototype.processChildPacketsSecondPass = function(childPackets) {
        if (childPackets != null) 
            for (var i = 0; i < childPackets.length; i++) 
                if (this.continueProcessingSecondPass(childPackets[i])) 
                    return true;
        return false;
    };
    prototype.checkStepSecondPass = function(ip) {
        this.log(ip, "Checkstep Second Pass: " + ip.numberOfQueriesRunning);
        if (ip.numberOfQueriesRunning == 0) 
            if (!this.step && EcRemote.async) 
                this.continueProcessingSecondPass(ip);
    };
    prototype.processEventFailure = function(message, ip) {
        this.log(ip, "Event failed: " + message);
        ip.numberOfQueriesRunning--;
        ip.failure(message);
    };
    prototype.logFoundAssertion = function(a, ip) {
        this.log(ip, "No issues found with assertion.");
        this.log(ip, "Record Id: " + a.shortId());
        this.log(ip, "Confidence: " + a.confidence);
        this.log(ip, "Number of pieces of evidence: " + a.getEvidenceCount());
        this.log(ip, "Recording in inquiry.");
    };
    prototype.buildAssertionSearchQuery = function(ip, competency) {
        var result = null;
        if (InquiryPacket.IPType.ROLLUPRULE.equals(ip.type)) {
            if (ip.rule.indexOf("AND ") == 0) 
                ip.rule = ip.rule.replace("AND ", "");
            result = "(" + new EcAssertion().getSearchStringByType() + ") AND (" + ip.rule + ")";
        } else if (InquiryPacket.IPType.COMPETENCY.equals(ip.type)) 
            result = new EcAssertion().getSearchStringByTypeAndCompetency(competency);
        for (var i = 0; i < ip.subject.length; i++) 
            result += " AND (\\*reader:\"" + ip.subject[i].toPem() + "\")";
        this.log(ip, "Search Query: " + result);
        if (result != null) 
            return result;
         throw new RuntimeException("Trying to build an assertion search query on an unsupported type: " + ip.type);
    };
    prototype.buildAssertionsSearchQuery = function(ip, competencies) {
        var result = null;
        if (InquiryPacket.IPType.ROLLUPRULE.equals(ip.type)) {
            ip.failure("NOT SUPPOSED TO BE HERE.");
             throw new RuntimeException("Collecting assertions when root node is a rollup rule. Not supported.");
        } else if (InquiryPacket.IPType.COMPETENCY.equals(ip.type)) {
            result = "(";
            for (var i = 0; i < competencies.length; i++) {
                if (i != 0) 
                    result += " OR ";
                result += "competency:\"" + competencies[i] + "\"";
            }
            result += ")";
        }
        for (var i = 0; i < ip.subject.length; i++) 
            result += " AND (\\*reader:\"" + ip.subject[i].toPem() + "\")";
        if (result != null) 
            return result;
         throw new RuntimeException("Trying to build an assertion search query on an unsupported type: " + ip.type);
    };
    prototype.processRelationshipPacketsGenerated = function(ip, competency) {
        this.log(ip, "Relationships succesfully processed for: " + competency.id);
        ip.numberOfQueriesRunning--;
        this.checkStep(ip);
    };
    prototype.processRollupRuleInterpretSuccess = function(status, ip) {
        this.log(ip, "Rollup rule successfully interpreted.");
        ip.numberOfQueriesRunning--;
        this.checkStep(ip);
    };
    prototype.processRollupRuleInterpretSkipped = function(ip) {
        this.log(ip, "Rollup rule skipped.");
        ip.numberOfQueriesRunning--;
        this.checkStep(ip);
    };
    prototype.findRollupRulesForCompetency = function(ip) {
        ip.hasCheckedRollupRulesForCompetency = true;
        if (!InquiryPacket.IPType.COMPETENCY.equals(ip.type)) {
            this.log(ip, "No rollup rules for combinator types");
            this.checkStep(ip);
            return;
        }
        var ep = this;
        if (ip.getContext().rollupRule == null) {
            if (EcRemote.async) 
                this.continueProcessingFirstPass(ip);
        } else 
            for (var i = 0; i < ip.getContext().rollupRule.length; i++) {
                ip.numberOfQueriesRunning++;
                EcRollupRule.get(ip.getContext().rollupRule[i], function(rr) {
                    ep.processFindRollupRuleSuccess(rr, ip);
                }, function(p1) {
                    ep.processEventFailure(p1, ip);
                });
            }
    };
    prototype.processFindRollupRuleSuccess = function(rr, ip) {};
    prototype.collectCompetencies = function(ip, listOfActivatedCompetencies, listOfVisitedPackets) {
        if (this.profileMode) {
            for (var i = 0; i < this.context.competency.length; i++) 
                listOfActivatedCompetencies.push(this.context.competency[i]);
            return;
        }
        for (var i = 0; i < listOfVisitedPackets.length; i++) 
            if (ip == listOfVisitedPackets[i]) 
                return;
        listOfVisitedPackets.push(ip);
        for (var i = 0; i < ip.competency.length; i++) {
            for (var j = 0; j < listOfActivatedCompetencies.length; j++) 
                if (ip.competency[i].shortId() == listOfActivatedCompetencies[j]) 
                    continue;
            listOfActivatedCompetencies.push(ip.competency[i].shortId());
        }
        for (var i = 0; i < ip.equivalentPackets.length; i++) 
            this.collectCompetencies(ip.equivalentPackets[i], listOfActivatedCompetencies, listOfVisitedPackets);
        for (var i = 0; i < ip.subPackets.length; i++) 
            this.collectCompetencies(ip.subPackets[i], listOfActivatedCompetencies, listOfVisitedPackets);
    };
}, {repositories: {name: "Array", arguments: ["EcRepository"]}, logFunction: {name: "Callback1", arguments: ["Object"]}, assertions: "Object", coprocessors: {name: "Array", arguments: ["AssertionCoprocessor"]}, processedEquivalencies: {name: "Map", arguments: [null, null]}, context: "EcFramework"}, {});
