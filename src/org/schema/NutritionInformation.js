/**
 *  Schema.org/NutritionInformation
 *  Nutritional information about the recipe.
 * 
 *  @author schema.org
 *  @class NutritionInformation
 *  @module org.schema
 *  @extends StructuredValue
 */
var NutritionInformation = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    StructuredValue.call(this);
    this.context = "http://schema.org/";
    this.type = "NutritionInformation";
};
NutritionInformation = stjs.extend(NutritionInformation, StructuredValue, [], function(constructor, prototype) {
    /**
     *  Schema.org/saturatedFatContent
     *  The number of grams of saturated fat.
     * 
     *  @property saturatedFatContent
     *  @type Mass
     */
    prototype.saturatedFatContent = null;
    /**
     *  Schema.org/fatContent
     *  The number of grams of fat.
     * 
     *  @property fatContent
     *  @type Mass
     */
    prototype.fatContent = null;
    /**
     *  Schema.org/unsaturatedFatContent
     *  The number of grams of unsaturated fat.
     * 
     *  @property unsaturatedFatContent
     *  @type Mass
     */
    prototype.unsaturatedFatContent = null;
    /**
     *  Schema.org/sugarContent
     *  The number of grams of sugar.
     * 
     *  @property sugarContent
     *  @type Mass
     */
    prototype.sugarContent = null;
    /**
     *  Schema.org/cholesterolContent
     *  The number of milligrams of cholesterol.
     * 
     *  @property cholesterolContent
     *  @type Mass
     */
    prototype.cholesterolContent = null;
    /**
     *  Schema.org/carbohydrateContent
     *  The number of grams of carbohydrates.
     * 
     *  @property carbohydrateContent
     *  @type Mass
     */
    prototype.carbohydrateContent = null;
    /**
     *  Schema.org/proteinContent
     *  The number of grams of protein.
     * 
     *  @property proteinContent
     *  @type Mass
     */
    prototype.proteinContent = null;
    /**
     *  Schema.org/sodiumContent
     *  The number of milligrams of sodium.
     * 
     *  @property sodiumContent
     *  @type Mass
     */
    prototype.sodiumContent = null;
    /**
     *  Schema.org/transFatContent
     *  The number of grams of trans fat.
     * 
     *  @property transFatContent
     *  @type Mass
     */
    prototype.transFatContent = null;
    /**
     *  Schema.org/fiberContent
     *  The number of grams of fiber.
     * 
     *  @property fiberContent
     *  @type Mass
     */
    prototype.fiberContent = null;
    /**
     *  Schema.org/calories
     *  The number of calories.
     * 
     *  @property calories
     *  @type Energy
     */
    prototype.calories = null;
    /**
     *  Schema.org/servingSize
     *  The serving size, in terms of the number of volume or mass.
     * 
     *  @property servingSize
     *  @type Text
     */
    prototype.servingSize = null;
}, {saturatedFatContent: "Mass", fatContent: "Mass", unsaturatedFatContent: "Mass", sugarContent: "Mass", cholesterolContent: "Mass", carbohydrateContent: "Mass", proteinContent: "Mass", sodiumContent: "Mass", transFatContent: "Mass", fiberContent: "Mass", calories: "Energy", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
