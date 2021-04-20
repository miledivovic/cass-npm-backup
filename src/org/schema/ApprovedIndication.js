/**
 * Schema.org/ApprovedIndication
 * An indication for a medical therapy that has been formally specified or approved by a regulatory body that regulates use of the therapy; for example, the US FDA approves indications for most drugs in the US.
 *
 * @author schema.org
 * @class ApprovedIndication
 * @module org.schema
 */
module.exports = class ApprovedIndication extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ApprovedIndication");
	}

}