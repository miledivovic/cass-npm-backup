/**
 * Schema.org/Service
 * A service provided by an organization, e.g. delivery service, print services, etc.
 *
 * @author schema.org
 * @class Service
 * @module org.schema
 */
module.exports = class Service extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Service");
	}
};
