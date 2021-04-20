/**
 * Schema.org/ActivateAction
 * The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight).
 *
 * @author schema.org
 * @class ActivateAction
 * @module org.schema
 */
module.exports = class ActivateAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ActivateAction");
	}

}