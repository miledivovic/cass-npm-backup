/**
 *  Schema.org/QuantitativeValue
 *  A point value or interval for product characteristics and other purposes.
 * 
 *  @author schema.org
 *  @class QuantitativeValue
 *  @module org.schema
 *  @extends StructuredValue
 */
var QuantitativeValue = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    StructuredValue.call(this);
    this.context = "http://schema.org/";
    this.type = "QuantitativeValue";
};
QuantitativeValue = stjs.extend(QuantitativeValue, StructuredValue, [], function(constructor, prototype) {
    /**
     *  Schema.org/unitCode
     *  The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
     * 
     *  @property unitCode
     *  @type Text
     */
    unitCode = null;
    /**
     *  Schema.org/minValue
     *  The lower value of some characteristic or property.
     * 
     *  @property minValue
     *  @type Number
     */
    minValue = null;
    /**
     *  Schema.org/value
     *  The value of the quantitative value or property value node.\n\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.
     * 
     *  @property value
     *  @type StructuredValue
     */
    value = null;
    /**
     *  Schema.org/additionalProperty
     *  A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. schema:width, schema:color, schema:gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     * 
     *  @property additionalProperty
     *  @type PropertyValue
     */
    additionalProperty = null;
    /**
     *  Schema.org/valueReference
     *  A pointer to a secondary value that provides additional information on the original value, e.g. a reference temperature.
     * 
     *  @property valueReference
     *  @type StructuredValue
     */
    valueReference = null;
    /**
     *  Schema.org/maxValue
     *  The upper value of some characteristic or property.
     * 
     *  @property maxValue
     *  @type Number
     */
    maxValue = null;
    /**
     *  Schema.org/unitText
     *  A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
     *  <a href='unitCode'>unitCode</a>.
     * 
     *  @property unitText
     *  @type Text
     */
    unitText = null;
}, {value: "StructuredValue", additionalProperty: "PropertyValue", valueReference: "StructuredValue", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
