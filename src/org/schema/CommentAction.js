/**
 * Schema.org/CommentAction
 * The act of generating a comment about a subject.
 *
 * @author schema.org
 * @class CommentAction
 * @module org.schema
 */
module.exports = class CommentAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "CommentAction");
	}
};
