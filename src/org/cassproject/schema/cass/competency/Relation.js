/**
 *  A relation between two objects.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class Relation
 *  @module org.cassproject
 *  @extends CreativeWork
 */
var Relation = function() {
    CreativeWork.call(this);
    this.setContextAndType(Cass.context, Relation.myType);
};
Relation = stjs.extend(Relation, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Relation type when one object enables the capability to obtain another.
     *  Enabling relations do not imply a requirement, but makes the acquisition of the source much easier.
     * 
     *  @property IS_ENABLED_BY
     *  @static
     *  @type string
     */
    constructor.IS_ENABLED_BY = "isEnabledBy";
    /**
     *  Relation type when one object requires another.
     *  Requiring relations are strict.
     * 
     *  @property REQUIRES
     *  @static
     *  @type string
     */
    constructor.REQUIRES = "requires";
    /**
     *  Relation type when one object desires another.
     *  Desire relations improve the range of applicability or improve performance of the source.
     * 
     *  @property DESIRES
     *  @static
     *  @type string
     */
    constructor.DESIRES = "desires";
    /**
     *  Relation type when one object is a subset of another.
     *  Narrows relations are strict, and represent a super/sub relation.
     * 
     *  @property NARROWS
     *  @static
     *  @type string
     */
    constructor.NARROWS = "narrows";
    /**
     *  Relation type when one object is related to another.
     *  Related relations provide linkages that do not necessarily carry information.
     *  Related relations are bidirectional.
     * 
     *  @property IS_RELATED_TO
     *  @static
     *  @type string
     */
    constructor.IS_RELATED_TO = "isRelatedTo";
    /**
     *  Relation type when one object is equivalent to another.
     *  Equivalent relations define two objects that are effectively equivalent.
     *  Equivalent relations are bidirectional.
     * 
     *  @property IS_EQUIVALENT_TO
     *  @static
     *  @type string
     */
    constructor.IS_EQUIVALENT_TO = "isEquivalentTo";
    constructor.TYPE_0_1 = "http://schema.eduworks.com/cass/0.1/relation";
    constructor.TYPE_0_2 = "http://schema.eduworks.com/cass/0.2/relation";
    constructor.TYPE_0_3 = "http://schema.cassproject.org/0.2/Relation";
    constructor.TYPE_0_4 = "http://schema.cassproject.org/0.3/Relation";
    constructor.TYPE_0_5 = "https://schema.cassproject.org/0.3/Relation";
    constructor.TYPE_0_6 = "https://schema.cassproject.org/0.4/Relation";
    constructor.myType = Relation.TYPE_0_6;
    /**
     *  URL of the object at the beginning of the relation.
     *  A <relation> B, this is A.
     * 
     *  @property source
     *  @type string(url)
     */
    prototype.source = null;
    /**
     *  URL of the object at the end of the relation.
     *  A <relation> B, this is B.
     * 
     *  @property target
     *  @type string(url)
     */
    prototype.target = null;
    /**
     *  URL or controlled vocabulary of the relation.
     *  A <relation> B, this is <relation>.
     * 
     *  @property relationType
     *  @type string | URL
     */
    prototype.relationType = null;
    /**
     *  Date time in ISO 8601 format at which the relation may be observed.
     * 
     *  @property validFrom
     *  @type string
     */
    prototype.validFrom = null;
    /**
     *  Date time in ISO 8601 format at which the relation may no longer be observed.
     * 
     *  @property validThrough
     *  @type string
     */
    prototype.validThrough = null;
    prototype.upgrade = function() {
        EcRemoteLinkedData.prototype.upgrade.call(this);
        if ("isEquivalenTo" == this.relationType) 
            this.relationType = Relation.IS_EQUIVALENT_TO;
        if (Relation.TYPE_0_1 == this.type) {
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(Cass.context_0_2, Relation.TYPE_0_2);
        }
        if (Relation.TYPE_0_2 == this.getFullType()) {
            this.setContextAndType(Cass.context_0_3, Relation.TYPE_0_3);
        }
        if (Relation.TYPE_0_3 == this.getFullType()) {
            this.setContextAndType(Cass.context_0_4, Relation.TYPE_0_4);
        }
        if (Relation.TYPE_0_4.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_5, Relation.TYPE_0_5);
        }
        if (Relation.TYPE_0_5.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_6, Relation.TYPE_0_6);
        }
    };
    prototype.getTypes = function() {
        var a = new Array();
        a.push(Relation.TYPE_0_6);
        a.push(Relation.TYPE_0_5);
        a.push(Relation.TYPE_0_4);
        a.push(Relation.TYPE_0_3);
        a.push(Relation.TYPE_0_2);
        a.push(Relation.TYPE_0_1);
        return a;
    };
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
