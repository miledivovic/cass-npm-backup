const schema = {};
schema.BodyOfWater = require("./BodyOfWater.js");
/**
 * Schema.org/LakeBodyOfWater
 * A lake (for example, Lake Pontrachain).
 *
 * @author schema.org
 * @class LakeBodyOfWater
 * @module org.schema
 * @extends BodyOfWater
 */
module.exports = class LakeBodyOfWater extends schema.BodyOfWater {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LakeBodyOfWater");
	}

}