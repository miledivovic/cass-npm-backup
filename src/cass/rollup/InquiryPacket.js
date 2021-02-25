/**
 *  Data structure used to hold data relevant to a request to determine the competence of an individual.
 *  (hereafter, "Inquiry")
 * 
 *  @author fritz.ray@eduworks.com
 *  @author tom.buskirk@eduworks.com
 *  @class InquiryPacket
 *  @module org.cassproject
 */
var InquiryPacket = /**
 *  Create an InquiryPacket.
 * 
 *  @param {EcPk[]}                  subject Public keys of the individual to retreive assertions about.
 *  @param {EcCompetency}            competency Competency that the inquiry is made about.
 *  @param {EcLevel}                 level Level of the competency.
 *  @param {EcFramework}             context Framework to provide boundaries for the inquiry within.
 *  @param {function(InquiryPacket)} success Method to call when a result has been reached.
 *  @param {function(string)}        failure Method to call if the inquiry fails.
 *  @param {string}                  rule For rollup rules, this is a search used to populate this inquiry packet.
 *  @param {IPType}                  type The type of this inquiry packet. May be competency, rollup rule, or relation.
 *  @constructor
 */
function(subject, competency, level, context, success, failure, rule, type) {
    this.positive = new Array();
    this.negative = new Array();
    this.equivalentPackets = new Array();
    this.subPackets = new Array();
    this.dateCreated = new Date().getTime();
    this.subject = subject;
    this.competency = new Array();
    if (competency != null) 
        this.competency.push(competency);
    this.level = new Array();
    if (level != null) 
        this.level.push(level);
    this.context = context;
    this.success = success;
    this.failure = failure;
    this.rule = rule;
    this.type = type;
    this.result = null;
    this.log = "";
};
InquiryPacket = stjs.extend(InquiryPacket, null, [], function(constructor, prototype) {
    prototype.root = false;
    /**
     *  One or more identifiers that identify an individual.
     * 
     *  @property subject
     *  @type EcPk[]
     */
    prototype.subject = null;
    /**
     *  Competency that this packet is inquiring about.
     *  May be multiple competencies that are either collapsed due to an inference loop, or are equivalent to one another.
     * 
     *  @property competency
     *  @type EcCompetency[]
     */
    prototype.competency = null;
    /**
     *  Framework that this inquiry is scoped to.
     * 
     *  @property context
     *  @type EcFramework
     */
    prototype.context = null;
    /**
     *  Callback when this and all child inquiries have successfully reached a conclusion.
     * 
     *  @property success
     *  @type function(InquiryPacket)
     */
    prototype.success = null;
    /**
     *  Callback if this inquiry requires additional information to proceed.
     * 
     *  @property ask
     *  @type string function(string)
     */
    prototype.ask = null;
    /**
     *  Callback if this inquiry fails.
     * 
     *  @property failure
     *  @type function(string)
     */
    prototype.failure = null;
    /**
     *  Level that the competency is being measured at.
     *  May have multiple levels referring to multiple competencies due to cycles or equivalence.
     * 
     *  @property level
     *  @type EcLevel[]
     */
    prototype.level = null;
    /**
     *  Packets that are equivalent to this packet. May be used when equivalence is best represented with additional packets.
     * 
     *  @property equivalentPackets
     *  @type InquiryPacket[]
     */
    prototype.equivalentPackets = null;
    /**
     *  Packets that assist in determining the state of this packet.
     * 
     *  @property subPackets
     *  @type InquiryPacket[]
     */
    prototype.subPackets = null;
    /**
     *  Datetime representing when this packet was created.
     * 
     *  @property dateCreated
     *  @internal
     *  @type number
     */
    prototype.dateCreated = 0.0;
    /**
     *  Mark true when assertions have been retrieved for this packet.
     * 
     *  @property hasCheckedAssertionsForCompetency
     *  @type boolean
     */
    prototype.hasCheckedAssertionsForCompetency = false;
    /**
     *  Mark true when rollup rules have been processed for this packet.
     * 
     *  @property hasCheckedRollupRulesForCompetency
     *  @type boolean
     */
    prototype.hasCheckedRollupRulesForCompetency = false;
    /**
     *  Mark true when relations have been processed for this packet.
     * 
     *  @property hasCheckedRelationshipsForCompetency
     *  @type boolean
     */
    prototype.hasCheckedRelationshipsForCompetency = false;
    /**
     *  Async counter to keep track of number of unresolved processes.
     * 
     *  @property numberOfQueriesRunning
     *  @type integer
     */
    prototype.numberOfQueriesRunning = 0;
    /**
     *  Local log for this inquiry packet.
     * 
     *  @property log
     *  @type string
     */
    prototype.log = null;
    /**
     *  Assertions (direct or indirect) that contribute to a positive result.
     * 
     *  @property positive
     *  @type EcAssertion[]
     */
    prototype.positive = null;
    /**
     *  Assertions (direct or indirect) that contribute to a negative result.
     * 
     *  @property negative
     *  @type EcAssertion[]
     */
    prototype.negative = null;
    /**
     *  Set to true if this packet has completed processing.
     * 
     *  @property finished
     *  @type boolean
     */
    prototype.finished = false;
    /**
     *  Set to true if this packet has finished stage one.
     * 
     *  @property stageOneFinished
     *  @type boolean
     */
    prototype.stageOneComplete = false;
    /**
     *  Type of inquiry packet. Inquiry packets can represent relational logic, rollup logic or competencies.
     * 
     *  @property type
     *  @type IPType
     */
    prototype.type = null;
    /**
     *  Rollup Rule search string. (if IPType == ROLLUPRULE)
     * 
     *  @property rule
     *  @type string
     */
    prototype.rule = null;
    /**
     *  Result as a ResultType. ResultType is an autogenerated Enum object, and result._name may match "TRUE", "FALSE", "UNKNOWN", "INDETERMINANT"
     * 
     *  @property result
     *  @type ResultType
     */
    prototype.result = null;
    prototype.getContext = function() {
        return this.context;
    };
    /**
     *  Returns true if any child packets have an indeterminate result.
     * 
     *  @return {boolean}
     *  @method anyIndeterminantChildPackets
     */
    prototype.anyIndeterminantChildPackets = function() {
        for (var i = 0; i < this.equivalentPackets.length; i++) {
            if (InquiryPacket.ResultType.INDETERMINANT.equals(this.equivalentPackets[i].result)) 
                return true;
        }
        for (var i = 0; i < this.subPackets.length; i++) {
            if (InquiryPacket.ResultType.INDETERMINANT.equals(this.subPackets[i].result)) 
                return true;
        }
        return false;
    };
    /**
     *  Returns true if all child packets have unknown results.
     * 
     *  @return {boolean}
     *  @method allChildPacketsUnknown
     */
    prototype.allChildPacketsUnknown = function() {
        for (var i = 0; i < this.equivalentPackets.length; i++) {
            if (!InquiryPacket.ResultType.UNKNOWN.equals(this.equivalentPackets[i].result)) 
                return false;
        }
        for (var i = 0; i < this.subPackets.length; i++) {
            if (!InquiryPacket.ResultType.UNKNOWN.equals(this.subPackets[i].result)) 
                return false;
        }
        return true;
    };
    /**
     *  Returns true if all child packets have unknown results.
     * 
     *  @return {boolean}
     *  @method allChildPacketsUnknown
     */
    prototype.allChildPacketsAreTrue = function() {
        for (var i = 0; i < this.equivalentPackets.length; i++) {
            if (!InquiryPacket.ResultType.TRUE.equals(this.equivalentPackets[i].result)) 
                return false;
        }
        for (var i = 0; i < this.subPackets.length; i++) {
            if (!InquiryPacket.ResultType.TRUE.equals(this.subPackets[i].result)) 
                return false;
        }
        return true;
    };
    /**
     *  Returns true if any child packets have false results.
     * 
     *  @return {boolean}
     *  @method anyChildPacketsAreFalse
     */
    prototype.anyChildPacketsAreFalse = function() {
        for (var i = 0; i < this.equivalentPackets.length; i++) {
            if (InquiryPacket.ResultType.FALSE.equals(this.equivalentPackets[i].result)) 
                return true;
        }
        for (var i = 0; i < this.subPackets.length; i++) {
            if (InquiryPacket.ResultType.FALSE.equals(this.subPackets[i].result)) 
                return true;
        }
        return false;
    };
    /**
     *  Returns true if any child packets have unknown results.
     * 
     *  @return {boolean}
     *  @method anyChildPacketsAreUnknown
     */
    prototype.anyChildPacketsAreUnknown = function() {
        for (var i = 0; i < this.equivalentPackets.length; i++) {
            if (InquiryPacket.ResultType.UNKNOWN.equals(this.equivalentPackets[i].result)) 
                return true;
        }
        for (var i = 0; i < this.subPackets.length; i++) {
            if (InquiryPacket.ResultType.UNKNOWN.equals(this.subPackets[i].result)) 
                return true;
        }
        return false;
    };
    /**
     *  Returns true if any child packets have true results.
     * 
     *  @return {boolean}
     *  @method anyChildPacketsAreTrue
     */
    prototype.anyChildPacketsAreTrue = function() {
        for (var i = 0; i < this.equivalentPackets.length; i++) {
            if (InquiryPacket.ResultType.TRUE.equals(this.equivalentPackets[i].result)) 
                return true;
        }
        for (var i = 0; i < this.subPackets.length; i++) {
            if (InquiryPacket.ResultType.TRUE.equals(this.subPackets[i].result)) 
                return true;
        }
        return false;
    };
    /**
     *  Returns true if all equivalent packets have unknown results.
     * 
     *  @return {boolean}
     *  @method allEquivalentPacketsUnknown
     */
    prototype.allEquivalentPacketsUnknown = function() {
        for (var i = 0; i < this.equivalentPackets.length; i++) {
            if (!InquiryPacket.ResultType.UNKNOWN.equals(this.equivalentPackets[i].result)) 
                return false;
        }
        return true;
    };
    /**
     *  Returns true if all equivalent packets have the true or unknown result.
     * 
     *  @return {boolean}
     *  @method allEquivalentPacketsTrueOrUnknown
     */
    prototype.allEquivalentPacketsTrueOrUnknown = function() {
        for (var i = 0; i < this.equivalentPackets.length; i++) {
            if (InquiryPacket.ResultType.FALSE.equals(this.equivalentPackets[i].result) || InquiryPacket.ResultType.INDETERMINANT.equals(this.equivalentPackets[i].result)) 
                return false;
        }
        return true;
    };
    /**
     *  Returns true if all sub packets have the true or unknown result.
     * 
     *  @return {boolean}
     *  @method allSubPacketsTrueOrUnknown
     */
    prototype.allSubPacketsTrueOrUnknown = function() {
        for (var i = 0; i < this.subPackets.length; i++) {
            if (InquiryPacket.ResultType.FALSE.equals(this.subPackets[i].result) || InquiryPacket.ResultType.INDETERMINANT.equals(this.subPackets[i].result)) 
                return false;
        }
        return true;
    };
    /**
     *  Returns true if all equivalent packets have the false or unknown result.
     * 
     *  @return {boolean}
     *  @method allEquivalentPacketsFalseOrUnknown
     */
    prototype.allEquivalentPacketsFalseOrUnknown = function() {
        for (var i = 0; i < this.equivalentPackets.length; i++) {
            if (InquiryPacket.ResultType.TRUE.equals(this.equivalentPackets[i].result) || InquiryPacket.ResultType.INDETERMINANT.equals(this.equivalentPackets[i].result)) 
                return false;
        }
        return true;
    };
    /**
     *  Returns true if all sub packets have the false or unknown result.
     * 
     *  @return
     */
    prototype.allSubPacketsFalseOrUnknown = function() {
        for (var i = 0; i < this.subPackets.length; i++) {
            if (InquiryPacket.ResultType.TRUE.equals(this.subPackets[i].result) || InquiryPacket.ResultType.INDETERMINANT.equals(this.subPackets[i].result)) 
                return false;
        }
        return true;
    };
    /**
     *  Returns true if the provided ID represents a competency in this packet.
     * 
     *  @param competencyId
     *  @return
     */
    prototype.hasId = function(competencyId) {
        for (var i = 0; i < this.competency.length; i++) 
            if (this.competency[i].isId(competencyId)) 
                return true;
        return false;
    };
    constructor.IPType = stjs.enumeration("COMPETENCY", "ROLLUPRULE", "RELATION_AND", "RELATION_OR", "RELATION_NARROWS", "RELATION_BROADENS", "RELATION_REQUIRES", "RELATION_ISREQUIREDBY");
    constructor.ResultType = stjs.enumeration("TRUE", "FALSE", "UNKNOWN", "INDETERMINANT");
}, {subject: {name: "Array", arguments: ["EcPk"]}, competency: {name: "Array", arguments: ["EcCompetency"]}, context: "EcFramework", success: {name: "Callback1", arguments: ["InquiryPacket"]}, ask: {name: "Function1", arguments: [null, null]}, failure: {name: "Callback1", arguments: [null]}, level: {name: "Array", arguments: ["EcLevel"]}, equivalentPackets: {name: "Array", arguments: ["InquiryPacket"]}, subPackets: {name: "Array", arguments: ["InquiryPacket"]}, positive: {name: "Array", arguments: ["EcAssertion"]}, negative: {name: "Array", arguments: ["EcAssertion"]}, type: {name: "Enum", arguments: ["InquiryPacket.IPType"]}, result: {name: "Enum", arguments: ["InquiryPacket.ResultType"]}}, {});
