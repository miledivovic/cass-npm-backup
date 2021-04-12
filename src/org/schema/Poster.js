/**
 * Schema.org/Poster
 * A large, usually printed placard, bill, or announcement, often illustrated, that is posted to advertise or publicize something.
 *
 * @author schema.org
 * @class Poster
 * @module org.schema
 */
public class Poster extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Poster";
	}

}