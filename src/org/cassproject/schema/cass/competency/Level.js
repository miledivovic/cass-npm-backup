/**
 *  When an individual's performance in a competency can be measured, a level specifies milestones that an individual can reach, creating fine-grained distinction between the proficient and the adept.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class Level
 *  @module org.cassproject
 *  @extends CreativeWork
 */
var Level = function() {
    CreativeWork.call(this);
    this.setContextAndType(Cass.context, Level.myType);
};
Level = stjs.extend(Level, CreativeWork, [], function(constructor, prototype) {
    static TYPE_0_1 = "http://schema.eduworks.com/cass/0.1/level";
    static TYPE_0_2 = "http://schema.eduworks.com/cass/0.2/level";
    static TYPE_0_3 = "http://schema.cassproject.org/0.2/Level";
    static TYPE_0_4 = "http://schema.cassproject.org/0.3/Level";
    static TYPE_0_5 = "https://schema.cassproject.org/0.3/Level";
    static TYPE_0_6 = "https://schema.cassproject.org/0.4/Level";
    static myType = Level.TYPE_0_6;
    /**
     *  Specifies the URL of the competency this level relates to.
     * 
     *  @property competency
     *  @type string(URL)
     */
    competency = null;
    /**
     *  The title that one who holds this performance level may assume.
     * 
     *  @property title
     *  @type string
     */
    title = null;
    /**
     *  The performance characteristics required by this level in text form.
     *  FR - Represented by description.
     * 
     *  @property performance
     *  @type string
     */
    performance = null;
    upgrade() {
        EcRemoteLinkedData.upgrade.call(this);
        if (Level.TYPE_0_1.equals(this.type)) {
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(Cass.context_0_2, Level.TYPE_0_2);
        }
        if (Level.TYPE_0_2.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_3, Level.TYPE_0_3);
        }
        if (Level.TYPE_0_3.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_4, Level.TYPE_0_4);
        }
        if (Level.TYPE_0_4.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_5, Level.TYPE_0_5);
        }
        if (Level.TYPE_0_5.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_6, Level.TYPE_0_6);
        }
    };
    getTypes() {
        var a = new Array();
        a.push(Level.TYPE_0_6);
        a.push(Level.TYPE_0_5);
        a.push(Level.TYPE_0_4);
        a.push(Level.TYPE_0_3);
        a.push(Level.TYPE_0_2);
        a.push(Level.TYPE_0_1);
        return a;
    };
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
