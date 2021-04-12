/**
 * Schema.org/LodgingBusiness
 * A lodging business, such as a motel, hotel, or inn.
 *
 * @author schema.org
 * @class LodgingBusiness
 * @module org.schema
 */
public class LodgingBusiness extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "LodgingBusiness";
	}

}