const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/FoodEstablishment
 * A food-related business.
 *
 * @author schema.org
 * @class FoodEstablishment
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class FoodEstablishment extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FoodEstablishment");
	}

	/**
	 * Schema.org/servesCuisine
	 * The cuisine of the restaurant.
	 *
	 * @property servesCuisine
	 * @type Text
	 */
	servesCuisine;

	/**
	 * Schema.org/starRating
	 * An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars).
	 *
	 * @property starRating
	 * @type Rating
	 */
	starRating;

	/**
	 * Schema.org/menu
	 * Either the actual menu as a structured representation, as text, or a URL of the menu.
	 *
	 * @property menu
	 * @type Menu
	 */
	menu;

	/**
	 * Schema.org/acceptsReservations
	 * Indicates whether a FoodEstablishment accepts reservations. Values can be Boolean, an URL at which reservations can be made or (for backwards compatibility) the strings ```Yes``` or ```No```.
	 *
	 * @property acceptsReservations
	 * @type URL
	 */
	acceptsReservations;

	/**
	 * Schema.org/hasMenu
	 * Either the actual menu as a structured representation, as text, or a URL of the menu.
	 *
	 * @property hasMenu
	 * @type Menu
	 */
	hasMenu;

}