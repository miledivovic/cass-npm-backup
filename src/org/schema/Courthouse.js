/**
 * Schema.org/Courthouse
 * A courthouse.
 *
 * @author schema.org
 * @class Courthouse
 * @module org.schema
 */
public class Courthouse extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Courthouse";
	}

}