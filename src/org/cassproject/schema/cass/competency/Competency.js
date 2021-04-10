/**
 *  Competencies include skills, knowledge, abilities, traits, and combinations thereof that are needed to perform a task or job. In CASS, competencies are identified and located using a globally unique ID. Competencies can be further described using titles, descriptions, levels, indicators (coming soon), roll-up rules, and relationships to other competencies.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class Competency
 *  @module org.cassproject
 *  @extends CreativeWork
 */
var Competency = function() {
    CreativeWork.call(this);
    this.setContextAndType(Cass.context, Competency.myType);
};
Competency = stjs.extend(Competency, CreativeWork, [], function(constructor, prototype) {
    static TYPE_0_1 = "http://schema.eduworks.com/cass/0.1/competency";
    static TYPE_0_2 = "http://schema.eduworks.com/cass/0.2/competency";
    static TYPE_0_3 = "http://schema.cassproject.org/0.2/Competency";
    static TYPE_0_4 = "http://schema.cassproject.org/0.3/Competency";
    static TYPE_0_5 = "https://schema.cassproject.org/0.3/Competency";
    static TYPE_0_6 = "https://schema.cassproject.org/0.4/Competency";
    static myType = Competency.TYPE_0_6;
    /**
     *  Scope in which the competency may be applied. e.g. Underwater.
     * 
     *  @property scope
     *  @type string
     */
    scope = null;
    upgrade() {
        EcRemoteLinkedData.upgrade.call(this);
        if (Competency.TYPE_0_1.equals(this.type)) {
            if (this.url != null && this.sameAs == null) {
                this.sameAs = this.url;
                this.url = null;
            }
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(Cass.context_0_2, Competency.TYPE_0_2);
        }
        if (Competency.TYPE_0_2.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_3, Competency.TYPE_0_3);
        }
        if (Competency.TYPE_0_3.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_4, Competency.TYPE_0_4);
        }
        if (Competency.TYPE_0_4.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_5, Competency.TYPE_0_5);
        }
        if (Competency.TYPE_0_5.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_6, Competency.TYPE_0_6);
        }
    };
    getTypes() {
        var a = new Array();
        a.push(Competency.TYPE_0_6);
        a.push(Competency.TYPE_0_5);
        a.push(Competency.TYPE_0_4);
        a.push(Competency.TYPE_0_3);
        a.push(Competency.TYPE_0_2);
        a.push(Competency.TYPE_0_1);
        return a;
    };
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
