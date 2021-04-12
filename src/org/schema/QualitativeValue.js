/**
 * Schema.org/QualitativeValue
 * A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.
 *
 * @author schema.org
 * @class QualitativeValue
 * @module org.schema
 */
module.exports = class QualitativeValue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "QualitativeValue";
	}

}