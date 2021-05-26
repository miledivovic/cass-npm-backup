const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Menu
 * A structured representation of food or drink items available from a FoodEstablishment.
 *
 * @author schema.org
 * @class Menu
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Menu extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Menu");
	}

	/**
	 * Schema.org/hasMenuItem
	 * A food or drink item contained in a menu or menu section.
	 *
	 * @property hasMenuItem
	 * @type MenuItem
	 */
	hasMenuItem;

	/**
	 * Schema.org/hasMenuSection
	 * A subgrouping of the menu (by dishes, course, serving time period, etc.).
	 *
	 * @property hasMenuSection
	 * @type MenuSection
	 */
	hasMenuSection;

}