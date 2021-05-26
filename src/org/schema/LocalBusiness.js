const schema = {};
schema.Place = require("./Place.js");
/**
 * Schema.org/LocalBusiness
 * A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc.
 *
 * @author schema.org
 * @class LocalBusiness
 * @module org.schema
 * @extends Place
 */
module.exports = class LocalBusiness extends schema.Place {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LocalBusiness");
	}

	/**
	 * Schema.org/currenciesAccepted
	 * The currency accepted.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
	 *
	 * @property currenciesAccepted
	 * @type Text
	 */
	currenciesAccepted;

	/**
	 * Schema.org/openingHours
	 * The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.\n\n* Days are specified using the following two-letter combinations: ```Mo```, ```Tu```, ```We```, ```Th```, ```Fr```, ```Sa```, ```Su```.\n* Times are specified using 24:00 format. For example, 3pm is specified as ```15:00```, 10am as ```10:00```. \n* Here is an example: <code>&lt;time itemprop="openingHours" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.\n* If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>.
	 *
	 * @property openingHours
	 * @type Text
	 */
	openingHours;

	/**
	 * Schema.org/paymentAccepted
	 * Cash, Credit Card, Cryptocurrency, Local Exchange Tradings System, etc.
	 *
	 * @property paymentAccepted
	 * @type Text
	 */
	paymentAccepted;

	/**
	 * Schema.org/priceRange
	 * The price range of the business, for example ```$$$```.
	 *
	 * @property priceRange
	 * @type Text
	 */
	priceRange;

	/**
	 * Schema.org/branchOf
	 * The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical)[[branch]].
	 *
	 * @property branchOf
	 * @type Organization
	 */
	branchOf;

}