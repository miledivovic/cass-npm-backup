/**
 * Schema.org/Flight
 * An airline flight.
 *
 * @author schema.org
 * @class Flight
 * @module org.schema
 */
public class Flight extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Flight";
	}

}