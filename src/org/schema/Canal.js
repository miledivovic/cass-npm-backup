/**
 * Schema.org/Canal
 * A canal, like the Panama Canal.
 *
 * @author schema.org
 * @class Canal
 * @module org.schema
 */
module.exports = class Canal extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Canal");
	}
};
