/**
 * Schema.org/Embassy
 * An embassy.
 *
 * @author schema.org
 * @class Embassy
 * @module org.schema
 */
public class Embassy extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Embassy";
	}

}