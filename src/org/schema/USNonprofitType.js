/**
 * Schema.org/USNonprofitType
 * USNonprofitType: Non-profit organization type originating from the United States.
 *
 * @author schema.org
 * @class USNonprofitType
 * @module org.schema
 */
module.exports = class USNonprofitType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "USNonprofitType");
	}
};
