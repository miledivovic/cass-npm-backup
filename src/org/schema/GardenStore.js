/**
 * Schema.org/GardenStore
 * A garden store.
 *
 * @author schema.org
 * @class GardenStore
 * @module org.schema
 */
module.exports = class GardenStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "GardenStore";
	}

}