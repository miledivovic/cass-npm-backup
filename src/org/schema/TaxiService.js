/**
 * Schema.org/TaxiService
 * A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled.
 *
 * @author schema.org
 * @class TaxiService
 * @module org.schema
 */
public class TaxiService extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TaxiService";
	}

}