/**
 * Schema.org/Zoo
 * A zoo.
 *
 * @author schema.org
 * @class Zoo
 * @module org.schema
 */
module.exports = class Zoo extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Zoo");
	}

}