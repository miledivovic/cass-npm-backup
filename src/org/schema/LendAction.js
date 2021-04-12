/**
 * Schema.org/LendAction
 * The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.\n\nRelated actions:\n\n* [[BorrowAction]]: Reciprocal of LendAction.
 *
 * @author schema.org
 * @class LendAction
 * @module org.schema
 */
public class LendAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "LendAction";
	}

}