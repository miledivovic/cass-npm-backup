/**
 * Schema.org/Permit
 * A permit issued by an organization, e.g. a parking pass.
 *
 * @author schema.org
 * @class Permit
 * @module org.schema
 */
module.exports = class Permit extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Permit";
	}

}