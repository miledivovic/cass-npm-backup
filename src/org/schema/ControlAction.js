/**
 * Schema.org/ControlAction
 * An agent controls a device or application.
 *
 * @author schema.org
 * @class ControlAction
 * @module org.schema
 */
public class ControlAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ControlAction";
	}

}