global.schema.Place = require("./Place.js");
/**
 * Schema.org/LocalBusiness
 * A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc.
 *
 * @author schema.org
 * @class LocalBusiness
 * @module org.schema
 * @extends Place
 */
module.exports = class LocalBusiness extends schema.Place {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "LocalBusiness");
	}
};
