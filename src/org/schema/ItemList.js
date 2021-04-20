/**
 * Schema.org/ItemList
 * A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.
 *
 * @author schema.org
 * @class ItemList
 * @module org.schema
 */
module.exports = class ItemList extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ItemList");
	}

}