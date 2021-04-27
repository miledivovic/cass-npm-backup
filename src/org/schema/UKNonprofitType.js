/**
 * Schema.org/UKNonprofitType
 * UKNonprofitType: Non-profit organization type originating from the United Kingdom.
 *
 * @author schema.org
 * @class UKNonprofitType
 * @module org.schema
 */
module.exports = class UKNonprofitType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "UKNonprofitType");
	}
};
