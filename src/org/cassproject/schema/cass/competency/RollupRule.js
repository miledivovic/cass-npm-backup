/**
 *  A segment of script that defines in a domain specific language how competence is transferred from one competency to another.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class RollupRule
 *  @module org.cassproject
 *  @extends CreativeWork
 */
var RollupRule = function() {
    CreativeWork.call(this);
    this.setContextAndType(Cass.context, RollupRule.myType);
};
RollupRule = stjs.extend(RollupRule, CreativeWork, [], function(constructor, prototype) {
    constructor.TYPE_0_2 = "http://schema.eduworks.com/cass/0.2/rollupRule";
    constructor.TYPE_0_3 = "http://schema.cassproject.org/0.2/RollupRule";
    constructor.TYPE_0_4 = "http://schema.cassproject.org/0.3/RollupRule";
    constructor.TYPE_0_5 = "https://schema.cassproject.org/0.3/RollupRule";
    constructor.TYPE_0_6 = "https://schema.cassproject.org/0.4/RollupRule";
    constructor.myType = RollupRule.TYPE_0_6;
    /**
     *  The rollup rule encoded as source code that is understandable to the assertion processor.
     * 
     *  @property rule
     *  @type string
     */
    prototype.rule = null;
    /**
     *  Specifies the URL of the competency that the rollup rule pertains to.
     * 
     *  @property competency
     *  @type string
     */
    prototype.competency = null;
    prototype.upgrade = function() {
        EcRemoteLinkedData.prototype.upgrade.call(this);
        if (RollupRule.TYPE_0_2.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_3, RollupRule.TYPE_0_3);
        }
        if (RollupRule.TYPE_0_3.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_4, RollupRule.TYPE_0_4);
        }
        if (RollupRule.TYPE_0_4.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_5, RollupRule.TYPE_0_5);
        }
        if (RollupRule.TYPE_0_5.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_6, RollupRule.TYPE_0_6);
        }
    };
    prototype.getTypes = function() {
        var a = new Array();
        a.push(RollupRule.TYPE_0_6);
        a.push(RollupRule.TYPE_0_5);
        a.push(RollupRule.TYPE_0_4);
        a.push(RollupRule.TYPE_0_3);
        a.push(RollupRule.TYPE_0_2);
        return a;
    };
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
