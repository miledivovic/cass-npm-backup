/**
 * Schema.org/SteeringPositionValue
 * A value indicating a steering position.
 *
 * @author schema.org
 * @class SteeringPositionValue
 * @module org.schema
 */
public class SteeringPositionValue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SteeringPositionValue";
	}

}