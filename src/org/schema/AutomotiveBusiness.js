/**
 * Schema.org/AutomotiveBusiness
 * Car repair, sales, or parts.
 *
 * @author schema.org
 * @class AutomotiveBusiness
 * @module org.schema
 */
module.exports = class AutomotiveBusiness extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AutomotiveBusiness");
	}

}