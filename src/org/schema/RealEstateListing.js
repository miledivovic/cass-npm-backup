const schema = {};
schema.WebPage = require("./WebPage.js");
/**
 * Schema.org/RealEstateListing
 * A [[RealEstateListing]] is a listing that describes one or more real-estate [[Offer]]s (whose [[businessFunction]] is typically to lease out, or to sell).
  The [[RealEstateListing]] type itself represents the overall listing, as manifested in some [[WebPage]].
  
 *
 * @author schema.org
 * @class RealEstateListing
 * @module org.schema
 * @extends WebPage
 */
module.exports = class RealEstateListing extends schema.WebPage {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RealEstateListing");
	}

	/**
	 * Schema.org/leaseLength
	 * Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.
	 *
	 * @property leaseLength
	 * @type QuantitativeValue
	 */
	leaseLength;

	/**
	 * Schema.org/datePosted
	 * Publication date of an online listing.
	 *
	 * @property datePosted
	 * @type Date
	 */
	datePosted;

}