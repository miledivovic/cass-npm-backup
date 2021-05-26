const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/ActionAccessSpecification
 * A set of requirements that a must be fulfilled in order to perform an Action.
 *
 * @author schema.org
 * @class ActionAccessSpecification
 * @module org.schema
 * @extends Intangible
 */
module.exports = class ActionAccessSpecification extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ActionAccessSpecification");
	}

	/**
	 * Schema.org/expectsAcceptanceOf
	 * An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.
	 *
	 * @property expectsAcceptanceOf
	 * @type Offer
	 */
	expectsAcceptanceOf;

	/**
	 * Schema.org/eligibleRegion
	 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
    
	 *
	 * @property eligibleRegion
	 * @type Place
	 */
	eligibleRegion;

	/**
	 * Schema.org/availabilityEnds
	 * The end of the availability of the product or service included in the offer.
	 *
	 * @property availabilityEnds
	 * @type Time
	 */
	availabilityEnds;

	/**
	 * Schema.org/availabilityStarts
	 * The beginning of the availability of the product or service included in the offer.
	 *
	 * @property availabilityStarts
	 * @type Date
	 */
	availabilityStarts;

	/**
	 * Schema.org/ineligibleRegion
	 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
      
	 *
	 * @property ineligibleRegion
	 * @type GeoShape
	 */
	ineligibleRegion;

	/**
	 * Schema.org/category
	 * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
	 *
	 * @property category
	 * @type Text
	 */
	category;

	/**
	 * Schema.org/requiresSubscription
	 * Indicates if use of the media require a subscription  (either paid or free). Allowed values are ```true``` or ```false``` (note that an earlier version had 'yes', 'no').
	 *
	 * @property requiresSubscription
	 * @type Boolean
	 */
	requiresSubscription;

}