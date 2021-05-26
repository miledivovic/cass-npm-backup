const schema = {};
schema.LegalService = require("./LegalService.js");
/**
 * Schema.org/Attorney
 * Professional service: Attorney. \n\nThis type is deprecated - [[LegalService]] is more inclusive and less ambiguous.
 *
 * @author schema.org
 * @class Attorney
 * @module org.schema
 * @extends LegalService
 */
module.exports = class Attorney extends schema.LegalService {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Attorney");
	}

}