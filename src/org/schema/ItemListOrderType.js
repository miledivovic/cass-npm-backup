/**
 * Schema.org/ItemListOrderType
 * Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.
 *
 * @author schema.org
 * @class ItemListOrderType
 * @module org.schema
 */
module.exports = class ItemListOrderType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ItemListOrderType");
	}
};
