/**
 * Schema.org/NLNonprofitType
 * NLNonprofitType: Non-profit organization type originating from the Netherlands.
 *
 * @author schema.org
 * @class NLNonprofitType
 * @module org.schema
 */
module.exports = class NLNonprofitType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "NLNonprofitType");
	}
};
