/**
 * Schema.org/BusTrip
 * A trip on a commercial bus line.
 *
 * @author schema.org
 * @class BusTrip
 * @module org.schema
 */
public class BusTrip extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BusTrip";
	}

}