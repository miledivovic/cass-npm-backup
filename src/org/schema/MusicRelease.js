/**
 *  Schema.org/MusicRelease
 *  A MusicRelease is a specific release of a music album.
 * 
 *  @author schema.org
 *  @class MusicRelease
 *  @module org.schema
 *  @extends MusicPlaylist
 */
var MusicRelease = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    MusicPlaylist.call(this);
    this.context = "http://schema.org/";
    this.type = "MusicRelease";
};
MusicRelease = stjs.extend(MusicRelease, MusicPlaylist, [], function(constructor, prototype) {
    /**
     *  Schema.org/recordLabel
     *  The label that issued the release.
     * 
     *  @property recordLabel
     *  @type Organization
     */
    recordLabel = null;
    /**
     *  Schema.org/catalogNumber
     *  The catalog number for the release.
     * 
     *  @property catalogNumber
     *  @type Text
     */
    catalogNumber = null;
    /**
     *  Schema.org/creditedTo
     *  The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to "Stefani Germanotta Band", but by Lady Gaga.
     * 
     *  @property creditedTo
     *  @type Organization
     */
    creditedTo = null;
    /**
     *  Schema.org/releaseOf
     *  The album this is a release of.
     * 
     *  @property releaseOf
     *  @type MusicAlbum
     */
    releaseOf = null;
    /**
     *  Schema.org/duration
     *  The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
     * 
     *  @property duration
     *  @type Duration
     */
    duration = null;
    /**
     *  Schema.org/musicReleaseFormat
     *  Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
     * 
     *  @property musicReleaseFormat
     *  @type MusicReleaseFormatType
     */
    musicReleaseFormat = null;
}, {recordLabel: "Organization", creditedTo: "Organization", releaseOf: "MusicAlbum", duration: "Duration", musicReleaseFormat: "MusicReleaseFormatType", track: "MusicRecording", tracks: "MusicRecording", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
