/**
 *  Processor used in determining all the competencies a for which a user has assertions.
 *  Utilizes EcFrameworkGraph
 * 
 *  @author fritz.ray@eduworks.com
 *  @author tom.buskirk@eduworks.com
 *  @class ProfileProcessor
 *  @module org.cassproject
 */
var ProfileProcessor = function() {};
ProfileProcessor = stjs.extend(ProfileProcessor, null, [], function(constructor, prototype) {
    constructor.DEBUG = true;
    prototype.profilePkPems = null;
    prototype.repo = null;
    prototype.successCallback = null;
    prototype.failureCallback = null;
    prototype.frameworksToProcess = 0;
    prototype.frameworksProcessed = 0;
    prototype.assertedFrameworkGraphs = null;
    prototype.unfilteredAssertionList = null;
    prototype.profileAssertions = null;
    prototype.addedAssertionIds = null;
    prototype.assertionCompetencies = null;
    prototype.debugMessage = function(o) {
        if (ProfileProcessor.DEBUG) 
            console.log(o);
    };
    prototype.checkAllFrameworkGraphAssertionsHaveProcessed = function() {
        this.debugMessage("checkAllFrameworkGraphAssertionsHaveProcessed");
        this.debugMessage("frameworksProcessed: " + this.frameworksProcessed);
        if (this.frameworksProcessed >= this.frameworksToProcess) {
            this.debugMessage("All profile assertion framework graphs processed");
            this.successCallback();
        }
    };
    prototype.processFrameworkGraphAssertions = function(efg, framework) {
        this.debugMessage("(" + Date.now() + ") Processing framework graph assertions for:");
        this.debugMessage(framework.shortId());
        this.debugMessage(framework.getName());
        var me = this;
        efg.processAssertionsBoolean(this.profileAssertions, function() {
            me.frameworksProcessed++;
            me.assertedFrameworkGraphs.push(efg);
            me.checkAllFrameworkGraphAssertionsHaveProcessed();
        }, function(err) {
            me.handleFailedFrameworkGraphOperation("Process Graph: " + err);
        });
    };
    prototype.handleFailedFrameworkGraphOperation = function(err) {
        this.debugMessage("handleFailedFrameworkGraphOperation: " + err);
        this.frameworksProcessed++;
        this.checkAllFrameworkGraphAssertionsHaveProcessed();
    };
    prototype.buildProfileAssertionFrameworkGraph = function(framework) {
        this.debugMessage("(" + Date.now() + ") Generating framework graph for:");
        this.debugMessage(framework.shortId());
        this.debugMessage(framework.getName());
        var me = this;
        var efg = new EcFrameworkGraph();
        efg.addFramework(framework, this.repo, function() {
            me.processFrameworkGraphAssertions(efg, framework);
        }, function(err) {
            me.handleFailedFrameworkGraphOperation("Build Graph: " + err);
        });
    };
    prototype.generateProfileAssertionFrameworkGraphs = function(profileAssertionFrameworks) {
        if (profileAssertionFrameworks.length <= 0) 
            this.successCallback();
         else {
            this.frameworksToProcess = profileAssertionFrameworks.length;
            this.debugMessage("Generating framework graphs...");
            this.debugMessage(profileAssertionFrameworks);
            for (var i = 0; i < profileAssertionFrameworks.length; i++) {
                this.buildProfileAssertionFrameworkGraph(profileAssertionFrameworks[i]);
            }
        }
    };
    prototype.buildAssertionCompetencyList = function() {
        this.assertionCompetencies = new Array();
        for (var i = 0; i < this.profileAssertions.length; i++) {
            var asr = this.profileAssertions[i];
            if (!EcArray.has(this.assertionCompetencies, asr.competency)) {
                this.assertionCompetencies.push(asr.competency);
            }
        }
    };
    prototype.getFrameworkSearchQueryForAssertionCompetencies = function() {
        var searchQuery = "";
        if (this.assertionCompetencies.length > 1) 
            searchQuery = "(";
        for (var i = 0; i < this.assertionCompetencies.length; i++) {
            if (i > 0) 
                searchQuery += " OR ";
            searchQuery += "(competency:\"" + this.assertionCompetencies[i] + "\")";
        }
        if (this.assertionCompetencies.length > 1) 
            searchQuery += ")";
        this.debugMessage("Framework search query: " + searchQuery);
        return searchQuery;
    };
    prototype.findFrameworksForProfileAssertions = function() {
        this.unfilteredAssertionList = null;
        this.buildAssertionCompetencyList();
        this.debugMessage("Fetching Assertion Frameworks...");
        var me = this;
        EcFramework.search(this.repo, this.getFrameworkSearchQueryForAssertionCompetencies(), function(arrayOfEcFrameworks) {
            me.debugMessage("Assertion Frameworks Fetched");
            me.generateProfileAssertionFrameworkGraphs(arrayOfEcFrameworks);
        }, me.failureCallback, null);
    };
    prototype.filterAssertionList = function() {
        if (this.unfilteredAssertionList.length == 0) 
            this.successCallback();
         else {
            var me = this;
            var eah = new EcAsyncHelper();
            eah.each(this.unfilteredAssertionList, function(assertion, done) {
                assertion.getSubjectAsync(function(subject) {
                    if (subject != null) {
                        if (EcArray.has(me.profilePkPems, subject.toPem())) {
                            if (!EcArray.has(me.addedAssertionIds, assertion.shortId())) {
                                me.profileAssertions.push(assertion);
                                me.addedAssertionIds.push(assertion.shortId());
                            }
                        }
                    }
                    done();
                }, eah.failWithCallback(me.failureCallback, done));
            }, function(aa) {
                me.debugMessage("Assertions filtered");
                me.debugMessage(me.profileAssertions);
                me.findFrameworksForProfileAssertions();
            });
        }
    };
    prototype.isEnvelopeOwnedByProfileUser = function(asrEnv) {
        if (asrEnv.owner == null) 
            return false;
        for (var i = 0; i < asrEnv.owner.length; i++) {
            if (EcArray.has(this.profilePkPems, asrEnv.owner[i])) 
                return true;
        }
        return false;
    };
    prototype.isEncryptedAssertionEnvelope = function(asrEnv) {
        return true;
    };
    prototype.processPotentialAssertionEnvelope = function(potAsrEnv) {
        this.debugMessage("processPotentialAssertionEnvelope: " + potAsrEnv.shortId());
        if (this.isEncryptedAssertionEnvelope(potAsrEnv) && this.isEnvelopeOwnedByProfileUser(potAsrEnv)) {
            var nv = new EcEncryptedValue();
            nv.copyFrom(potAsrEnv);
            var aed = nv.decryptIntoObject();
            var realAsrEnv = new AssertionEnvelope();
            realAsrEnv.copyFrom(aed);
            for (var i = 0; i < realAsrEnv.assertion.length; i++) {
                var eca = new EcAssertion();
                eca.copyFrom(realAsrEnv.getAssertion(i));
                this.unfilteredAssertionList.push(eca);
            }
        }
    };
    prototype.processAssertionEnvelopes = function(ecRldArray) {
        this.debugMessage("Processing Assertion Envelopes...");
        if (ecRldArray != null && ecRldArray.length > 0) {
            for (var i = 0; i < ecRldArray.length; i++) {
                this.processPotentialAssertionEnvelope(ecRldArray[i]);
            }
        }
        this.filterAssertionList();
    };
    prototype.fetchAssertionEnvelopes = function() {
        this.debugMessage("Fetching Assertion Envelopes...");
        var me = this;
        this.repo.searchWithParams(new AssertionEnvelope().getSearchStringByType(), null, null, function(ecRldArray) {
            me.debugMessage("Assertion Envelopes Fetched");
            me.processAssertionEnvelopes(ecRldArray);
        }, me.failureCallback);
    };
    prototype.getAssertionSearchQueryForProfilePkPems = function() {
        var searchQuery = "";
        if (this.profilePkPems.length > 1) 
            searchQuery = "(";
        for (var i = 0; i < this.profilePkPems.length; i++) {
            if (i > 0) 
                searchQuery += " OR ";
            searchQuery += "(\\*reader:\"" + this.profilePkPems[i] + "\")";
        }
        if (this.profilePkPems.length > 1) 
            searchQuery += ")";
        this.debugMessage("Assertion search query: " + searchQuery);
        return searchQuery;
    };
    prototype.fetchProfileAssertions = function() {
        this.debugMessage("Fetching Assertions...");
        var me = this;
        EcAssertion.search(this.repo, this.getAssertionSearchQueryForProfilePkPems(), function(arrayOfEcAssertions) {
            me.debugMessage("Assertions Fetched");
            if (arrayOfEcAssertions != null && arrayOfEcAssertions.length > 0) {
                me.unfilteredAssertionList = arrayOfEcAssertions;
            }
            me.fetchAssertionEnvelopes();
        }, me.failureCallback, null);
    };
    prototype.processProfileAssertions = function(repo, profilePkPems, success, failure) {
        this.profilePkPems = profilePkPems;
        this.repo = repo;
        this.successCallback = success;
        this.failureCallback = failure;
        this.assertedFrameworkGraphs = new Array();
        this.profileAssertions = new Array();
        this.unfilteredAssertionList = new Array();
        this.addedAssertionIds = new Array();
        this.fetchProfileAssertions();
    };
}, {profilePkPems: {name: "Array", arguments: [null]}, repo: "EcRepository", successCallback: "Callback0", failureCallback: {name: "Callback1", arguments: [null]}, assertedFrameworkGraphs: {name: "Array", arguments: ["EcFrameworkGraph"]}, unfilteredAssertionList: {name: "Array", arguments: ["EcAssertion"]}, profileAssertions: {name: "Array", arguments: ["EcAssertion"]}, addedAssertionIds: {name: "Array", arguments: [null]}, assertionCompetencies: {name: "Array", arguments: [null]}}, {});
