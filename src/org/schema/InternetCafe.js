const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/InternetCafe
 * An internet cafe.
 *
 * @author schema.org
 * @class InternetCafe
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class InternetCafe extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InternetCafe");
	}

}