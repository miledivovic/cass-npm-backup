const schema = {};
schema.Organization = require("./Organization.js");
/**
 * Schema.org/LibrarySystem
 * A [[LibrarySystem]] is a collaborative system amongst several libraries.
 *
 * @author schema.org
 * @class LibrarySystem
 * @module org.schema
 * @extends Organization
 */
module.exports = class LibrarySystem extends schema.Organization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LibrarySystem");
	}

}