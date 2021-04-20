/**
 * Schema.org/ReactAction
 * The act of responding instinctively and emotionally to an object, expressing a sentiment.
 *
 * @author schema.org
 * @class ReactAction
 * @module org.schema
 */
module.exports = class ReactAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReactAction");
	}

}