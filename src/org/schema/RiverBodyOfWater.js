const schema = {};
schema.BodyOfWater = require("./BodyOfWater.js");
/**
 * Schema.org/RiverBodyOfWater
 * A river (for example, the broad majestic Shannon).
 *
 * @author schema.org
 * @class RiverBodyOfWater
 * @module org.schema
 * @extends BodyOfWater
 */
module.exports = class RiverBodyOfWater extends schema.BodyOfWater {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RiverBodyOfWater");
	}

}