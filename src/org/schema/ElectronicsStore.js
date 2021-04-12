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
		context = "http://schema.org/";
		type = "ElectronicsStore";
	}

}