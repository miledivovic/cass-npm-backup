/**
 * Schema.org/GenderType
 * An enumeration of genders.
 *
 * @author schema.org
 * @class GenderType
 * @module org.schema
 */
module.exports = class GenderType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "GenderType");
	}
};
