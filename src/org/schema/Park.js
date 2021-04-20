/**
 * Schema.org/Park
 * A park.
 *
 * @author schema.org
 * @class Park
 * @module org.schema
 */
module.exports = class Park extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Park");
	}

}