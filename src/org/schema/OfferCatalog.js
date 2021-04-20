/**
 * Schema.org/OfferCatalog
 * An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider.
 *
 * @author schema.org
 * @class OfferCatalog
 * @module org.schema
 */
module.exports = class OfferCatalog extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OfferCatalog");
	}

}