/**
 *  Schema.org/Recipe
 *  A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet]]. The [[keywords]] property can also be used to add more detail.
 * 
 *  @author schema.org
 *  @class Recipe
 *  @module org.schema
 *  @extends CreativeWork
 */
var Recipe = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "Recipe";
};
Recipe = stjs.extend(Recipe, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/recipeYield
     *  The quantity produced by the recipe (for example, number of people served, number of servings, etc).
     * 
     *  @property recipeYield
     *  @type Text
     */
    prototype.recipeYield = null;
    /**
     *  Schema.org/recipeCategory
     *  The category of the recipe—for example, appetizer, entree, etc.
     * 
     *  @property recipeCategory
     *  @type Text
     */
    prototype.recipeCategory = null;
    /**
     *  Schema.org/prepTime
     *  The length of time it takes to prepare the recipe, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
     * 
     *  @property prepTime
     *  @type Duration
     */
    prototype.prepTime = null;
    /**
     *  Schema.org/recipeIngredient
     *  A single ingredient used in the recipe, e.g. sugar, flour or garlic.
     * 
     *  @property recipeIngredient
     *  @type Text
     */
    prototype.recipeIngredient = null;
    /**
     *  Schema.org/recipeInstructions
     *  A step or instruction involved in making the recipe.
     * 
     *  @property recipeInstructions
     *  @type ItemList
     */
    prototype.recipeInstructions = null;
    /**
     *  Schema.org/nutrition
     *  Nutrition information about the recipe or menu item.
     * 
     *  @property nutrition
     *  @type NutritionInformation
     */
    prototype.nutrition = null;
    /**
     *  Schema.org/suitableForDiet
     *  Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.
     * 
     *  @property suitableForDiet
     *  @type RestrictedDiet
     */
    prototype.suitableForDiet = null;
    /**
     *  Schema.org/recipeCuisine
     *  The cuisine of the recipe (for example, French or Ethiopian).
     * 
     *  @property recipeCuisine
     *  @type Text
     */
    prototype.recipeCuisine = null;
    /**
     *  Schema.org/cookTime
     *  The time it takes to actually cook the dish, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
     * 
     *  @property cookTime
     *  @type Duration
     */
    prototype.cookTime = null;
    /**
     *  Schema.org/totalTime
     *  The total time it takes to prepare and cook the recipe, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
     * 
     *  @property totalTime
     *  @type Duration
     */
    prototype.totalTime = null;
    /**
     *  Schema.org/cookingMethod
     *  The method of cooking, such as Frying, Steaming, ...
     * 
     *  @property cookingMethod
     *  @type Text
     */
    prototype.cookingMethod = null;
    /**
     *  Schema.org/ingredients
     *  A single ingredient used in the recipe, e.g. sugar, flour or garlic.
     * 
     *  @property ingredients
     *  @type Text
     */
    prototype.ingredients = null;
}, {prepTime: "Duration", recipeInstructions: "ItemList", nutrition: "NutritionInformation", suitableForDiet: "RestrictedDiet", cookTime: "Duration", totalTime: "Duration", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
