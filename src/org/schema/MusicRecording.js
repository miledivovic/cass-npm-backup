/**
 *  Schema.org/MusicRecording
 *  A music recording (track), usually a single song.
 * 
 *  @author schema.org
 *  @class MusicRecording
 *  @module org.schema
 *  @extends CreativeWork
 */
var MusicRecording = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "MusicRecording";
};
MusicRecording = stjs.extend(MusicRecording, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/recordingOf
     *  The composition this track is a recording of.
     * 
     *  @property recordingOf
     *  @type MusicComposition
     */
    prototype.recordingOf = null;
    /**
     *  Schema.org/isrcCode
     *  The International Standard Recording Code for the recording.
     * 
     *  @property isrcCode
     *  @type Text
     */
    prototype.isrcCode = null;
    /**
     *  Schema.org/inAlbum
     *  The album to which this recording belongs.
     * 
     *  @property inAlbum
     *  @type MusicAlbum
     */
    prototype.inAlbum = null;
    /**
     *  Schema.org/inPlaylist
     *  The playlist to which this recording belongs.
     * 
     *  @property inPlaylist
     *  @type MusicPlaylist
     */
    prototype.inPlaylist = null;
    /**
     *  Schema.org/byArtist
     *  The artist that performed this album or recording.
     * 
     *  @property byArtist
     *  @type MusicGroup
     */
    prototype.byArtist = null;
    /**
     *  Schema.org/duration
     *  The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
     * 
     *  @property duration
     *  @type Duration
     */
    prototype.duration = null;
}, {recordingOf: "MusicComposition", inAlbum: "MusicAlbum", inPlaylist: "MusicPlaylist", byArtist: "MusicGroup", duration: "Duration", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
