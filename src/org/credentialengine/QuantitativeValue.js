/**
 * schema:QuantitativeValue
 * A point value or interval for product characteristics and other purposes.
 * @author credentialengine.org
 * @class QuantitativeValue
 * @module org.credentialengine
 */
module.exports = class QuantitativeValue extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","QuantitativeValue");
	}

	/**
	 * qdata:percentage
	 * Quotient of two values of the data set, expressed as a percentage.
	 * @property percentage
	 * @type float
	 */
	percentage;

	/**
	 * schema:description
	 * A description of the item.
	 * @property description
	 * @type langString
	 */
	description;

	/**
	 * schema:maxValue
	 * The upper value of some characteristic or property.
	 * @property maxValue
	 * @type float
	 */
	maxValue;

	/**
	 * schema:minValue
	 * The lower value of some characteristic or property.
	 * @property minValue
	 * @type float
	 */
	minValue;

	/**
	 * schema:unitText
	 * A string or text indicating the unit of measurement.
	 * @property unitText
	 * @type CredentialAlignmentObject
	 */
	unitText;

	/**
	 * schema:value
	 * The value of the property value node.
	 * @property value
	 * @type float
	 */
	value;

}