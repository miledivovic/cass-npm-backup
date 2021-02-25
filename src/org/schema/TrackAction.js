/**
 *  Schema.org/TrackAction
 *  An agent tracks an object for updates.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.\n* [[SubscribeAction]]: Unlike SubscribeAction, TrackAction refers to  the interest on the location of innanimate objects.
 * 
 *  @author schema.org
 *  @class TrackAction
 *  @module org.schema
 *  @extends FindAction
 */
var TrackAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    FindAction.call(this);
    this.context = "http://schema.org/";
    this.type = "TrackAction";
};
TrackAction = stjs.extend(TrackAction, FindAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/deliveryMethod
     *  A sub property of instrument. The method of delivery.
     * 
     *  @property deliveryMethod
     *  @type DeliveryMethod
     */
    prototype.deliveryMethod = null;
}, {deliveryMethod: "DeliveryMethod", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
