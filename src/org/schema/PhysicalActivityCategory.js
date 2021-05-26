const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/PhysicalActivityCategory
 * Categories of physical activity, organized by physiologic classification.
 *
 * @author schema.org
 * @class PhysicalActivityCategory
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class PhysicalActivityCategory extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PhysicalActivityCategory");
	}

}