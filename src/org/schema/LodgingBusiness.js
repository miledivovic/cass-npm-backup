/**
 * Schema.org/LodgingBusiness
 * A lodging business, such as a motel, hotel, or inn.
 *
 * @author schema.org
 * @class LodgingBusiness
 * @module org.schema
 */
module.exports = class LodgingBusiness extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LodgingBusiness");
	}

}