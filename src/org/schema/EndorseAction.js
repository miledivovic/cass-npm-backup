/**
 * Schema.org/EndorseAction
 * An agent approves/certifies/likes/supports/sanction an object.
 *
 * @author schema.org
 * @class EndorseAction
 * @module org.schema
 */
module.exports = class EndorseAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EndorseAction");
	}

}