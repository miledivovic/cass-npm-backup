/**
 * Schema.org/RealEstateAgent
 * A real-estate agent.
 *
 * @author schema.org
 * @class RealEstateAgent
 * @module org.schema
 */
module.exports = class RealEstateAgent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RealEstateAgent");
	}

}