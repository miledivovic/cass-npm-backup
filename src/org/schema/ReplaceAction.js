/**
 * Schema.org/ReplaceAction
 * The act of editing a recipient by replacing an old object with a new object.
 *
 * @author schema.org
 * @class ReplaceAction
 * @module org.schema
 */
module.exports = class ReplaceAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ReplaceAction");
	}
};
