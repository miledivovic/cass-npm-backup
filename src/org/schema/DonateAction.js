/**
 *  Schema.org/DonateAction
 *  The act of providing goods, services, or money without compensation, often for philanthropic reasons.
 * 
 *  @author schema.org
 *  @class DonateAction
 *  @module org.schema
 *  @extends TradeAction
 */
var DonateAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    TradeAction.call(this);
    this.context = "http://schema.org/";
    this.type = "DonateAction";
};
DonateAction = stjs.extend(DonateAction, TradeAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/recipient
     *  A sub property of participant. The participant who is at the receiving end of the action.
     * 
     *  @property recipient
     *  @type Organization
     */
    recipient = null;
}, {recipient: "Organization", priceSpecification: "PriceSpecification", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
