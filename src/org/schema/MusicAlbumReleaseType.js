/**
 *  Schema.org/MusicAlbumReleaseType
 *  The kind of release which this album is: single, EP or album.
 * 
 *  @author schema.org
 *  @class MusicAlbumReleaseType
 *  @module org.schema
 *  @extends Enumeration
 */
var MusicAlbumReleaseType = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "MusicAlbumReleaseType";
};
MusicAlbumReleaseType = stjs.extend(MusicAlbumReleaseType, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
