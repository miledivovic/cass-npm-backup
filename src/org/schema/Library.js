const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/Library
 * A library.
 *
 * @author schema.org
 * @class Library
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class Library extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Library");
	}

}