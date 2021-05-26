const schema = {};
schema.NonprofitType = require("./NonprofitType.js");
/**
 * Schema.org/USNonprofitType
 * USNonprofitType: Non-profit organization type originating from the United States.
 *
 * @author schema.org
 * @class USNonprofitType
 * @module org.schema
 * @extends NonprofitType
 */
module.exports = class USNonprofitType extends schema.NonprofitType {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","USNonprofitType");
	}

}