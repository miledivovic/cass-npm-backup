/**
 *  Schema.org/CompoundPriceSpecification
 *  A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. "electricity" or "final cleaning").
 * 
 *  @author schema.org
 *  @class CompoundPriceSpecification
 *  @module org.schema
 *  @extends PriceSpecification
 */
var CompoundPriceSpecification = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    PriceSpecification.call(this);
    this.context = "http://schema.org/";
    this.type = "CompoundPriceSpecification";
};
CompoundPriceSpecification = stjs.extend(CompoundPriceSpecification, PriceSpecification, [], function(constructor, prototype) {
    /**
     *  Schema.org/priceComponent
     *  This property links to all [[UnitPriceSpecification]] nodes that apply in parallel for the [[CompoundPriceSpecification]] node.
     * 
     *  @property priceComponent
     *  @type UnitPriceSpecification
     */
    prototype.priceComponent = null;
}, {priceComponent: "UnitPriceSpecification", eligibleTransactionVolume: "PriceSpecification", eligibleQuantity: "QuantitativeValue", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
