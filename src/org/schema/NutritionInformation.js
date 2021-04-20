/**
 * Schema.org/NutritionInformation
 * Nutritional information about the recipe.
 *
 * @author schema.org
 * @class NutritionInformation
 * @module org.schema
 */
module.exports = class NutritionInformation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","NutritionInformation");
	}

}