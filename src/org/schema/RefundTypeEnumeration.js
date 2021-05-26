const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/RefundTypeEnumeration
 * RefundTypeEnumeration enumerates several kinds of product return refund types.
 *
 * @author schema.org
 * @class RefundTypeEnumeration
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class RefundTypeEnumeration extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RefundTypeEnumeration");
	}

}