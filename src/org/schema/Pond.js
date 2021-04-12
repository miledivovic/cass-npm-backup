/**
 * Schema.org/Pond
 * A pond.
 *
 * @author schema.org
 * @class Pond
 * @module org.schema
 */
public class Pond extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Pond";
	}

}