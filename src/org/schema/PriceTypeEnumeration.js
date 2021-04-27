/**
 * Schema.org/PriceTypeEnumeration
 * Enumerates different price types, for example list price, invoice price, and sale price.
 *
 * @author schema.org
 * @class PriceTypeEnumeration
 * @module org.schema
 */
module.exports = class PriceTypeEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "PriceTypeEnumeration");
	}
};
