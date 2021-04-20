/**
 * Schema.org/PayAction
 * An agent pays a price to a participant.
 *
 * @author schema.org
 * @class PayAction
 * @module org.schema
 */
module.exports = class PayAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PayAction");
	}

}