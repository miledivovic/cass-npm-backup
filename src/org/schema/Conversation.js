/**
 * Schema.org/Conversation
 * One or more messages between organizations or people on a particular topic. Individual messages can be linked to the conversation with isPartOf or hasPart properties.
 *
 * @author schema.org
 * @class Conversation
 * @module org.schema
 */
module.exports = class Conversation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Conversation");
	}

}