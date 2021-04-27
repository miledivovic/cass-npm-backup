/**
 * Schema.org/Festival
 * Event type: Festival.
 *
 * @author schema.org
 * @class Festival
 * @module org.schema
 */
module.exports = class Festival extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Festival");
	}
};
