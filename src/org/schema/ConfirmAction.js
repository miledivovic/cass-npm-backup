/**
 * Schema.org/ConfirmAction
 * The act of notifying someone that a future event/action is going to happen as expected.\n\nRelated actions:\n\n* [[CancelAction]]: The antonym of ConfirmAction.
 *
 * @author schema.org
 * @class ConfirmAction
 * @module org.schema
 */
module.exports = class ConfirmAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ConfirmAction";
	}

}