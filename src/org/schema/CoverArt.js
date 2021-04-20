/**
 * Schema.org/CoverArt
 * The artwork on the outer surface of a CreativeWork.
 *
 * @author schema.org
 * @class CoverArt
 * @module org.schema
 */
module.exports = class CoverArt extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CoverArt");
	}

}