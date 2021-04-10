/**
 *  Schema.org/CookAction
 *  The act of producing/preparing food.
 * 
 *  @author schema.org
 *  @class CookAction
 *  @module org.schema
 *  @extends CreateAction
 */
var CookAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "CookAction";
};
CookAction = stjs.extend(CookAction, CreateAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/recipe
     *  A sub property of instrument. The recipe/instructions used to perform the action.
     * 
     *  @property recipe
     *  @type Recipe
     */
    recipe = null;
    /**
     *  Schema.org/foodEvent
     *  A sub property of location. The specific food event where the action occurred.
     * 
     *  @property foodEvent
     *  @type FoodEvent
     */
    foodEvent = null;
    /**
     *  Schema.org/foodEstablishment
     *  A sub property of location. The specific food establishment where the action occurred.
     * 
     *  @property foodEstablishment
     *  @type FoodEstablishment
     */
    foodEstablishment = null;
}, {recipe: "Recipe", foodEvent: "FoodEvent", foodEstablishment: "FoodEstablishment", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
