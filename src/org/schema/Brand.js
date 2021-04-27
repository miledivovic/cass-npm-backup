/**
 * Schema.org/Brand
 * A brand is a name used by an organization or business person for labeling a product, product group, or similar.
 *
 * @author schema.org
 * @class Brand
 * @module org.schema
 */
module.exports = class Brand extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Brand");
	}
};
