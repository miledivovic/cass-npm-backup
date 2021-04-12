/**
 * Schema.org/Library
 * A library.
 *
 * @author schema.org
 * @class Library
 * @module org.schema
 */
public class Library extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Library";
	}

}