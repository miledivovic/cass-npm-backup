/**
 * Schema.org/APIReference
 * Reference documentation for application programming interfaces (APIs).
 *
 * @author schema.org
 * @class APIReference
 * @module org.schema
 */
public class APIReference extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "APIReference";
	}

}