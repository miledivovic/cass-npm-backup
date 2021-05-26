const schema = {};
schema.BodyOfWater = require("./BodyOfWater.js");
/**
 * Schema.org/SeaBodyOfWater
 * A sea (for example, the Caspian sea).
 *
 * @author schema.org
 * @class SeaBodyOfWater
 * @module org.schema
 * @extends BodyOfWater
 */
module.exports = class SeaBodyOfWater extends schema.BodyOfWater {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SeaBodyOfWater");
	}

}