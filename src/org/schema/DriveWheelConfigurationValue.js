/**
 * Schema.org/DriveWheelConfigurationValue
 * A value indicating which roadwheels will receive torque.
 *
 * @author schema.org
 * @class DriveWheelConfigurationValue
 * @module org.schema
 */
public class DriveWheelConfigurationValue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DriveWheelConfigurationValue";
	}

}