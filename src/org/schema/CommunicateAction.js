/**
 * Schema.org/CommunicateAction
 * The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.
 *
 * @author schema.org
 * @class CommunicateAction
 * @module org.schema
 */
module.exports = class CommunicateAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CommunicateAction";
	}

}