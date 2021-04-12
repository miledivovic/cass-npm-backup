/**
 * Schema.org/Recipe
 * A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet]]. The [[keywords]] property can also be used to add more detail.
 *
 * @author schema.org
 * @class Recipe
 * @module org.schema
 */
public class Recipe extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Recipe";
	}

}