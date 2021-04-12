/**
 * Schema.org/Reservoir
 * A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir.
 *
 * @author schema.org
 * @class Reservoir
 * @module org.schema
 */
module.exports = class Reservoir extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Reservoir";
	}

}