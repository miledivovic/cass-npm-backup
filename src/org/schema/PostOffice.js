const schema = {};
schema.GovernmentOffice = require("./GovernmentOffice.js");
/**
 * Schema.org/PostOffice
 * A post office.
 *
 * @author schema.org
 * @class PostOffice
 * @module org.schema
 * @extends GovernmentOffice
 */
module.exports = class PostOffice extends schema.GovernmentOffice {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PostOffice");
	}

}