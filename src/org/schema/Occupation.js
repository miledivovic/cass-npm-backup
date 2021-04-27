/**
 * Schema.org/Occupation
 * A profession, may involve prolonged training and/or a formal qualification.
 *
 * @author schema.org
 * @class Occupation
 * @module org.schema
 */
module.exports = class Occupation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Occupation");
	}
};
