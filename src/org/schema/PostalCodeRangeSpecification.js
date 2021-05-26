const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/PostalCodeRangeSpecification
 * Indicates a range of postalcodes, usually defined as the set of valid codes between [[postalCodeBegin]] and [[postalCodeEnd]], inclusively.
 *
 * @author schema.org
 * @class PostalCodeRangeSpecification
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class PostalCodeRangeSpecification extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PostalCodeRangeSpecification");
	}

	/**
	 * Schema.org/postalCodeBegin
	 * First postal code in a range (included).
	 *
	 * @property postalCodeBegin
	 * @type Text
	 */
	postalCodeBegin;

	/**
	 * Schema.org/postalCodeEnd
	 * Last postal code in the range (included). Needs to be after [[postalCodeBegin]].
	 *
	 * @property postalCodeEnd
	 * @type Text
	 */
	postalCodeEnd;

}