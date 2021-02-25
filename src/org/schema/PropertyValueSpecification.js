/**
 *  Schema.org/PropertyValueSpecification
 *  A Property value specification.
 * 
 *  @author schema.org
 *  @class PropertyValueSpecification
 *  @module org.schema
 *  @extends Intangible
 */
var PropertyValueSpecification = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "PropertyValueSpecification";
};
PropertyValueSpecification = stjs.extend(PropertyValueSpecification, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/defaultValue
     *  The default value of the input.  For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values.
     * 
     *  @property defaultValue
     *  @type Thing
     */
    prototype.defaultValue = null;
    /**
     *  Schema.org/minValue
     *  The lower value of some characteristic or property.
     * 
     *  @property minValue
     *  @type Number
     */
    prototype.minValue = null;
    /**
     *  Schema.org/valuePattern
     *  Specifies a regular expression for testing literal values according to the HTML spec.
     * 
     *  @property valuePattern
     *  @type Text
     */
    prototype.valuePattern = null;
    /**
     *  Schema.org/stepValue
     *  The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification.
     * 
     *  @property stepValue
     *  @type Number
     */
    prototype.stepValue = null;
    /**
     *  Schema.org/valueMaxLength
     *  Specifies the allowed range for number of characters in a literal value.
     * 
     *  @property valueMaxLength
     *  @type Number
     */
    prototype.valueMaxLength = null;
    /**
     *  Schema.org/readonlyValue
     *  Whether or not a property is mutable.  Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form.
     * 
     *  @property readonlyValue
     *  @type Boolean
     */
    prototype.readonlyValue = null;
    /**
     *  Schema.org/valueMinLength
     *  Specifies the minimum allowed range for number of characters in a literal value.
     * 
     *  @property valueMinLength
     *  @type Number
     */
    prototype.valueMinLength = null;
    /**
     *  Schema.org/maxValue
     *  The upper value of some characteristic or property.
     * 
     *  @property maxValue
     *  @type Number
     */
    prototype.maxValue = null;
    /**
     *  Schema.org/valueName
     *  Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name.
     * 
     *  @property valueName
     *  @type Text
     */
    prototype.valueName = null;
    /**
     *  Schema.org/multipleValues
     *  Whether multiple values are allowed for the property.  Default is false.
     * 
     *  @property multipleValues
     *  @type Boolean
     */
    prototype.multipleValues = null;
    /**
     *  Schema.org/valueRequired
     *  Whether the property must be filled in to complete the action.  Default is false.
     * 
     *  @property valueRequired
     *  @type Boolean
     */
    prototype.valueRequired = null;
}, {defaultValue: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
