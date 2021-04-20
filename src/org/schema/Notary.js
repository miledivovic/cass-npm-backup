/**
 * Schema.org/Notary
 * A notary.
 *
 * @author schema.org
 * @class Notary
 * @module org.schema
 */
module.exports = class Notary extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Notary");
	}

}