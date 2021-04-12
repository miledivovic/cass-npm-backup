/**
 * Schema.org/HardwareStore
 * A hardware store.
 *
 * @author schema.org
 * @class HardwareStore
 * @module org.schema
 */
module.exports = class HardwareStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HardwareStore";
	}

}