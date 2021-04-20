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
		super();
		this.setContextAndType("http://schema.org/","ComputerStore");
	}

}