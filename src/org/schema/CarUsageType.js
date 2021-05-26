const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/CarUsageType
 * A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi.
 *
 * @author schema.org
 * @class CarUsageType
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class CarUsageType extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CarUsageType");
	}

}