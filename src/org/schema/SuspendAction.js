const schema = {};
schema.ControlAction = require("./ControlAction.js");
/**
 * Schema.org/SuspendAction
 * The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer).
 *
 * @author schema.org
 * @class SuspendAction
 * @module org.schema
 * @extends ControlAction
 */
module.exports = class SuspendAction extends schema.ControlAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SuspendAction");
	}

}