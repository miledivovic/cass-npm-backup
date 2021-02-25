/**
 *  Schema.org/QualitativeValue
 *  A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.
 * 
 *  @author schema.org
 *  @class QualitativeValue
 *  @module org.schema
 *  @extends Enumeration
 */
var QualitativeValue = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "QualitativeValue";
};
QualitativeValue = stjs.extend(QualitativeValue, Enumeration, [], function(constructor, prototype) {
    /**
     *  Schema.org/greater
     *  This ordering relation for qualitative values indicates that the subject is greater than the object.
     * 
     *  @property greater
     *  @type QualitativeValue
     */
    prototype.greater = null;
    /**
     *  Schema.org/equal
     *  This ordering relation for qualitative values indicates that the subject is equal to the object.
     * 
     *  @property equal
     *  @type QualitativeValue
     */
    prototype.equal = null;
    /**
     *  Schema.org/nonEqual
     *  This ordering relation for qualitative values indicates that the subject is not equal to the object.
     * 
     *  @property nonEqual
     *  @type QualitativeValue
     */
    prototype.nonEqual = null;
    /**
     *  Schema.org/additionalProperty
     *  A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. schema:width, schema:color, schema:gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     * 
     *  @property additionalProperty
     *  @type PropertyValue
     */
    prototype.additionalProperty = null;
    /**
     *  Schema.org/lesser
     *  This ordering relation for qualitative values indicates that the subject is lesser than the object.
     * 
     *  @property lesser
     *  @type QualitativeValue
     */
    prototype.lesser = null;
    /**
     *  Schema.org/valueReference
     *  A pointer to a secondary value that provides additional information on the original value, e.g. a reference temperature.
     * 
     *  @property valueReference
     *  @type StructuredValue
     */
    prototype.valueReference = null;
    /**
     *  Schema.org/lesserOrEqual
     *  This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object.
     * 
     *  @property lesserOrEqual
     *  @type QualitativeValue
     */
    prototype.lesserOrEqual = null;
    /**
     *  Schema.org/greaterOrEqual
     *  This ordering relation for qualitative values indicates that the subject is greater than or equal to the object.
     * 
     *  @property greaterOrEqual
     *  @type QualitativeValue
     */
    prototype.greaterOrEqual = null;
}, {greater: "QualitativeValue", equal: "QualitativeValue", nonEqual: "QualitativeValue", additionalProperty: "PropertyValue", lesser: "QualitativeValue", valueReference: "StructuredValue", lesserOrEqual: "QualitativeValue", greaterOrEqual: "QualitativeValue", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
