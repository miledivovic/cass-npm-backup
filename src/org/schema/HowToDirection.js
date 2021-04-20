global.schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/HowToDirection
 * A direction indicating a single action to do in the instructions for how to achieve a result.
 *
 * @author schema.org
 * @class HowToDirection
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class HowToDirection extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HowToDirection");
	}

}