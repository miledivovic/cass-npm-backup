/**
 * Schema.org/HairSalon
 * A hair salon.
 *
 * @author schema.org
 * @class HairSalon
 * @module org.schema
 */
public class HairSalon extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HairSalon";
	}

}