const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/DryCleaningOrLaundry
 * A dry-cleaning business.
 *
 * @author schema.org
 * @class DryCleaningOrLaundry
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class DryCleaningOrLaundry extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DryCleaningOrLaundry");
	}

}