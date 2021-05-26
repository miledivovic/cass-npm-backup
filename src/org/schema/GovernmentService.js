const schema = {};
schema.Service = require("./Service.js");
/**
 * Schema.org/GovernmentService
 * A service provided by a government organization, e.g. food stamps, veterans benefits, etc.
 *
 * @author schema.org
 * @class GovernmentService
 * @module org.schema
 * @extends Service
 */
module.exports = class GovernmentService extends schema.Service {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GovernmentService");
	}

	/**
	 * Schema.org/serviceOperator
	 * The operating organization, if different from the provider.  This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor.
	 *
	 * @property serviceOperator
	 * @type Organization
	 */
	serviceOperator;

	/**
	 * Schema.org/jurisdiction
	 * Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based.
	 *
	 * @property jurisdiction
	 * @type AdministrativeArea
	 */
	jurisdiction;

}