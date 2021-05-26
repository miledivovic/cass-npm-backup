const schema = {};
schema.BodyOfWater = require("./BodyOfWater.js");
/**
 * Schema.org/Waterfall
 * A waterfall, like Niagara.
 *
 * @author schema.org
 * @class Waterfall
 * @module org.schema
 * @extends BodyOfWater
 */
module.exports = class Waterfall extends schema.BodyOfWater {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Waterfall");
	}

}