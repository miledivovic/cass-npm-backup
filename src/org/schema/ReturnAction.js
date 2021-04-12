/**
 * Schema.org/ReturnAction
 * The act of returning to the origin that which was previously received (concrete objects) or taken (ownership).
 *
 * @author schema.org
 * @class ReturnAction
 * @module org.schema
 */
public class ReturnAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ReturnAction";
	}

}