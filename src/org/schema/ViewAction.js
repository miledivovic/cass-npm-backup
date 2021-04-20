/**
 * Schema.org/ViewAction
 * The act of consuming static visual content.
 *
 * @author schema.org
 * @class ViewAction
 * @module org.schema
 */
module.exports = class ViewAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ViewAction");
	}

}