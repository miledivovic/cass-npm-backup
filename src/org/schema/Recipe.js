const schema = {};
schema.HowTo = require("./HowTo.js");
/**
 * Schema.org/Recipe
 * A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet]]. The [[keywords]] property can also be used to add more detail.
 *
 * @author schema.org
 * @class Recipe
 * @module org.schema
 * @extends HowTo
 */
module.exports = class Recipe extends schema.HowTo {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Recipe");
	}

	/**
	 * Schema.org/cookingMethod
	 * The method of cooking, such as Frying, Steaming, ...
	 *
	 * @property cookingMethod
	 * @type Text
	 */
	cookingMethod;

	/**
	 * Schema.org/recipeCuisine
	 * The cuisine of the recipe (for example, French or Ethiopian).
	 *
	 * @property recipeCuisine
	 * @type Text
	 */
	recipeCuisine;

	/**
	 * Schema.org/recipeIngredient
	 * A single ingredient used in the recipe, e.g. sugar, flour or garlic.
	 *
	 * @property recipeIngredient
	 * @type Text
	 */
	recipeIngredient;

	/**
	 * Schema.org/recipeYield
	 * The quantity produced by the recipe (for example, number of people served, number of servings, etc).
	 *
	 * @property recipeYield
	 * @type QuantitativeValue
	 */
	recipeYield;

	/**
	 * Schema.org/suitableForDiet
	 * Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.
	 *
	 * @property suitableForDiet
	 * @type RestrictedDiet
	 */
	suitableForDiet;

	/**
	 * Schema.org/cookTime
	 * The time it takes to actually cook the dish, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
	 *
	 * @property cookTime
	 * @type Duration
	 */
	cookTime;

	/**
	 * Schema.org/recipeCategory
	 * The category of the recipe—for example, appetizer, entree, etc.
	 *
	 * @property recipeCategory
	 * @type Text
	 */
	recipeCategory;

	/**
	 * Schema.org/recipeInstructions
	 * A step in making the recipe, in the form of a single item (document, video, etc.) or an ordered list with HowToStep and/or HowToSection items.
	 *
	 * @property recipeInstructions
	 * @type CreativeWork
	 */
	recipeInstructions;

	/**
	 * Schema.org/nutrition
	 * Nutrition information about the recipe or menu item.
	 *
	 * @property nutrition
	 * @type NutritionInformation
	 */
	nutrition;

	/**
	 * Schema.org/ingredients
	 * A single ingredient used in the recipe, e.g. sugar, flour or garlic.
	 *
	 * @property ingredients
	 * @type Text
	 */
	ingredients;

}