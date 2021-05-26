const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/ItemListOrderType
 * Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.
 *
 * @author schema.org
 * @class ItemListOrderType
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class ItemListOrderType extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ItemListOrderType");
	}

}