/**
 * Schema.org/City
 * A city or town.
 *
 * @author schema.org
 * @class City
 * @module org.schema
 */
public class City extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "City";
	}

}