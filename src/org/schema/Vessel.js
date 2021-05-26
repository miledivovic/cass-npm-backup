const schema = {};
schema.AnatomicalStructure = require("./AnatomicalStructure.js");
/**
 * Schema.org/Vessel
 * A component of the human body circulatory system comprised of an intricate network of hollow tubes that transport blood throughout the entire body.
 *
 * @author schema.org
 * @class Vessel
 * @module org.schema
 * @extends AnatomicalStructure
 */
module.exports = class Vessel extends schema.AnatomicalStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Vessel");
	}

}