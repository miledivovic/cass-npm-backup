/**
 * Schema.org/Place
 * Entities that have a somewhat fixed, physical extension.
 *
 * @author schema.org
 * @class Place
 * @module org.schema
 */
module.exports = class Place extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Place");
	}

}