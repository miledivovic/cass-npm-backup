/**
 * Schema.org/UseAction
 * The act of applying an object to its intended purpose.
 *
 * @author schema.org
 * @class UseAction
 * @module org.schema
 */
module.exports = class UseAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "UseAction");
	}
};
