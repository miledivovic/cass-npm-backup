const schema = {};
schema.HowToItem = require("./HowToItem.js");
/**
 * Schema.org/HowToSupply
 * A supply consumed when performing the instructions for how to achieve a result.
 *
 * @author schema.org
 * @class HowToSupply
 * @module org.schema
 * @extends HowToItem
 */
module.exports = class HowToSupply extends schema.HowToItem {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HowToSupply");
	}

	/**
	 * Schema.org/estimatedCost
	 * The estimated cost of the supply or supplies consumed when performing instructions.
	 *
	 * @property estimatedCost
	 * @type Text
	 */
	estimatedCost;

}