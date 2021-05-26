const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/PropertyValueSpecification
 * A Property value specification.
 *
 * @author schema.org
 * @class PropertyValueSpecification
 * @module org.schema
 * @extends Intangible
 */
module.exports = class PropertyValueSpecification extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PropertyValueSpecification");
	}

	/**
	 * Schema.org/valueName
	 * Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name.
	 *
	 * @property valueName
	 * @type Text
	 */
	valueName;

	/**
	 * Schema.org/defaultValue
	 * The default value of the input.  For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values.
	 *
	 * @property defaultValue
	 * @type Text
	 */
	defaultValue;

	/**
	 * Schema.org/stepValue
	 * The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification.
	 *
	 * @property stepValue
	 * @type Number
	 */
	stepValue;

	/**
	 * Schema.org/valueRequired
	 * Whether the property must be filled in to complete the action.  Default is false.
	 *
	 * @property valueRequired
	 * @type Boolean
	 */
	valueRequired;

	/**
	 * Schema.org/maxValue
	 * The upper value of some characteristic or property.
	 *
	 * @property maxValue
	 * @type Number
	 */
	maxValue;

	/**
	 * Schema.org/valuePattern
	 * Specifies a regular expression for testing literal values according to the HTML spec.
	 *
	 * @property valuePattern
	 * @type Text
	 */
	valuePattern;

	/**
	 * Schema.org/multipleValues
	 * Whether multiple values are allowed for the property.  Default is false.
	 *
	 * @property multipleValues
	 * @type Boolean
	 */
	multipleValues;

	/**
	 * Schema.org/readonlyValue
	 * Whether or not a property is mutable.  Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form.
	 *
	 * @property readonlyValue
	 * @type Boolean
	 */
	readonlyValue;

	/**
	 * Schema.org/minValue
	 * The lower value of some characteristic or property.
	 *
	 * @property minValue
	 * @type Number
	 */
	minValue;

	/**
	 * Schema.org/valueMaxLength
	 * Specifies the allowed range for number of characters in a literal value.
	 *
	 * @property valueMaxLength
	 * @type Number
	 */
	valueMaxLength;

	/**
	 * Schema.org/valueMinLength
	 * Specifies the minimum allowed range for number of characters in a literal value.
	 *
	 * @property valueMinLength
	 * @type Number
	 */
	valueMinLength;

}