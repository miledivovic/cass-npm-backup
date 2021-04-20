/**
 * Schema.org/City
 * A city or town.
 *
 * @author schema.org
 * @class City
 * @module org.schema
 */
module.exports = class City extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","City");
	}

}