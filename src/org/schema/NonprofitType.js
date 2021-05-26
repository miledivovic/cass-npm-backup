const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/NonprofitType
 * NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be.
 *
 * @author schema.org
 * @class NonprofitType
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class NonprofitType extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","NonprofitType");
	}

}