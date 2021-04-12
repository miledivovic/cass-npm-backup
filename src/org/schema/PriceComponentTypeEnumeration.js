/**
 * Schema.org/PriceComponentTypeEnumeration
 * Enumerates different price components that together make up the total price for an offered product.
 *
 * @author schema.org
 * @class PriceComponentTypeEnumeration
 * @module org.schema
 */
public class PriceComponentTypeEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PriceComponentTypeEnumeration";
	}

}