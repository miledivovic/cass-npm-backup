/**
 * Schema.org/InternetCafe
 * An internet cafe.
 *
 * @author schema.org
 * @class InternetCafe
 * @module org.schema
 */
module.exports = class InternetCafe extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "InternetCafe";
	}

}