/**
 * Schema.org/TravelAgency
 * A travel agency.
 *
 * @author schema.org
 * @class TravelAgency
 * @module org.schema
 */
module.exports = class TravelAgency extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TravelAgency");
	}

}