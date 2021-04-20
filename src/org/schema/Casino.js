/**
 * Schema.org/Casino
 * A casino.
 *
 * @author schema.org
 * @class Casino
 * @module org.schema
 */
module.exports = class Casino extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Casino");
	}

}