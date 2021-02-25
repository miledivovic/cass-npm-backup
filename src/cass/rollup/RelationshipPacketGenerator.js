/**
 *  Creates child packets for an InquiryPacket based on its context.
 * 
 *  @author fritz.ray@eduworks.com
 *  @author tom.buskirk@eduworks.com
 *  @class RelationshipPacketGenerator
 *  @module org.cassproject
 */
var RelationshipPacketGenerator = /**
 *  Constructor for the RelationshipPacketGenerator
 * 
 *  @param {InquiryPacket}      ip Inquiry Packet to generate and fill with relationship packets.
 *  @param {AssertionProcessor} ep Assertion processor to tell to resume when complete.
 *  @param {object}             processedAlignments An object to fill with keys to ensure that relations are not processed twice.
 *  @constructor
 */
function(ip, ep, processedAlignments) {
    this.ip = ip;
    this.ep = ep;
    this.processedAlignments = processedAlignments;
    this.narrowsPackets = new Array();
    this.broadensPackets = new Array();
    this.requiredPackets = new Array();
    this.isRequiredByPackets = new Array();
};
RelationshipPacketGenerator = stjs.extend(RelationshipPacketGenerator, null, [], function(constructor, prototype) {
    /**
     *  Method to call when any operation fails.
     * 
     *  @property failure
     *  @type function(string)
     */
    prototype.failure = null;
    /**
     *  Method to call when the operation succeeds.
     * 
     *  @property success
     *  @type function()
     */
    prototype.success = null;
    /**
     *  Method to call when the generator has log statements to emit.
     * 
     *  @property logFunction
     *  @type function(any)
     */
    prototype.logFunction = null;
    /**
     *  List of packets representing the narrows relation.
     * 
     *  @property narrowsPackets
     *  @type InquiryPacket[]
     */
    prototype.narrowsPackets = null;
    /**
     *  List of packets representing the broadens relation.
     * 
     *  @property broadensPackets
     *  @type InquiryPacket[]
     */
    prototype.broadensPackets = null;
    /**
     *  List of packets representing the required relation.
     * 
     *  @property requiredPackets
     *  @type InquiryPacket[]
     */
    prototype.requiredPackets = null;
    /**
     *  List of packets representing the isRequiredBy relation.
     * 
     *  @property isRequiredByPackets
     *  @type InquiryPacket[]
     */
    prototype.isRequiredByPackets = null;
    prototype.relationLookup = null;
    /**
     *  Async counter to keep track of number of outstanding requests.
     * 
     *  @property numberOfRelationsToProcess
     *  @type integer
     */
    prototype.numberOfRelationsToProcess = 0;
    /**
     *  Number of relations that have been processed.
     * 
     *  @property numberOfRelationsProcessed
     *  @type integer
     */
    prototype.numberOfRelationsProcessed = 0;
    /**
     *  Alignments to ignore, as they have already been processed.
     * 
     *  @property processedAlignments;
     *  @type Object (Map<String,String>)
     */
    prototype.processedAlignments = null;
    /**
     *  Assertion Processor that invoked this generator.
     * 
     *  @property ep
     *  @type AssertionProcessor
     */
    prototype.ep = null;
    /**
     *  Inquiry Packet that this generator is creating relationships for.
     * 
     *  @property ip
     *  @type InquiryPacket
     */
    prototype.ip = null;
    prototype.log = function(string) {
        if (this.logFunction != null) 
            this.logFunction("" + new Date().getTime() % 100000 + ": " + string);
    };
    prototype.processEventFailure = function(message, ip) {
        ip.numberOfQueriesRunning--;
        this.failure(message);
    };
    prototype.pushRequiredPacketsToIp = function() {
        if (this.requiredPackets.length > 0) {
            var meEp = this.ep;
            var meIp = this.ip;
            var rootRequiredPacket = new InquiryPacket(this.ip.subject, null, null, this.ip.context, function(p1) {
                if (meEp != null) 
                    meEp.continueProcessingFirstPass(meIp);
            }, this.ip.failure, null, InquiryPacket.IPType.RELATION_REQUIRES);
            rootRequiredPacket.subPackets = this.requiredPackets;
            this.ip.subPackets.push(rootRequiredPacket);
        }
    };
    prototype.pushIsRequiredByPacketsToIp = function() {
        if (this.isRequiredByPackets.length > 0) {
            var meEp = this.ep;
            var meIp = this.ip;
            var rootRequiredPacket = new InquiryPacket(this.ip.subject, null, null, this.ip.context, function(p1) {
                if (meEp != null) 
                    meEp.continueProcessingFirstPass(meIp);
            }, this.ip.failure, null, InquiryPacket.IPType.RELATION_ISREQUIREDBY);
            rootRequiredPacket.subPackets = this.isRequiredByPackets;
            this.ip.subPackets.push(rootRequiredPacket);
        }
    };
    prototype.pushNarrowsPacketsToIp = function() {
        if (this.narrowsPackets.length > 0) {
            var meEp = this.ep;
            var meIp = this.ip;
            var rootNarrowsPacket = new InquiryPacket(this.ip.subject, null, null, this.ip.context, function(p1) {
                if (meEp != null) 
                    meEp.continueProcessingFirstPass(meIp);
            }, this.ip.failure, null, InquiryPacket.IPType.RELATION_NARROWS);
            rootNarrowsPacket.subPackets = this.narrowsPackets;
            this.ip.subPackets.push(rootNarrowsPacket);
        }
    };
    prototype.pushBroadensPacketsToIp = function() {
        if (this.broadensPackets.length > 0) {
            var meEp = this.ep;
            var meIp = this.ip;
            var rootBroadensPacket = new InquiryPacket(this.ip.subject, null, null, this.ip.context, function(p1) {
                if (meEp != null) 
                    meEp.continueProcessingFirstPass(meIp);
            }, this.ip.failure, null, InquiryPacket.IPType.RELATION_BROADENS);
            rootBroadensPacket.subPackets = this.broadensPackets;
            this.ip.subPackets.push(rootBroadensPacket);
        }
    };
    prototype.finishRelationProcessing = function() {
        this.pushRequiredPacketsToIp();
        this.pushIsRequiredByPacketsToIp();
        this.pushNarrowsPacketsToIp();
        this.pushBroadensPacketsToIp();
        this.success();
    };
    prototype.processGetRelatedCompetencySuccess = function(relatedCompetency, alignment) {
        this.numberOfRelationsProcessed++;
        var meEp = this.ep;
        var meIp = this.ip;
        if (this.processedAlignments[alignment.shortId()] != null) {
            this.ip.numberOfQueriesRunning--;
            this.checkForFinish();
            return;
        }
        this.processedAlignments[alignment.shortId()] = "done";
        this.log("Adding new " + alignment.relationType + " relationship packet");
        if (EcAlignment.IS_EQUIVALENT_TO.equals(alignment.relationType)) {
            var ip2 = null;
            this.ip.equivalentPackets.push(ip2 = new InquiryPacket(this.ip.subject, relatedCompetency, null, this.ip.context, function(p1) {
                if (meEp != null) 
                    meEp.continueProcessingFirstPass(meIp);
            }, this.ip.failure, null, InquiryPacket.IPType.COMPETENCY));
        } else if (EcAlignment.REQUIRES.equals(alignment.relationType)) {
            if (this.ip.hasId(alignment.source)) 
                this.requiredPackets.push(new InquiryPacket(this.ip.subject, relatedCompetency, null, this.ip.context, function(p1) {
                    if (meEp != null) 
                        meEp.continueProcessingFirstPass(meIp);
                }, this.ip.failure, null, InquiryPacket.IPType.COMPETENCY));
             else 
                this.isRequiredByPackets.push(new InquiryPacket(this.ip.subject, relatedCompetency, null, this.ip.context, function(p1) {
                    if (meEp != null) 
                        meEp.continueProcessingFirstPass(meIp);
                }, this.ip.failure, null, InquiryPacket.IPType.COMPETENCY));
        } else if (EcAlignment.NARROWS.equals(alignment.relationType)) {
            if (this.ip.hasId(alignment.source)) 
                this.narrowsPackets.push(new InquiryPacket(this.ip.subject, relatedCompetency, null, this.ip.context, function(p1) {
                    if (meEp != null) 
                        meEp.continueProcessingFirstPass(meIp);
                }, this.ip.failure, null, InquiryPacket.IPType.COMPETENCY));
             else 
                this.broadensPackets.push(new InquiryPacket(this.ip.subject, relatedCompetency, null, this.ip.context, function(p1) {
                    if (meEp != null) 
                        meEp.continueProcessingFirstPass(meIp);
                }, this.ip.failure, null, InquiryPacket.IPType.COMPETENCY));
        }
        this.ip.numberOfQueriesRunning--;
        this.checkForFinish();
    };
    prototype.checkForFinish = function() {
        if (this.numberOfRelationsProcessed >= this.numberOfRelationsToProcess) 
            this.finishRelationProcessing();
    };
    prototype.processFindCompetencyRelationshipSuccess = function(alignment, ip) {
        ip.numberOfQueriesRunning--;
        var relatedCompetencyId = null;
        if (ip.hasId(alignment.source) && ip.hasId(alignment.target)) {
            this.numberOfRelationsProcessed++;
            this.checkForFinish();
            return;
        } else if (ip.hasId(alignment.source)) 
            relatedCompetencyId = alignment.target;
         else if (ip.hasId(alignment.target)) 
            relatedCompetencyId = alignment.source;
         else {
            this.numberOfRelationsProcessed++;
            this.checkForFinish();
            return;
        }
        this.log("Relationship found (" + alignment.relationType + ") source: " + alignment.source + " target: " + alignment.target);
        ip.numberOfQueriesRunning++;
        var rpg = this;
        if (!ip.context.isId(alignment.source) && !ip.context.isId(alignment.target)) {
            EcCompetency.get(relatedCompetencyId, function(p1) {
                rpg.processGetRelatedCompetencySuccess(p1, alignment);
            }, function(p1) {
                rpg.processEventFailure(p1, ip);
            });
        } else {
            this.numberOfRelationsProcessed++;
            ip.numberOfQueriesRunning--;
            this.checkForFinish();
        }
    };
    /**
     *  Method to invoke to begin relation processing.
     * 
     *  @method go
     */
    prototype.go = function() {
        var rpg = this;
        if (this.ip.getContext().relation == null) 
            this.success();
         else {
            this.numberOfRelationsToProcess = 0;
            for (var i = 0; i < this.ip.competency.length; i++) {
                var relationsRelatedToThisCompetency = (this.relationLookup)[this.ip.competency[i].shortId()];
                if (relationsRelatedToThisCompetency == null) 
                    relationsRelatedToThisCompetency = new Array();
                this.numberOfRelationsToProcess += relationsRelatedToThisCompetency.length;
                this.numberOfRelationsProcessed = 0;
                for (var j = 0; j < relationsRelatedToThisCompetency.length; j++) {
                    this.ip.numberOfQueriesRunning++;
                    rpg.processFindCompetencyRelationshipSuccess(relationsRelatedToThisCompetency[j], rpg.ip);
                }
                if (relationsRelatedToThisCompetency.length == 0) {
                    this.checkForFinish();
                }
            }
        }
    };
}, {failure: {name: "Callback1", arguments: [null]}, success: "Callback0", logFunction: {name: "Callback1", arguments: ["Object"]}, narrowsPackets: {name: "Array", arguments: ["InquiryPacket"]}, broadensPackets: {name: "Array", arguments: ["InquiryPacket"]}, requiredPackets: {name: "Array", arguments: ["InquiryPacket"]}, isRequiredByPackets: {name: "Array", arguments: ["InquiryPacket"]}, relationLookup: "Object", processedAlignments: {name: "Map", arguments: [null, null]}, ep: "AssertionProcessor", ip: "InquiryPacket"}, {});
