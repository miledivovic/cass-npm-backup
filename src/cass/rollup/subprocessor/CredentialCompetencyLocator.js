/**
 *  Attempts to find all 'required' competencies for a given 'Credential' type (Badge, Certificate, Degree, Credential)
 *  by traversing the associated required 'ConditionProfile' for 'targetLearningOpportunities' and 'targetAssessments'
 * 
 *  @author fritz.ray@eduworks.com
 *  @author tom.buskirk@eduworks.com
 *  @class CredentialCompetencyLocator
 *  @module org.cassproject
 */
var CredentialCompetencyLocator = function() {};
CredentialCompetencyLocator = stjs.extend(CredentialCompetencyLocator, null, [], function(constructor, prototype) {
    constructor.ASSESSMENT_PROFILE_TYPE_SUFFIX = "AssessmentProfile";
    constructor.LEARNING_OPPORTUNITY_PROFILE_TYPE_SUFFIX = "LearningOpportunityProfile";
    constructor.CONDITION_PROFILE_TYPE = "ConditionProfile";
    prototype.logBuffer = null;
    prototype.credentialLocator = null;
    prototype.stripId = true;
    prototype.repo = null;
    prototype.success = null;
    prototype.failure = null;
    prototype.inputValid = false;
    prototype.sourceCredential = null;
    prototype.competencyList = null;
    prototype.competencyMap = null;
    prototype.currentTargetList = null;
    prototype.numberOfTargetsToProcess = 0;
    prototype.numberOfTargetsProcessed = 0;
    prototype.nextTargetList = null;
    prototype.targetsProcessed = null;
    prototype.log = function(s) {
        this.logBuffer.push(s);
    };
    prototype.validateInput = function() {
        this.log("Validating input...");
        this.inputValid = false;
        if (this.failure == null) {
            this.log("Invalid failure callback");
        } else if (this.success == null) {
            this.log("Invalid success callback");
            this.failure("success callback required");
        } else if (this.credentialLocator == null || this.credentialLocator.trim() == "") {
            this.log("Invalid credentialLocator");
            this.failure("credentialLocator required");
        } else {
            this.inputValid = true;
        }
    };
    prototype.initLocator = function() {
        this.log("Initializing parameters...");
        this.competencyList = new Array();
        this.competencyMap = {};
        this.targetsProcessed = {};
    };
    prototype.logCreativeWorkArray = function(cwa) {
        for (var i = 0; i < cwa.length; i++) {
            this.log("[" + i + "]: " + cwa[i].name);
        }
    };
    prototype.logStringArray = function(sa) {
        for (var i = 0; i < sa.length; i++) {
            this.log("[" + i + "]: " + sa[i]);
        }
    };
    prototype.logCredentialAlignmentArray = function(caoa) {
        for (var i = 0; i < caoa.length; i++) {
            this.log("[" + i + "]-framework: " + caoa[i].framework);
            this.log("[" + i + "]-targetNode: " + caoa[i].targetNode);
        }
    };
    prototype.generateConditionProfile = function(o) {
        var cp = new ConditionProfile();
        cp.copyFrom(o);
        return cp;
    };
    prototype.getStringArray = function(o) {
        if (o == null) 
            new Array();
        var sa;
        if (EcArray.isArray(o)) 
            sa = o;
         else {
            sa = new Array();
            sa.push(o);
        }
        return sa;
    };
    prototype.getTargetCompetencyList = function(targetCompetencyObject) {
        if (targetCompetencyObject == null) 
            return new Array();
        var caoa = new Array();
        var cao;
        if (EcArray.isArray(targetCompetencyObject)) {
            var oa = targetCompetencyObject;
            for (var i = 0; i < oa.length; i++) {
                cao = new CredentialAlignmentObject();
                cao.copyFrom(oa[i]);
                caoa.push(cao);
            }
        } else {
            cao = new CredentialAlignmentObject();
            cao.copyFrom(targetCompetencyObject);
            caoa.push(cao);
        }
        return caoa;
    };
    prototype.registerTargetAsProcessed = function(id) {
        this.targetsProcessed[id] = id;
    };
    prototype.hasTargetBeenProcessed = function(id) {
        if (this.targetsProcessed[id] == null) 
            return false;
        return true;
    };
    prototype.buildCompetencyList = function() {
        for (var s in this.competencyMap) {
            this.competencyList.push(this.competencyMap[s]);
        }
    };
    prototype.checkForAllTargetsProcessed = function() {
        if (this.numberOfTargetsProcessed >= this.numberOfTargetsToProcess) {
            if (this.nextTargetList.length == 0) {
                this.log("All targets processed...prepping for success invoke...");
                this.buildCompetencyList();
                this.success(this.competencyList);
            } else {
                this.log("Preparing to process next target list...");
                this.currentTargetList = this.nextTargetList;
                this.processCurrentTargetList();
            }
        } else {
            this.log("Targets still processing...");
        }
    };
    prototype.addCompetenciesToMap = function(competencyList) {
        var cao;
        var me = this;
        for (var i = 0; i < competencyList.length; i++) {
            this.addCompetencyToMap(competencyList, i);
        }
    };
    prototype.addCompetencyToMap = function(competencyList, i) {
        var me = this;
        var cao;
        cao = competencyList[i];
        if (this.repo != null && cao.targetNode == null && cao.targetNodeName != null) {
            this.numberOfTargetsToProcess++;
            var finalCao = cao;
            EcCompetency.search(this.repo, "name:\"" + cao.targetNodeName + "\"", function(results) {
                var result = null;
                var found = false;
                for (var i = 0; i < results.length; i++) {
                    result = results[i];
                    if (result.getName() == finalCao.targetNodeName) {
                        me.getFrameworkForCompetencyToAddToMap(result, finalCao);
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    me.numberOfTargetsProcessed++;
                    me.checkForAllTargetsProcessed();
                }
            }, this.failure, new Object());
        } else 
            this.competencyMap[cao.framework + "---" + cao.targetNode] = cao;
    };
    prototype.getFrameworkForCompetencyToAddToMap = function(result, finalCao) {
        var me = this;
        EcFramework.search(this.repo, "competency:\"" + result.shortId() + "\"", function(frameworks) {
            if (frameworks.length == 0) {
                me.numberOfTargetsProcessed++;
                me.checkForAllTargetsProcessed();
                return;
            }
            finalCao.framework = frameworks[0].shortId();
            finalCao.targetNode = finalCao.targetUrl = result.id;
            me.competencyMap[result.id] = finalCao;
            me.numberOfTargetsProcessed++;
            me.checkForAllTargetsProcessed();
        }, this.failure, new Object());
    };
    prototype.addSubTargetsToNextTargetList = function(requiresObj) {
        if (requiresObj != null) {
            this.log("Looking for sub targets...");
            var subTargets = this.getTargetsFromRequirementsObject(requiresObj);
            if (subTargets.length > 0) {
                for (var i = 0; i < subTargets.length; i++) {
                    if (subTargets[i] != null && subTargets[i].trim().length > 0) {
                        this.log("Adding sub target: " + subTargets[i]);
                        this.nextTargetList.push(subTargets[i]);
                    }
                }
            } else 
                this.log("No sub targets found");
        } else 
            this.log("No requires object for target -> no sub targets exist");
    };
    prototype.processAssessmentProfile = function(ap) {
        this.log("Processing as Assessment Profile...");
        var tca = this.getTargetCompetencyList(ap.assesses);
        this.log("Target competency list(" + tca.length + "):");
        this.logCredentialAlignmentArray(tca);
        this.addCompetenciesToMap(tca);
        this.addSubTargetsToNextTargetList(ap.requires);
    };
    prototype.processLearningOpportunityProfile = function(lop) {
        this.log("Processing as Learning Opportunity Profile...");
        var tca = this.getTargetCompetencyList(lop.teaches);
        this.log("Target competency list(" + tca.length + "):");
        this.logCredentialAlignmentArray(tca);
        this.addCompetenciesToMap(tca);
        this.addSubTargetsToNextTargetList(lop.requires);
    };
    prototype.processTarget = function(erld) {
        var cw = new CreativeWork();
        cw.copyFrom(erld);
        this.log("Processing target: " + cw.shortId());
        this.log("Target type: " + cw.getFullType());
        if (cw.getFullType().endsWith(CredentialCompetencyLocator.ASSESSMENT_PROFILE_TYPE_SUFFIX)) {
            var ap = new AssessmentProfile();
            ap.copyFrom(erld);
            this.processAssessmentProfile(ap);
        } else if (cw.getFullType().endsWith(CredentialCompetencyLocator.LEARNING_OPPORTUNITY_PROFILE_TYPE_SUFFIX)) {
            var lop = new LearningOpportunityProfile();
            lop.copyFrom(erld);
            this.processLearningOpportunityProfile(lop);
        }
        this.registerTargetAsProcessed(cw.shortId());
        this.numberOfTargetsProcessed++;
        this.checkForAllTargetsProcessed();
    };
    prototype.processCurrentTargetList = function() {
        this.log("Processing current target list...");
        this.nextTargetList = new Array();
        this.numberOfTargetsToProcess = this.currentTargetList.length;
        this.numberOfTargetsProcessed = 0;
        var currentTargetId;
        var ccl = this;
        for (var i = 0; i < this.numberOfTargetsToProcess; i++) {
            currentTargetId = this.currentTargetList[i];
            if (this.hasTargetBeenProcessed(currentTargetId)) {
                this.numberOfTargetsProcessed++;
                this.checkForAllTargetsProcessed();
            } else {
                EcRepository.get(currentTargetId, function(p1) {
                    ccl.processTarget(p1);
                }, function(p1) {
                    ccl.log("Target lookup failed: " + p1);
                    ccl.numberOfTargetsProcessed++;
                    ccl.checkForAllTargetsProcessed();
                });
            }
        }
    };
    prototype.addStringsToMap = function(m, sa) {
        for (var i = 0; i < sa.length; i++) {
            if (sa[i] != null) {
                var s = sa[i];
                if (EcObject.isObject(s)) 
                    s = ((s)["@id"]);
                m[s.trim()] = s.trim();
            }
        }
    };
    prototype.stripIdString = function(s) {
        if (s.indexOf("/") > -1) {
            return s.substring(s.lastIndexOf("/") + 1);
        } else 
            return s;
    };
    prototype.getMapKeyList = function(m, doIdStrip) {
        var sa = new Array();
        for (var s in m) {
            if (doIdStrip) 
                sa.push(this.stripIdString(s));
             else 
                sa.push(s);
        }
        return sa;
    };
    prototype.getTargetListFromConditionProfiles = function(cpa) {
        var cp;
        var targetAssessmentList;
        var targetLearningOpportunityList;
        var targetMap = {};
        for (var i = 0; i < cpa.length; i++) {
            cp = cpa[i];
            targetAssessmentList = this.getStringArray(cp.targetAssessment);
            targetLearningOpportunityList = this.getStringArray(cp.targetLearningOpportunity);
            this.addStringsToMap(targetMap, targetAssessmentList);
            this.addStringsToMap(targetMap, targetLearningOpportunityList);
        }
        return this.getMapKeyList(targetMap, this.stripId);
    };
    prototype.getRequiredConditionProfilesList = function(requiresObj) {
        var cpa = new Array();
        var cw;
        if (!EcArray.isArray(requiresObj)) {
            cw = new CreativeWork();
            cw.copyFrom(requiresObj);
            if (CredentialCompetencyLocator.CONDITION_PROFILE_TYPE.equalsIgnoreCase(cw.getFullType())) 
                cpa.push(this.generateConditionProfile(requiresObj));
        } else {
            var oa = requiresObj;
            for (var i = 0; i < oa.length; i++) {
                cw = new CreativeWork();
                cw.copyFrom(oa[i]);
                if (CredentialCompetencyLocator.CONDITION_PROFILE_TYPE.equalsIgnoreCase(cw.getFullType())) 
                    cpa.push(this.generateConditionProfile(oa[i]));
            }
        }
        return cpa;
    };
    prototype.getTargetsFromRequirementsObject = function(requiresObject) {
        this.log("Processing requirements...");
        var conditionProfileList = this.getRequiredConditionProfilesList(requiresObject);
        this.log("Required Condition Profiles(" + conditionProfileList.length + "):");
        this.logCreativeWorkArray(conditionProfileList);
        return this.getTargetListFromConditionProfiles(conditionProfileList);
    };
    prototype.processSourceCredential = function() {
        this.log("Processing source credential...");
        this.currentTargetList = this.getTargetsFromRequirementsObject(this.sourceCredential.requires);
        this.log("Initial Target List(" + this.currentTargetList.length + "):");
        this.logStringArray(this.currentTargetList);
        if (this.currentTargetList.length == 0) {
            this.log("No aligned Learning Opportunity or Assessesment Profiles exist for the credential therefore no competencies can be mapped");
            this.success(this.competencyList);
        }
        this.registerTargetAsProcessed(this.sourceCredential.shortId());
        this.processCurrentTargetList();
    };
    prototype.fetchSourceCredentialAndGo = function() {
        this.log("Fetching source credential: " + this.credentialLocator);
        var ccl = this;
        EcRepository.get(this.credentialLocator, function(p1) {
            ccl.sourceCredential = new Credential();
            ccl.sourceCredential.copyFrom(p1);
            ccl.log("Source credential fetched: " + ccl.sourceCredential.name);
            ccl.processSourceCredential();
        }, function(p1) {
            ccl.log("Source credential fetch failed: " + p1);
            ccl.failure("Source credential fetch failed: " + p1);
        });
    };
    prototype.locateCompetencies = function() {
        this.logBuffer = new Array();
        this.validateInput();
        if (this.inputValid) {
            this.log("Input valid proceeding...");
            this.initLocator();
            this.fetchSourceCredentialAndGo();
        }
    };
}, {logBuffer: {name: "Array", arguments: [null]}, repo: "EcRepository", success: {name: "Callback1", arguments: [{name: "Array", arguments: ["CredentialAlignmentObject"]}]}, failure: {name: "Callback1", arguments: [null]}, sourceCredential: "Credential", competencyList: {name: "Array", arguments: ["CredentialAlignmentObject"]}, competencyMap: {name: "Map", arguments: [null, "CredentialAlignmentObject"]}, currentTargetList: {name: "Array", arguments: [null]}, nextTargetList: {name: "Array", arguments: [null]}, targetsProcessed: {name: "Map", arguments: [null, null]}}, {});
