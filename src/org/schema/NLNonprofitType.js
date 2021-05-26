const schema = {};
schema.NonprofitType = require("./NonprofitType.js");
/**
 * Schema.org/NLNonprofitType
 * NLNonprofitType: Non-profit organization type originating from the Netherlands.
 *
 * @author schema.org
 * @class NLNonprofitType
 * @module org.schema
 * @extends NonprofitType
 */
module.exports = class NLNonprofitType extends schema.NonprofitType {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","NLNonprofitType");
	}

}