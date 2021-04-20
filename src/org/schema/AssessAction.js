/**
 * Schema.org/AssessAction
 * The act of forming one's opinion, reaction or sentiment.
 *
 * @author schema.org
 * @class AssessAction
 * @module org.schema
 */
module.exports = class AssessAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AssessAction");
	}

}