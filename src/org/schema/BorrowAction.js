/**
 * Schema.org/BorrowAction
 * The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.\n\nRelated actions:\n\n* [[LendAction]]: Reciprocal of BorrowAction.
 *
 * @author schema.org
 * @class BorrowAction
 * @module org.schema
 */
module.exports = class BorrowAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BorrowAction");
	}

}