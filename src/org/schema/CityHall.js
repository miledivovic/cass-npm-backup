/**
 * Schema.org/CityHall
 * A city hall.
 *
 * @author schema.org
 * @class CityHall
 * @module org.schema
 */
public class CityHall extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CityHall";
	}

}