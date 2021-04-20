/**
 * Schema.org/PerformAction
 * The act of participating in performance arts.
 *
 * @author schema.org
 * @class PerformAction
 * @module org.schema
 */
module.exports = class PerformAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PerformAction");
	}

}