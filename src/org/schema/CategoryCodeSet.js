const schema = {};
schema.DefinedTermSet = require("./DefinedTermSet.js");
/**
 * Schema.org/CategoryCodeSet
 * A set of Category Code values.
 *
 * @author schema.org
 * @class CategoryCodeSet
 * @module org.schema
 * @extends DefinedTermSet
 */
module.exports = class CategoryCodeSet extends schema.DefinedTermSet {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CategoryCodeSet");
	}

	/**
	 * Schema.org/hasCategoryCode
	 * A Category code contained in this code set.
	 *
	 * @property hasCategoryCode
	 * @type CategoryCode
	 */
	hasCategoryCode;

}