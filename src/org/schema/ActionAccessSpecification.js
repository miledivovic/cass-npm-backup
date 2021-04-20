/**
 * Schema.org/ActionAccessSpecification
 * A set of requirements that a must be fulfilled in order to perform an Action.
 *
 * @author schema.org
 * @class ActionAccessSpecification
 * @module org.schema
 */
module.exports = class ActionAccessSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ActionAccessSpecification");
	}

}