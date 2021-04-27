/**
 * Schema.org/ItemPage
 * A page devoted to a single item, such as a particular product or hotel.
 *
 * @author schema.org
 * @class ItemPage
 * @module org.schema
 */
module.exports = class ItemPage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ItemPage");
	}
};
