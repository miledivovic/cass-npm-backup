/**
 * Schema.org/UpdateAction
 * The act of managing by changing/editing the state of the object.
 *
 * @author schema.org
 * @class UpdateAction
 * @module org.schema
 */
public class UpdateAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "UpdateAction";
	}

}