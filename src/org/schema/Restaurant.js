/**
 * Schema.org/Restaurant
 * A restaurant.
 *
 * @author schema.org
 * @class Restaurant
 * @module org.schema
 */
public class Restaurant extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Restaurant";
	}

}