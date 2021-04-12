/**
 * Schema.org/OwnershipInfo
 * A structured value providing information about when a certain organization or person owned a certain product.
 *
 * @author schema.org
 * @class OwnershipInfo
 * @module org.schema
 */
module.exports = class OwnershipInfo extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "OwnershipInfo";
	}

}