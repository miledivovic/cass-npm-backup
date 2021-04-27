/**
 * Schema.org/Restaurant
 * A restaurant.
 *
 * @author schema.org
 * @class Restaurant
 * @module org.schema
 */
module.exports = class Restaurant extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Restaurant");
	}
};
