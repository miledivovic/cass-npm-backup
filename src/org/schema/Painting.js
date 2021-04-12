/**
 * Schema.org/Painting
 * A painting.
 *
 * @author schema.org
 * @class Painting
 * @module org.schema
 */
public class Painting extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Painting";
	}

}