/**
 * Schema.org/RealEstateListing
 * A [[RealEstateListing]] is a listing that describes one or more real-estate [[Offer]]s (whose [[businessFunction]] is typically to lease out, or to sell).
  The [[RealEstateListing]] type itself represents the overall listing, as manifested in some [[WebPage]].

 *
 * @author schema.org
 * @class RealEstateListing
 * @module org.schema
 */
module.exports = class RealEstateListing extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "RealEstateListing");
	}
};
