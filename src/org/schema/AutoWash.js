/**
 * Schema.org/AutoWash
 * A car wash business.
 *
 * @author schema.org
 * @class AutoWash
 * @module org.schema
 */
module.exports = class AutoWash extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "AutoWash");
	}
};
