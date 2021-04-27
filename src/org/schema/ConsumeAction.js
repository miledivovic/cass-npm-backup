/**
 * Schema.org/ConsumeAction
 * The act of ingesting information/resources/food.
 *
 * @author schema.org
 * @class ConsumeAction
 * @module org.schema
 */
module.exports = class ConsumeAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ConsumeAction");
	}
};
