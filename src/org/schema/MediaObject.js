/**
 *  Schema.org/MediaObject
 *  A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).
 * 
 *  @author schema.org
 *  @class MediaObject
 *  @module org.schema
 *  @extends CreativeWork
 */
var MediaObject = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "MediaObject";
};
MediaObject = stjs.extend(MediaObject, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/uploadDate
     *  Date when this media object was uploaded to this site.
     * 
     *  @property uploadDate
     *  @type Date
     */
    prototype.uploadDate = null;
    /**
     *  Schema.org/playerType
     *  Player type required&#x2014;for example, Flash or Silverlight.
     * 
     *  @property playerType
     *  @type Text
     */
    prototype.playerType = null;
    /**
     *  Schema.org/height
     *  The height of the item.
     * 
     *  @property height
     *  @type Distance
     */
    prototype.height = null;
    /**
     *  Schema.org/bitrate
     *  The bitrate of the media object.
     * 
     *  @property bitrate
     *  @type Text
     */
    prototype.bitrate = null;
    /**
     *  Schema.org/requiresSubscription
     *  Indicates if use of the media require a subscription  (either paid or free). Allowed values are ```true``` or ```false``` (note that an earlier version had 'yes', 'no').
     * 
     *  @property requiresSubscription
     *  @type Boolean
     */
    prototype.requiresSubscription = null;
    /**
     *  Schema.org/regionsAllowed
     *  The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in [ISO 3166 format](http://en.wikipedia.org/wiki/ISO_3166).
     * 
     *  @property regionsAllowed
     *  @type Place
     */
    prototype.regionsAllowed = null;
    /**
     *  Schema.org/expires
     *  Date the content expires and is no longer useful or available. Useful for videos.
     * 
     *  @property expires
     *  @type Date
     */
    prototype.expires = null;
    /**
     *  Schema.org/contentSize
     *  File size in (mega/kilo) bytes.
     * 
     *  @property contentSize
     *  @type Text
     */
    prototype.contentSize = null;
    /**
     *  Schema.org/embedUrl
     *  A URL pointing to a player for a specific video. In general, this is the information in the ```src``` element of an ```embed``` tag and should not be the same as the content of the ```loc``` tag.
     * 
     *  @property embedUrl
     *  @type URL
     */
    prototype.embedUrl = null;
    /**
     *  Schema.org/width
     *  The width of the item.
     * 
     *  @property width
     *  @type Distance
     */
    prototype.width = null;
    /**
     *  Schema.org/contentUrl
     *  Actual bytes of the media object, for example the image file or video file.
     * 
     *  @property contentUrl
     *  @type URL
     */
    prototype.contentUrl = null;
    /**
     *  Schema.org/associatedArticle
     *  A NewsArticle associated with the Media Object.
     * 
     *  @property associatedArticle
     *  @type NewsArticle
     */
    prototype.associatedArticle = null;
    /**
     *  Schema.org/productionCompany
     *  The production company or studio responsible for the item e.g. series, video game, episode etc.
     * 
     *  @property productionCompany
     *  @type Organization
     */
    prototype.productionCompany = null;
    /**
     *  Schema.org/duration
     *  The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
     * 
     *  @property duration
     *  @type Duration
     */
    prototype.duration = null;
    /**
     *  Schema.org/encodesCreativeWork
     *  The CreativeWork encoded by this media object.
     * 
     *  @property encodesCreativeWork
     *  @type CreativeWork
     */
    prototype.encodesCreativeWork = null;
    /**
     *  Schema.org/encodingFormat
     *  mp3, mpeg4, etc.
     * 
     *  @property encodingFormat
     *  @type Text
     */
    prototype.encodingFormat = null;
}, {height: "Distance", regionsAllowed: "Place", width: "Distance", associatedArticle: "NewsArticle", productionCompany: "Organization", duration: "Duration", encodesCreativeWork: "CreativeWork", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
