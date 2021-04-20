/**
 * Schema.org/RefundTypeEnumeration
 * RefundTypeEnumeration enumerates several kinds of product return refund types.
 *
 * @author schema.org
 * @class RefundTypeEnumeration
 * @module org.schema
 */
module.exports = class RefundTypeEnumeration extends EcRemoteLinkedData {
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