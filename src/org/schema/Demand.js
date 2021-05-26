const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Demand
 * A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.
 *
 * @author schema.org
 * @class Demand
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Demand extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Demand");
	}

	/**
	 * Schema.org/availableDeliveryMethod
	 * The delivery method(s) available for this offer.
	 *
	 * @property availableDeliveryMethod
	 * @type DeliveryMethod
	 */
	availableDeliveryMethod;

	/**
	 * Schema.org/itemCondition
	 * A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.
	 *
	 * @property itemCondition
	 * @type OfferItemCondition
	 */
	itemCondition;

	/**
	 * Schema.org/validFrom
	 * The date when the item becomes valid.
	 *
	 * @property validFrom
	 * @type Date
	 */
	validFrom;

	/**
	 * Schema.org/seller
	 * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
	 *
	 * @property seller
	 * @type Organization
	 */
	seller;

	/**
	 * Schema.org/gtin12
	 * The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
	 *
	 * @property gtin12
	 * @type Text
	 */
	gtin12;

	/**
	 * Schema.org/eligibleRegion
	 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
    
	 *
	 * @property eligibleRegion
	 * @type Place
	 */
	eligibleRegion;

	/**
	 * Schema.org/warranty
	 * The warranty promise(s) included in the offer.
	 *
	 * @property warranty
	 * @type WarrantyPromise
	 */
	warranty;

	/**
	 * Schema.org/availabilityEnds
	 * The end of the availability of the product or service included in the offer.
	 *
	 * @property availabilityEnds
	 * @type Time
	 */
	availabilityEnds;

	/**
	 * Schema.org/deliveryLeadTime
	 * The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.
	 *
	 * @property deliveryLeadTime
	 * @type QuantitativeValue
	 */
	deliveryLeadTime;

	/**
	 * Schema.org/eligibleDuration
	 * The duration for which the given offer is valid.
	 *
	 * @property eligibleDuration
	 * @type QuantitativeValue
	 */
	eligibleDuration;

	/**
	 * Schema.org/availabilityStarts
	 * The beginning of the availability of the product or service included in the offer.
	 *
	 * @property availabilityStarts
	 * @type Date
	 */
	availabilityStarts;

	/**
	 * Schema.org/serialNumber
	 * The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
	 *
	 * @property serialNumber
	 * @type Text
	 */
	serialNumber;

	/**
	 * Schema.org/acceptedPaymentMethod
	 * The payment method(s) accepted by seller for this offer.
	 *
	 * @property acceptedPaymentMethod
	 * @type PaymentMethod
	 */
	acceptedPaymentMethod;

	/**
	 * Schema.org/priceSpecification
	 * One or more detailed price specifications, indicating the unit price and delivery or payment charges.
	 *
	 * @property priceSpecification
	 * @type PriceSpecification
	 */
	priceSpecification;

	/**
	 * Schema.org/eligibleTransactionVolume
	 * The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
	 *
	 * @property eligibleTransactionVolume
	 * @type PriceSpecification
	 */
	eligibleTransactionVolume;

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
	 * Schema.org/areaServed
	 * The geographic area where a service or offered item is provided.
	 *
	 * @property areaServed
	 * @type Place
	 */
	areaServed;

	/**
	 * Schema.org/advanceBookingRequirement
	 * The amount of time that is required between accepting the offer and the actual usage of the resource or service.
	 *
	 * @property advanceBookingRequirement
	 * @type QuantitativeValue
	 */
	advanceBookingRequirement;

	/**
	 * Schema.org/itemOffered
	 * An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
	 *
	 * @property itemOffered
	 * @type CreativeWork
	 */
	itemOffered;

	/**
	 * Schema.org/inventoryLevel
	 * The current approximate inventory level for the item or items.
	 *
	 * @property inventoryLevel
	 * @type QuantitativeValue
	 */
	inventoryLevel;

	/**
	 * Schema.org/ineligibleRegion
	 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
      
	 *
	 * @property ineligibleRegion
	 * @type GeoShape
	 */
	ineligibleRegion;

	/**
	 * Schema.org/mpn
	 * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
	 *
	 * @property mpn
	 * @type Text
	 */
	mpn;

	/**
	 * Schema.org/includesObject
	 * This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].
	 *
	 * @property includesObject
	 * @type TypeAndQuantityNode
	 */
	includesObject;

	/**
	 * Schema.org/availability
	 * The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.
	 *
	 * @property availability
	 * @type ItemAvailability
	 */
	availability;

	/**
	 * Schema.org/sku
	 * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
	 *
	 * @property sku
	 * @type Text
	 */
	sku;

	/**
	 * Schema.org/eligibleCustomerType
	 * The type(s) of customers for which the given offer is valid.
	 *
	 * @property eligibleCustomerType
	 * @type BusinessEntityType
	 */
	eligibleCustomerType;

	/**
	 * Schema.org/gtin14
	 * The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
	 *
	 * @property gtin14
	 * @type Text
	 */
	gtin14;

	/**
	 * Schema.org/eligibleQuantity
	 * The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
	 *
	 * @property eligibleQuantity
	 * @type QuantitativeValue
	 */
	eligibleQuantity;

	/**
	 * Schema.org/availableAtOrFrom
	 * The place(s) from which the offer can be obtained (e.g. store locations).
	 *
	 * @property availableAtOrFrom
	 * @type Place
	 */
	availableAtOrFrom;

	/**
	 * Schema.org/gtin8
	 * The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
	 *
	 * @property gtin8
	 * @type Text
	 */
	gtin8;

	/**
	 * Schema.org/businessFunction
	 * The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
	 *
	 * @property businessFunction
	 * @type BusinessFunction
	 */
	businessFunction;

	/**
	 * Schema.org/validThrough
	 * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
	 *
	 * @property validThrough
	 * @type Date
	 */
	validThrough;

}