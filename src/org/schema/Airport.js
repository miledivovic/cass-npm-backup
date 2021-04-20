/**
 * Schema.org/Airport
 * An airport.
 *
 * @author schema.org
 * @class Airport
 * @module org.schema
 */
module.exports = class Airport extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Airport");
	}

}