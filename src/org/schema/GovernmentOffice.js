/**
 * Schema.org/GovernmentOffice
 * A government office&#x2014;for example, an IRS or DMV office.
 *
 * @author schema.org
 * @class GovernmentOffice
 * @module org.schema
 */
module.exports = class GovernmentOffice extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GovernmentOffice");
	}

}