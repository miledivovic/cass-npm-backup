/**
 *  Schema.org/UnitPriceSpecification
 *  The price asked for a given offer by the respective organization or person.
 * 
 *  @author schema.org
 *  @class UnitPriceSpecification
 *  @module org.schema
 *  @extends PriceSpecification
 */
var UnitPriceSpecification = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    PriceSpecification.call(this);
    this.context = "http://schema.org/";
    this.type = "UnitPriceSpecification";
};
UnitPriceSpecification = stjs.extend(UnitPriceSpecification, PriceSpecification, [], function(constructor, prototype) {
    /**
     *  Schema.org/unitCode
     *  The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
     * 
     *  @property unitCode
     *  @type Text
     */
    unitCode = null;
    /**
     *  Schema.org/billingIncrement
     *  This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property.
     * 
     *  @property billingIncrement
     *  @type Number
     */
    billingIncrement = null;
    /**
     *  Schema.org/referenceQuantity
     *  The reference quantity for which a certain price applies, e.g. 1 EUR per 4 kWh of electricity. This property is a replacement for unitOfMeasurement for the advanced cases where the price does not relate to a standard unit.
     * 
     *  @property referenceQuantity
     *  @type QuantitativeValue
     */
    referenceQuantity = null;
    /**
     *  Schema.org/unitText
     *  A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
     *  <a href='unitCode'>unitCode</a>.
     * 
     *  @property unitText
     *  @type Text
     */
    unitText = null;
    /**
     *  Schema.org/priceType
     *  A short text or acronym indicating multiple price specifications for the same offer, e.g. SRP for the suggested retail price or INVOICE for the invoice price, mostly used in the car industry.
     * 
     *  @property priceType
     *  @type Text
     */
    priceType = null;
}, {referenceQuantity: "QuantitativeValue", eligibleTransactionVolume: "PriceSpecification", eligibleQuantity: "QuantitativeValue", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
