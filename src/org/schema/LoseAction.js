/**
 * Schema.org/LoseAction
 * The act of being defeated in a competitive activity.
 *
 * @author schema.org
 * @class LoseAction
 * @module org.schema
 */
module.exports = class LoseAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "LoseAction");
	}
};
