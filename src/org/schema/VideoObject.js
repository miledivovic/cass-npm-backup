/**
 *  Schema.org/VideoObject
 *  A video file.
 * 
 *  @author schema.org
 *  @class VideoObject
 *  @module org.schema
 *  @extends MediaObject
 */
var VideoObject = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    MediaObject.call(this);
    this.context = "http://schema.org/";
    this.type = "VideoObject";
};
VideoObject = stjs.extend(VideoObject, MediaObject, [], function(constructor, prototype) {
    /**
     *  Schema.org/actor
     *  An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property actor
     *  @type Person
     */
    actor = null;
    /**
     *  Schema.org/videoFrameSize
     *  The frame size of the video.
     * 
     *  @property videoFrameSize
     *  @type Text
     */
    videoFrameSize = null;
    /**
     *  Schema.org/musicBy
     *  The composer of the soundtrack.
     * 
     *  @property musicBy
     *  @type Person
     */
    musicBy = null;
    /**
     *  Schema.org/directors
     *  A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property directors
     *  @type Person
     */
    directors = null;
    /**
     *  Schema.org/director
     *  A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property director
     *  @type Person
     */
    director = null;
    /**
     *  Schema.org/transcript
     *  If this MediaObject is an AudioObject or VideoObject, the transcript of that object.
     * 
     *  @property transcript
     *  @type Text
     */
    transcript = null;
    /**
     *  Schema.org/videoQuality
     *  The quality of the video.
     * 
     *  @property videoQuality
     *  @type Text
     */
    videoQuality = null;
    /**
     *  Schema.org/thumbnail
     *  Thumbnail image for an image or video.
     * 
     *  @property thumbnail
     *  @type ImageObject
     */
    thumbnail = null;
    /**
     *  Schema.org/caption
     *  The caption for this object.
     * 
     *  @property caption
     *  @type Text
     */
    caption = null;
    /**
     *  Schema.org/actors
     *  An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property actors
     *  @type Person
     */
    actors = null;
}, {actor: "Person", musicBy: "Person", directors: "Person", director: "Person", thumbnail: "ImageObject", actors: "Person", height: "Distance", regionsAllowed: "Place", width: "Distance", associatedArticle: "NewsArticle", productionCompany: "Organization", duration: "Duration", encodesCreativeWork: "CreativeWork", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
