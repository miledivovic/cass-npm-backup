/**
 * Schema.org/BarOrPub
 * A bar or pub.
 *
 * @author schema.org
 * @class BarOrPub
 * @module org.schema
 */
module.exports = class BarOrPub extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "BarOrPub");
	}
};
