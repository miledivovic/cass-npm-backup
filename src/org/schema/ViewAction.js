/**
 * Schema.org/ViewAction
 * The act of consuming static visual content.
 *
 * @author schema.org
 * @class ViewAction
 * @module org.schema
 */
public class ViewAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ViewAction";
	}

}