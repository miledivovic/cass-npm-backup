/**
 *  Schema.org/MusicPlaylist
 *  A collection of music tracks in playlist form.
 * 
 *  @author schema.org
 *  @class MusicPlaylist
 *  @module org.schema
 *  @extends CreativeWork
 */
var MusicPlaylist = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "MusicPlaylist";
};
MusicPlaylist = stjs.extend(MusicPlaylist, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/track
     *  A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.
     * 
     *  @property track
     *  @type MusicRecording
     */
    prototype.track = null;
    /**
     *  Schema.org/numTracks
     *  The number of tracks in this album or playlist.
     * 
     *  @property numTracks
     *  @type Integer
     */
    prototype.numTracks = null;
    /**
     *  Schema.org/tracks
     *  A music recording (track)&#x2014;usually a single song.
     * 
     *  @property tracks
     *  @type MusicRecording
     */
    prototype.tracks = null;
}, {track: "MusicRecording", tracks: "MusicRecording", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
