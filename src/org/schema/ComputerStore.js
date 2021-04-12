/**
 * Schema.org/ComputerStore
 * A computer store.
 *
 * @author schema.org
 * @class ComputerStore
 * @module org.schema
 */
module.exports = class ComputerStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ComputerStore";
	}

}