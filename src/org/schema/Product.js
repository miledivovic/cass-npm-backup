const schema = {};
schema.Thing = require("./Thing.js");
/**
 * Schema.org/Product
 * Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.
 *
 * @author schema.org
 * @class Product
 * @module org.schema
 * @extends Thing
 */
module.exports = class Product extends schema.Thing {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Product");
	}

	/**
	 * Schema.org/hasMeasurement
	 * A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
	 *
	 * @property hasMeasurement
	 * @type QuantitativeValue
	 */
	hasMeasurement;

	/**
	 * Schema.org/itemCondition
	 * A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.
	 *
	 * @property itemCondition
	 * @type OfferItemCondition
	 */
	itemCondition;

	/**
	 * Schema.org/aggregateRating
	 * The overall rating, based on a collection of reviews or ratings, of the item.
	 *
	 * @property aggregateRating
	 * @type AggregateRating
	 */
	aggregateRating;

	/**
	 * Schema.org/hasProductReturnPolicy
	 * Indicates a ProductReturnPolicy that may be applicable.
	 *
	 * @property hasProductReturnPolicy
	 * @type ProductReturnPolicy
	 */
	hasProductReturnPolicy;

	/**
	 * Schema.org/size
	 * A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable. 
	 *
	 * @property size
	 * @type SizeSpecification
	 */
	size;

	/**
	 * Schema.org/depth
	 * The depth of the item.
	 *
	 * @property depth
	 * @type Distance
	 */
	depth;

	/**
	 * Schema.org/height
	 * The height of the item.
	 *
	 * @property height
	 * @type Distance
	 */
	height;

	/**
	 * Schema.org/gtin12
	 * The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
	 *
	 * @property gtin12
	 * @type Text
	 */
	gtin12;

	/**
	 * Schema.org/isSimilarTo
	 * A pointer to another, functionally similar product (or multiple products).
	 *
	 * @property isSimilarTo
	 * @type Service
	 */
	isSimilarTo;

	/**
	 * Schema.org/weight
	 * The weight of the product or person.
	 *
	 * @property weight
	 * @type QuantitativeValue
	 */
	weight;

	/**
	 * Schema.org/hasMerchantReturnPolicy
	 * Indicates a MerchantReturnPolicy that may be applicable.
	 *
	 * @property hasMerchantReturnPolicy
	 * @type MerchantReturnPolicy
	 */
	hasMerchantReturnPolicy;

	/**
	 * Schema.org/offers
	 * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
      
	 *
	 * @property offers
	 * @type Demand
	 */
	offers;

	/**
	 * Schema.org/width
	 * The width of the item.
	 *
	 * @property width
	 * @type QuantitativeValue
	 */
	width;

	/**
	 * Schema.org/reviews
	 * Review of the item.
	 *
	 * @property reviews
	 * @type Review
	 */
	reviews;

	/**
	 * Schema.org/isConsumableFor
	 * A pointer to another product (or multiple products) for which this product is a consumable.
	 *
	 * @property isConsumableFor
	 * @type Product
	 */
	isConsumableFor;

	/**
	 * Schema.org/award
	 * An award won by or for this item.
	 *
	 * @property award
	 * @type Text
	 */
	award;

	/**
	 * Schema.org/gtin13
	 * The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
	 *
	 * @property gtin13
	 * @type Text
	 */
	gtin13;

	/**
	 * Schema.org/gtin
	 * A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties. The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) express GTINs as URLs. A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged.
   
	 *
	 * @property gtin
	 * @type Text
	 */
	gtin;

	/**
	 * Schema.org/review
	 * A review of the item.
	 *
	 * @property review
	 * @type Review
	 */
	review;

	/**
	 * Schema.org/hasEnergyConsumptionDetails
	 * Defines the energy efficiency Category (also known as "class" or "rating") for a product according to an international energy efficiency standard.
	 *
	 * @property hasEnergyConsumptionDetails
	 * @type EnergyConsumptionDetails
	 */
	hasEnergyConsumptionDetails;

	/**
	 * Schema.org/color
	 * The color of the product.
	 *
	 * @property color
	 * @type Text
	 */
	color;

	/**
	 * Schema.org/additionalProperty
	 * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. schema:width, schema:color, schema:gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.

	 *
	 * @property additionalProperty
	 * @type PropertyValue
	 */
	additionalProperty;

	/**
	 * Schema.org/logo
	 * An associated logo.
	 *
	 * @property logo
	 * @type ImageObject
	 */
	logo;

	/**
	 * Schema.org/mpn
	 * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
	 *
	 * @property mpn
	 * @type Text
	 */
	mpn;

	/**
	 * Schema.org/inProductGroupWithID
	 * Indicates the [[productGroupID]] for a [[ProductGroup]] that this product [[isVariantOf]]. 
	 *
	 * @property inProductGroupWithID
	 * @type Text
	 */
	inProductGroupWithID;

	/**
	 * Schema.org/category
	 * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
	 *
	 * @property category
	 * @type Text
	 */
	category;

	/**
	 * Schema.org/isVariantOf
	 * Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group.
	 *
	 * @property isVariantOf
	 * @type ProductGroup
	 */
	isVariantOf;

	/**
	 * Schema.org/slogan
	 * A slogan or motto associated with the item.
	 *
	 * @property slogan
	 * @type Text
	 */
	slogan;

	/**
	 * Schema.org/pattern
	 * A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.
	 *
	 * @property pattern
	 * @type Text
	 */
	pattern;

	/**
	 * Schema.org/sku
	 * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
	 *
	 * @property sku
	 * @type Text
	 */
	sku;

	/**
	 * Schema.org/nsn
	 * Indicates the [NATO stock number](https://en.wikipedia.org/wiki/NATO_Stock_Number) (nsn) of a [[Product]]. 
	 *
	 * @property nsn
	 * @type Text
	 */
	nsn;

	/**
	 * Schema.org/purchaseDate
	 * The date the item e.g. vehicle was purchased by the current owner.
	 *
	 * @property purchaseDate
	 * @type Date
	 */
	purchaseDate;

	/**
	 * Schema.org/gtin14
	 * The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
	 *
	 * @property gtin14
	 * @type Text
	 */
	gtin14;

	/**
	 * Schema.org/isAccessoryOrSparePartFor
	 * A pointer to another product (or multiple products) for which this product is an accessory or spare part.
	 *
	 * @property isAccessoryOrSparePartFor
	 * @type Product
	 */
	isAccessoryOrSparePartFor;

	/**
	 * Schema.org/manufacturer
	 * The manufacturer of the product.
	 *
	 * @property manufacturer
	 * @type Organization
	 */
	manufacturer;

	/**
	 * Schema.org/model
	 * The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.
	 *
	 * @property model
	 * @type Text
	 */
	model;

	/**
	 * Schema.org/brand
	 * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
	 *
	 * @property brand
	 * @type Organization
	 */
	brand;

	/**
	 * Schema.org/gtin8
	 * The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
	 *
	 * @property gtin8
	 * @type Text
	 */
	gtin8;

	/**
	 * Schema.org/releaseDate
	 * The release date of a product or product model. This can be used to distinguish the exact variant of a product.
	 *
	 * @property releaseDate
	 * @type Date
	 */
	releaseDate;

	/**
	 * Schema.org/material
	 * A material that something is made from, e.g. leather, wool, cotton, paper.
	 *
	 * @property material
	 * @type Product
	 */
	material;

	/**
	 * Schema.org/productionDate
	 * The date of production of the item, e.g. vehicle.
	 *
	 * @property productionDate
	 * @type Date
	 */
	productionDate;

	/**
	 * Schema.org/awards
	 * Awards won by or for this item.
	 *
	 * @property awards
	 * @type Text
	 */
	awards;

	/**
	 * Schema.org/audience
	 * An intended audience, i.e. a group for whom something was created.
	 *
	 * @property audience
	 * @type Audience
	 */
	audience;

	/**
	 * Schema.org/isRelatedTo
	 * A pointer to another, somehow related product (or multiple products).
	 *
	 * @property isRelatedTo
	 * @type Service
	 */
	isRelatedTo;

	/**
	 * Schema.org/productID
	 * The product identifier, such as ISBN. For example: ``` meta itemprop="productID" content="isbn:123-456-789" ```.
	 *
	 * @property productID
	 * @type Text
	 */
	productID;

}