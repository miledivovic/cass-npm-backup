/**
 * Schema.org/Audiobook
 * An audiobook.
 *
 * @author schema.org
 * @class Audiobook
 * @module org.schema
 * @extends AudioObject
 */
public class Audiobook extends schema.AudioObject {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Audiobook";
	}

}