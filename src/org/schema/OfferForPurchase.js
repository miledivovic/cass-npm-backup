const schema = {};
schema.Offer = require("./Offer.js");
/**
 * Schema.org/OfferForPurchase
 * An [[OfferForPurchase]] in Schema.org represents an [[Offer]] to sell something, i.e. an [[Offer]] whose
  [[businessFunction]] is [sell](http://purl.org/goodrelations/v1#Sell.). See [Good Relations](https://en.wikipedia.org/wiki/GoodRelations) for
  background on the underlying concepts.
  
 *
 * @author schema.org
 * @class OfferForPurchase
 * @module org.schema
 * @extends Offer
 */
module.exports = class OfferForPurchase extends schema.Offer {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OfferForPurchase");
	}

}