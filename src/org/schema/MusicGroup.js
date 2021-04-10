/**
 *  Schema.org/MusicGroup
 *  A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.
 * 
 *  @author schema.org
 *  @class MusicGroup
 *  @module org.schema
 *  @extends PerformingGroup
 */
var MusicGroup = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    PerformingGroup.call(this);
    this.context = "http://schema.org/";
    this.type = "MusicGroup";
};
MusicGroup = stjs.extend(MusicGroup, PerformingGroup, [], function(constructor, prototype) {
    /**
     *  Schema.org/albums
     *  A collection of music albums.
     * 
     *  @property albums
     *  @type MusicAlbum
     */
    albums = null;
    /**
     *  Schema.org/track
     *  A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.
     * 
     *  @property track
     *  @type MusicRecording
     */
    track = null;
    /**
     *  Schema.org/genre
     *  Genre of the creative work, broadcast channel or group.
     * 
     *  @property genre
     *  @type URL
     */
    genre = null;
    /**
     *  Schema.org/tracks
     *  A music recording (track)&#x2014;usually a single song.
     * 
     *  @property tracks
     *  @type MusicRecording
     */
    tracks = null;
    /**
     *  Schema.org/musicGroupMember
     *  A member of a music group&#x2014;for example, John, Paul, George, or Ringo.
     * 
     *  @property musicGroupMember
     *  @type Person
     */
    musicGroupMember = null;
    /**
     *  Schema.org/album
     *  A music album.
     * 
     *  @property album
     *  @type MusicAlbum
     */
    album = null;
}, {albums: "MusicAlbum", track: "MusicRecording", tracks: "MusicRecording", musicGroupMember: "Person", album: "MusicAlbum", serviceArea: "GeoShape", address: "PostalAddress", funder: "Person", memberOf: "Organization", subOrganization: "Organization", hasOfferCatalog: "OfferCatalog", reviews: "Review", members: "Organization", aggregateRating: "AggregateRating", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", member: "Organization", founders: "Person", alumni: "Person", events: "SchemaEvent", logo: "ImageObject", employees: "Person", department: "Organization", contactPoint: "ContactPoint", parentOrganization: "Organization", employee: "Person", numberOfEmployees: "QuantitativeValue", hasPOS: "Place", review: "Review", foundingLocation: "Place", owns: "OwnershipInfo", event: "SchemaEvent", founder: "Person", sponsor: "Organization", location: "PostalAddress", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
