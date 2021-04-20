/**
 * Schema.org/Church
 * A church.
 *
 * @author schema.org
 * @class Church
 * @module org.schema
 */
module.exports = class Church extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Church");
	}

}