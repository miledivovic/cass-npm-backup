/**
 * Schema.org/LymphaticVessel
 * A type of blood vessel that specifically carries lymph fluid unidirectionally toward the heart.
 *
 * @author schema.org
 * @class LymphaticVessel
 * @module org.schema
 */
module.exports = class LymphaticVessel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "LymphaticVessel";
	}

}