/**
 * Schema.org/DaySpa
 * A day spa.
 *
 * @author schema.org
 * @class DaySpa
 * @module org.schema
 */
module.exports = class DaySpa extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DaySpa");
	}

}