/**
 * Schema.org/Locksmith
 * A locksmith.
 *
 * @author schema.org
 * @class Locksmith
 * @module org.schema
 */
module.exports = class Locksmith extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Locksmith");
	}

}