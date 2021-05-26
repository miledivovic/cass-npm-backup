const schema = {};
schema.Thing = require("./Thing.js");
/**
 * Schema.org/StupidType
 * A StupidType for testing.
 *
 * @author schema.org
 * @class StupidType
 * @module org.schema
 * @extends Thing
 */
module.exports = class StupidType extends schema.Thing {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","StupidType");
	}

	/**
	 * Schema.org/stupidProperty
	 * This is a StupidProperty! - for testing only
	 *
	 * @property stupidProperty
	 * @type QuantitativeValue
	 */
	stupidProperty;

}