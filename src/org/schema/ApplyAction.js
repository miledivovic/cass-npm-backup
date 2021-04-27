/**
 * Schema.org/ApplyAction
 * The act of registering to an organization/service without the guarantee to receive it.\n\nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted.
 *
 * @author schema.org
 * @class ApplyAction
 * @module org.schema
 */
module.exports = class ApplyAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ApplyAction");
	}
};
