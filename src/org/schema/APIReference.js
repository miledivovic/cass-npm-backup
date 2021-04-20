/**
 * Schema.org/APIReference
 * Reference documentation for application programming interfaces (APIs).
 *
 * @author schema.org
 * @class APIReference
 * @module org.schema
 */
module.exports = class APIReference extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","APIReference");
	}

}