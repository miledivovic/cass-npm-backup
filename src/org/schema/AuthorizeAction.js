/**
 * Schema.org/AuthorizeAction
 * The act of granting permission to an object.
 *
 * @author schema.org
 * @class AuthorizeAction
 * @module org.schema
 */
public class AuthorizeAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AuthorizeAction";
	}

}