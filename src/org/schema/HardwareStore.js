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
		super();
		this.setContextAndType("http://schema.org/","HardwareStore");
	}

}