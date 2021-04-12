/**
 * Schema.org/PhysicalActivityCategory
 * Categories of physical activity, organized by physiologic classification.
 *
 * @author schema.org
 * @class PhysicalActivityCategory
 * @module org.schema
 */
module.exports = class PhysicalActivityCategory extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PhysicalActivityCategory";
	}

}