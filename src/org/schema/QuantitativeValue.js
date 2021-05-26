const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/QuantitativeValue
 *  A point value or interval for product characteristics and other purposes.
 *
 * @author schema.org
 * @class QuantitativeValue
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class QuantitativeValue extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","QuantitativeValue");
	}

	/**
	 * Schema.org/maxValue
	 * The upper value of some characteristic or property.
	 *
	 * @property maxValue
	 * @type Number
	 */
	maxValue;

	/**
	 * Schema.org/unitText
	 * A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
<a href='unitCode'>unitCode</a>.
	 *
	 * @property unitText
	 * @type Text
	 */
	unitText;

	/**
	 * Schema.org/unitCode
	 * The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
	 *
	 * @property unitCode
	 * @type Text
	 */
	unitCode;

	/**
	 * Schema.org/valueReference
	 * A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
	 *
	 * @property valueReference
	 * @type StructuredValue
	 */
	valueReference;

	/**
	 * Schema.org/additionalProperty
	 * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. schema:width, schema:color, schema:gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.

	 *
	 * @property additionalProperty
	 * @type PropertyValue
	 */
	additionalProperty;

	/**
	 * Schema.org/minValue
	 * The lower value of some characteristic or property.
	 *
	 * @property minValue
	 * @type Number
	 */
	minValue;

	/**
	 * Schema.org/value
	 * The value of the quantitative value or property value node.\n\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
	 *
	 * @property value
	 * @type Text
	 */
	value;

}