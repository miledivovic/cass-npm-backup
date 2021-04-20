/**
 * Schema.org/LegalForceStatus
 * A list of possible statuses for the legal force of a legislation.
 *
 * @author schema.org
 * @class LegalForceStatus
 * @module org.schema
 */
module.exports = class LegalForceStatus extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LegalForceStatus");
	}

}