/**
 *  Schema.org/Duration
 *  Quantity: Duration (use [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601)).
 * 
 *  @author schema.org
 *  @class Duration
 *  @module org.schema
 *  @extends Quantity
 */
var Duration = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Quantity.call(this);
    this.context = "http://schema.org/";
    this.type = "Duration";
};
Duration = stjs.extend(Duration, Quantity, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
