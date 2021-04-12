/**
 * Schema.org/Zoo
 * A zoo.
 *
 * @author schema.org
 * @class Zoo
 * @module org.schema
 */
public class Zoo extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Zoo";
	}

}