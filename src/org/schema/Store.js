/**
 * Schema.org/Store
 * A retail good store.
 *
 * @author schema.org
 * @class Store
 * @module org.schema
 */
module.exports = class Store extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Store");
	}

}