/**
 * Schema.org/MovingCompany
 * A moving company.
 *
 * @author schema.org
 * @class MovingCompany
 * @module org.schema
 */
module.exports = class MovingCompany extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MovingCompany");
	}
};
