/**
 * Schema.org/DonateAction
 * The act of providing goods, services, or money without compensation, often for philanthropic reasons.
 *
 * @author schema.org
 * @class DonateAction
 * @module org.schema
 */
module.exports = class DonateAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DonateAction");
	}

}