/**
 *  Schema.org/DatedMoneySpecification
 *  A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. __Note:__ This type has been superseded by [[MonetaryAmount]] use of that type is recommended
 * 
 *  @author schema.org
 *  @class DatedMoneySpecification
 *  @module org.schema
 *  @extends StructuredValue
 */
var DatedMoneySpecification = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    StructuredValue.call(this);
    this.context = "http://schema.org/";
    this.type = "DatedMoneySpecification";
};
DatedMoneySpecification = stjs.extend(DatedMoneySpecification, StructuredValue, [], function(constructor, prototype) {
    /**
     *  Schema.org/endDate
     *  The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * 
     *  @property endDate
     *  @type DateTime
     */
    prototype.endDate = null;
    /**
     *  Schema.org/amount
     *  The amount of money.
     * 
     *  @property amount
     *  @type Number
     */
    prototype.amount = null;
    /**
     *  Schema.org/startDate
     *  The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * 
     *  @property startDate
     *  @type Date
     */
    prototype.startDate = null;
    /**
     *  Schema.org/currency
     *  The currency in which the monetary amount is expressed (in 3-letter [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) format).
     * 
     *  @property currency
     *  @type Text
     */
    prototype.currency = null;
}, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
