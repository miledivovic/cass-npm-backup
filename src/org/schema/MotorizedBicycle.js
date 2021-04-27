/**
 * Schema.org/MotorizedBicycle
 * A motorized bicycle is a bicycle with an attached motor used to power the vehicle, or to assist with pedaling.
 *
 * @author schema.org
 * @class MotorizedBicycle
 * @module org.schema
 */
module.exports = class MotorizedBicycle extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MotorizedBicycle");
	}
};
