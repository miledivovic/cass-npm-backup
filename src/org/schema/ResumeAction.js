const schema = {};
schema.ControlAction = require("./ControlAction.js");
/**
 * Schema.org/ResumeAction
 * The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer).
 *
 * @author schema.org
 * @class ResumeAction
 * @module org.schema
 * @extends ControlAction
 */
module.exports = class ResumeAction extends schema.ControlAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ResumeAction");
	}

}