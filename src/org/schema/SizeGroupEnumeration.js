/**
 * Schema.org/SizeGroupEnumeration
 * Enumerates common size groups for various product categories.
 *
 * @author schema.org
 * @class SizeGroupEnumeration
 * @module org.schema
 */
module.exports = class SizeGroupEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "SizeGroupEnumeration");
	}
};
