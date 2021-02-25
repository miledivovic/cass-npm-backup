/**
 *  Schema.org/RentAction
 *  The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment.
 * 
 *  @author schema.org
 *  @class RentAction
 *  @module org.schema
 *  @extends TradeAction
 */
var RentAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    TradeAction.call(this);
    this.context = "http://schema.org/";
    this.type = "RentAction";
};
RentAction = stjs.extend(RentAction, TradeAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/landlord
     *  A sub property of participant. The owner of the real estate property.
     * 
     *  @property landlord
     *  @type Organization
     */
    prototype.landlord = null;
    /**
     *  Schema.org/realEstateAgent
     *  A sub property of participant. The real estate agent involved in the action.
     * 
     *  @property realEstateAgent
     *  @type RealEstateAgent
     */
    prototype.realEstateAgent = null;
}, {landlord: "Organization", realEstateAgent: "RealEstateAgent", priceSpecification: "PriceSpecification", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
