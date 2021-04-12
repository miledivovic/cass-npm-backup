/**
 * Schema.org/HowToStep
 * A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items.
 *
 * @author schema.org
 * @class HowToStep
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class HowToStep extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HowToStep";
	}

}