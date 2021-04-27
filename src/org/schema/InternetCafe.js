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
		super();
		this.setContextAndType("http://schema.org/", "InternetCafe");
	}
};
