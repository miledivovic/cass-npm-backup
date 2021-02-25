/**
 *  Schema.org/Mass
 *  Properties that take Mass as values are of the form '&lt;Number&gt; &lt;Mass unit of measure&gt;'. E.g., '7 kg'.
 * 
 *  @author schema.org
 *  @class Mass
 *  @module org.schema
 *  @extends Quantity
 */
var Mass = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Quantity.call(this);
    this.context = "http://schema.org/";
    this.type = "Mass";
};
Mass = stjs.extend(Mass, Quantity, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
