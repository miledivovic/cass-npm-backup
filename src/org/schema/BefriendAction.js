/**
 * Schema.org/BefriendAction
 * The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, BefriendAction implies that the connection is reciprocal.
 *
 * @author schema.org
 * @class BefriendAction
 * @module org.schema
 */
module.exports = class BefriendAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BefriendAction");
	}

}