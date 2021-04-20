/**
 * Schema.org/Organization
 * An organization such as a school, NGO, corporation, club, etc.
 *
 * @author schema.org
 * @class Organization
 * @module org.schema
 */
module.exports = class Organization extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Organization");
	}

}