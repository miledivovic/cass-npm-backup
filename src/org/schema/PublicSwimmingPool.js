/**
 * Schema.org/PublicSwimmingPool
 * A public swimming pool.
 *
 * @author schema.org
 * @class PublicSwimmingPool
 * @module org.schema
 */
module.exports = class PublicSwimmingPool extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "PublicSwimmingPool");
	}
};
