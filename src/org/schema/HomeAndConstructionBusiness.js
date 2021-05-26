const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/HomeAndConstructionBusiness
 * A construction business.\n\nA HomeAndConstructionBusiness is a [[LocalBusiness]] that provides services around homes and buildings.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
 *
 * @author schema.org
 * @class HomeAndConstructionBusiness
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class HomeAndConstructionBusiness extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HomeAndConstructionBusiness");
	}

}