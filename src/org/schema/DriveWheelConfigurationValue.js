/**
 * Schema.org/DriveWheelConfigurationValue
 * A value indicating which roadwheels will receive torque.
 *
 * @author schema.org
 * @class DriveWheelConfigurationValue
 * @module org.schema
 */
module.exports = class DriveWheelConfigurationValue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.org/",
			"DriveWheelConfigurationValue"
		);
	}
};
