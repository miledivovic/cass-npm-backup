/**
 * Schema.org/Distillery
 * A distillery.
 *
 * @author schema.org
 * @class Distillery
 * @module org.schema
 */
module.exports = class Distillery extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Distillery");
	}

}