/**
 * Schema.org/WarrantyPromise
 * A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.
 *
 * @author schema.org
 * @class WarrantyPromise
 * @module org.schema
 */
module.exports = class WarrantyPromise extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "WarrantyPromise";
	}

}