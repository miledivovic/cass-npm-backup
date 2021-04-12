/**
 * Schema.org/HowToTip
 * An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, supply, author's preference, etc. It can explain what could be done, or what should not be done, but doesn't specify what should be done (see HowToDirection).
 *
 * @author schema.org
 * @class HowToTip
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class HowToTip extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HowToTip";
	}

}