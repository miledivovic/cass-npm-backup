/**
 * Schema.org/Taxi
 * A taxi.
 *
 * @author schema.org
 * @class Taxi
 * @module org.schema
 */
module.exports = class Taxi extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Taxi";
	}

}