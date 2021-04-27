/**
 * Schema.org/HobbyShop
 * A store that sells materials useful or necessary for various hobbies.
 *
 * @author schema.org
 * @class HobbyShop
 * @module org.schema
 */
module.exports = class HobbyShop extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "HobbyShop");
	}
};
