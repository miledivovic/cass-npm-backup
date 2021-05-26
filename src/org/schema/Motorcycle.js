const schema = {};
schema.Vehicle = require("./Vehicle.js");
/**
 * Schema.org/Motorcycle
 * A motorcycle or motorbike is a single-track, two-wheeled motor vehicle.
 *
 * @author schema.org
 * @class Motorcycle
 * @module org.schema
 * @extends Vehicle
 */
module.exports = class Motorcycle extends schema.Vehicle {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Motorcycle");
	}

}