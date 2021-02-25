/**
 *  Schema.org/SellAction
 *  The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction.
 * 
 *  @author schema.org
 *  @class SellAction
 *  @module org.schema
 *  @extends TradeAction
 */
var SellAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    TradeAction.call(this);
    this.context = "http://schema.org/";
    this.type = "SellAction";
};
SellAction = stjs.extend(SellAction, TradeAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/buyer
     *  A sub property of participant. The participant/person/organization that bought the object.
     * 
     *  @property buyer
     *  @type Person
     */
    prototype.buyer = null;
    /**
     *  Schema.org/warrantyPromise
     *  The warranty promise(s) included in the offer.
     * 
     *  @property warrantyPromise
     *  @type WarrantyPromise
     */
    prototype.warrantyPromise = null;
}, {buyer: "Person", warrantyPromise: "WarrantyPromise", priceSpecification: "PriceSpecification", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
