/**
 *  Schema.org/MusicAlbum
 *  A collection of music tracks.
 * 
 *  @author schema.org
 *  @class MusicAlbum
 *  @module org.schema
 *  @extends MusicPlaylist
 */
var MusicAlbum = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    MusicPlaylist.call(this);
    this.context = "http://schema.org/";
    this.type = "MusicAlbum";
};
MusicAlbum = stjs.extend(MusicAlbum, MusicPlaylist, [], function(constructor, prototype) {
    /**
     *  Schema.org/albumProductionType
     *  Classification of the album by it's type of content: soundtrack, live album, studio album, etc.
     * 
     *  @property albumProductionType
     *  @type MusicAlbumProductionType
     */
    albumProductionType = null;
    /**
     *  Schema.org/albumReleaseType
     *  The kind of release which this album is: single, EP or album.
     * 
     *  @property albumReleaseType
     *  @type MusicAlbumReleaseType
     */
    albumReleaseType = null;
    /**
     *  Schema.org/byArtist
     *  The artist that performed this album or recording.
     * 
     *  @property byArtist
     *  @type MusicGroup
     */
    byArtist = null;
    /**
     *  Schema.org/albumRelease
     *  A release of this album.
     * 
     *  @property albumRelease
     *  @type MusicRelease
     */
    albumRelease = null;
}, {albumProductionType: "MusicAlbumProductionType", albumReleaseType: "MusicAlbumReleaseType", byArtist: "MusicGroup", albumRelease: "MusicRelease", track: "MusicRecording", tracks: "MusicRecording", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
