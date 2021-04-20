/**
 * Schema.org/Flight
 * An airline flight.
 *
 * @author schema.org
 * @class Flight
 * @module org.schema
 */
module.exports = class Flight extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Flight");
	}

}