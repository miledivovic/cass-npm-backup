const schema = {};
schema.AnatomicalStructure = require("./AnatomicalStructure.js");
/**
 * Schema.org/Ligament
 * A short band of tough, flexible, fibrous connective tissue that functions to connect multiple bones, cartilages, and structurally support joints.
 *
 * @author schema.org
 * @class Ligament
 * @module org.schema
 * @extends AnatomicalStructure
 */
module.exports = class Ligament extends schema.AnatomicalStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Ligament");
	}

}