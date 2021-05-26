const schema = {};
schema.Organization = require("./Organization.js");
/**
 * Schema.org/SportsOrganization
 * Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations.
 *
 * @author schema.org
 * @class SportsOrganization
 * @module org.schema
 * @extends Organization
 */
module.exports = class SportsOrganization extends schema.Organization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SportsOrganization");
	}

	/**
	 * Schema.org/sport
	 * A type of sport (e.g. Baseball).
	 *
	 * @property sport
	 * @type URL
	 */
	sport;

}