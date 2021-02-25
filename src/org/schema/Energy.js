/**
 *  Schema.org/Energy
 *  Properties that take Energy as values are of the form '&lt;Number&gt; &lt;Energy unit of measure&gt;'.
 * 
 *  @author schema.org
 *  @class Energy
 *  @module org.schema
 *  @extends Quantity
 */
var Energy = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Quantity.call(this);
    this.context = "http://schema.org/";
    this.type = "Energy";
};
Energy = stjs.extend(Energy, Quantity, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
