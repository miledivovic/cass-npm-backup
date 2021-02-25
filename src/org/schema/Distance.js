/**
 *  Schema.org/Distance
 *  Properties that take Distances as values are of the form '&lt;Number&gt; &lt;Length unit of measure&gt;'. E.g., '7 ft'.
 * 
 *  @author schema.org
 *  @class Distance
 *  @module org.schema
 *  @extends Quantity
 */
var Distance = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Quantity.call(this);
    this.context = "http://schema.org/";
    this.type = "Distance";
};
Distance = stjs.extend(Distance, Quantity, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
