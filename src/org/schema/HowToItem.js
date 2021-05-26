const schema = {};
schema.ListItem = require("./ListItem.js");
/**
 * Schema.org/HowToItem
 * An item used as either a tool or supply when performing the instructions for how to to achieve a result.
 *
 * @author schema.org
 * @class HowToItem
 * @module org.schema
 * @extends ListItem
 */
module.exports = class HowToItem extends schema.ListItem {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HowToItem");
	}

	/**
	 * Schema.org/requiredQuantity
	 * The required quantity of the item(s).
	 *
	 * @property requiredQuantity
	 * @type Number
	 */
	requiredQuantity;

}