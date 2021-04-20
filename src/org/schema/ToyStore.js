/**
 * Schema.org/ToyStore
 * A toy store.
 *
 * @author schema.org
 * @class ToyStore
 * @module org.schema
 */
module.exports = class ToyStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ToyStore");
	}

}