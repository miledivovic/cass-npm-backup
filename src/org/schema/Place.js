/**
 * Schema.org/Place
 * Entities that have a somewhat fixed, physical extension.
 *
 * @author schema.org
 * @class Place
 * @module org.schema
 */
public class Place extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Place";
	}

}