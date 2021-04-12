/**
 * Schema.org/BuddhistTemple
 * A Buddhist temple.
 *
 * @author schema.org
 * @class BuddhistTemple
 * @module org.schema
 */
module.exports = class BuddhistTemple extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BuddhistTemple";
	}

}