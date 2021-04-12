/**
 * Schema.org/NutritionInformation
 * Nutritional information about the recipe.
 *
 * @author schema.org
 * @class NutritionInformation
 * @module org.schema
 */
public class NutritionInformation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "NutritionInformation";
	}

}