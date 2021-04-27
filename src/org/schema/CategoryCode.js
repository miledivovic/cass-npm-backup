/**
 * Schema.org/CategoryCode
 * A Category Code.
 *
 * @author schema.org
 * @class CategoryCode
 * @module org.schema
 */
module.exports = class CategoryCode extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "CategoryCode");
	}
};
