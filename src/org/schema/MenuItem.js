/**
 *  Schema.org/MenuItem
 *  A food or drink item listed in a menu or menu section.
 * 
 *  @author schema.org
 *  @class MenuItem
 *  @module org.schema
 *  @extends Intangible
 */
var MenuItem = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "MenuItem";
};
MenuItem = stjs.extend(MenuItem, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/nutrition
     *  Nutrition information about the recipe or menu item.
     * 
     *  @property nutrition
     *  @type NutritionInformation
     */
    nutrition = null;
    /**
     *  Schema.org/offers
     *  An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event.
     * 
     *  @property offers
     *  @type Offer
     */
    offers = null;
    /**
     *  Schema.org/suitableForDiet
     *  Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.
     * 
     *  @property suitableForDiet
     *  @type RestrictedDiet
     */
    suitableForDiet = null;
}, {nutrition: "NutritionInformation", offers: "Offer", suitableForDiet: "RestrictedDiet", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
