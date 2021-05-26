const schema = {};
schema.Organization = require("./Organization.js");
/**
 * Schema.org/Consortium
 * A Consortium is a membership [[Organization]] whose members are typically Organizations.
 *
 * @author schema.org
 * @class Consortium
 * @module org.schema
 * @extends Organization
 */
module.exports = class Consortium extends schema.Organization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Consortium");
	}

}