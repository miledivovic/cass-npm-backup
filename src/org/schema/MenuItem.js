const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/MenuItem
 * A food or drink item listed in a menu or menu section.
 *
 * @author schema.org
 * @class MenuItem
 * @module org.schema
 * @extends Intangible
 */
module.exports = class MenuItem extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MenuItem");
	}

	/**
	 * Schema.org/offers
	 * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
      
	 *
	 * @property offers
	 * @type Demand
	 */
	offers;

	/**
	 * Schema.org/suitableForDiet
	 * Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.
	 *
	 * @property suitableForDiet
	 * @type RestrictedDiet
	 */
	suitableForDiet;

	/**
	 * Schema.org/menuAddOn
	 * Additional menu item(s) such as a side dish of salad or side order of fries that can be added to this menu item. Additionally it can be a menu section containing allowed add-on menu items for this menu item.
	 *
	 * @property menuAddOn
	 * @type MenuSection
	 */
	menuAddOn;

	/**
	 * Schema.org/nutrition
	 * Nutrition information about the recipe or menu item.
	 *
	 * @property nutrition
	 * @type NutritionInformation
	 */
	nutrition;

}