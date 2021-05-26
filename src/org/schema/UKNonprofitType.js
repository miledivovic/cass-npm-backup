const schema = {};
schema.NonprofitType = require("./NonprofitType.js");
/**
 * Schema.org/UKNonprofitType
 * UKNonprofitType: Non-profit organization type originating from the United Kingdom.
 *
 * @author schema.org
 * @class UKNonprofitType
 * @module org.schema
 * @extends NonprofitType
 */
module.exports = class UKNonprofitType extends schema.NonprofitType {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","UKNonprofitType");
	}

}