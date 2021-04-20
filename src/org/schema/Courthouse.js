/**
 * Schema.org/Courthouse
 * A courthouse.
 *
 * @author schema.org
 * @class Courthouse
 * @module org.schema
 */
module.exports = class Courthouse extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Courthouse");
	}

}