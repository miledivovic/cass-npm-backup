/**
 * Schema.org/SuspendAction
 * The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer).
 *
 * @author schema.org
 * @class SuspendAction
 * @module org.schema
 */
module.exports = class SuspendAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SuspendAction";
	}

}