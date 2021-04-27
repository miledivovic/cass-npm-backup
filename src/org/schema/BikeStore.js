/**
 * Schema.org/BikeStore
 * A bike store.
 *
 * @author schema.org
 * @class BikeStore
 * @module org.schema
 */
module.exports = class BikeStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "BikeStore");
	}
};
