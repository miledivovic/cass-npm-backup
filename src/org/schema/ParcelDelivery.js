const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/ParcelDelivery
 * The delivery of a parcel either via the postal service or a commercial service.
 *
 * @author schema.org
 * @class ParcelDelivery
 * @module org.schema
 * @extends Intangible
 */
module.exports = class ParcelDelivery extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ParcelDelivery");
	}

	/**
	 * Schema.org/trackingNumber
	 * Shipper tracking number.
	 *
	 * @property trackingNumber
	 * @type Text
	 */
	trackingNumber;

	/**
	 * Schema.org/expectedArrivalFrom
	 * The earliest date the package may arrive.
	 *
	 * @property expectedArrivalFrom
	 * @type DateTime
	 */
	expectedArrivalFrom;

	/**
	 * Schema.org/deliveryStatus
	 * New entry added as the package passes through each leg of its journey (from shipment to final delivery).
	 *
	 * @property deliveryStatus
	 * @type DeliveryEvent
	 */
	deliveryStatus;

	/**
	 * Schema.org/expectedArrivalUntil
	 * The latest date the package may arrive.
	 *
	 * @property expectedArrivalUntil
	 * @type Date
	 */
	expectedArrivalUntil;

	/**
	 * Schema.org/hasDeliveryMethod
	 * Method used for delivery or shipping.
	 *
	 * @property hasDeliveryMethod
	 * @type DeliveryMethod
	 */
	hasDeliveryMethod;

	/**
	 * Schema.org/provider
	 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
	 *
	 * @property provider
	 * @type Organization
	 */
	provider;

	/**
	 * Schema.org/deliveryAddress
	 * Destination address.
	 *
	 * @property deliveryAddress
	 * @type PostalAddress
	 */
	deliveryAddress;

	/**
	 * Schema.org/partOfOrder
	 * The overall order the items in this delivery were included in.
	 *
	 * @property partOfOrder
	 * @type Order
	 */
	partOfOrder;

	/**
	 * Schema.org/carrier
	 * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
	 *
	 * @property carrier
	 * @type Organization
	 */
	carrier;

	/**
	 * Schema.org/itemShipped
	 * Item(s) being shipped.
	 *
	 * @property itemShipped
	 * @type Product
	 */
	itemShipped;

	/**
	 * Schema.org/trackingUrl
	 * Tracking url for the parcel delivery.
	 *
	 * @property trackingUrl
	 * @type URL
	 */
	trackingUrl;

	/**
	 * Schema.org/originAddress
	 * Shipper's address.
	 *
	 * @property originAddress
	 * @type PostalAddress
	 */
	originAddress;

}