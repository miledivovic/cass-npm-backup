const schema = {};
schema.BodyOfWater = require("./BodyOfWater.js");
/**
 * Schema.org/Pond
 * A pond.
 *
 * @author schema.org
 * @class Pond
 * @module org.schema
 * @extends BodyOfWater
 */
module.exports = class Pond extends schema.BodyOfWater {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Pond");
	}

}