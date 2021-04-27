/**
 * Schema.org/BusTrip
 * A trip on a commercial bus line.
 *
 * @author schema.org
 * @class BusTrip
 * @module org.schema
 */
module.exports = class BusTrip extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "BusTrip");
	}
};
