const schema = {};
schema.CreateAction = require("./CreateAction.js");
/**
 * Schema.org/CookAction
 * The act of producing/preparing food.
 *
 * @author schema.org
 * @class CookAction
 * @module org.schema
 * @extends CreateAction
 */
module.exports = class CookAction extends schema.CreateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CookAction");
	}

	/**
	 * Schema.org/foodEvent
	 * A sub property of location. The specific food event where the action occurred.
	 *
	 * @property foodEvent
	 * @type FoodEvent
	 */
	foodEvent;

	/**
	 * Schema.org/recipe
	 * A sub property of instrument. The recipe/instructions used to perform the action.
	 *
	 * @property recipe
	 * @type Recipe
	 */
	recipe;

	/**
	 * Schema.org/foodEstablishment
	 * A sub property of location. The specific food establishment where the action occurred.
	 *
	 * @property foodEstablishment
	 * @type Place
	 */
	foodEstablishment;

}