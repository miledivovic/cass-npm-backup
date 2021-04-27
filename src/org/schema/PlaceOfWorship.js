/**
 * Schema.org/PlaceOfWorship
 * Place of worship, such as a church, synagogue, or mosque.
 *
 * @author schema.org
 * @class PlaceOfWorship
 * @module org.schema
 */
module.exports = class PlaceOfWorship extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "PlaceOfWorship");
	}
};
