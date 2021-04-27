/**
 * Schema.org/SingleFamilyResidence
 * Residence type: Single-family home.
 *
 * @author schema.org
 * @class SingleFamilyResidence
 * @module org.schema
 */
module.exports = class SingleFamilyResidence extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "SingleFamilyResidence");
	}
};
