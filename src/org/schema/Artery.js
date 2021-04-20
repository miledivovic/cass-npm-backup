/**
 * Schema.org/Artery
 * A type of blood vessel that specifically carries blood away from the heart.
 *
 * @author schema.org
 * @class Artery
 * @module org.schema
 */
module.exports = class Artery extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Artery");
	}

}