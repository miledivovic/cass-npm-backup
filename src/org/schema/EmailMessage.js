/**
 * Schema.org/EmailMessage
 * An email message.
 *
 * @author schema.org
 * @class EmailMessage
 * @module org.schema
 */
module.exports = class EmailMessage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EmailMessage");
	}

}