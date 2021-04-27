/**
 * Schema.org/ReadAction
 * The act of consuming written content.
 *
 * @author schema.org
 * @class ReadAction
 * @module org.schema
 */
module.exports = class ReadAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ReadAction");
	}
};
