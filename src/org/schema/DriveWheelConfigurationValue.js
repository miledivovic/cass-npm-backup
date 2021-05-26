const schema = {};
schema.QualitativeValue = require("./QualitativeValue.js");
/**
 * Schema.org/DriveWheelConfigurationValue
 * A value indicating which roadwheels will receive torque.
 *
 * @author schema.org
 * @class DriveWheelConfigurationValue
 * @module org.schema
 * @extends QualitativeValue
 */
module.exports = class DriveWheelConfigurationValue extends schema.QualitativeValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DriveWheelConfigurationValue");
	}

}