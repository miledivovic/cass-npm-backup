global.schema.ItemList = require("./ItemList.js");
/**
 * Schema.org/HowToSection
 * A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe).
 *
 * @author schema.org
 * @class HowToSection
 * @module org.schema
 * @extends ItemList
 */
module.exports = class HowToSection extends schema.ItemList {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HowToSection");
	}

}