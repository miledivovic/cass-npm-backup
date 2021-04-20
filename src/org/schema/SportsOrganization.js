/**
 * Schema.org/SportsOrganization
 * Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations.
 *
 * @author schema.org
 * @class SportsOrganization
 * @module org.schema
 */
module.exports = class SportsOrganization extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SportsOrganization");
	}

}