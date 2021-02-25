/**
 *  Schema.org/MonetaryAmount
 *  A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc. It is recommended to use [[PriceSpecification]] Types to describe the price of an Offer, Invoice, etc.
 * 
 *  @author schema.org
 *  @class MonetaryAmount
 *  @module org.schema
 *  @extends StructuredValue
 */
var MonetaryAmount = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    StructuredValue.call(this);
    this.context = "http://schema.org/";
    this.type = "MonetaryAmount";
};
MonetaryAmount = stjs.extend(MonetaryAmount, StructuredValue, [], function(constructor, prototype) {
    /**
     *  Schema.org/minValue
     *  The lower value of some characteristic or property.
     * 
     *  @property minValue
     *  @type Number
     */
    prototype.minValue = null;
    /**
     *  Schema.org/value
     *  The value of the quantitative value or property value node.\n\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.
     * 
     *  @property value
     *  @type StructuredValue
     */
    prototype.value = null;
    /**
     *  Schema.org/validFrom
     *  The date when the item becomes valid.
     * 
     *  @property validFrom
     *  @type DateTime
     */
    prototype.validFrom = null;
    /**
     *  Schema.org/validThrough
     *  The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     * 
     *  @property validThrough
     *  @type DateTime
     */
    prototype.validThrough = null;
    /**
     *  Schema.org/maxValue
     *  The upper value of some characteristic or property.
     * 
     *  @property maxValue
     *  @type Number
     */
    prototype.maxValue = null;
    /**
     *  Schema.org/currency
     *  The currency in which the monetary amount is expressed (in 3-letter [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) format).
     * 
     *  @property currency
     *  @type Text
     */
    prototype.currency = null;
}, {value: "StructuredValue", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
