/**
 * Schema.org/Synagogue
 * A synagogue.
 *
 * @author schema.org
 * @class Synagogue
 * @module org.schema
 */
module.exports = class Synagogue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Synagogue");
	}

}