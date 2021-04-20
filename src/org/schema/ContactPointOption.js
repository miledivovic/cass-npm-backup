/**
 * Schema.org/ContactPointOption
 * Enumerated options related to a ContactPoint.
 *
 * @author schema.org
 * @class ContactPointOption
 * @module org.schema
 */
module.exports = class ContactPointOption extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ContactPointOption");
	}

}