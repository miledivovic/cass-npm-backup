const schema = {};
schema.BodyOfWater = require("./BodyOfWater.js");
/**
 * Schema.org/Reservoir
 * A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir.
 *
 * @author schema.org
 * @class Reservoir
 * @module org.schema
 * @extends BodyOfWater
 */
module.exports = class Reservoir extends schema.BodyOfWater {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Reservoir");
	}

}