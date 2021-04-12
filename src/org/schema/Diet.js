/**
 * Schema.org/Diet
 * A strategy of regulating the intake of food to achieve or maintain a specific health-related goal.
 *
 * @author schema.org
 * @class Diet
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Diet extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Diet";
	}

}