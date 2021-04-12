/**
 * Schema.org/PawnShop
 * A shop that will buy, or lend money against the security of, personal possessions.
 *
 * @author schema.org
 * @class PawnShop
 * @module org.schema
 */
module.exports = class PawnShop extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PawnShop";
	}

}