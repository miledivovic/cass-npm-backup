const schema = {};
schema.Offer = require("./Offer.js");
/**
 * Schema.org/OfferForLease
 * An [[OfferForLease]] in Schema.org represents an [[Offer]] to lease out something, i.e. an [[Offer]] whose
  [[businessFunction]] is [lease out](http://purl.org/goodrelations/v1#LeaseOut.). See [Good Relations](https://en.wikipedia.org/wiki/GoodRelations) for
  background on the underlying concepts.
  
 *
 * @author schema.org
 * @class OfferForLease
 * @module org.schema
 * @extends Offer
 */
module.exports = class OfferForLease extends schema.Offer {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OfferForLease");
	}

}