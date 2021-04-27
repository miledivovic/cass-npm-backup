/**
 * Schema.org/Taxi
 * A taxi.
 *
 * @author schema.org
 * @class Taxi
 * @module org.schema
 */
module.exports = class Taxi extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Taxi");
	}
};
