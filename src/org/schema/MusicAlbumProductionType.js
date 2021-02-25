/**
 *  Schema.org/MusicAlbumProductionType
 *  Classification of the album by it's type of content: soundtrack, live album, studio album, etc.
 * 
 *  @author schema.org
 *  @class MusicAlbumProductionType
 *  @module org.schema
 *  @extends Enumeration
 */
var MusicAlbumProductionType = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "MusicAlbumProductionType";
};
MusicAlbumProductionType = stjs.extend(MusicAlbumProductionType, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
