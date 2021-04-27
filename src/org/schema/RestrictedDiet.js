/**
 * Schema.org/RestrictedDiet
 * A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons.
 *
 * @author schema.org
 * @class RestrictedDiet
 * @module org.schema
 */
module.exports = class RestrictedDiet extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "RestrictedDiet");
	}
};
