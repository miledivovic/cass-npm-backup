/**
 * credentialengine.org/ValueProfile
 * A description of value awarded for, required by, or otherwise related to the resource.
 * @author credentialengine.org
 * @class ValueProfile
 * @module org.credentialengine
 * @extends QuantitativeValue
 */
module.exports = class ValueProfile extends schema.QuantitativeValue
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super();
		this.setContextAndType("http://schema.eduworks.com/simpleCtdl","ValueProfile");
	}

	/**
	 * http://purl.org/ctdl/terms/creditLevelType
	 * The level of credit associated with the credit awarded or required.
	 * @property creditLevelType
	 * @type Concept
	 */
	creditLevelType;

	/**
	 * http://purl.org/ctdl/terms/creditUnitType
	 * The type of credit associated with the credit awarded or required.
	 * @property creditUnitType
	 * @type Concept
	 */
	creditUnitType;

	/**
	 * http://purl.org/ctdl/terms/subject
	 * Words or brief phrases describing the topicality of the entity; select subject terms from an existing enumeration of such terms.
	 * @property subject
	 * @type CredentialAlignmentObject
	 */
	subject;

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
	 * schema:value
	 * The value of the property value node.
	 * @property value
	 * @type float
	 */
	value;

}