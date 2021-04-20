/**
 * Schema.org/OfferShippingDetails
 * OfferShippingDetails represents information about shipping destinations.

Multiple of these entities can be used to represent different shipping rates for different destinations:

One entity for Alaska/Hawaii. A different one for continental US.A different one for all France.

Multiple of these entities can be used to represent different shipping costs and delivery times.

Two entities that are identical but differ in rate and time:

e.g. Cheaper and slower: $5 in 5-7days
or Fast and expensive: $15 in 1-2 days.
 *
 * @author schema.org
 * @class OfferShippingDetails
 * @module org.schema
 */
module.exports = class OfferShippingDetails extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OfferShippingDetails");
	}

}