const schema = {};
schema.Vehicle = require("./Vehicle.js");
/**
 * Schema.org/MotorizedBicycle
 * A motorized bicycle is a bicycle with an attached motor used to power the vehicle, or to assist with pedaling.
 *
 * @author schema.org
 * @class MotorizedBicycle
 * @module org.schema
 * @extends Vehicle
 */
module.exports = class MotorizedBicycle extends schema.Vehicle {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MotorizedBicycle");
	}

}