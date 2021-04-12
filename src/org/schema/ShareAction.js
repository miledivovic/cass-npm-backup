/**
 * Schema.org/ShareAction
 * The act of distributing content to people for their amusement or edification.
 *
 * @author schema.org
 * @class ShareAction
 * @module org.schema
 */
public class ShareAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ShareAction";
	}

}