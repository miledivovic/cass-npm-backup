/**
 * Schema.org/Mosque
 * A mosque.
 *
 * @author schema.org
 * @class Mosque
 * @module org.schema
 */
module.exports = class Mosque extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Mosque");
	}
};
