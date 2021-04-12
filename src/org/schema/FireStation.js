/**
 * Schema.org/FireStation
 * A fire station. With firemen.
 *
 * @author schema.org
 * @class FireStation
 * @module org.schema
 * @extends EmergencyService
 */
public class FireStation extends schema.EmergencyService {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "FireStation";
	}

}