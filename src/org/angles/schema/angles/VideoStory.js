/**
 *  Created by fray on 5/9/17.
 */
var VideoStory = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    VideoObject.call(this);
    this.context = "http://schema.eduworks.com/angles/0.1/";
    this.type = "VideoStory";
};
VideoStory = stjs.extend(VideoStory, VideoObject, [], function(constructor, prototype) {
    /**
     *  The starting time of this story WRT the start of the video. In ISO 8601 Duration format.
     */
    startTime = null;
}, {startTime: "Duration", actor: "Person", musicBy: "Person", directors: "Person", director: "Person", thumbnail: "ImageObject", actors: "Person", height: "Distance", regionsAllowed: "Place", width: "Distance", associatedArticle: "NewsArticle", productionCompany: "Organization", duration: "Duration", encodesCreativeWork: "CreativeWork", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
