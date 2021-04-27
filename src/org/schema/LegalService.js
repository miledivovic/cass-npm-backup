/**
 * Schema.org/LegalService
 * A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
 *
 * @author schema.org
 * @class LegalService
 * @module org.schema
 */
module.exports = class LegalService extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "LegalService");
	}
};
