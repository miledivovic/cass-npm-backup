/**
 * Schema.org/PostalCodeRangeSpecification
 * Indicates a range of postalcodes, usually defined as the set of valid codes between [[postalCodeBegin]] and [[postalCodeEnd]], inclusively.
 *
 * @author schema.org
 * @class PostalCodeRangeSpecification
 * @module org.schema
 */
module.exports = class PostalCodeRangeSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.org/",
			"PostalCodeRangeSpecification"
		);
	}
};
