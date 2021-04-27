/**
 * Schema.org/AppendAction
 * The act of inserting at the end if an ordered collection.
 *
 * @author schema.org
 * @class AppendAction
 * @module org.schema
 */
module.exports = class AppendAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "AppendAction");
	}
};
