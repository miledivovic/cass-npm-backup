/**
 * Schema.org/BoardingPolicyType
 * A type of boarding policy used by an airline.
 *
 * @author schema.org
 * @class BoardingPolicyType
 * @module org.schema
 */
module.exports = class BoardingPolicyType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BoardingPolicyType");
	}

}