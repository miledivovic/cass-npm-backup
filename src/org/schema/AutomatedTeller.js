/**
 * Schema.org/AutomatedTeller
 * ATM/cash machine.
 *
 * @author schema.org
 * @class AutomatedTeller
 * @module org.schema
 */
module.exports = class AutomatedTeller extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AutomatedTeller");
	}

}