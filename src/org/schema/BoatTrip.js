/**
 * Schema.org/BoatTrip
 * A trip on a commercial ferry line.
 *
 * @author schema.org
 * @class BoatTrip
 * @module org.schema
 */
public class BoatTrip extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BoatTrip";
	}

}