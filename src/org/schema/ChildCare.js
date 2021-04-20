/**
 * Schema.org/ChildCare
 * A Childcare center.
 *
 * @author schema.org
 * @class ChildCare
 * @module org.schema
 */
module.exports = class ChildCare extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ChildCare");
	}

}