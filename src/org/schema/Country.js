/**
 * Schema.org/Country
 * A country.
 *
 * @author schema.org
 * @class Country
 * @module org.schema
 */
public class Country extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Country";
	}

}