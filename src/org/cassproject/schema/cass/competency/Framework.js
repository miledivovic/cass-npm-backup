/**
 *  A Competency Framework or simply Framework is a collection of competencies and relations between competencies in the framework and potentially between competencies in the framework and competencies in other frameworks. In practice, a Framework represents competencies related to a specific job, task, organization, career, knowledge domain, etc.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class Framework
 *  @module org.cassproject
 *  @extends CreativeWork
 */
var Framework = function() {
    CreativeWork.call(this);
    this.setContextAndType(Cass.context, Framework.myType);
};
Framework = stjs.extend(Framework, CreativeWork, [], function(constructor, prototype) {
    constructor.TYPE_0_1 = "http://schema.eduworks.com/cass/0.1/framework";
    constructor.TYPE_0_2 = "http://schema.eduworks.com/cass/0.2/framework";
    constructor.TYPE_0_3 = "http://schema.cassproject.org/0.2/Framework";
    constructor.TYPE_0_4 = "http://schema.cassproject.org/0.3/Framework";
    constructor.TYPE_0_5 = "https://schema.cassproject.org/0.3/Framework";
    constructor.TYPE_0_6 = "https://schema.cassproject.org/0.4/Framework";
    constructor.myType = Framework.TYPE_0_6;
    /**
     *  URLs of competencies included in this framework.
     * 
     *  @property competency
     *  @type string[]
     */
    prototype.competency = null;
    /**
     *  URLs of relations included in this framework.
     * 
     *  @property relation
     *  @type string[]
     */
    prototype.relation = null;
    /**
     *  URLs of levels included in this framework.
     * 
     *  @property level
     *  @type string[]
     */
    prototype.level = null;
    /**
     *  URLs of RollupRules included in this framework.
     * 
     *  @property rollupRule
     *  @type string[]
     */
    prototype.rollupRule = null;
    /**
     *  URL of the directory this framework is in.
     * 
     *  @property rollupRule
     *  @type string[]
     */
    prototype.directory = null;
    prototype.upgrade = function() {
        EcRemoteLinkedData.prototype.upgrade.call(this);
        if (Framework.TYPE_0_1.equals(this.type)) {
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(Cass.context_0_2, Framework.TYPE_0_2);
        }
        if (Framework.TYPE_0_2.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_3, Framework.TYPE_0_3);
        }
        if (Framework.TYPE_0_3.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_4, Framework.TYPE_0_4);
        }
        if (Framework.TYPE_0_4.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_5, Framework.TYPE_0_5);
        }
        if (Framework.TYPE_0_5.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_6, Framework.TYPE_0_6);
        }
    };
    prototype.getTypes = function() {
        var a = new Array();
        a.push(Framework.TYPE_0_6);
        a.push(Framework.TYPE_0_5);
        a.push(Framework.TYPE_0_4);
        a.push(Framework.TYPE_0_3);
        a.push(Framework.TYPE_0_2);
        a.push(Framework.TYPE_0_1);
        return a;
    };
}, {competency: {name: "Array", arguments: [null]}, relation: {name: "Array", arguments: [null]}, level: {name: "Array", arguments: [null]}, rollupRule: {name: "Array", arguments: [null]}, about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
