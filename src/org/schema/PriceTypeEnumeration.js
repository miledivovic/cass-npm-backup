/**
 * Schema.org/PriceTypeEnumeration
 * Enumerates different price types, for example list price, invoice price, and sale price.
 *
 * @author schema.org
 * @class PriceTypeEnumeration
 * @module org.schema
 */
public class PriceTypeEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PriceTypeEnumeration";
	}

}