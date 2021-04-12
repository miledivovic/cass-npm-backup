/**
 * Schema.org/Motorcycle
 * A motorcycle or motorbike is a single-track, two-wheeled motor vehicle.
 *
 * @author schema.org
 * @class Motorcycle
 * @module org.schema
 */
module.exports = class Motorcycle extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Motorcycle";
	}

}