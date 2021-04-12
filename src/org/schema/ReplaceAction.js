/**
 * Schema.org/ReplaceAction
 * The act of editing a recipient by replacing an old object with a new object.
 *
 * @author schema.org
 * @class ReplaceAction
 * @module org.schema
 */
public class ReplaceAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ReplaceAction";
	}

}