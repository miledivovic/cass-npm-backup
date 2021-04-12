/**
 * Schema.org/Vessel
 * A component of the human body circulatory system comprised of an intricate network of hollow tubes that transport blood throughout the entire body.
 *
 * @author schema.org
 * @class Vessel
 * @module org.schema
 */
module.exports = class Vessel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Vessel";
	}

}