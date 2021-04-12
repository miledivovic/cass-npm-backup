/**
 * Schema.org/Nerve
 * A common pathway for the electrochemical nerve impulses that are transmitted along each of the axons.
 *
 * @author schema.org
 * @class Nerve
 * @module org.schema
 */
module.exports = class Nerve extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Nerve";
	}

}