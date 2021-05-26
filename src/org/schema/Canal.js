const schema = {};
schema.BodyOfWater = require("./BodyOfWater.js");
/**
 * Schema.org/Canal
 * A canal, like the Panama Canal.
 *
 * @author schema.org
 * @class Canal
 * @module org.schema
 * @extends BodyOfWater
 */
module.exports = class Canal extends schema.BodyOfWater {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Canal");
	}

}