/**
 * Schema.org/ConvenienceStore
 * A convenience store.
 *
 * @author schema.org
 * @class ConvenienceStore
 * @module org.schema
 */
module.exports = class ConvenienceStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ConvenienceStore");
	}
};
