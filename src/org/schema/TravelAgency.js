/**
 * Schema.org/TravelAgency
 * A travel agency.
 *
 * @author schema.org
 * @class TravelAgency
 * @module org.schema
 */
public class TravelAgency extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TravelAgency";
	}

}