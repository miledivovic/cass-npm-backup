/**
 * Schema.org/InformAction
 * The act of notifying someone of information pertinent to them, with no expectation of a response.
 *
 * @author schema.org
 * @class InformAction
 * @module org.schema
 */
module.exports = class InformAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InformAction");
	}

}