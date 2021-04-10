/**
 *  Schema.org/BusinessAudience
 *  A set of characteristics belonging to businesses, e.g. who compose an item's target audience.
 * 
 *  @author schema.org
 *  @class BusinessAudience
 *  @module org.schema
 *  @extends Audience
 */
var BusinessAudience = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Audience.call(this);
    this.context = "http://schema.org/";
    this.type = "BusinessAudience";
};
BusinessAudience = stjs.extend(BusinessAudience, Audience, [], function(constructor, prototype) {
    /**
     *  Schema.org/yearsInOperation
     *  The age of the business.
     * 
     *  @property yearsInOperation
     *  @type QuantitativeValue
     */
    yearsInOperation = null;
    /**
     *  Schema.org/yearlyRevenue
     *  The size of the business in annual revenue.
     * 
     *  @property yearlyRevenue
     *  @type QuantitativeValue
     */
    yearlyRevenue = null;
    /**
     *  Schema.org/numberOfEmployees
     *  The number of employees in an organization e.g. business.
     * 
     *  @property numberOfEmployees
     *  @type QuantitativeValue
     */
    numberOfEmployees = null;
}, {yearsInOperation: "QuantitativeValue", yearlyRevenue: "QuantitativeValue", numberOfEmployees: "QuantitativeValue", geographicArea: "AdministrativeArea", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
