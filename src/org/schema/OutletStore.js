/**
 * Schema.org/OutletStore
 * An outlet store.
 *
 * @author schema.org
 * @class OutletStore
 * @module org.schema
 */
module.exports = class OutletStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "OutletStore");
	}
};
