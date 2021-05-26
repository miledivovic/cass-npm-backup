const schema = {};
schema.ControlAction = require("./ControlAction.js");
/**
 * Schema.org/DeactivateAction
 * The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight).
 *
 * @author schema.org
 * @class DeactivateAction
 * @module org.schema
 * @extends ControlAction
 */
module.exports = class DeactivateAction extends schema.ControlAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DeactivateAction");
	}

}