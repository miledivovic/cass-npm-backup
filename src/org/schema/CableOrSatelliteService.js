/**
 * Schema.org/CableOrSatelliteService
 * A service which provides access to media programming like TV or radio. Access may be via cable or satellite.
 *
 * @author schema.org
 * @class CableOrSatelliteService
 * @module org.schema
 */
public class CableOrSatelliteService extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CableOrSatelliteService";
	}

}