/**
 * Schema.org/Trip
 * A trip or journey. An itinerary of visits to one or more places.
 *
 * @author schema.org
 * @class Trip
 * @module org.schema
 */
public class Trip extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Trip";
	}

}