/**
 * Schema.org/ReturnFeesEnumeration
 * ReturnFeesEnumeration expresses policies for return fees.
 *
 * @author schema.org
 * @class ReturnFeesEnumeration
 * @module org.schema
 */
module.exports = class ReturnFeesEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReturnFeesEnumeration");
	}

}