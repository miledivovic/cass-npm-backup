/**
 * Schema.org/ElectronicsStore
 * An electronics store.
 *
 * @author schema.org
 * @class ElectronicsStore
 * @module org.schema
 */
module.exports = class ElectronicsStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ElectronicsStore");
	}
};
