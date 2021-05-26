const schema = {};
schema.BodyOfWater = require("./BodyOfWater.js");
/**
 * Schema.org/OceanBodyOfWater
 * An ocean (for example, the Pacific).
 *
 * @author schema.org
 * @class OceanBodyOfWater
 * @module org.schema
 * @extends BodyOfWater
 */
module.exports = class OceanBodyOfWater extends schema.BodyOfWater {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OceanBodyOfWater");
	}

}