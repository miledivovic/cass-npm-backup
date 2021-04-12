/**
 * Schema.org/RealEstateAgent
 * A real-estate agent.
 *
 * @author schema.org
 * @class RealEstateAgent
 * @module org.schema
 */
public class RealEstateAgent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "RealEstateAgent";
	}

}