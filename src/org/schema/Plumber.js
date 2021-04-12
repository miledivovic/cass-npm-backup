/**
 * Schema.org/Plumber
 * A plumbing service.
 *
 * @author schema.org
 * @class Plumber
 * @module org.schema
 */
public class Plumber extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Plumber";
	}

}