/**
 * Schema.org/NailSalon
 * A nail salon.
 *
 * @author schema.org
 * @class NailSalon
 * @module org.schema
 */
module.exports = class NailSalon extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "NailSalon";
	}

}