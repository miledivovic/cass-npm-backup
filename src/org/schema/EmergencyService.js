/**
 * Schema.org/EmergencyService
 * An emergency service, such as a fire station or ER.
 *
 * @author schema.org
 * @class EmergencyService
 * @module org.schema
 */
public class EmergencyService extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EmergencyService";
	}

}