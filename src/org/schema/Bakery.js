/**
 * Schema.org/Bakery
 * A bakery.
 *
 * @author schema.org
 * @class Bakery
 * @module org.schema
 */
module.exports = class Bakery extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Bakery");
	}

}