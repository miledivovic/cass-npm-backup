/**
 *  Schema.org/QuoteAction
 *  An agent quotes/estimates/appraises an object/product/service with a price at a location/store.
 * 
 *  @author schema.org
 *  @class QuoteAction
 *  @module org.schema
 *  @extends TradeAction
 */
var QuoteAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    TradeAction.call(this);
    this.context = "http://schema.org/";
    this.type = "QuoteAction";
};
QuoteAction = stjs.extend(QuoteAction, TradeAction, [], null, {priceSpecification: "PriceSpecification", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
