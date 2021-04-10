/**
 *  A Directory is a collection of frameworks and resources.
 * 
 *  @author kristin.wood@eduworks.com
 *  @class Directory
 *  @module org.cassproject
 *  @extends CreativeWork
 */
var Directory = function() {
    CreativeWork.call(this);
    this.setContextAndType(Cass.context, Directory.myType);
};
Directory = stjs.extend(Directory, CreativeWork, [], function(constructor, prototype) {
    static TYPE_0_6 = "https://schema.cassproject.org/0.4/Directory";
    static myType = Directory.TYPE_0_6;
    parentDirectory = null;
    upgrade() {
        EcRemoteLinkedData.upgrade.call(this);
    };
    getTypes() {
        var a = new Array();
        a.push(Directory.TYPE_0_6);
        return a;
    };
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
