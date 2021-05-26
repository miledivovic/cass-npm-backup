const schema = {};
schema.SoftwareApplication = require("./SoftwareApplication.js");
/**
 * Schema.org/MobileApplication
 * A software application designed specifically to work well on a mobile device such as a telephone.
 *
 * @author schema.org
 * @class MobileApplication
 * @module org.schema
 * @extends SoftwareApplication
 */
module.exports = class MobileApplication extends schema.SoftwareApplication {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MobileApplication");
	}

	/**
	 * Schema.org/carrierRequirements
	 * Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network).
	 *
	 * @property carrierRequirements
	 * @type Text
	 */
	carrierRequirements;

}