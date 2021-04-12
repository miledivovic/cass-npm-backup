/**
 * Schema.org/Airport
 * An airport.
 *
 * @author schema.org
 * @class Airport
 * @module org.schema
 */
public class Airport extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Airport";
	}

}