/**
 * Schema.org/Photograph
 * A photograph.
 *
 * @author schema.org
 * @class Photograph
 * @module org.schema
 */
public class Photograph extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Photograph";
	}

}