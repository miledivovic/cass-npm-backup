/**
 * Schema.org/Vein
 * A type of blood vessel that specifically carries blood to the heart.
 *
 * @author schema.org
 * @class Vein
 * @module org.schema
 */
module.exports = class Vein extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Vein");
	}

}