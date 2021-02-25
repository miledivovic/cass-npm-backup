/**
 *  Schema.org/BuyAction
 *  The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction.
 * 
 *  @author schema.org
 *  @class BuyAction
 *  @module org.schema
 *  @extends TradeAction
 */
var BuyAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    TradeAction.call(this);
    this.context = "http://schema.org/";
    this.type = "BuyAction";
};
BuyAction = stjs.extend(BuyAction, TradeAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/vendor
     *  'vendor' is an earlier term for 'seller'.
     * 
     *  @property vendor
     *  @type Organization
     */
    prototype.vendor = null;
    /**
     *  Schema.org/seller
     *  An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
     * 
     *  @property seller
     *  @type Person
     */
    prototype.seller = null;
    /**
     *  Schema.org/warrantyPromise
     *  The warranty promise(s) included in the offer.
     * 
     *  @property warrantyPromise
     *  @type WarrantyPromise
     */
    prototype.warrantyPromise = null;
}, {vendor: "Organization", seller: "Person", warrantyPromise: "WarrantyPromise", priceSpecification: "PriceSpecification", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
