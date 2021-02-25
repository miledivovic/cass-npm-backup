/**
 *  Schema.org/MapCategoryType
 *  An enumeration of several kinds of Map.
 * 
 *  @author schema.org
 *  @class MapCategoryType
 *  @module org.schema
 *  @extends Enumeration
 */
var MapCategoryType = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "MapCategoryType";
};
MapCategoryType = stjs.extend(MapCategoryType, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
