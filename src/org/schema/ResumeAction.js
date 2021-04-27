/**
 * Schema.org/ResumeAction
 * The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer).
 *
 * @author schema.org
 * @class ResumeAction
 * @module org.schema
 */
module.exports = class ResumeAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ResumeAction");
	}
};
