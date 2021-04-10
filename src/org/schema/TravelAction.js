/**
 *  Schema.org/TravelAction
 *  The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants.
 * 
 *  @author schema.org
 *  @class TravelAction
 *  @module org.schema
 *  @extends MoveAction
 */
var TravelAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    MoveAction.call(this);
    this.context = "http://schema.org/";
    this.type = "TravelAction";
};
TravelAction = stjs.extend(TravelAction, MoveAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/distance
     *  The distance travelled, e.g. exercising or travelling.
     * 
     *  @property distance
     *  @type Distance
     */
    distance = null;
}, {distance: "Distance", toLocation: "Place", fromLocation: "Place", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
