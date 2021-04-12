/**
 * Schema.org/FindAction
 * The act of finding an object.\n\nRelated actions:\n\n* [[SearchAction]]: FindAction is generally lead by a SearchAction, but not necessarily.
 *
 * @author schema.org
 * @class FindAction
 * @module org.schema
 */
public class FindAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "FindAction";
	}

}