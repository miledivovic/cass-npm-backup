/**
 * Schema.org/Park
 * A park.
 *
 * @author schema.org
 * @class Park
 * @module org.schema
 */
public class Park extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Park";
	}

}