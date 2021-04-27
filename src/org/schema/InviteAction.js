/**
 * Schema.org/InviteAction
 * The act of asking someone to attend an event. Reciprocal of RsvpAction.
 *
 * @author schema.org
 * @class InviteAction
 * @module org.schema
 */
module.exports = class InviteAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "InviteAction");
	}
};
