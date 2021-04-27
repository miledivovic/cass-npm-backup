/**
 * Schema.org/LegalValueLevel
 * A list of possible levels for the legal validity of a legislation.
 *
 * @author schema.org
 * @class LegalValueLevel
 * @module org.schema
 */
module.exports = class LegalValueLevel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "LegalValueLevel");
	}
};
