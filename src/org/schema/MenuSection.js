const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/MenuSection
 * A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider.
 *
 * @author schema.org
 * @class MenuSection
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class MenuSection extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MenuSection");
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