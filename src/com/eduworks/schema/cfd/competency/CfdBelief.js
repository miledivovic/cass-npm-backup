/**
 *  Competency is Under construction.
 *  <p>
 *  Working model of competency with CFD Belief extension.
 * 
 *  @author debbie.brown@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  @class Belief
 *  @module com.eduworks
 *  @extends org.cassproject.schema.cass.competency.Competency
 */
var CfdBelief = function() {
    CfdCompetency.call(this);
};
CfdBelief = stjs.extend(CfdBelief, CfdCompetency, [], function(constructor, prototype) {
    /**
     *  Sub-type of Competency that this is (Will be replaced later)
     * 
     *  @property subtype
     *  @type string
     */
    prototype.subtype = "Belief";
}, {relDone: {name: "Map", arguments: [null, null]}, levelDone: {name: "Map", arguments: [null, null]}, template: "Object", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
