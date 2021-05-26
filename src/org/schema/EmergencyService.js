const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/EmergencyService
 * An emergency service, such as a fire station or ER.
 *
 * @author schema.org
 * @class EmergencyService
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class EmergencyService extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EmergencyService");
	}

}