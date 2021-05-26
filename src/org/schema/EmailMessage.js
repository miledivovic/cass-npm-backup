const schema = {};
schema.Message = require("./Message.js");
/**
 * Schema.org/EmailMessage
 * An email message.
 *
 * @author schema.org
 * @class EmailMessage
 * @module org.schema
 * @extends Message
 */
module.exports = class EmailMessage extends schema.Message {
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