/**
 * Schema.org/CommentAction
 * The act of generating a comment about a subject.
 *
 * @author schema.org
 * @class CommentAction
 * @module org.schema
 */
public class CommentAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CommentAction";
	}

}