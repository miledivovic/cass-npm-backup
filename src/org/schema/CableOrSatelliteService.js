const schema = {};
schema.Service = require("./Service.js");
/**
 * Schema.org/CableOrSatelliteService
 * A service which provides access to media programming like TV or radio. Access may be via cable or satellite.
 *
 * @author schema.org
 * @class CableOrSatelliteService
 * @module org.schema
 * @extends Service
 */
module.exports = class CableOrSatelliteService extends schema.Service {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CableOrSatelliteService");
	}

}