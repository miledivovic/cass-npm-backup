/**
 *  Schema.org/ConsumeAction
 *  The act of ingesting information/resources/food.
 * 
 *  @author schema.org
 *  @class ConsumeAction
 *  @module org.schema
 *  @extends Action
 */
var ConsumeAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Action.call(this);
    this.context = "http://schema.org/";
    this.type = "ConsumeAction";
};
ConsumeAction = stjs.extend(ConsumeAction, Action, [], function(constructor, prototype) {
    /**
     *  Schema.org/expectsAcceptanceOf
     *  An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.
     * 
     *  @property expectsAcceptanceOf
     *  @type Offer
     */
    expectsAcceptanceOf = null;
}, {expectsAcceptanceOf: "Offer", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
