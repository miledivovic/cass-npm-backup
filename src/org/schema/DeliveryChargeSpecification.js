const schema = {};
schema.PriceSpecification = require("./PriceSpecification.js");
/**
 * Schema.org/DeliveryChargeSpecification
 * The price for the delivery of an offer using a particular delivery method.
 *
 * @author schema.org
 * @class DeliveryChargeSpecification
 * @module org.schema
 * @extends PriceSpecification
 */
module.exports = class DeliveryChargeSpecification extends schema.PriceSpecification {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DeliveryChargeSpecification");
	}

	/**
	 * Schema.org/eligibleRegion
	 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
    
	 *
	 * @property eligibleRegion
	 * @type Place
	 */
	eligibleRegion;

	/**
	 * Schema.org/areaServed
	 * The geographic area where a service or offered item is provided.
	 *
	 * @property areaServed
	 * @type Place
	 */
	areaServed;

	/**
	 * Schema.org/appliesToDeliveryMethod
	 * The delivery method(s) to which the delivery charge or payment charge specification applies.
	 *
	 * @property appliesToDeliveryMethod
	 * @type DeliveryMethod
	 */
	appliesToDeliveryMethod;

	/**
	 * Schema.org/ineligibleRegion
	 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
      
	 *
	 * @property ineligibleRegion
	 * @type GeoShape
	 */
	ineligibleRegion;

}