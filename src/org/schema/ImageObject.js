/**
 *  Schema.org/ImageObject
 *  An image file.
 * 
 *  @author schema.org
 *  @class ImageObject
 *  @module org.schema
 *  @extends MediaObject
 */
var ImageObject = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    MediaObject.call(this);
    this.context = "http://schema.org/";
    this.type = "ImageObject";
};
ImageObject = stjs.extend(ImageObject, MediaObject, [], function(constructor, prototype) {
    /**
     *  Schema.org/exifData
     *  exif data for this object.
     * 
     *  @property exifData
     *  @type Text
     */
    exifData = null;
    /**
     *  Schema.org/representativeOfPage
     *  Indicates whether this image is representative of the content of the page.
     * 
     *  @property representativeOfPage
     *  @type Boolean
     */
    representativeOfPage = null;
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
}, {thumbnail: "ImageObject", height: "Distance", regionsAllowed: "Place", width: "Distance", associatedArticle: "NewsArticle", productionCompany: "Organization", duration: "Duration", encodesCreativeWork: "CreativeWork", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
