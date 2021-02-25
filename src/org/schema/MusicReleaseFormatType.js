/**
 *  Schema.org/MusicReleaseFormatType
 *  Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
 * 
 *  @author schema.org
 *  @class MusicReleaseFormatType
 *  @module org.schema
 *  @extends Enumeration
 */
var MusicReleaseFormatType = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "MusicReleaseFormatType";
};
MusicReleaseFormatType = stjs.extend(MusicReleaseFormatType, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
