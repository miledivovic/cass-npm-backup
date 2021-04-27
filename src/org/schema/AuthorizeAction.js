/**
 * Schema.org/AuthorizeAction
 * The act of granting permission to an object.
 *
 * @author schema.org
 * @class AuthorizeAction
 * @module org.schema
 */
module.exports = class AuthorizeAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "AuthorizeAction");
	}
};
