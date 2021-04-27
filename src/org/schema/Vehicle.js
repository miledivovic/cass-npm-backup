/**
 * Schema.org/Vehicle
 * A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.
 *
 * @author schema.org
 * @class Vehicle
 * @module org.schema
 */
module.exports = class Vehicle extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Vehicle");
	}
};
