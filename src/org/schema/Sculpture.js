/**
 * Schema.org/Sculpture
 * A piece of sculpture.
 *
 * @author schema.org
 * @class Sculpture
 * @module org.schema
 */
public class Sculpture extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Sculpture";
	}

}